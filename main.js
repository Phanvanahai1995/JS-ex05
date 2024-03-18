"use strict";

// Bài 1:
// Hàm tìm min, max, index của min, max trong mảng
const minMaxArr = function (arr) {
  let max = arr[0];
  let min = arr[0];
  let indexMin = 0;
  let indexMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      indexMax = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      indexMin = i;
    }
  }
  console.log(
    `max = ${max} tại vị trí index = ${indexMax}, min = ${min} tại vị trí index = ${indexMin}`
  );
};

minMaxArr([3, 2, 5, 8, 9]);

// Bài 2
const newArr = [1, 5, 4, 3, 2, 8];
// Hàm kiểm tra số nguyên tố
const isSNT = function (n) {
  if (n <= 1) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

// Biến lưu tổng só NT và số lượng số NT
let sum = 0;
let count = 0;
let result = 0;

// Tỉnh tổng số NT và số lượng số NT
for (let i = 0; i < newArr.length; i++) {
  if (isSNT(newArr[i])) {
    sum += newArr[i];
    count++;
  }
}

if (sum !== 0) {
  result = sum / count;
  console.log(result);
} else {
  console.log("Không có số nguyên tố");
}

// Bài 3

let newArr2 = [
  1,
  2,
  undefined,
  3,
  "Hai",
  null,
  4,
  undefined,
  "Hai",
  null,
  10,
  "Hai",
  2,
  10,
];

// Hàm sắp xêp mảng
const sort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (String(arr[j]) < String(arr[i])) {
        let childArr = arr[i];
        arr[i] = arr[j];
        arr[j] = childArr;
      }
    }
  }
  return arr;
};

// Hàm xóa các phần tử trùng lặp của mảng
const unique = function (arr) {
  sort(arr);
  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
};

console.log(unique(newArr2));

// Bài 4

var numbers = [5, 1, 9, 8, 10];
var element = 4;

// Hàm sắp xếp mảng
const sort2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let childArr = arr[i];
        arr[i] = arr[j];
        arr[j] = childArr;
      }
    }
  }
  return arr;
};

console.log(sort2(numbers));

// Hàm thêm phần tử bất kỳ không làm thay đổi vị trí của mảng
const sortAdd = function (arr, element, index) {
  if (index >= 0 && index <= arr.length) {
    // Tăng phần tử của mảng
    arr.length = arr.length + 1;
    // Thay đổi index của mảng
    for (let i = arr.length - 1; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    // Thêm phần tử vào vị trí bất kỳ
    arr[index] = element;
    sort2(arr);
    console.log(arr);
  } else {
    console.log("Vui lòng nhập đúng vị trí cần thêm");
  }
};

sortAdd(numbers, element, 5);
