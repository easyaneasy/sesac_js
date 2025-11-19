function changeBGColor(){ 
    // if(document.body.style.backgroundColor === "red"){
    //     document.body.style.backgroundColor = "blue";
    // } else {
    //     document.body.style.backgroundColor = "red";
    // }

    // 현재 색상에 따라 다른 색으로 바꾸게
    // red -> blue -> green -> red 순환

    // DOM을 가져온게 아니기 때문에 bg = "" 형태로 쓸 수 없음
    let bg = document.body.style.backgroundColor;
    if(bg === "red") {
        document.body.style.backgroundColor = "blue";
    }else if(bg === "blue") {
        document.body.style.backgroundColor = "green";
    }else {
        document.body.style.backgroundColor = "red";
    }
}

function changeBGColor_cycle(){
    const colors = ["red", "blue", "green"];
    let bg = document.body.style.backgroundColor;
    if(bg === colors[0]) {
        document.body.style.backgroundColor = colors[1];
    }else if(bg === colors[1]){
        document.body.style.backgroundColor = colors[2];
    }else {
        document.body.style.backgroundColor = colors[0];
    }
}

let currentIndex = 0;
function changeBGColor_cycle2(){
    const colors = ["red", "blue", "green"];
    console.log(currentIndex);
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex += 1;

    if(currentIndex > 2) {
        currentIndex = 0;
    }
}

function changeBGColor_cycle3(){
    const colors = ["red", "blue", "green"];
    document.body.style.backgroundColor = colors[currentIndex++];
    if(currentIndex > 2) {
        currentIndex = 0;
    }
}

function changeBGColor_cycle4(){
    const colors = ["red", "blue", "green", "orange"];
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}