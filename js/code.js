const arr =["Джаз", "Блюз"];
let arr1 = arr.join("&#119071;");
document.write(`<div> <span class="red">Перший масив:</span> ${arr1}</div>`);
console.log(arr1);
arr.push("Рок-н-ролл");
let arr2 = arr.join("&#119071;");
document.write(`<div> <span class="red">Другий масив:</span> ${arr2}</div>`);
console.log(arr2);
arr[Math.floor((arr.length - 1) / 2)] = "Классика";
let arr3 = arr.join("&#119071;");
document.write(`<div> <span class="red">Третій масив: </span>${arr3}</div>`);
console.log(arr3);
 const index_1 = arr.splice(0,1);
 let arr4 = arr.join("&#119071;");
document.write(`<div> <span class="green">Перший видалений елемент:</span> ${index_1}</div>`);
console.log(`Перший видалений елемент: ${index_1}`);
document.write(`<div> <span class="red">Четвертий масив: </span> ${arr4}</div>`);
console.log(arr4);
arr.unshift("Рэп", "Регги");
let arr5 = arr.join("&#119071;");
document.write(`<div> <span class="red">П'ятий масив: </span> ${arr5}</div>`);
console.log(arr5);


