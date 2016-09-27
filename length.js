function length(arr) {
    for (var i = arr.length - 2; i >= 0; i--) {
        arr[i + 1] = arr[i].length;
    }
    arr[0] = 0;
    console.log(arr);
    return arr;
}

length(['foo', 'lala', 'seven'])
