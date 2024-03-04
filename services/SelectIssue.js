const IssueData = require("../model/IssueData");
const User = require("../model/Users")

const IssueService = {};

IssueService.SelectIssue = async (_id, issueType, timeOfIssue, issueExplain) => {
    try {
        const userData = await User.findOne({_id})
        const dataStored = await IssueData.create({ userInfo:userData, issueType, timeOfIssue, issueExplain });
        return {
            status: "ok",
            msg: "issue registered successfully",
            data: dataStored
        };
    } catch (error) {
        console.error("Error while saving IssueData:", error);
        return {
            status: "err",
            msg: "error occurred",
            data: error
        };
    }
};

IssueService.GetAllIssue = async () => {
    try {
        const userData = await IssueData.find({})
        return {
            status: "ok",
            msg: "issue data fetch successfully",
            data: userData
        };
    } catch (error) {
        console.error("Error while getting IssueData:", error);
        return {
            status: "err",
            msg: "error occurred",
            data: error
        };
    }
};

module.exports = IssueService;
