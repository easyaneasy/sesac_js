// 원시 타입 = Primitive Type
const a = 5;
console.log(typeof a); // number

const b = "hello";
console.log(typeof b); // string

// Object 타입 = Wrapper Class (원시 타입을 감싸 놓은)
const c = new Number(5); // Number 객체
const d = new Number(7);
console.log(typeof c);
console.log(c instanceof Number);
console.log(d instanceof Number);

const e = new String("hello"); // String 객체
const f = new String("world"); // String 객체
console.log(typeof e);
console.log(typeof f);

