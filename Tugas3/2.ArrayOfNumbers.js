function count(arr){
    let total = 0;
    const loop = arr.map(num =>{        
        total += parseInt(num);
    })
    // for (let i = 0; i < arr.length; i++) {
    //     total += parseInt(arr[i]);
    // }
    let breaked = total.toString().split("");
    changeInt(breaked);

}

function changeInt(data) {
    const loop2 = data.map(num => {
        num = parseInt(num);
        return num;
    })
    // for (let i = 0; i < data.length; i++) {
    //     data[i] = parseInt(data[i]);
    // }
    check(loop2);
    
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