function ParensValidation(str){
  var counter = 0;
  for (var i =0; i< str.length; i++){
    if (str[i] == "("){
      counter+=1;
    }
    if (str[i] == ")"){
      counter-=1;
    }
    if (counter<0){
      return false;
    }
  }
  if (counter == 0){
    return true;
  }
  if ( counter>0){
    return false;
  }
}

console.log(ParensValidation("()))))((()))"));
