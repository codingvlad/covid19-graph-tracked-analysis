package com.codingvlad.server.settings

import com.typesafe.config.Config

/**
  * Wrapper for the http server configuration
  *
  * @param config subset of the configuration loaded from the reference.conf resource file
  */
case class HttpServerConfiguration(private val config: Config) {

  /**
    * Address where the http server will publish the REST API for receiving user requests
    */
  val host = config.getString("host")

  /**
    * Port where the http server will publish the REST API for receiving user requests
    */
  val port = config.getInt("port")

  /**
    * Timeout (milliseconds) after a request is resolved as a failure
    */
  val requestTimeout = config.getInt("request-timeout")
}
