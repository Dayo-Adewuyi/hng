const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const opt = require("./operation.js");
const nlp = require("./nlp.js")
// url api/info
exports.info = catchAsyncErrors(async (req, res, next) => {



    res.status(200).json({

        success: true,
        slackUsername: "wande.eth",
        backend: true,
        age: 25,
        bio: "A goal-oriented self starter looking to build the next unicorn"
    });
});

exports.operation = catchAsyncErrors(async (req, res, next) => {
    const operation_input = req.body.operation_type;
    const x = Number(req.body.x);
    const y = Number(req.body.y);
    const slackUsername = "wande.eth";

    if (
        operation_input === "addition" ||
        operation_input === "subtraction" ||
        operation_input === "multiplication"

    ) {
        let results = opt(operation_input, x, y);
        const response = {
            slackUsername: slackUsername,
            result: results.result,
            operation_type: results.operation_type,
        };
        res.send(response);
    } else {
        nlp(operation_input).then((input) => {
            let results;

            if (input === "operation.sub") {
                results = opt("subtraction", x, y);
            } else if (input === "operation.mul") {
                results = opt("multiplication", x, y);
            } else if (input === "operation.add") {
                results = opt("addition", x, y);
            }

            const response = {
                slackUsername: slackUsername,
                result: results.result,
                operation_type: results.operation_type,
            };
            res.send(response);
        });
    }

});