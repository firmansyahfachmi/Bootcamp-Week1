let object = [
    {
        id : 1,
        name : "Ron"
    },
    {
        id : 2,
        name : "Ren"
    },
    {
        id : 3,
        name : "Rin"
    }
]
    //ShowAll Function
    function showAll(item){
        let allObject = [item.id, item.name].join(" ");
        return allObject;
    }
    console.log(object.map(showAll));

    //Add Function
    function Add(A_id, A_name){
        let data = [
            {  
                id : A_id,
                name : A_name
            }
        ]
        object.push(data[0]);
        console.log(object.map(showAll));
    }

    function Change(V_id, V_name) {
        for (let i in object) {
            if (object[i].id == V_id) {
                object[i].id = V_id;
                object[i].name = V_name;
                break;
            }
        }
        console.log(object.map(showAll));
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
    Add(4, "Len");
    Change(1, "Raned");
    Delete(1);
    

    





