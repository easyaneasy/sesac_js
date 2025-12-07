const names = ["홍길동", "김길동", "박길동", "이길동"];

function generateName(){
    const index = Math.floor(Math.random() * names.length); // 0~3 사이의 숫자
    console.log(index);
    return names[index];
}

function generateGender(){
    const prob = Math.random();
    if(prob < 0.5){
        return "남성";
    }else {
        return "여성";
    }
}

function generateGender2(){
    return Math.random() < 0.5 ? "남성" : "여성";
}

function generateBirthdate(){
    //const year = Math.floor(Math.random() * 100); //0~99
    const year = Math.floor(Math.random() * 40) + 1980; // 1980 ~ 2019
    //const month = Math.floor(Math.random() * 12); //0~11
    const month = Math.floor(Math.random() * 12) + 1; // 1 ~ 12
    //const day = Math.floor(Math.random() * 30); //0~29
    const day = Math.floor(Math.random() * 30) + 1; // 1 ~ 30

    if(month === 2){
        const day = Math.floor(Math.random() * 28) + 1; // 1 ~ 28
    }

    return `${year}-${month}-${day}`;
}

console.log(generateName());
console.log(generateGender2());
console.log(generateBirthdate());