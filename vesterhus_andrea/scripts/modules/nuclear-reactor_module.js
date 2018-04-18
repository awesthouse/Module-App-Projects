const nuclearReactorModule = (function(){

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

    const reactorListJSON = { reactors: [
        {"id": 1, "name": "Nuclear Reactor 1"}, {"id": 2, "name": "Nuclear Reactor 2"}
    ]};

    function getReactors() {
        return reactorListJSON.reactors;
    }
    //Returnerer nummer mellom 50 og 60
    function getValueNumber() {
        let num = Math.floor(Math.random() * 100) + 250;
        return num;
        console.log(num);
    }
    function getWidth(number) {
        let width = (100 / 500) * number;
        return width;
    }
    return {
        checkLogin, getReactors, getValueNumber, getWidth
    }

})();