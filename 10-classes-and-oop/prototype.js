// let myname = 'hitesh     '
// let mychannel = 'chai  '

// console.log(myname.truelength);

let myheros= ['thor', 'spiderman']

let heroPower= {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }

}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyhistesh = function(){
    console.log(`hitesh says hello`);
    
}
// heroPower.hitesh()
myheros.hitesh()
myheros.heyhistesh()
// heroPower.heyhistesh()

// INHERTANCE
const User = {
    name : 'chai',
    Email : 'chai@gmail.com'

}

const teacher= {
    makevideo: true
}

const teachingSupport ={
    isAvalible: false
}

const  TASupport = {
    makeAssignment = 'jsAssignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

// modren syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherusername= 'chaiaurcode   '

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
}
anotherusername.truelength()
'hitesh'.truelength()
'icetea'.truelength()
