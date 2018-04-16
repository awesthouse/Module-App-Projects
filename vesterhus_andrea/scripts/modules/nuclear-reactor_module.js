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

    //Returnerer nummer mellom 50 og 60
    function getValueNumber() {
        let num = Math.floor(Math.random() * 21) + 50;
        return num;
    }
    return {
        checkLogin, getValueNumber
    }

})();