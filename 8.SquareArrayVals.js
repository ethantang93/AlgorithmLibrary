function SquareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]=arr[i]*arr[i];
  }
  return arr;
}

console.log(SquareArrayVals([1,2,3]));
