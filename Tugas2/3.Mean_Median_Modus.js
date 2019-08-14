
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
     arr.sort(function (a, b) {
            return a - b;
        });

    //let median = (arr[(arr.length - 1) ] + arr[arr.length >> 1]) / 2;
    let median = arr[Math.floor(arr.length / 2)];

    console.log("Median : " + median);
}

function Mode(arr) {

    let modes = [];
    let res = [];
    let total = [];
    
    for(let i = 0; i < arr.length; i++){ 
        let temp = 0;
        let number = arr[i];
        

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                temp += 1; 
            }
            
        }

        if (res.indexOf(arr[i]) == -1) {
            res.push(number);
            total.push(temp);
        }
        
    
    }

    let result = Math.max(...total);

    //let result = [...new Set(res)];
    //let resTotal = [...new Set(total)];

    for(let n = 0; n < total.length; n++){
        if(total[n] == result){
            modes.push(res[n]);
        }
    }

    console.log("Modus : " + modes);

}

Mean([2, 2, 8, 8, 8, 3]);
Median([2, 2, 8, 8, 8, 3]);
Mode([2, 2, 2, 8, 8, 8, 3]);

