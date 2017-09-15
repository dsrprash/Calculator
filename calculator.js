var computeValue = 0;
var flag = true;
function calculate(operand,operator){

  switch(operator){
    case '+':
    computeValue = parseInt(computeValue) + parseInt(operand);
    document.getElementById('inputField').value = computeValue;
    break;
    case '-':
    break;
    case '*':
      if(flag == true) computeValue = 1;
    break;
    case '/':
    break;
    case '%':
    break;
    case '^':
    break;
    case '  =  ':
    break;


  }



}

function insert(value){
  console.log(value); // Remove or comment later

  var textId = 'inputField';
  var operators = ['+','-','*','/','%','^','  =  '];

  // initially check is it operator or operand
  if(isOperator(value) == true){
    // it means operator

    // check if we have input in inputext field,if its empty then we cannot perform operation
    if( document.getElementById(textId).value == '' || document.getElementById(textId).value == null ){
      alert('Please insert any number first!');
    }else{
      // this means some was inserted and have to
      var preValue = document.getElementById(textId).value;
      document.getElementById(textId).value = preValue + value;
      calculate(preValue,value);
      console.log('preValue : '+preValue+' and '+'present vlaue : '+document.getElementById(textId).value  ); // Remove or comment later
    }


  }
  else{
    // not an operator. its operand

    if( document.getElementById(textId).value == '' || document.getElementById(textId).value == null ){
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
