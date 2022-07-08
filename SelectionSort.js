function SelectionSort(arr, n) {
    let temp;
    for (let i = 0; i < n; i++) {
        let MinValue = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[MinValue]) {
                MinValue = j;
            }
        }
        if (i != MinValue) {
            temp = arr[MinValue];
            arr[MinValue] = arr[i];
            arr[i] = temp;
        }
    }

}
arr = [1, 7, 9, 2, 3, 0, 16, 654, 98];
console.log("Array is :" + arr);
SelectionSort(arr, arr.length - 1);
console.log("Sorted array is :" + arr);
