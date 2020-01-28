
// Array Object Javascript for JS4 Homework in IT328
// assignment supplied array
let array = [-1, 5, "cat", false, 10.2, true, "dog"];
// prints results of conversion to html
let arr = "Array-> ";
document.getElementById("result").innerHTML = arr + array.toString() + "<br>" + arrToObject(array);

// converts the array to an object
function arrToObject(array) {
    let obj = {};
    for(let i = 0; i < array.length; i++) {
        let temp = (typeof array[i]).toString() + "s";

        if(obj.hasOwnProperty(temp)) {
            obj[temp].push(array[i]);
        }
        else {
            obj[temp] = [];
            obj[temp].push(array[i]);
        }
    }
    return "var result = " + JSON.stringify(obj, null, 4);
}

// takes the text a user input into the text box and converts it into an array
// of numbers boolean and strings
function js4(){
    let value = document.getElementById("array").value;
    let array2 = value.split(' ');
    for(let i = 0; i < array2.length; i++){
        if(array2[i] === "true"){
            array2[i] = true;
        }
        else if(array2[i] === "false"){
            array2[i] = false;
        }
        else if(!isNaN(array2[i])){
            array2[i] = parseInt(array2[i]);
        }
    }
    document.getElementById("result2").innerHTML = "Array-> " + array2.toString() + "<br>" + arrToObject(array2); //array2.toString();
}
