/*
undirected path

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
 */

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const edgesToGraph = (edges) => {
  const graph = {};

  for (let [f, s] of edges) {
    if (!graph[f]) {
      graph[f] = [];
    }
    if (!graph[s]) {
      graph[s] = [];
    }
    graph[f].push(s);
    graph[s].push(f);
  }

  return graph;
};

const hasPath = (graph, src, dst, set) => {
  if (src === dst) return true;
  if (set.has(src)) return false;

  set.add(src);

  for (let n of graph[src]) {
    if (hasPath(graph, n, dst, set) === true) {
      return true;
    }
  }

  return false;
};

console.log(undirectedPath(edges));
