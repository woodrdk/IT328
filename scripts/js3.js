

function js3(){
    document.getElementById("results").innerHTML ="";
    let num= document.getElementById("num").value;
    // alert(num);
    if(isNaN(num)){
        document.getElementById("reg").innerHTML = "Error " + num + " is not a number";
    }
    else{
        num = Math.trunc(num);
        document.getElementById("reg").innerHTML = "Non Recursive method";
        num++;
        let list = "<ul>";

        for (let i = 1; i < num; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("Hee Haw!");
                list += "<li>" + "Hee Haw!" + "</li>";
            }
            else if(i % 3 === 0){
                console.log("Hee!");
                list += "<li>" + "Hee!" + "</li>";
            }
            else if(i % 5 === 0){
                console.log("Haw!");
                list += "<li>" + "Haw!" + "</li>";
            }
            else{
                console.log(i);
                list += "<li>" + i + "</li>";
            }
        }
        list += "</ul>";
        document.getElementById("results").innerHTML += list;
    }

        /*
    for(let i = 1; i < num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("Hee Haw!");
        }
        else if(i % 3 === 0){
            console.log("Hee!");
        }
        else if(i % 5 === 0){
            console.log("Haw!");
        }
        else{
            console.log(i);
        }
    }*/
}

function js3_rec(){
    document.getElementById("results").innerHTML ="";
    document.getElementById("reg").innerHTML = "Recursive method";
    let num= document.getElementById("num").value;
    if(isNaN(num)){
        document.getElementById("reg").innerHTML = "Error " + num + " is not a number";
    }
    else {
        document.getElementById("reg").innerHTML = "Recursive method";
        let number = 1;
        recYeeHaw(number, num);
    }
}

function recYeeHaw(number, num){
    let text = '';

    if(!(number % 3)){
        text  += "<br>" + 'Hee!';// += 'Hee!';
    }
    if(!(number % 5)){
        text += "<br>" + 'Haw!';//  += 'Haw!';
    }
    else{
        text += "<br>" + number;// += number;
    }
    console.log(text);

    document.getElementById("results").innerHTML += text;
    if(number < num){
        recYeeHaw(++number, num)
    }
}