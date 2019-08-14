function count(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += parseInt(arr[i]);
    }
    let breaked = total.toString().split("");
    changeInt(breaked);

}

function changeInt(data) {
    for (let i = 0; i < data.length; i++) {
        data[i] = parseInt(data[i]);
    }
    check(data);
    
}

function check(val){
    
    if(val.length > 1){
        console.log(val);
        count(val);
    }else{
        console.log(val);
    }

}

count([123,9,27]);