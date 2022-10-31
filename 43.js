
let magicians =["Zakota" , "Samri" , "Saafri"];
//console.log(magicians)

let show_magicians =[];


show_magicians.push(...magicians)

console.log(show_magicians)


function make_great(magicians){
     
    for(let i=0; i<magicians.length ; i++){
        console.log(magicians[i] + " the Great")
    }
}
make_great(magicians);



