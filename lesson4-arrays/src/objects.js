const user = {
    name: "Sara",
    surname: "Suvorova",
    location: {
        city: "Odesa",
    },
    positions: ["QA", "CTO", "Manager"],

    print: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Surname: ${this.surname}`);
        console.log(`Location city: ${this.location.city}`);
        console.log(`Positions: ${this.positions.join(", ")}`);
    }
};

user.print();