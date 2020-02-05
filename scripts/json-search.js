//  js5 homework file
function search(){
    let obj = [
            {"Name":"Draven Kellan", "Sex":"m", "Born":"1910", "Died":"2010", "Father_First":"Rob","Father_Last":"Tempest", "Mother_First":"Bernie", "Mother_Last":"Elliot"},
            {"Name":"Jane Doe", "Sex":"f", "Born":"1882", "Died":"1982", "Father_First":"Tim","Father_Last":"James", "Mother_First":"Teresa", "Mother_Last":"Smith"},
            {"Name":"Tanya Tay", "Sex":"f", "Born":"1879", "Died":"1945", "Father_First":"John","Father_Last":"Larson", "Mother_First":"Amie", "Mother_Last":"Gordon"},
            {"Name":"Jane Bob Rameriz", "Sex":"f", "Born":"1875", "Died":"1950", "Father_First":"Frank","Father_Last":"Albert", "Mother_First":"Sarah", "Mother_Last":"Bogart"},
            {"Name":"Hillary Young", "Sex":"f", "Born":"1885", "Died":"1932", "Father_First":"Alex","Father_Last":"Keiv", "Mother_First":"Alisha", "Mother_Last":"Wilms"},
            {"Name":"Bob James", "Sex":"m", "Born":"1908", "Died":"1999", "Father_First":"Tom","Father_Last":"Jones", "Mother_First":"Heather", "Mother_Last":"Frank"},
        ];

    let name = document.getElementById("search").value;
    name = name.toLowerCase().trim();

    let response = "";
    let found = false;

    if(name !== ""){
        for (let i = 0; i < obj.length; i++){
            if (((obj[i].Name).toLowerCase()).includes(name)){
                found = true;
                response += "<br><span>Name: " + obj[i].Name + "<br>" +
                    "Sex: " + obj[i].Sex + "<br>" +
                    "Born: " + obj[i].Born + "<br>" +
                    "Died: " + obj[i].Died + "<br>" +
                    "Father: " + obj[i].Father_First + " " + obj[i].Father_Last + "<br>" +
                    "Mother: " + obj[i].Mother_First + " " + obj[i].Mother_Last + "</span><hr>";
            }
        }
    }
    if(found === false){
        response = "No person found.";
    }
    document.getElementById("result").innerHTML = response;
}





