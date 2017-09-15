
function insert(value){
  console.log("( "+isNumber('(')+ " 23"+isNumber("23"));

  console.log("( :"+parseInt("(")+" "+Number.isNaN(parseInt("(")));
  console.log("+ :"+parseInt("+")+" "+Number.isNaN(parseInt("+")));
  console.log("1.2 :"+parseFloat("1.2")+" "+Number.isNaN(parseFloat("1.2")));
  console.log("12 :"+parseFloat("12")+" "+Number.isNaN(parseFloat("12")));
 //console.log(value.isNaN()+" "+typeof(value)); // Remove or comment later

  var textId = 'inputField';
  var operators = ['+','-','*','/','%','^','  =  '];

  // initially check is it operator or operand
  if(isOperator(value) == true){
    // it means operator

    // check if we have input in inputext field,if its empty then we cannot perform operation
    if( document.getElementById(textId).value == '' || document.getElementById(textId).value == null ){
      if( value == "="){
          document.getElementById(textId).value = 0;
        }
      else
            alert('Please insert any number first!');
    }else{
      // this means some was inserted and have to
      var preValue = document.getElementById(textId).value;
      document.getElementById(textId).value = preValue + value;

      if( value == "  =  ")
      console.log('preValue : '+preValue+' and '+'present vlaue : '+document.getElementById(textId).value  ); // Remove or comment later
    }


  }
  else{
    // not an operator. its operand

    if( document.getElementById(textId).value == '' || document.getElementById(textId).value == null || document.getElementById(textId).value == "0" ){
      document.getElementById(textId).value = value;
    }else{
      var preValue = document.getElementById(textId).value;
      document.getElementById(textId).value = preValue + value;
      console.log('preValue : '+preValue+' and '+'present vlaue : '+document.getElementById(textId).value  ); // Remove or comment later
    }

  }
}


function isOperator(v){
    var operators = ['+','-','*','/','%','^','='];
    var i=0;
    for(i = 0; i < operators.length; i++){
      if(v == operators[i]){
        console.log("fine operator found" + v);
        return true;
      }
    }
    return false;
}

function reset(){
  document.getElementById('inputField').value = '0';
  computeValue = 0;
}

function calculate(){
  textId = "inputField";
  var i = 0;
    if( document.getElementById(textId).value == '' || document.getElementById(textId).value == null || document.getElementById(textId).value == "0" ){
      document.getElementById(textId).value = 0
    }else{
      var exp = document.getElementById(textId).value;
      var operand1,operand2,operator;
      while(i < exp.length){
        if(isOperator(exp[i]) == true)
          break;
        i += 1;
      }
      operand1 = parseInt(exp.substring(0,i));
      operand2 = parseInt(exp.substring(i+1,exp.length));
      switch(exp[i]){
        case '+':
          document.getElementById('inputField').value = operand1 + operand2;
        break;
        case '-':
        document.getElementById('inputField').value = operand1 - operand2;
        break;
        case '*':
          document.getElementById('inputField').value = operand1 * operand2;
        break;
        case '/':
          if(operand2 != 0){
          document.getElementById('inputField').value = operand1 / operand2;}
          else {
            alert('Cannot divide by zero.');
          }
        break;
        case '%':
          document.getElementById('inputField').value = operand1 % operand2;
        break;
        case '^':
        console.log(operand1+" "+operand2);
          console.log(Math.pow(operand1,operand2));
          document.getElementById('inputField').value = Math.pow(operand1,operand2);
        break;

      }
    }

}






function isNumber(value){
  if(Number.isNaN(parseFloat(value)) == false && parseFloat(value) != NaN)
    return true
  else return false
}
