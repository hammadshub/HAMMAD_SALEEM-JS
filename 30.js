 let users = ["Woke","admin","Eric","Stephn","Kane","Lussy"];

//let greeting = `Hello ${users[0]} thank you for logging in again.`;

//console.log(greeting);

for(let i=0 ;i<users.length ; i++){
    //console.log(`Hello ${users[i]} thank you for logging in again.`);
   if(users[i]=="admin"){
    console.log("Hello admin, would you like to see a status report?")
   } else{
    console.log(`Hello ${users[i]}, thank you for logging in again`)
   }
}
