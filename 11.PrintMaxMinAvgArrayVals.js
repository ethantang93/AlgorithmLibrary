function PrintMaxMinAvgArrVals(arr) {
  var max=arr[0];
  var min=arr[0];
  var sum=0;
  var avg=0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
      max=arr[i];
    }
    if (arr[i]<min) {
      min=arr[i];
    }
    sum+=arr[i];
  }
  avg=sum/arr.length;
  var arrnew=[max,min,avg];
  console.log (arrnew);
}

PrintMaxMinAvgArrVals([1,2,3,4,5])
