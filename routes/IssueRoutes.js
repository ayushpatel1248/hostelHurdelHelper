const express = require('express')
const router = express.Router()
const SelectIssueController = require("../controllers/SelectIssueController")

router.post('/submitIssue' , SelectIssueController.selectIssue)
router.post('/getAllIssue' , SelectIssueController.GetAllIssue)

module.exports = router 