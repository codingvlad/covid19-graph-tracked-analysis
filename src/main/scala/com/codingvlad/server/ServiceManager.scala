package com.codingvlad.server

import akka.actor.{Actor, ActorLogging, Props}
import com.codingvlad.server.ServiceManager.HelloMessage
import com.codingvlad.server.http.interfaces.{Replies, Requests}
import com.codingvlad.server.settings.ServerDevelSettings

object ServiceManager {

  /**
   * Messages from/to HTTP interface
   */
  sealed trait HttpMessage

  case object HelloMessage extends HttpMessage

  def props(settings: ServerDevelSettings): Props =
    Props(new ServiceManager(settings))
}

class ServiceManager(settings: ServerDevelSettings) extends Actor with ActorLogging {

  implicit val logger = log

  def persistenceId: String = settings.persistenceId

  /**
   * Nominal receive
   */
  def receive: Receive =
    receiveHelloRequests ::
      receiveStateRequests ::
      Nil reduceLeft (_ orElse _)

  def receiveHelloRequests(): Receive = {
    case HelloMessage =>
      log.info(s"Received hello message request")
      sender() ! HelloMessage
  }


  def receiveStateRequests(): Receive = {
    case Requests.State(time: Long) =>
      log.info(s"Received state request message for time $time")
      sender() ! Replies.State(s"The state at $time was Ok...")
  }

}
