function InsertAt(arr, x, val) {
    if (x >= 0 && x < arr.length) {
        for (var i = arr.length; i >= x; i--) {
            arr[i] = arr[i - 1]
        }
        arr[x] = val
        console.log(arr)
        return arr;
    } else {
        console.log("invalid");
    }
}

InsertAt([1, 2, 3, 4], 3, 'p')
