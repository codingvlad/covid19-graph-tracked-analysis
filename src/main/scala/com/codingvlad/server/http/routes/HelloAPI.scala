package com.codingvlad.server.http.routes

import akka.actor.ActorRef
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.pattern.ask
import akka.util.Timeout
import com.codingvlad.server.ServiceManager.HelloMessage

import scala.util.Success

/**
  * Defines the HTTP API for saying hello
  *
  */
trait HelloAPI {

  def helloRequestAPI(manager: ActorRef)(implicit timeout: Timeout): Route =
    logRequestResult("server devel web service") {
      pathPrefix("service") {
        path("hello") {
          get {
            onComplete(ask(manager, HelloMessage)) {
              case Success(msg@HelloMessage) => {
                complete(StatusCodes.OK, "Sever says hello!")
              }
              case _ =>
                complete(StatusCodes.InternalServerError)
            }
          }
        }
      }
    }
}
