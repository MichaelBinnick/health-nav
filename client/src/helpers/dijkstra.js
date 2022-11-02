// const graph = {
//   a: { b: 5, c: 2 },
//   b: { a: 5, c: 7, d: 8 },
//   c: { a: 2, b: 7, d: 4, e: 8 },
//   d: { b: 8, c: 4, e: 6, f: 4 },
//   e: { c: 8, d: 6, f: 3 },
//   f: { e: 3, d: 4 },
// };

const graph = {
  //Enterances
  e1: { n8: 78 },
  e2: { n5: 35 },
  e3: { rr4: 81 },
  e4: { n3: 10},
  e5: { er1: 47 },
  // //Health Services
  h1: { v3: 47, rr1: 22 },
  h2: { v4: 21, n1: 35 },
  h3: { rr3: 29, n8: 43 },
  h4: { n6: 36, rr3: 29 },
  h5: { er1: 131, s2: 24 },
  h6: { n9: 117, rr4: 23 },

  // //Visitor Services
  v1: { n7: 22 },
  v2: { rr1: 54, n7: 74, rr2: 90 },
  v3: { n8: 15, h1: 47 },
  v4: { rr2: 30, h2: 21 },

  // //Emergency
  er1: { n6: 104, e5: 46, er1: 131 },

  // //Restrooms
  rr1: { h1: 22, v2: 54 },
  rr2: { v2: 90, v4: 30 },
  rr3: { h4: 29, h3: 29 },
  rr4: { h6: 24, e3: 81 },
  rr5: { s2: 50, s3: 46 },
 
  // //Hospital Staff
  s1: { n2: 154, n6: 144 },
  s2: { h5: 24, rr5: 50 },
  s3: { rr5: 46, n3: 47 },

  // //Connecting Nodes
  n1: { h2: 35, n9: 25, n2: 130 },
  n2: { n1: 130, s1: 154, n2: 137 },
  n3: { s3: 47, n2: 137, e4: 10 },
  // n4: { n6: 97 },
  n5: { n9: 35, e2: 35 },
  n6: { s1: 144, h4: 36, er1: 104 },
  n7: { v2: 47, v1: 22 },
  n8: { e1: 78, v3: 15, h3: 43 },
  n9: { n1: 25, n5: 35, h6: 117 }
};

let x1 = 585
let y1 = 190

let x2 = 505
let y2 = 203

const weight = Math.hypot(x2-x1, y2-y1);
console.log(Math.round(weight))

const printTable = (table) => {
  return Object.keys(table)
    .map((vertex) => {
      let { vertex: from, cost } = table[vertex];
      return `${vertex}: ${cost} via ${from}`;
    })
    .join("\n");
};

const tracePath = (table, start, end) => {
  let path = [];
  let next = end;
  while (true) {
    path.unshift(next);
    if (next === start) {
      break;
    }
    next = table[next].vertex;
  }

  return path;
};

const formatGraph = (g) => {
  const tmp = {};
  Object.keys(g).forEach((k) => {
    const obj = g[k];
    const arr = [];
    Object.keys(obj).forEach((v) => arr.push({ vertex: v, cost: obj[v] }));
    tmp[k] = arr;
  });
  return tmp;
};

const dijkstra = (graph, start, end) => {
  let map = formatGraph(graph);

  let visited = [];
  let unvisited = [start];
  let shortestDistances = { [start]: { vertex: start, cost: 0 } };

  let vertex;
  while ((vertex = unvisited.shift())) {
    // Explore unvisited neighbors
    let neighbors = map[vertex].filter((n) => !visited.includes(n.vertex));

    // Add neighbors to the unvisited list
    unvisited.push(...neighbors.map((n) => n.vertex));

    let costToVertex = shortestDistances[vertex].cost;

    for (let { vertex: to, cost } of neighbors) {
      let currCostToNeighbor =
        shortestDistances[to] && shortestDistances[to].cost;
      let newCostToNeighbor = costToVertex + cost;
      if (
        currCostToNeighbor == undefined ||
        newCostToNeighbor < currCostToNeighbor
      ) {
        // Update the table
        shortestDistances[to] = { vertex, cost: newCostToNeighbor };
      }
    }

    visited.push(vertex);
  }

  console.log("Table of costs:");
  console.log(printTable(shortestDistances));

  const path = tracePath(shortestDistances, start, end);

  console.log(
    "Shortest path is: ",
    path.join(" -> "),
    " with weight ",
    shortestDistances[end].cost
  );

  return shortestDistances[end].cost

};

const tester = dijkstra(graph, "e3", "er1");
console.log(tester)
