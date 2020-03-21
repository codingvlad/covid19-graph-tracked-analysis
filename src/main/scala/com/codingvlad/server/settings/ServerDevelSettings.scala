package com.codingvlad.server.settings

import com.typesafe.config.Config

/**
  * Wrapper for all the settings of this service are loaded and exposed by this class.
  */
case class ServerDevelSettings(config: Config) {

  /**
    * Load the server devel configuration from file
    */
  private val appConfig = config.getConfig("server-devel")

  /**
    * Configuration information for the http server
    */
  val httpServerConfiguration = HttpServerConfiguration(
    appConfig.getConfig("http.server"))

  /**
    * Unique identifier for the persistence of this service
    */
  val persistenceId = appConfig.getString("persistenceId")

}

