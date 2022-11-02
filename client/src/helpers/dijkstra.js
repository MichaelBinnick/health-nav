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

const dijkNodes = {
  /* necessary format for node:

  'a1': {
    x: 0,
    y: 0
  }

  */
  
  // Enterances
  e1: {
    name: 'Enterance - Pediatric / e1',
    x: 65,
    y: 140,
    open: "9am",
    close: '5pm'
  },
  e2: {
    name: 'Enterance - Adult/Inpatient / e2',
    x: 335,
    y: 140,
    open: "9am",
    close: '5pm'
  },
  e3: {
    name: 'Enterance - Inpatient / e3',
    x: 585,
    y: 190,
    open: "9am",
    close: '5pm'
  },
  e4: {
    name: 'Enterance - Dietary / e4',
    x: 370,
    y: 443,
    open: "9am",
    close: '5pm'
  },
  e5: {
    name: 'Enterance - ER / e5',
    x: 15,
    y: 443,
    open: "9am",
    close: '5pm'
  },
  //Health-Services
  h1: {
    name: 'pediatric - prep & recovery / h1',
    x: 120,
    y: 225,
    open: "9am",
    close: '5pm'
  },
  h2: {
    name: 'adult - prep & recovery / h2',
    x: 325,
    y: 225,
    open: "9am",
    close: '5pm'
  },
  h3: {
    name: 'lab / h3',
    x: 55,
    y: 260,
    open: "9am",
    close: '5pm'
  },
  h4: {
    name: 'imaging / h4',
    x: 55,
    y: 310,
    open: "9am",
    close: '5pm'
  },
  h5: {
    name: 'surgery / h5',
    x: 190,
    y: 437,
    open: "9am",
    close: '5pm'
  },
  h6: {
    name: 'inpatient / h6',
    x: 482,
    y: 190,
    open: "9am",
    close: '5pm'
  },
  //Visitor Services
  v1: {
    name: 'front doors / v1',
    x: 170,
    y: 135,
    open: "9am",
    close: '5pm'
  },
  v2: {
    name: 'admin / v2',
    x: 190,
    y: 210,
    open: "9am",
    close: '5pm'
  },
  v3: {
    name: 'pediatric - waiting / v3',
    x: 75,
    y: 210,
    open: "9am",
    close: '5pm'
  },
  v4: {
    name: 'adult - waiting / v4',
    x: 310,
    y: 210,
    open: "9am",
    close: '5pm'
  },
  // Emergency
  er1: {
    name: 'emergency / er1',
    x: 60,
    y: 450,
    open: "9am",
    close: '5pm'
  },
  //Restrooms
  rr1: {
    name: 'restroom1 / rr1',
    x: 136,
    y: 210,
    open: "9am",
    close: '5pm'
  },
  rr2: {
    name: 'restroom2 / rr2',
    x: 280,
    y: 210,
    open: "9am",
    close: '5pm'
  },
  rr3: {
    name: 'restroom3 / rr3',
    x: 70,
    y: 285,
    open: "9am",
    close: '5pm'
  },
  rr4: {
    name: 'restroom4 / rr4',
    x: 505,
    y: 203,
    open: "9am",
    close: '5pm'
  },
  rr5: {
    name: 'restroom5 / rr5',
    x: 260,
    y: 450,
    open: "9am",
    close: '5pm'
  },
  //Hospital Staff
  s1: {
    name: 'staff / s1',
    x: 206,
    y: 340,
    open: "9am",
    close: '5pm'
  },
  s2: {
    name: 'ulility / s2',
    x: 210,
    y: 450,
    open: "9am",
    close: '5pm'
  },
  s3: {
    name: 'dietary / s3',
    x: 306,
    y: 450,
    open: "9am",
    close: '5pm'
  },

  //Cross-sections
  n1: {
    name: 'Right hall North-West 23 / n1',
    x: 360,
    y: 220,
  },
  n2: {
    name: 'Right hall North-South 10 / n2',
    x: 360,
    y: 350,
  },
  n3: {
    name: 'Top hall east-west 35 / n3',
    x: 360,
    y: 443,
  },
  // n4: {
  //   name: 'Top hall east-west 5 / n4',
  //   x: 60,
  //   y: 443,
  // },
  n5: {
    name: 'Right hall North-West 29 / n5',
    x: 360,
    y: 160,
  },
  n6: {
    name: 'Left Hall hall North-West New / n6',
    x: 62,
    y: 346,
  },
  n7: {
    name: 'admin connector / n7',
    x: 192,
    y: 136,
  },
  n8: {
    name: 'connector / n8',
    x: 62,
    y: 218,
  },
  n9: {
    name: 'admin connector / n9',
    x: 365,
    y: 195,
  }
}

// let x1 = 585
// let y1 = 190

// let x2 = 505
// let y2 = 203

// const weight = Math.hypot(x2-x1, y2-y1);
// console.log(Math.round(weight))

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

  return {weight: shortestDistances[end].cost, path: path}

};


// given a path (from dijkstra), format for Polyline
const dijkCoords = (path) => {
  
  const results = [];

  for (const node of path) {
    // ['e1', 'e2', 'e3']
    // console.log('node', node);
    
    const coords = [];

    // console.log('obj node', dijkNodes[node]);

    coords.push(dijkNodes[node].y);
    coords.push(dijkNodes[node].x);
    results.push(coords);
  }

  return results;
}

// const tester = dijkstra(graph, "e3", "er1");
// console.log(tester)

// const testPolyline = dijkCoords(tester.path);
// console.log('polyline test:', testPolyline);

const nodeWeights = (node1, node2) => {

  let x1 = dijkNodes[node1].x;
  let y1 = dijkNodes[node1].y;

  let x2 = dijkNodes[node2].x;
  let y2 = dijkNodes[node2].y;

  const weight = Math.hypot(x2-x1, y2-y1);
  console.log(`weight between ${node1} and ${node2} is:`, weight)
  return weight;
}

// insert node names here to find weight
const node1 = 'e1';
const node2 = 'e2';

nodeWeights(node1, node2);


module.exports = { graph, printTable, tracePath, formatGraph, dijkstra }