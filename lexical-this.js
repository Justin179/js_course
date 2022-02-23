// 內層this 取不到值的做法
const person = {
    firstName: "Jamila",
    age: 10,
    cars: ["Tesla", "Ferrari"],
    toString: function(){
        console.log( `Name: ${this.firstName} Age: ${this.age}` )
        // let ok = 'ok';
        let that = this;
        this.cars.forEach(function(car){
            console.log(`Name: ${that.firstName} drives ${car}`)
        })
    },
    deleteMe: true
}

person.toString();