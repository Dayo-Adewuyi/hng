function performOperation(opt, x, y) {
    let result;
    const operation = {
      ADD: "addition"|| "add",
      SUBTRACT: "subtraction" || "sub",
      MULTIPLACTION: "multiplication" || "mul",
    };
    switch (opt) {
      case operation.ADD:
        result = x + y;
        break;
      case operation.SUBTRACT:
        result = x - y;
        break;
      case operation.MULTIPLACTION:
        result = x * y;
        break;
      default:
        result = null;
  
        break;
    }
    return { result: result, operation_type: opt };
  }
  
  module.exports = performOperation;