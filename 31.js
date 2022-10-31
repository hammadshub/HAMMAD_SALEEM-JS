

let users = ["Woke","admin","Eric","Stephn","Kane","Lussy"];


for(let i=0 ;i<users.length ; i++){
    //console.log(`Hello ${users[i]} thank you for logging in again.`);
   if(users[i]=="admin"){
    console.log("Hello admin, would you like to see a status report?")
   } else{
    console.log(`Hello ${users[i]}, thank you for logging in again`)
   }
}


  console.log(users)


  let emptylist = users.splice(0,users[5]);

  console.log(emptylist)
  
  if(emptylist==0){
    console.log("We need to find some users!")
  }