// const graph = {
//   a: { b: 5, c: 2 },
//   b: { a: 5, c: 7, d: 8 },
//   c: { a: 2, b: 7, d: 4, e: 8 },
//   d: { b: 8, c: 4, e: 6, f: 4 },
//   e: { c: 8, d: 6, f: 3 },
//   f: { e: 3, d: 4 },
// };

// const graph = {
//   //Entrances
//   e1: { n8: 78 },
//   e2: { n5: 35 },
//   e3: { rr4: 81 },
//   e4: { n3: 10},
//   e5: { er1: 47 },
//   // //Health Services
//   h1: { v3: 47, rr1: 22 },
//   h2: { v4: 21, n1: 35 },
//   h3: { rr3: 29, n8: 43 },
//   h4: { n6: 36, rr3: 29 },
//   h5: { er1: 131, s2: 24 },
//   h6: { n9: 117, rr4: 23 },

//   // //Visitor Services
//   v1: { n7: 22 },
//   v2: { rr1: 54, n7: 74, rr2: 90 },
//   v3: { n8: 15, h1: 47 },
//   v4: { rr2: 30, h2: 21 },

//   // //Emergency
//   er1: { n6: 104, e5: 46, er1: 131 },

//   // //Restrooms
//   rr1: { h1: 22, v2: 54 },
//   rr2: { v2: 90, v4: 30 },
//   rr3: { h4: 29, h3: 29 },
//   rr4: { h6: 24, e3: 81 },
//   rr5: { s2: 50, s3: 46 },
 
//   // //Hospital Staff
//   s1: { n2: 154, n6: 144 },
//   s2: { h5: 24, rr5: 50 },
//   s3: { rr5: 46, n3: 47 },

//   // //Connecting Nodes
//   n1: { h2: 35, n9: 25, n2: 130 },
//   n2: { n1: 130, s1: 154, n2: 137 },
//   n3: { s3: 47, n2: 137, e4: 10 },
//   // n4: { n6: 97 },
//   n5: { n9: 35, e2: 35 },
//   n6: { s1: 144, h4: 36, er1: 104 },
//   n7: { v2: 47, v1: 22 },
//   n8: { e1: 78, v3: 15, h3: 43 },
//   n9: { n1: 25, n5: 35, h6: 117 }
// };

