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