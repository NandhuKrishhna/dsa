class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
      this.adjacencyList.get(v1).add(v2);
      this.adjacencyList.get(v2).add(v1);
    }
  }

  hasEdge(v1, v2) {
    if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
      return this.adjacencyList.get(v1).has(v2);
    }
    return false;
  }

  removeEdges(v1, v2) {
    if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
      this.adjacencyList.get(v1).delete(v2);
      this.adjacencyList.get(v2).delete(v1);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList.has(vertex)) {
      for (let neighbor of this.adjacencyList.get(vertex)) {
        this.adjacencyList.get(neighbor).delete(vertex);
      }
      this.adjacencyList.delete(vertex);
    }
  }

  display() {
    for (let [vertex, edges] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${[...edges].join(", ")}`);
    }
  }

  // DFS using Recursion
  dfsRecursive(startVertex) {
    const visited = new Set();
    const result = [];

    const dfs = (vertex) => {
      if (!vertex || visited.has(vertex)) return;
      visited.add(vertex);
      result.push(vertex);

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        dfs(neighbor);
      });
    };

    dfs(startVertex);
    return result;
  }

  // DFS using Stack (Iterative)
  dfsIterative(startVertex) {
    const stack = [startVertex];
    const visited = new Set();
    const result = [];

    visited.add(startVertex);

    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  // BFS using Queue (Iterative)
  bfs(startVertex) {
    const queue = [startVertex];
    const visited = new Set();
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

graph.display();

console.log("DFS Recursive:", graph.dfsRecursive("A"));
console.log("DFS Iterative:", graph.dfsIterative("A"));
console.log("BFS:", graph.bfs("A"));
