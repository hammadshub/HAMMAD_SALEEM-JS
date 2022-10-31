/* Checking if the new users are available. */
let current_users = ["Woke","admin","Eric","Stephn","Kane","John"];


let new_users =["Jack","Sparrow","Eric","Stephn","Nick","john"];


for(let i=0; i<new_users.length; i++){

       if(new_users[i].toLowerCase() == current_users[i].toLowerCase()){
        console.log("You need to enter a new username")
       }else{
        console.log( `${new_users[i]} is available.`)
       }
}