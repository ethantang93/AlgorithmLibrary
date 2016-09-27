function SwapStringForArrayNegativeVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]<0) {
      arr[i]='Dojo'
    }
  }
  console.log(arr);
}

SwapStringForArrayNegativeVals([1,2,3,-4]);
