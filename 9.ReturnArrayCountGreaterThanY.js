function ReturnArrayCountGreaterThanY(arr,Y) {
  var counter=0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]>Y) {
      counter++;
    }
  }
  return counter
}
console.log(ReturnArrayCountGreaterThanY([1,2,3],0))
