const express = require('express');
const router = express.Router();
const departments = require('../db/queries/departments');


/* GET departments */
router.get('/', (req, res) => {
  departments.getAllDepartments().then(data => {
    console.log(data);
    res.json({departments: data});
  })
});

module.exports = router;