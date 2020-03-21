package com.codingvlad.generator



import scalax.collection.Graph
import scalax.collection.GraphEdge._


object JustForTesting extends App {

  import scalax.collection.generator._

  /**
   * Personal data for the constructions of the node
   */
  object PersonData {
    val firstNames = Seq("Edith", "Mario", "Tobias", "Tobi", "Alex", "Andreas", "Clemens", "Leo", "Armin", "Nikolas", "Vlad", "Agnese", "Matthias")
    val firstNamesSize = firstNames.size

    val surnames = Seq("Winkler", "Maurer", "Goettfert", "Lesch", "Wander", "Spoerl", "Schefels", "Pomplun", "Filip", "Braun", "Dauth", "DelMoro")
    val surnamesSize = surnames.size

    def order = firstNamesSize * surnamesSize / 10

    def degrees = new NodeDegreeRange(2, order - 2)

    val postCodeMax = 81000
  }

  object GraphRandom {

    // obtaining generators for graphs with predefined metrics
    val predefined = RandomGraph.tinyConnectedIntDi(Graph)
    val tinyGraph = predefined.draw // Graph[Int,DiEdge]

    // setting individual graph metrics while keeping metrics constraints in mind
    object sparse_1000_Int extends RandomGraph.IntFactory {
      val order = 1000
      val nodeDegrees = NodeDegreeRange(1, 10)

      override def connected = false
    }

    val randomSparse = RandomGraph[Int, UnDiEdge, Graph](Graph, sparse_1000_Int, Set(UnDiEdge))
    val sparseGraph = randomSparse.draw // Graph[Int,UnDiEdge]

    // obtaining generators for individual graph types
    import scalax.collection.edge.LDiEdge

    case class Person(name: String, postalCode: Int)

    object Person {

      import PersonData._

      private val r = new scala.util.Random

      def drawFirstName: String = firstNames(r.nextInt(firstNamesSize))

      def drawSurame: String = surnames(r.nextInt(surnamesSize))

      def drawName: String = s"$drawFirstName, $drawSurame"

      def drawPostalCode = postCodeMax - r.nextInt(1000)
    }

    val randomMixedGraph =
      RandomGraph[Person, UnDiEdge, Graph](
        Graph,
        new RandomGraph.Metrics[Person] {
          val order = PersonData.order
          val nodeDegrees = PersonData.degrees

          def nodeGen: Person = Person(Person.drawName, Person.drawPostalCode)
        },
        Set(UnDiEdge, LDiEdge)
      )
    val mixedGraph = randomMixedGraph.draw

    println("Edges:")
    mixedGraph.edges.foreach( e => println(e))

    println("----------- \n")
    println("Nodes:")
    mixedGraph.nodes.foreach( n => println(n))


    println("----------- \n")
    println("Relations:")
    mixedGraph.nodes.foreach( n => println(n.neighbors))


    println(mixedGraph)
  }

  GraphRandom
}
