const promiseone = new Promise(function (resolve, reject) {
    // DB calls , cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
      }, 1000)  
})

promiseone.then(function(){
    console.log('promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 reolved');
    
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'chai', email:'chai@example.com'})
        
    }, 1000)
})

promisethree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true
        if (!error) {
            resolve({username:'ali',password:'123'})
        }else{
            reject('ERROR :something went wrong')
        }
        
    }, 1000)
})

promiseFour.
then((user)=> {
    console.log(user);
    return user.username
    
}).
then((username) =>{
    console.log(username);
    
}).
catch(function(error){
    console.log(error);
    
}).finally(()=> console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true
        if (!error) {
            resolve({username:'javascript',password:'123'})
        }else{
            reject('ERROR :js went wrong')
        }
        
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);      
    }
}
consumePromiseFive()

// async function getalluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('e : error');
        
//     }
// }
// getalluser()


 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json
 })
 .then((data)=>{
    console.log(data);
    
 })
 .catch((error)=>console.log(error))