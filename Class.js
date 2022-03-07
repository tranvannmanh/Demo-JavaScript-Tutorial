/**
 * Use the keyword class to create a class.
 * Always add a method named constructor():
 * 
 * class className{
 *      constructor(){
 *      ...initial properties here
 *      }
 * }
 */

class person {
    constructor(name, year, phone) {
        this.name = name;
        this.year = year;
        this.phone = phone;
    }

    age() {
        return (new Date).getFullYear() - this.year;
    }
    
    //setter and getter
    get getName() {
        return this.name;
    }

    get getPhone() {
        return this.phone;
    }
   
    /**
     * @param {any} name
     */
    set newName(name) {
        this.name = name;
    }
}
const manh = new person("manh", 2001, '0336029751');
console.log(manh.name + '-' + manh.age());

/**
 * Inheritance
 * to inheritant a class, use 'extends' keyword
 */
class bill extends person {
    constructor(name, year, phone, totalMoney) {
        super(name, year, phone);
        this.totalMoney = totalMoney;
    }
    
    outBill() {
        return this.name + '/' + this.age() + '/' + this.phone + '/' + this.totalMoney;
    }
}

const newBill = new bill('manh', 2001, '0336029751', 500000);
newBill.newName = 'Hoang';
console.log(newBill.outBill());
// console.log(newBill.name);