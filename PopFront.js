function popfront(arr) {
    var x = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return x;

}
popfront([1, 2, 3, 4, 5]);