const graph = {
  //Entrances
  e1: { t30: 11 },
//   e2: {},
  e3: { j23: 7} ,
//   e4: {},
//   e5: {},
  // e6: {},
  // //Health Services
  h1: { z7: 7 },
  h2: { z28: 10 },
  h3: { t19: 5 },
  h4: { t14: 11, t15: 11},
  h5: {},
  h6: { j14: 9, j13: 5 },

  //Visitor Services
  v1: { z14: 8 },
  v2: { z3: 9 },
  v3: { z26: 8 },
  // v4: { },
  // //Emergency
  er1: { t1: 10 },
  //RestRooms
  rr1: { z9: 9 },
  rr2: { z23: 8 },
  rr3: { t16:11, t17: 11 },
  rr4: { j16:9, j15: 9 },
  //Halls
  j23: { e3: 7, j23: 10, j22: 10 }, // entrance 3 - east entrance / START POINT
  j22: { j23: 10, j21: 10 },
  j21: { j22: 10, j20: 10 },
  j20: { j21: 10, j19: 10 },
  j19: { j20: 10, j18: 10 },
  j18: { j19: 10, j17: 10 },
  j17: { j18: 10, j16: 10 },
  j16: { j17: 10, rr4: 9, j15: 10 }, // rest room 4
  j15: { j16: 10, rr4: 9, j14: 10 }, // restroom 4
  j14: { j15: 10, h6: 9, j13: 10 }, //inpatient
  j13: { j14: 10, j12: 10 },
  j12: { j13: 10, j11: 10 },
  j11: { j12: 10, j10: 10 },
  j10: { j11: 10, j9: 10 },
  j9: { j10: 10, j8: 10 },
  j8: { j9: 10, j7: 10 },
  j7: { j8: 10, j6: 10 },
  j6: { j7: 10, j5: 10 },
  j5: { j6: 10, j4: 10 },
  j4: { j5: 10, j3: 10 },
  j3: { j4: 10, j2: 10 },
  j2: { j3: 10, j1: 10 },
  j1: { j2: 10, q24: 5 }, // crossnode

  //right hall north-south
  q24: { j1: 5, q23: 10 },
  q23: { q24: 10, z31: 10 }, // crossnode
 
  
  //Admin Alley
  z31: { q23: 2, z30: 10 },
  z30: { z31: 10, z29: 10 },
  z29: { z30: 10, z28: 10 },
  z28: { z29: 10, h2: 10, z27: 10 }, // adult prep
  z27: { z28: 10, z26: 10 },
  z26: { z27: 10, v3: 8, z25: 10 }, // adult waiting
  z25: { z26: 10, z24: 10 },
  z24: { z25: 10, z23: 10 },
  z23: { z24: 10, rr2: 8, z22: 10 }, //restroom 2
  z22: { z23: 10, z21: 10 },
  z21: { z22: 10, z20: 10 },
  z20: { z21: 10, z19: 10 },
  z19: { z20: 10, z18: 10 }, 
  z18: { z19: 10, z17: 10 },
  z17: { z18: 10, z16: 10 },
  z16: { z17: 10, z15: 10 },
  z15: { z16: 10, z14: 10 },
  z14: { z15: 10, z13: 10, v1: 8 }, // admin
  z13: { z14: 10, z12: 10 },
  z12: { z13: 10, z11: 10 },
  z11: { z12: 10, z10: 10 },
  z10: { z11: 10, z9: 10 },
  z9: { z10: 10, z8: 10, rr1: 9 }, // restroom 1
  z8: { z9: 10, z7: 10 },
  z7: { z8: 10, h1: 7, z6: 10 }, // pediatric prep
  z6: { z7: 10, z5: 10 },
  z5: { z6: 10, z4: 10 },
  z4: { z5: 10, z3: 10 },
  z3: { z4: 10, z2: 10, v2: 9 }, //pediatric waiting
  z2: { z3: 10, z1: 10},
  z1: { z2: 10, t24: 8, t23: 2 }, //connection node
  
  //Leftside north-south hall
  //Wrong turn
  t24: { z1: 8, t25: 10 },
  t25: { t24: 8, t26: 10 },
  t26: { t25: 8, t27: 10 },
  t27: { t26: 8, t28: 10 },
  t28: { t27: 8, t29: 10 }, // realized a wrong turn had been made
  t29: { t28: 8, t30: 10 },
  t30: { t29: 10, e1: 11 },

  //correct turn
  t23: { z1: 2, t22: 10 },
  t22: { t23: 10, t21: 10 },
  t21: { t22: 10, t20: 10 },
  t20: { t21: 10, t19: 10 },
  t19: { t20: 10, h3: 5, t18: 10 }, // lab
  t18: { t19: 10, t17: 10 },
  t17: { t18: 10, t16: 10, rr3: 11 }, // restroom 3
  t16: { t17: 10, t15: 10, rr3: 11 }, // restroom 3
  t15: { t16: 10, t14: 10, h4: 11 }, //imaging
  t14: { t15: 10, t13: 10, h4: 11 }, //imaging
  t13: { t14: 10, t12: 10 },
  t12: { t13: 10, t11: 10 },
  t11: { t12: 10, t10: 10 },
  t10: { t11: 10, t9: 10 },
  t9: { t10: 10, t8: 10 },
  t8: { t9: 10, t7: 10 },
  t7: { t8: 10, t6: 10 },
  t6: { t7: 10, t5: 10 },
  t5: { t6: 10, t4: 10 },
  t4: { t5: 10, t3: 10 },
  t3: { t4: 10, t2: 10 },
  t2: { t3: 10, t1: 10 },
  t1: { t2: 10, er1: 10 },

}

