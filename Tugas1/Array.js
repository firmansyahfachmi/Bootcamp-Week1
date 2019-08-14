let object = [
    {   
        id : 1,
        schoolName : "SMKN 4 Malang",
        yearIn: 2016,
        yearOut: 2019
    },
    {   
        id: 2,
        schoolName: "Universitas Airlangga",
        yearIn: 2014,
        yearOut: 2019
    },
    {   
        id: 3,
        schoolName: "Universitas Gajah Mada",
        yearIn: 2013,
        yearOut: 2017
    }
]
    //ShowAll Function
    function showAll(item){
        let allObject = [item.id,item.schoolName, item.yearIn,item.yearOut].join(" ");
        return allObject;
    }
    console.log(object.map(showAll));
    console.log();

    //Add Function
    function Add(A_id, A_school, A_in, A_out){
        let data = [
            {  
                id : A_id,
                schoolName : A_school,
                yearIn : A_in,
                yearOut : A_out
            }
        ]
        object.push(data[0]);
        console.log(object.map(showAll));
        console.log();
    }

    function Change(C_id, C_school, C_in, C_out) {
        for (let i in object) {
            if (object[i].id == C_id) {
                object[i].id = C_id;
                object[i].schoolName = C_school;
                object[i].yearIn = C_in;
                object[i].yearOut= C_out;
                break;
            }
        }
        console.log(object.map(showAll));
        console.log();
    }

    //Delete Function
    function Delete(D_id){
        for(let i = 0; i < object.length; i++){
            if(object[i].id == D_id){
                object.splice(i, 1);
            }
        }
        
        console.log(object.map(showAll));

    }

    //Call Function
    Add(4, "Universitas Brawijaya", 2013, 2017);
    Change(1, "Universitas Trisakti", 2014, 2018);
    Delete(1);
    

    





