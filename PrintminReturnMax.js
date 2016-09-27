function printminreturnmax(arr){
  var min=arr[0];
  var max=arr[0];
  for (var i=0; i <arr.length; i++){
    if (arr[i]>max){
      max = arr[i];
    }
    if (arr[i]<min){
      min=arr[i];
    }
    console.log(min);
    return max;
  }
}
printminreturnmax([1,2,3,4]);
