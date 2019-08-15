
let olddata= [{
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
let newdata = [{
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



let result = {...olddata,...newdata};
console.log(result);