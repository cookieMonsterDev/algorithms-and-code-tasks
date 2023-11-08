/* 
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
*/

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// Deep first: Stack - solution
const hasPath1 = (graph, src, dst) => {
  if (src === dst) return true;

  const stuck = [src];

  while (stuck.length > 0) {
    const key = stuck.pop();

    if (key === dst) return true;

    for (let el of graph[key]) {
      stuck.push(el);
    }
  }

  return false;
};

//Breadth first: Queue - solution
const hasPath2 = (graph, src, dst) => {
  if (src === dst) return true;

  const queue = [src];

  while (queue.length > 0) {
    const key = stuck.shift();

    if (key === dst) return true;

    for (let el of graph[key]) {
      queue.push(el);
    }
  }

  return false;
};
