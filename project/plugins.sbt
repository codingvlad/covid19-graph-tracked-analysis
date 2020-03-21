// Code formatting
addSbtPlugin("com.geirsson" % "sbt-scalafmt" % "1.5.1")

// Run and restart for development
addSbtPlugin("io.spray" % "sbt-revolver" % "0.9.1")

// Add build information to code
addSbtPlugin("com.eed3si9n" % "sbt-buildinfo" % "0.9.0")

// Create docker images for status reporter.
addSbtPlugin("com.typesafe.sbt" % "sbt-native-packager" % "1.3.9")
