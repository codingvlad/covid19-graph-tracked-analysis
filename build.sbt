lazy val `server-devel` = project
  .in(file("."))
  .settings(
    inThisBuild(
      Seq(
        organization := "com.codingvlad",
        version := "0.0.1",
        // Publish to the internal nexus, and load credentials from our standard location.
        scalaVersion := "2.13.1",
        scalacOptions ++= Seq("-encoding", "utf-8"),
      )
    )
  )
  // Basic settings and dependencies
  .settings(
    name := "server-devel",
    description := "Server Devel template",
    libraryDependencies ++= List(
      Dependencies.akkaActor,
      Dependencies.akkaPersistence,
      Dependencies.akkaPersistenceCassandra,
      Dependencies.akkaStreams,
      Dependencies.akkaHttp,
      Dependencies.sprayJson,
      Dependencies.akkaHttpSprayJson,
      Dependencies.jodaTime,
      Dependencies.akkaSlf4j,
      //Dependencies.slf4jnop,
      Dependencies.akkaHttpTestKit % Test,
      Dependencies.akkaTestKit % Test,
      Dependencies.akkaPersistenceCassandraLauncher % Test,
      Dependencies.scalatest % Test
    ),
    //Run tests Sequentially
    parallelExecution in Test := false,
    // Build info settings
    buildInfoKeys := Seq[BuildInfoKey](name, version, scalaVersion, sbtVersion),
    buildInfoPackage := "com.codingvlad.server",
    // Documentation settings
    Compile / doc / scalacOptions := Seq(
      "-encoding",
      "utf-8",
      "-doc-title",
      "Server",
      "-doc-footer",
      "Sever for web app © 2020",
      "-doc-version",
      s"Version ${version.value}"
    )
  )
  .settings(loggingSettings)
  .enablePlugins(BuildInfoPlugin, JavaAppPackaging)

// Settings for components with logging
lazy val loggingSettings: Seq[Setting[_]] = Seq(
  // Generate the properties file to be used by logback.xml and log the name of the project and its version.
  Compile / resourceGenerators += Def.task {
    val file = (Compile / resourceManaged).value / "buildinfo.properties"
    val contents = "name=%s\nversion=%s".format(name.value, version.value)
    IO.write(file, contents)
    Seq(file)
  }.taskValue,
  libraryDependencies ++= Seq(
    Dependencies.logback
  )
)

// Aliases to compile, format and check the format
addCommandAlias("compileAll", "; compile; test:compile")
// Aliases for code formatting

val scalafmtCommands =
  List("scalafmt", "test:scalafmt", "scalafmtSbt")

addCommandAlias("scalafmtAll", scalafmtCommands.mkString("; ", "; ", ""))

addCommandAlias(
  "scalafmtCheckAll",
  scalafmtCommands.map(cmd ⇒ s"${cmd}Check").mkString("; ", "; ", ""))
