let person = [{
        name: "Tatas",
        company: "Arkademy",
        job: "Trainer",
        status: "single",
        city: "Jogja"
    },
    {
        name: "Pratama",
        company: "Emago",
        job: "Trainer",
        status: "single",
        city: "Jakarta"
    }
];
let person2 = [{
        name: "Tatas",
        company: "Arkademy",
        job: "Trainer",
        status: "Menikah",
        city: "Jakarta"
    },
    {
        name: "Pratama",
        company: "Arkademy",
        job: "Trainer",
        status: "single",
        city: "Jogja"
    }
];



let newPerson = {...person,...person2};
console.log(newPerson);