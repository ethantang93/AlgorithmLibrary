function RemoveEven(arr) {
    var r = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 == 0) {
            r++;
        } else {
            arr[i - r] = arr[i];
        }
    }
    arr.length = arr.length - r;
    console.log(arr);
    return arr;
}

RemoveEven(["yes", "no", "hello!", "world", "coding", "dojo!"])
