// JS2 Assignment
for(let i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Hee Haw!");
    }
    else if(i % 3 == 0){
        console.log("Hee!");
    }
    else if(i % 5 == 0){
        console.log("Haw!");
    }
    else{
        console.log(i);
    }
}