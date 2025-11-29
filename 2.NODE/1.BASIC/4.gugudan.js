function gugudan(dan){
    for(let i = 1; i <= 9; i++){
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
}

gugudan(6);

for (let dan = 5; dan <= 7; dan++){
    gugudan(dan);
}