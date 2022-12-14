const locations = {
  /* array of locations for Marker creation 
  name property is used to match against poly objects */
  
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

//SUGERY ALLEY

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
    x: 360,
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
  },
  j24: {
    x: 587,
    y: 195,
  },
}