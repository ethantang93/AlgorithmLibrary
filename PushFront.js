function pushfront(arr, x) {
    for (var i = arr.length; i > x; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = x;
    console.log(arr);
    return arr;
}
pushfront([1, 2, 3, 4, 5, 6], 1000)
