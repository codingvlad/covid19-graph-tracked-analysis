package com.codingvlad.server

import akka.actor.ActorSystem
import akka.event.{Logging, LoggingAdapter}
import akka.http.scaladsl.Http
import akka.stream.ActorMaterializer
import com.codingvlad.server.http.routes.HttpService
import com.codingvlad.server.settings.ServerDevelSettings

/**
  * Backend of the template app.
  *
  */
object Main extends App with HttpService {
  implicit val system = ActorSystem("server-devel-actor-system")
  implicit val materializer = ActorMaterializer()
  implicit val executionContext = system.dispatcher
  implicit val logger: LoggingAdapter = Logging(system, getClass)

  /**
    * Load the service settings from the remote configuration manager service
    * If any of the settings fail to be created will cause a failure and thus stop the service
    */
  val settings: ServerDevelSettings = ServerDevelSettings(system.settings.config)

  /**
    * Create the Infrastructure layer Manager which controls all the infrastructure layer
    */
  val infrastructureManager =
    system.actorOf(ServiceManager.props(settings),
                   "service-devel")

  /**
    * Create the REST API
    */
  val apiRoutes = createAPIRoutes(infrastructureManager, settings)

  val port = sys.env.getOrElse("PORT", "8080").toInt

  /**
    * Start the http server that will consume health and stop commands.
    */
  val bindingFuture = Http().bindAndHandle(apiRoutes,
    settings.httpServerConfiguration.host,
    port)

  logger.info(s"Server online at http://${settings.httpServerConfiguration.host}:$port")
}
