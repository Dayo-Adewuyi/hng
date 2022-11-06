const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// url api/info
exports.info = catchAsyncErrors(async (req, res, next) => {



    res.status(200).json({

        success: true,
        slackUsername: "dayo",
        backend: true,
        age: 25,
        bio: "A goal-oriented self starter looking to build the next unicorn"
    });
});

exports.operation = catchAsyncErrors(async (req, res, next) => {
    const { operation_type, x, y } = req.body

    switch (operation_type.toLowerCase()) {
        case "addition":
            solution = x + y; break;
        case "multiplication":
            solution = x * y; break;
        case "subtraction":
            solution = x - y; break;
        default:
            solution = "special";
            break;
    }

    if (solution === "special") {
        const getSolutionFromOpenai = async (callback) => {

            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: "Q: Multiply 5 and 6\nA: 30\n\nQ: Add 3 to 10\nA: 13\n\nQ: what is 12 subtracted from 20?\nA: 7\n\nQ: What is 2 plus 2?\nA: 4\n\nQ: What is 2 multiplied by 8?\nA: 16\n\nQ: What is 34 minus 30?\nA: 4\n\nQ: Can you please add the following numbers together - 13 and 29?\nA: 42\n\nQ: " + operation_type + "\n",
                temperature: 0,
                max_tokens: 64,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                stop: ["\n\n"],
            });

            //
            return response.data.choices[0].text.slice(3);
        }
        getSolutionFromOpenai().then((val) => res.status(200).json({
            slackUsername: 'akinolaaa',
            operation_type: operation_type,
            result: Number(val)
        })).catch((err) => {
            res.status(200).json({ err })
        });

    } else {
        res.status(200).json({
            slackUsername: 'wande.eth',
            operation_type: operation_type,
            result: solution
        })
    }


});