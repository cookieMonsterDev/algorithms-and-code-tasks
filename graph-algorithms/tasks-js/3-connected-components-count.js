/**connected components count

Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph. */

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const connectedComponentsCount = (graph) => {
  const set = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, set)) {
      count++;
    }
  }

  return count;
};

const explore = (graph, current, set) => {
  if (set.has(current.toString())) return false;

  set.add(current.toString());

  for (let n of graph[current]) {
    explore(graph, n, set);
  }

  return true;
};

console.log(connectedComponentsCount(graph));
