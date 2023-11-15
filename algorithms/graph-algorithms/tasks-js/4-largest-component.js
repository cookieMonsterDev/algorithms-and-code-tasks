/**
largest component

Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.
 */

const largestComponent = (graph) => {
  const visited = new Set();
  let maxSize = 0;

  for (let node in graph) {
    const size = findSize(graph, node, visited);
    if (size > maxSize) maxSize = size;
  }

  return maxSize;
};

const findSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  let size = 1;

  visited.add(node);

  for (let n of graph[node]) {
    size += findSize(graph, n, visited);
  }

  return size;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
);
