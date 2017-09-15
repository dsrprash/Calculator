function calculate(expression){
  var operators = [],operands = [];
    var i = 0;
    var
    if(validateParentheses(expression) == true){
      for(i = 0; i < expression.length; i++){
          if(Number.isNaN(expression[i])){
            //push into operators stack
            if(expression[i] == "(" || expression[i] == ")"){
                if(expression[i] == "(")
                  operators.push(expression[i]);
                else
                  while(operators.length > 0 && operators)
            }
          }
      }
    }else{
      alert("Invalid expression");
    }



}


function isNumber(value){
  if(Number.isNaN(value) == false)
    return true
  else return false
}

function validateParentheses(expression){
  var openStack = [];
  var i = 0;
  for(i = 0; i < expression; i++){
    if(expression[i] == '(' || expression == '{' || expression == '['){
      openStack.push(expression[i]);
    }
    else if(expression[i] == ')' || expression == '}' || expression == ']'){
      if(openStack.length == 0){
          return false
      }
      else if(!(isMatchingBracket(expression[i],openStack.pop())){
        return false;
      }
    }
    if(openStack.length == 0){
      return true;
    }
    else{
      return false;
    }
  }
}


function isMatchingBracket(var a, var b){
  if(a == '(' && b == ')')
      return true;
  else if(a == '{' && b == '}')
    return true;
  else if(a == '[' && b == ']')
    return true;
  return false;
}
