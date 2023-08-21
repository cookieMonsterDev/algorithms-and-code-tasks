var maximalNetworkRank = function(n, roads) {
  const adjList = Array.from({ length: n }, () => []);
  
  for (const [city1, city2] of roads) {
    adjList[city1].push(city2);
    adjList[city2].push(city1);
  }
  
  let maxRank = 0;

  for (let city1 = 0; city1 < n; city1++) {
    for (let city2 = city1 + 1; city2 < n; city2++) {
      let rank1 = adjList[city1].length + adjList[city2].length;
      
      if (adjList[city1].includes(city2) || adjList[city2].includes(city1)) {
        rank1--;
      }
      
      maxRank = Math.max(maxRank, rank1);
    }
  }
  
  return maxRank;
};

// Example usage
const n = 4;
const roads = [[0, 1], [0, 3], [1, 2], [1, 3]];
console.log(maximalNetworkRank(n, roads));
