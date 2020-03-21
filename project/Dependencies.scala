import sbt._

object Dependencies {

  object Versions {

    val akka: String = "2.5.29"

    val akkaHttp: String = "10.1.11"

    val akkaPersistenceCassandra = "0.103"

    val jodaTime: String = "2.9.9"

    val logback: String = "1.2.3"

    val scalaTest: String = "3.1.1"

    val sprayJson: String = "1.3.5"

    val slf4jnop: String = "1.7.25"

    val scalacheck = "1.14.3"

    val scalagraph = "1.13.2"

  }

  /**
    * Dependency for creating concurrent applications using the actor model
    */
  val akkaActor: ModuleID = "com.typesafe.akka" %% "akka-actor" % Versions.akka

  /**
    * Dependency for testing the actor model based code
    */
  val akkaTestKit
    : ModuleID = "com.typesafe.akka" %% "akka-testkit" % Versions.akka

  /**
    * Dependency that enables stateful actors to persist their internal state
    */
  val akkaPersistence
    : ModuleID = "com.typesafe.akka" %% "akka-persistence" % Versions.akka

  /**
    * Dependency for working with a Cassandra backed akka persistence store and journal
    */
  val akkaPersistenceCassandra
    : ModuleID = "com.typesafe.akka" %% "akka-persistence-cassandra" % Versions.akkaPersistenceCassandra

  val akkaPersistenceCassandraLauncher
    : ModuleID = "com.typesafe.akka" %% "akka-persistence-cassandra-launcher" % Versions.akkaPersistenceCassandra

  /**
    * Testing framework
    */
  val scalatest: ModuleID = "org.scalatest" %% "scalatest" % Versions.scalaTest

  /**
    * Dependency for creating http clients and servers
    */
  val akkaHttp
    : ModuleID = "com.typesafe.akka" %% "akka-http" % Versions.akkaHttp

  /**
    * Dependency for working with akka implementation of streams
    */
  val akkaStreams
    : ModuleID = "com.typesafe.akka" %% "akka-stream" % Versions.akka

  /**
    * Extra dependency for akka http to allow automatic json deserialization from the http
    * entities to business domain entities.
    */
  val akkaHttpSprayJson
    : ModuleID = "com.typesafe.akka" %% "akka-http-spray-json" % Versions.akkaHttp

  /**
    * Dependency for testing the http clients and servers
    */
  val akkaHttpTestKit
    : ModuleID = "com.typesafe.akka" %% "akka-http-testkit" % Versions.akkaHttp

  /**
    * Framework for json deserialization/serialization
    */
  val sprayJson: ModuleID = "io.spray" %% "spray-json" % Versions.sprayJson

  /**
    * Dependency for working with time
    */
  val jodaTime: ModuleID = "joda-time" % "joda-time" % "2.10.1"

  /**
    * Dependency for custom logging patterns
    */
  val logback = "ch.qos.logback" % "logback-classic" % Versions.logback

  /**
    * Slf4j logger module for akka
    */
  val akkaSlf4j = "com.typesafe.akka" %% "akka-slf4j" % Versions.akka

  /**
    * For getting rid of a warning for fallback log settings due to circular dependencies
    */
  val slf4jnop = "org.slf4j" % "slf4j-nop" % Versions.slf4jnop

  /**
    * Property based testing for Scala
    */
  val scalacheck
  : ModuleID = "org.scalacheck" %% "scalacheck" % Versions.scalacheck


  val scalagraph
  : ModuleID = "org.scala-graph" %% "graph-core" %  Versions.scalagraph
}