const dijkNodes = {
  
  // Entrances
  e1: {
    name: 'Entrance - Pediatric / e1',
    x: 65,
    y: 140,
    open: "9am",
    close: '5pm'
  },
  e2: {
    name: 'Entrance - Adult/Inpatient / e2',
    x: 335,
    y: 140,
    open: "9am",
    close: '5pm'
  },
  e3: {
    name: 'Entrance - Inpatient / e3',
    x: 587,
    y: 195,
    open: "9am",
    close: '5pm'
  },
  e4: {
    name: 'Entrance - Dietary / e4',
    x: 370,
    y: 443,
    open: "9am",
    close: '5pm'
  },
  e5: {
    name: 'Entrance - ER / e5',
    x: 15,
    y: 443,
    open: "9am",
    close: '5pm'
  },
  e6: {
    name: 'front doors / v6',
    x: 170,
    y: 135,
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
    name: 'admin / v1',
    x: 190,
    y: 210,
    open: "9am",
    close: '5pm'
  },
  v2: {
    name: 'pediatric - waiting / v2',
    x: 75,
    y: 210,
    open: "9am",
    close: '5pm'
  },
  v3: {
    name: 'adult - waiting / v3',
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
// n1: {
//   name: 'Right hall North-West 23 / n1',
//   x: 360,
//   y: 220,
// },
// n2: {
//   name: 'Right hall North-South 10 / n2',
//   x: 360,
//   y: 350,
// },
// n3: {
//   name: 'Top hall east-west 35 / n3',
//   x: 360,
//   y: 443,
// },
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
},
  //Halls1

  //TOP-EAST-WEST
  p1: {
    x: 20,
    y: 443,
  },
  p2: {
    x: 30,
    y: 443,
  },
  p3: {
    x: 40,
    y: 443,
  },
  p4: {
    x: 50,
    y: 443,
  },
  p5: {
    x: 60,
    y: 443,
  },
  p6: {
    x: 70,
    y: 443,
  }, 
  p7: {
    x: 80,
    y: 443,
  },
  p8: {
    x: 90,
    y: 443,
  },
  p9: {
    x: 100,
    y: 443,
  },
  p10: {
    x: 110,
    y: 443,
  },
  p11: {
    x: 120,
    y: 443,
  },
  p12: {
    x: 130,
    y: 443,
  },
  p13: {
    x: 140,
    y: 443,
  },
  p14: {
    x: 150,
    y: 443,
  },
  p15: {
    x: 160,
    y: 443,
  },
  p16: {
    x: 170,
    y: 443,
  },
  p17: {
    x: 180,
    y: 443,
  },
  p18: {
    x: 190,
    y: 443,
  }, 
  p19: {
    x: 200,
    y: 443,
  },
  p20: {
    x: 210,
    y: 443,
  },
  p21: {
    x: 220,
    y: 443,
  },
  p22: {
    x: 230,
    y: 443,
  },
  p23: {
    x: 240,
    y: 443,
  },
  p24: {
    x: 250,
    y: 443,
  },
  p25: {
    x: 260,
    y: 443,
  },
  p26: {
    x: 270,
    y: 443,
  },
  p27: {
    x: 280,
    y: 443,
  },
  p28: {
    x: 290,
    y: 443,
  },
  p29: {
    x: 300,
    y: 443,
  },
  p30: {
    x: 310,
    y: 443,
  }, 
  p31: {
    x: 320,
    y: 443,
  },
  p32: {
    x: 330,
    y: 443,
  },
  p33: {
    x: 340,
    y: 443,
  },
  p34: {
    x: 350,
    y: 443,
  },
  p35: {
    x: 360,
    y: 443,
  },

  //Right Hall - NorthSouth

  q1: {
    x: 360,
    y: 440,
  },

  q2: {
    x: 360,
    y: 430,
  },

  q3: {
    x: 360,
    y: 420,
  },
  
  q4: {
    x: 360,
    y: 410,
  },
  q5: {
    x: 360,
    y: 400,
  },

  q6: {
    x: 360,
    y: 390,
  },

  q7: {
    x: 360,
    y: 380,
  },

  q8: {
    x: 360,
    y: 370,
  },
  q9: {
    x: 360,
    y: 360,
  },
  q10: {
    x: 360,
    y: 350,
  },
  q11: {
    x: 360,
    y: 340,
  },
  q12: {
    x: 360,
    y: 330,
  },
  q13: {
    x: 360,
    y: 320,
  },
  q14: {
    x: 360,
    y: 310,
  },
  q15: {
    x: 360,
    y: 300,
  },
  q15: {
    x: 360,
    y: 290,
  },
  q16: {
    x: 360,
    y: 280,
  },
  q17: {
    x: 360,
    y: 270,
  },
  q18: {
    x: 360,
    y: 260,
  },
  q19: {
    x: 360,
    y: 250,
  },
  q20: {
    x: 360,
    y: 240,
  },
  q21: {
    x: 360,
    y: 230,
  },
  q22: {
    x: 360,
    y: 220,
  },
  q23: {
    x: 360,
    y: 210,
  },
  q24: {
    x: 360,
    y: 200,
  },
  // q24 and q25 wrap j1
  q25: {
    x: 360,
    y: 190,
  },
  q26: {
    x: 360,
    y: 180,
  },
  q27: {
    x: 360,
    y: 170,
  },
  q28: {
    x: 360,
    y: 160,
  },
  q29: {
    x: 360,
    y: 150,
  },
  // Inpatitent - connector
  q30: {
    x: 350,
    y: 150,
  },
  q31: {
    x: 340,
    y: 150,
  },

//SURGERY ALLEY

  //NEW CONNECTOR
  w1: {
    x: 60,
    y: 346,
  }, 

  w2: {
    x: 70,
    y: 346,
  }, 
  w3: {
    x: 80,
    y: 346,
  },
  w4: {
    x: 90,
    y: 346,
  },
  w5: {
    x: 100,
    y: 346,
  },
  w6: {
    x: 110,
    y: 346,
  },
  w7: {
    x: 120,
    y: 346,
  },
  w8: {
    x: 130,
    y: 346,
  },
  w9: {
    x: 140,
    y: 346,
  },
  w10: {
    x: 150,
    y: 346,
  },
  w11: {
    x: 160,
    y: 346,
  },
  w12: {
    x: 170,
    y: 346,
  },
  w13: {
    x: 180,
    y: 346,
  },
  w14: {
    x: 190,
    y: 346,
  }, 
  w15: {
    x: 200,
    y: 346,
  },
  w16: {
    x: 210,
    y: 346,
  },
  w17: {
    x: 220,
    y: 346,
  },
  w18: {
    x: 230,
    y: 346,
  },
  w19: {
    x: 240,
    y: 346,
  },
  w20: {
    x: 250,
    y: 346,
  },
  w21: {
    x: 260,
    y: 346,
  },
  w22: {
    x: 270,
    y: 346,
  },
  w23: {
    x: 280,
    y: 346,
  },
  w24: {
    x: 290,
    y: 346,
  },
  w25: {
    x: 300,
    y: 346,
  },
  w26: {
    x: 310,
    y: 346,
  }, 
  w27: {
    x: 320,
    y: 346,
  },
  w28: {
    x: 330,
    y: 346,
  },
  w29: {
    x: 340,
    y: 346,
  },
  w30: {
    x: 350,
    y: 346,
  },
  //NEW CONNECTOR
  w31: {
    x: 360,
    y: 346,
  },
  //LOWER ALLEY
  //NEW CONNECTOR
  z1: {
    x: 60,
    y: 218,
  }, 

  z2: {
    x: 70,
    y: 218,
  }, 
  z3: {
    x: 80,
    y: 218,
  },
  z4: {
    x: 90,
    y: 218,
  },
  z5: {
    x: 100,
    y: 218,
  },
  z6: {
    x: 110,
    y: 218,
  },
  z7: {
    x: 120,
    y: 218,
  },
  z8: {
    x: 130,
    y: 218,
  },
  z9: {
    x: 140,
    y: 218,
  },
  z10: {
    x: 150,
    y: 218,
  },
  z11: {
    x: 160,
    y: 218,
  },
  z12: {
    x: 170,
    y: 218,
  },
  z13: {
    x: 180,
    y: 218,
  },
  z14: {
    x: 190,
    y: 218,
  }, 
  z15: {
    x: 200,
    y: 218,
  },
  z16: {
    x: 210,
    y: 218,
  },
  z17: {
    x: 220,
    y: 218,
  },
  z18: {
    x: 230,
    y: 218,
  },
  z19: {
    x: 240,
    y: 218,
  },
  z20: {
    x: 250,
    y: 218,
  },
  z21: {
    x: 260,
    y: 218,
  },
  z22: {
    x: 270,
    y: 218,
  },
  z23: {
    x: 280,
    y: 218,
  },
  z24: {
    x: 290,
    y: 218,
  },
  z25: {
    x: 300,
    y: 218,
  },
  z26: {
    x: 310,
    y: 218,
  }, 
  z27: {
    x: 320,
    y: 218,
  },
  z28: {
    x: 330,
    y: 218,
  },
  z29: {
    x: 340,
    y: 218,
  },
  z30: {
    x: 350,
    y: 218,
  },
  z31: {
    x: 360,
    y: 218,
  },
  //LEFT Hall - NorthSouth

  t1: {
    x: 60,
    y: 440,
  },
  t2: {
    x: 60,
    y: 430,
  },
  t3: {
    x: 60,
    y: 420,
  },
  t4: {
    x: 60,
    y: 410,
  },
  t5: {
    x: 60,
    y: 400,
  },
  t6: {
    x: 60,
    y: 390,
  },
  t7: {
    x: 60,
    y: 380,
  },
  t8: {
    x: 60,
    y: 370,
  },
  t9: {
    x: 60,
    y: 360,
  },
  t10: {
    x: 60,
    y: 350,
  },
  t11: {
    x: 60,
    y: 340,
  },
  t12: {
    x: 60,
    y: 330,
  },
  t13: {
    x: 60,
    y: 320,
  },
  t14: {
    x: 60,
    y: 310,
  },
  t15: {
    x: 60,
    y: 300,
  },
  t16: {
    x: 60,
    y: 290,
  },
  t17: {
    x: 60,
    y: 280,
  },
  t18: {
    x: 60,
    y: 270,
  },
  t19: {
    x: 60,
    y: 260,
  },
  t20: {
    x: 60,
    y: 250,
  },
  t21: {
    x: 60,
    y: 240,
  },
  t22: {
    x: 60,
    y: 230,
  },
  t23: {
    x: 60,
    y: 220,
  },
  t24: {
    x: 60,
    y: 210,
  },
  t25: {
    x: 60,
    y: 200,
  },
  t26: {
    x: 60,
    y: 190,
  },
  t27: {
    x: 60,
    y: 180,
  },
  t28: {
    x: 60,
    y: 170,
  },
  t29: {
    x: 60,
    y: 160,
  },
  t30: {
    x: 60,
    y: 150,
  },
  //INPATIANT ALLEY
  j1: {
    x: 360,
    y: 195,
  },
  j2: {
    x: 370,
    y: 195,
  },
  j3: {
    x: 380,
    y: 195,
  },
  j4: {
    x: 390,
    y: 195,
  },
  j5: {
    x: 400,
    y: 195,
  },
  j6: {
    x: 410,
    y: 195,
  },
  j7: {
    x: 420,
    y: 195,
  },
  j8: {
    x: 430,
    y: 195,
  },
  j9: {
    x: 440,
    y: 195,
  },
  j10: {
    x: 450,
    y: 195,
  },
  j11: {
    x: 460,
    y: 195,
  },
  j12: {
    x: 470,
    y: 195,
  },
  j13: {
    x: 480,
    y: 195,
  },
  j14: {
    x: 490,
    y: 195,
  },
  j15: {
    x: 500,
    y: 195,
  },
  // bi //
  j16: {
    x: 510,
    y: 195,
  },
  j17: {
    x: 520,
    y: 195,
  },
  j18: {
    x: 530,
    y: 195,
  },
  j19: {
    x: 540,
    y: 195,
  },
  j20: {
    x: 550,
    y: 195,
  },
  j21: {
    x: 560,
    y: 195,
  },
  j22: {
    x: 570,
    y: 195,
  },
  j23: {
    x: 580,
    y: 195,
  }
}

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
        currCostToNeighbor === undefined ||
        newCostToNeighbor < currCostToNeighbor
      ) {
        // Update the table
        shortestDistances[to] = { vertex, cost: newCostToNeighbor };
      }
    }

    visited.push(vertex);
  }

  // console.log("Table of costs:");
  // console.log(printTable(shortestDistances));

  const path = tracePath(shortestDistances, start, end);

  // console.log(
  //   "Shortest path is: ",
  //   path.join(" -> "),
  //   " with weight ",
  //   shortestDistances[end].cost
  // );

  return {weight: shortestDistances[end].cost, path: path}

};

