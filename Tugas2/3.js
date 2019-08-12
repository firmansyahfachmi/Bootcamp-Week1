
    function Mean(arr){
        arr.sort();

        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i]);
        }

        let avg = sum / arr.length;

        
        console.log("Sum : "+sum);
        console.log("Average : "+avg);

}

function Median(arr){
    arr.sort();

    let median = (arr[(arr.length - 1) >> 1] + arr[arr.length >> 1]) / 2;
    let test = arr[arr.length >> 1];
    console.log("Median : " + test);
}

function Mode(arr) {
    
    let mode = 0;
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
    
    }

}

Median([8, 7, 8, 8, 9, 3, 3]);

