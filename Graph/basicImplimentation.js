class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Add a vertex (node)
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, new Set());
        console.log(`Vertex ${vertex} added to the graph.`);
      }
    }
  
    // Add an edge (connection)
    addEdge(v1, v2) {
      if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
        this.adjacencyList.get(v1).add(v2);
        this.adjacencyList.get(v2).add(v1);  // For undirected graph
        console.log(`Edge added between ${v1} and ${v2}.`);
      } else {
        console.log(`Cannot add edge, one or both vertices do not exist.`);
      }
    }
  
    // Check if an edge exists between two vertices
    hasEdge(v1, v2) {
      if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
        const hasEdge = this.adjacencyList.get(v1).has(v2);
        console.log(`Edge between ${v1} and ${v2}: ${hasEdge}`);
        return hasEdge;
      }
      console.log(`One or both vertices do not exist.`);
      return false;
    }
  
    // Remove an edge (connection)
    removeEdge(v1, v2) {
      if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
        this.adjacencyList.get(v1).delete(v2);
        this.adjacencyList.get(v2).delete(v1);  // For undirected graph
        console.log(`Edge between ${v1} and ${v2} removed.`);
      } else {
        console.log(`Cannot remove edge, one or both vertices do not exist.`);
      }
    }
  
    // Remove a vertex and its edges
    removeVertex(vertex) {
      if (this.adjacencyList.has(vertex)) {
        // Remove all edges to this vertex
        for (let neighbor of this.adjacencyList.get(vertex)) {
          this.adjacencyList.get(neighbor).delete(vertex);
        }
        this.adjacencyList.delete(vertex);
        console.log(`Vertex ${vertex} and all its edges removed.`);
      } else {
        console.log(`Vertex ${vertex} does not exist.`);
      }
    }
  
    // Display the graph
    display() {
      console.log("Graph:");
      for (let [vertex, edges] of this.adjacencyList.entries()) {
        console.log(`${vertex} -> ${[...edges].join(", ")}`);
      }
    }
  }
  
  // Example usage
  let g = new Graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.hasEdge('A', 'B');  // Should log true
  g.hasEdge('B', 'C');  // Should log false
  g.display();
  
  g.removeEdge('A', 'B');
  g.display();
  
  g.removeVertex('A');
  g.display();
  