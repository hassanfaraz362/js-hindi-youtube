class user{
    constructor(email, password){
    this.email = email
    this.password = password
}

get password(){
    return this._email.toUpperCase()
}

set email(val){
    this._email = val
}

get password(){
    return `${this._password.toUpperCase()}hitesh`
}

set password(value){
    this._password= value
}
}

const u= new user('ali@','abc')
u.password='ytr'
console.log(u.password);

