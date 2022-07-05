function heapify(n, i) {
    let left, right, largest = i;
    left = 2 * i + 1;
    right = left + 1;
    let temp;
    if (left < n && a[left] > a[largest]) {
        largest = left;
    }
    if (right < n && a[right] > a[largest]) {
        largest = right;
    }
    if (largest != i) {
        temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;
        heapify(n, largest);
    }
}

function BuildHeap(n) {
    let i, temp;
    for (i = Math.floor(n / 2 - 1); i >= 0; i--)
        heapify(n, i);
}

function HeapSort(n) {
    BuildHeap(n);
    for (let i = n - 1; i > 0; i--) {
        let temp;
        temp = a[0];
        a[0] = a[i];
        a[i] = temp;
        heapify(i, 0);
    }
}

a = [1, 7, 9, 2, 3, 0, 16, 654, 98];
console.log("Array is :" + a);
HeapSort(a.length);
console.log("Sorted array is :" + a);
