function PrintMaxOfArray(arr) {
  var max=arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
      max=arr[i];
    }
  }
  console.log (max);
}

PrintMaxOfArray([1,2,3,4,5,6,7]);
