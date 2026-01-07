let arr = [1, 2, 4, 5, 7];
//  Index  0, 1, 2, 3, 4

// arr[0] = 5666;
console.log(arr);
console.log(typeof arr);

console.log(arr.length);

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString());
console.log(arr.join(" and "));

// let numbers = [1, 2, 3, 4, 5]
// numbers.splice(1, 2)
// numbers.splice(1, 3)
// numbers.splice(1, 3, 222, 333)
// (4) [1, 222, 333, 5]

arr.pop();
console.log(arr);

arr.push(100);
arr.push("Masyud");
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("Hossain");
console.log(arr);
