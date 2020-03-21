package com.codingvlad.server.http.routes

import akka.actor.ActorRef
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.model.StatusCodes.BadRequest
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.pattern.ask
import akka.util.Timeout
import com.codingvlad.server.http.interfaces.{Replies, Requests}
import com.codingvlad.server.serialization.Protocols
import com.codingvlad.server.settings.ServerDevelSettings

import scala.util.Success

/**
  * Defines the HTTP API for receiving requests.
  *
  */
trait RequestStateAPI extends Protocols with CORSHandler {

  def requestStateAPIRoute(
      manager: ActorRef,
      settings: ServerDevelSettings)(implicit timeout: Timeout): Route =
    logRequestResult("server devel web service") {
      corsHandler {
        pathPrefix("state-request") {
          //create the case class from the json
          post {
            entity(as[Requests.State]) { request =>
              //Check if we can process the mission name submitted
              onComplete(ask(manager, request)) {
                case Success(state: Replies.State) =>
                  complete(StatusCodes.OK, state.formatted)
                case _ =>
                  complete(
                    BadRequest -> s"Could not get the state of the server devel")
              }
            }
          }
        }
      }
    }
}
