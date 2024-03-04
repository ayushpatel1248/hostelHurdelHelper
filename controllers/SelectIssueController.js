const SelectIssueService = require("../services/SelectIssue")
const verifyAuth = require("../reUseAbleFunctions/decryptAuth")


const SelectIssueController = {}

// --------------------- for user profile information update ------------------------------

SelectIssueController.selectIssue = async (req, res) => {
    const { authorization } = req.headers;
    const { issueType, timeOfIssue, issueExplain } = req.body;
    const _id = verifyAuth(authorization)
    const result = await SelectIssueService.SelectIssue(_id, issueType, timeOfIssue, issueExplain);
    res.send(result)

}


SelectIssueController.GetAllIssue = async (req, res) => {
    const { authorization } = req.headers;
    const _id = verifyAuth(authorization)
    const result = await SelectIssueService.GetAllIssue();
    res.send(result)

}

module.exports = SelectIssueController