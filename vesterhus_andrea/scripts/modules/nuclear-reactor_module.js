const nuclearReactorModule = (function(){

    //JSON ARRAY MED LOGIN ELEMENTER
    const loginJSON = { user: [
        {"user": "admin", "password": "admin123"}
    ]};

    //Sjekker om brukernavn og passord stemmer med lagret bruker i loginJSON
    function checkLogin(username, password) {
        let rightUn = loginJSON.user[0].user;
        let rightPw = loginJSON.user[0].password;
        if(username == rightUn && password == rightPw) {
            return true;
        } else {
            return false;
        }
    }

    //JSON ARRAY OVER REAKTORER - VED Å PRINTE EN FOREACH AV EN LISTE KAN MAN UNNGÅ Å DOBLE MYE KODE DA DE SKAL HA SAMME ELEMENTER
    const reactorListJSON = { reactors: [
        {"id": 1, "name": "Nuclear Reactor 1"}, {"id": 2, "name": "Nuclear Reactor 2"}
    ]};

    //FUNCTION - RETURNERER REACTORS
    function getReactors() {
        return reactorListJSON.reactors;
    }

    //RETURNERER NUMMER SOM BRUKES SOM GRADER
    function getValueNumber() {
        let num = Math.floor(Math.random() * 100) + 250;
        return num;
        console.log(num);
    }

    //RETURNERER WIDTH SOM ANTALL PROSENT GRADENE REAKTOREN LIGGER PÅ AV EN MAX-TEMP PÅ 500
    function getWidth(number) {
        let width = (100 / 500) * number;
        return width;
    }
    
    return {
        checkLogin, getReactors, getValueNumber, getWidth
    }

})();