

function js3(){
    let num= document.getElementById("num").value;
    // alert(num);

    for(let i = 1; i < num; i++){
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
}

function js3_rec(){
    let num= document.getElementById("num").value;
    let number = 1
    recYeeHaw(number, num);
}

function recYeeHaw(number, num){
    let text = '';

    if(!(number % 5)){
        text += 'Haw!';
    }
    if(!(number % 3)){
        text += 'Hee!';
    }
    else{
        text += number;
    }
    console.log(text);

    if(number < num){
        recYeeHaw(++number, num)
    }


}