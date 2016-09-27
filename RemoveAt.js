function RemoveAt(arr, x) {
    if (x >= 0 && x <= arr.length - 1) {
        y = arr[x];
        for (var i = x; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
        console.log(arr);
        return y;
    } else {
        console.log("invalid");
    }

}
RemoveAt([1, 2, 3, 4], 4)