const startEnd = dijkstra(graph, "e3", "er1");
console.log(startEnd);

const crossRoad = dijkstra(graph, "e3", "z1");
console.log(crossRoad);

const lost = dijkstra(graph, "z1", "t28");
console.log(lost);

const redirect = dijkstra(graph, "t28", "er1");
console.log(redirect);



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

  return { results, path };
}

// const fullPath = dijkCoords([])

// const polyTest1Str = dijkCoords(startEnd.path).path;

// this is the test route data we use for the demo

// const polyTest2Str = dijkCoords(crossRoad.path).path;
const polyTest2Coords = dijkCoords(crossRoad.path).results;


// const polyTest3Str = dijkCoords(lost.path).path;
const polyTest3Coords = dijkCoords(lost.path).results;


// const polyTest4Str = dijkCoords(redirect.path).path;
const polyTest4Coords = dijkCoords(redirect.path).results;

// routeStr - an array of strings, where each item is the name of a node (e.g. 'er1')
// routeCoords - an array of arrays, where each item is a set of coords (e.g. [0, 0])
const routeStr = [
  'e3',  'j23', 'j22', 'j21', 'j20', 'j19', 'j18', 'j17',
  'j16', 'j15', 'j14', 'j13', 'j12', 'j11', 'j10', 'j9',
  'j8',  'j7',  'j6',  'j5',  'j4',  'j3',  'j2',  'j1',
  'q24', 'q23', 'z31', 'z30', 'z29', 'z28', 'z27', 'z26',
  'z25', 'z24', 'z23', 'z22', 'z21', 'z20', 'z19', 'z18',
  'z17', 'z16', 'z15', 'z14', 'z13', 'z12', 'z11', 'z10',
  'z9',  'z8',  'z7',  'z6',  'z5',  'z4',  'z3',  'z2',
  'z1',  'z1',  't24', 't25', 't26', 't27', 't28', 't28',
  't27', 't26', 't25', 't24', 'z1',  't23', 't22', 't21',
  't20', 't19', 't18', 't17', 't16', 't15', 't14', 't13',
  't12', 't11', 't10', 't9',  't8',  't7',  't6',  't5',
  't4',  't3',  't2',  't1',  'er1'
];
const routeCoords = polyTest2Coords.concat(polyTest3Coords.concat(polyTest4Coords));
// const testPolyline = dijkCoords(tester.path);
// console.log('polyline test:', testPolyline);

