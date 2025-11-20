// 무작위 숫자 만들기.. 랜덤
// 힌트: R G B 에 대해서 각각 무작위 숫자를 만든다 -> 범위 0~255
// #FFFFFF 포맷으로 바꾼다
// 16진수로 변경해서 색상 적용한다

function randomBGColor(){
    document.getElementById("info-text").textContent = "";

    let bg_color = document.body.style.backgroundColor;

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const hex = "#" + 
                    red.toString(16).padStart(2, "0") + // 숫자를 16진수로 바꾸고 문자열 길이가 2가 될때까지 앞에 0을 채운다
                    green.toString(16).padStart(2, "0") + 
                    blue.toString(16).padStart(2, "0");
    
    document.body.style.backgroundColor = hex;
    document.getElementById("hex").textContent = `HEX: ${hex}`;
    document.getElementById("rgb").textContent = `RGB: rgb(${red}, ${green}, ${blue})`;
}