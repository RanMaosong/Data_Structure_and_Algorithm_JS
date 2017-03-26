var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = i + 1;
}

var numbers = [1, 2, 3, 4, 5];
var sum = numbers[0] + numbers[1] + numbers[2] + 
         numbers[3] + numbers[4];
console.log(sum);

var numbers = [1, 2, 3, 5, 8, 13, 21];
var sum = 0;
for (var i=0; i < numbers.length; ++i) {
    sum += numbers[i];
}

console.log(sum);

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i=0; i < words.length; ++i) {
    console.log("word" + i + ": " + words[i]);
}

var nums = []
for (var i=0; i < 10; ++i) {
    nums[i] = i + 1;
}

var samenums = nums;
console.log(nums);
console.log(samenums);

nums[0] = 400;
console.log(samenums[0]);

function copy(arr1, arr2) {
    for(var i=0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}

var nums = []
for (var i=0; i < 10; ++i) {
    nums[i] = i + 1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]);

var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join()
console.log(namestr)

namestr = names.toString();
console.log(namestr);
