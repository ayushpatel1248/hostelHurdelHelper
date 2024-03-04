const mongoose = require("mongoose");
const { Schema } = mongoose;

const IssueDataSchema = new Schema({
    userInfo: {
        type: Schema.Types.Mixed,
        required: true
    },
    issueType: {
        type: String,
    },
    timeOfIssue: {
        type: String
    },
    issueExplain: {
        type: String
    }
}, { timestamps: true }); 

const IssueData = mongoose.model("IssueData", IssueDataSchema);

module.exports = IssueData;
