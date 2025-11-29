function sum_to_100(){
    let sum = 0;
    for(let i = 1; i <= 100; i++){
        // 1부터 100까지의 합
        sum += i;
    }
    console.log("부터 100까지의 합은:", sum)
}

sum_to_100();

function sum_to_max(max){
    let sum = 0;
    for(let i = 1; i <= max; i++){
        // 1부터 max까지의 합
        sum += i;
    }
    console.log(`부터 ${max}까지의 합은: ${sum}`)
}

function sum_to_number_guess(max) {
    sum = (max * (max + 1)) / 2;
    console.log(`1부터 ${max}까지의 합은: ${sum}`);
}

sum_to_max(100);
sum_to_max(1_000);
sum_to_max(10_000);

console.time("sum-to-100");
sum_to_100();
console.timeEnd("sum-to-100");

console.time("sum-to-10억");
sum_to_max(1_000_000_000);  // 10억
// sum_to_number_guess(1_000_000_000);  // 10억
console.timeEnd("sum-to-10억");

console.time("sum-to-100억");
sum_to_max(10_000_000_000);  // 100억
// sum_to_number_guess(10_000_000_000);  // 100억
console.timeEnd("sum-to-100억");