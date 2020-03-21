package com.codingvlad.server.http.routes

import akka.actor.ActorRef
import akka.http.scaladsl.model.StatusCodes.PermanentRedirect
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.util.Timeout
import com.codingvlad.server.settings.ServerDevelSettings

import scala.concurrent.duration._

/**
 * Defines the http API of the service
 */
trait HttpService
  extends HelloAPI
    with RequestStateAPI
    with CORSHandler {

  lazy val webClientRoutes: Route = {
    def redirectSingleSlash =
      corsHandler {
        pathSingleSlash {
          get {
            redirect("index.html", PermanentRedirect)
          }
        }
      }

    getFromResourceDirectory("client") ~ redirectSingleSlash
  }

  /** Join all the Http Routes */
  def createAPIRoutes(manager: ActorRef,
                      settings: ServerDevelSettings): Route = {
    implicit val timeout = Timeout(
      settings.httpServerConfiguration.requestTimeout.seconds)

    webClientRoutes ~
      helloRequestAPI(manager) ~
      requestStateAPIRoute(manager, settings)
  }

}
