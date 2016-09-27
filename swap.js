function swap(arr) {
    var temp;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
    return arr;
}
swap([1, 2, 3])
