function ShiftArrayValsLeft(arr) {
  for (var i = 1; i < arr.length; i++) {
    arr[i-1]=arr[i];
  }
  arr[arr.length-1]=0;
  console.log(arr);
}
ShiftArrayValsLeft([1,2,3,4]);
