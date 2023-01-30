function leftRotate(arr, n) {
  for (let i = 0; i < n; i++) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  return arr;
}
