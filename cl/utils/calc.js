/* let op;
let result;
let a = Number(parsedUrl.query.param1);
let b = Number(parsedUrl.query.param2); */
function calcRes(a, b, op){
    let result;
    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }
    return result
}
function whatOp(op){
    let opServ;
    switch(op){
      case '0':
        opServ = '+';
        break;
      case '1':
        opServ = '-';
        break;
      case '2':
        opServ = '/';
        break;
      case '3':
        opServ = '*';
        break;
    }
    return opServ;
   }

module.export = {
    calcRes,
    whatOp
} 