const nodeWeights = (node1, node2) => {

  let x1 = dijkNodes[node1].x;
  let y1 = dijkNodes[node1].y;

  let x2 = dijkNodes[node2].x;
  let y2 = dijkNodes[node2].y;

  const weight = Math.hypot(x2-x1, y2-y1);
  // console.log(`weight between ${node1} and ${node2} is:`, weight)
  return weight;
}

// create graph nodes function
const createDijkNodes = () => {
  // 587 - 360, 23 node currently
  
  const coordsResult = {};

  for (let i = 135; i >= 0; i--) {
    coordsResult[`g${i}`] = {y: 442.43 - (i * 2.27), x: 60.360000000000014, name: `g${i}`};
  }

  return coordsResult;
  // output should be in form:
  // {e1: { e2: 10 }, e2: { e1: 10, e3: 10 }}
}

const createNewGraph = () => {
  const results = {};

  for (let i = 135; i >= 0; i--) {
    results[`g${i}`] = '';
  }

  return results;
}

console.log("newNodes returns:", createDijkNodes());
console.log("newGraph returns:", createNewGraph());

// insert node names here to find weight
const node1 = 'e3';
const node2 = 'er1';

nodeWeights(node1, node2);

// console.log('route is:', routeStr);

module.exports = { 
  graph, 
  dijkNodes, 
  printTable, 
  tracePath, 
  formatGraph, 
  dijkstra,
  startEnd,
  crossRoad,
  lost,
  redirect,
  dijkCoords,
  routeStr,
  routeCoords
};