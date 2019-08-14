let A = [
    [3,4],
    [1,2]
];
let B = [
    [7, 5],
    [6, 4]
];


function countMatrix(a, b){
    let result = [];

    if(a[0].length == b.length){
        for(i = 0; i < a.length; i++){
            let row = [];
            
            for(j = 0; j < b[i].length; j++){
                let temp = 0;
                
                for(let n = 0; n < a[i].length; n++){

                    temp += a[i][n] * b[n][j];
                
                }
                row.push(temp);

            }
            result.push(row);
        }
        console.log(result);
    }else{
        console.log("Error Matriks");
    }
}

countMatrix(A, B)