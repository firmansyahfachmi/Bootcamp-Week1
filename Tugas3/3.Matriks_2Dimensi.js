

function transposeArray(array) {

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push([]);
        
    };

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            newArray[j].push(array[i][j]);

        };
    };

    for(j = 0; j < newArray.length; j++){
        console.log(newArray[j]);
    }
}

transposeArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

//arr[0].map((col, i) => 
//console.log(arr.map(col, i));