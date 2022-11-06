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
    const{operation_type, x, y} = req.body

    let operation;
    let result;

    switch(operation_type){
        case 1:
            operation = "addition";
            break;
        case 2:
            operation = "subtraction"
            break;
        case 3:
            operation = "multiplication"
            break;
        default:
            operation = "addition"

    }

    if(operation == "addition"){
       result = x + y
       return result
    }

    if(operation == "subtraction"){
        result = x - y
        return result
    }
    if(operation == "multiplication"){
        result = x * y

        return result
    }

    const finalResult = parseInt(result)
    
    res.status(200).json({

        success: true,
        slackUsername: "wande.eth",
        result: finalResult,
        operation_type: operation
      
    });
});