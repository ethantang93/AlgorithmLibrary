function DoubleUp(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[2 * i] = arr[i]
        arr[2 * i + 1] = arr[2 * i];
    }
    console.log(arr);
    return arr;
}
DoubleUp([1, 2, 3, 4, 5, 6, 7, 8, 9])
