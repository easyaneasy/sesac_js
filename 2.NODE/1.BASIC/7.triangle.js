function leftTriangle(num_of_row){
    for(let row = 1; row <= num_of_row; row++){
        let stars = ""
        for(let col = 1; col <= row; col++){
            stars += "*";
        }
       console.log(stars);
    }
}
leftTriangle(5)

function rightTriangle(num_of_row){
    for(let row = 1; row <= num_of_row; row++){
        let stars = "";
        for(let col = num_of_row - 1; col >= row; col--){
            stars += " ";
        }
        for(let col = 1; col <= row; col++){
            stars += "*";
        }
        console.log(stars);
    }
}
rightTriangle(5);

function leftTriangleRepeat(num_of_row){
    for(let r = 1; r <= num_of_row; r++){
        console.log("*".repeat(r));
    }
}
leftTriangleRepeat(5);

function rightTriangleRepeat(num_of_row){
    for(let row = 1; row <= num_of_row; row++){
        console.log(" ".repeat(num_of_row - row) + "*".repeat(row));
    }
}
rightTriangleRepeat(5);