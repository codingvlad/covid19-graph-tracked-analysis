package com.codingvlad.server.serialization

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import com.codingvlad.server.http.interfaces.{Replies, Requests}
import spray.json.DefaultJsonProtocol

/**
  * Protocols for implicit conversion json <> case classes
  */
trait Protocols extends SprayJsonSupport with  DefaultJsonProtocol {

  implicit val stateRequestFormat = jsonFormat1(Requests.State)

  implicit val stateReplyFormat = jsonFormat1(Replies.State)

}
