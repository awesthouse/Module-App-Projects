const getUsersModule = (function(){ 

    //JSON ARRAY MED USERS
    const usersJSON = { users: [
        {"id": 1, "firstname": "Randi", "lastname": "Olsen", "age": 23, "profileimg": "randi.jpg", "sex": "kvinne", "pref": "menn", "description": "23 år fra Sandefjord."}, 
        {"id": 2, "firstname": "Tone", "lastname": "Kolby", "age": 24, "profileimg": "tone.jpg", "sex": "kvinne", "pref": "kvinner", "description": "24 år fra Oslo."}, 
        {"id": 3, "firstname": "Peter", "lastname": "Solaun", "age": 26, "profileimg": "peter.jpg", "sex": "mann", "pref": "kvinner", "description": "26 år fra Oslo."}, 
        {"id": 4, "firstname": "Elise", "lastname": "Pettersen", "age": 24, "profileimg": "elise.jpg", "sex": "kvinne", "pref": "menn", "description": "24 år fra Larvik."}, 
        {"id": 5, "firstname": "Arne", "lastname": "Dahl", "age": 25, "profileimg": "arne.jpg", "sex": "mann", "pref": "kvinner", "description": "25 år fra Drammen."},
        {"id": 6, "firstname": "Ina", "lastname": "Rønning", "age": 22, "profileimg": "ina.jpg", "sex": "kvinne", "pref": "menn", "description": "22 år fra Drammen."}, 
        {"id": 7, "firstname": "Filip", "lastname": "Steen", "age": 26, "profileimg": "filip.jpg", "sex": "mann", "pref": "begge", "description": "26 år fra Bodø."},
        {"id": 8, "firstname": "Mark", "lastname": "Larssen", "age": 26, "profileimg": "mark.jpg", "sex": "mann", "pref": "kvinner", "description": "Oslo. Student på BI."} 
    ]};

    //TOMME ARRAYS
    const maleUsersJSON = [];
    const femaleUsersJSON = [];
    const singleUserJSON = [];

    //FUNCTION - RETURNERER ALLE USERS
    function getAllUsers(){
        return usersJSON.users;
    }

    //FUNCTION - RETURNERER MALE USERS
    function getMaleUsers(){
        maleUsersJSON.length = 0;
        for(i = 0; i < usersJSON.users.length; i++) {
            if(usersJSON.users[i].sex == "mann") {
                maleUsersJSON.push(usersJSON.users[i]);
                console.log(maleUsersJSON);
            }
        }
        return maleUsersJSON;
    }

    //FUNCTION - RETURNERER FEMALE USERS
    function getFemaleUsers(){
        femaleUsersJSON.length = 0;
        for(i = 0; i < usersJSON.users.length; i++) {
            if(usersJSON.users[i].sex == "kvinne") {
                femaleUsersJSON.push(usersJSON.users[i]);
            }
        }
        return femaleUsersJSON;
    }

    //FUNCTION RETURNERER UTVALGT USER
    function getUser(userid){
        singleUserJSON.length = 0;
        for(i = 0; i < usersJSON.users.length; i++) {
            if(usersJSON.users[i].id == userid) {
                singleUserJSON.push(usersJSON.users[i]);
            }
        }
        return singleUserJSON;
    }

    return {
        getAllUsers, getMaleUsers, getFemaleUsers, getUser
    }

})();

