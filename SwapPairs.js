function SwapPair(arr){
  var temp
  for (var i = 1; i < arr.length; i+=2){
    temp=arr[i]
    arr[i]=arr[i-1]
    arr[i-1]=temp;
  }
  console.log (arr);
  return arr;
}
SwapPair([1,2,3,4]);
// console.log(SwapPair([1,2,3,4,5,6]));
