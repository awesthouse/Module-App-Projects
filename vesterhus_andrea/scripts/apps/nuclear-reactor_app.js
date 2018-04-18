const NuclearReactorApp = {
    
    //WRAPPERS
    htmlWrap: null,
    titleWrap: null,
    loginWrap: null,

    //LOGIN
    unInput: null,
    pwInput: null,
    unLabel: null,
    pwLabel: null,
    loginBtn: null,

    //STRINGS
    titleString: "Nuclear Reactor X Admin Center",
    unString: "Brukernavn: ",
    pwString: "Passord: ",
    loginBtnString: "Logg Inn",
    onString: "ON",
    offString: "OFF",
    btnSVG: '<svg viewBox="0 0 200 200"><path d="M95.7 10.5c3.4 0 6.8 0 10.2 0 0.4 0.3 1 0.2 1.5 0.3 5.5 0.4 11 1.2 16.3 2.7 21.7 5.9 39 18 51.7 36.5 8.1 11.7 13 24.7 14.9 38.8 0.3 2.3 0.6 4.7 0.9 7 0 3.4 0 6.8 0 10.2 -0.3 0.5-0.3 1.1-0.3 1.6 -0.4 5.5-1.2 10.9-2.7 16.1 -5.9 21.7-18 39-36.5 51.7 -11.7 8.1-24.7 13-38.8 14.9 -2.3 0.3-4.7 0.6-7 0.9 -3.4 0-6.8 0-10.2 0 -0.4-0.3-1-0.2-1.5-0.3 -5.5-0.4-11-1.2-16.3-2.7 -21.7-5.9-39-18-51.7-36.5 -8.1-11.7-13-24.7-14.9-38.8 -0.3-2.3-0.6-4.7-0.9-7 0-3.4 0-6.8 0-10.2 0.3-0.5 0.3-1.1 0.3-1.6 0.4-5.5 1.2-10.9 2.7-16.1 5.9-21.7 18-39 36.5-51.7 11.7-8.1 24.7-13 38.8-14.9C91.1 11.1 93.4 10.8 95.7 10.5zM180.6 100.8c0-44-35.8-79.8-79.8-79.8 -44 0-79.8 35.8-79.8 79.8 0 44 35.8 79.8 79.8 79.8C144.9 180.6 180.6 144.8 180.6 100.8z"/><path d="M84 59.8c0 2.9 0 5.7 0 8.6 0 0.9-0.3 1.3-1 1.8C70.1 78 63.3 89.3 64.3 104.4c1 15.1 8.8 26.1 22.8 31.8 14.7 6 28.4 3.1 39.9-7.9 16.1-15.4 14.3-41.7-3.4-55.2 -1.5-1.1-3-2.2-4.7-3 -0.7-0.3-0.9-0.8-0.9-1.5 0-5.9 0-11.7 0-17.6 0-0.9 0.2-1.1 1.1-0.8 15.5 5.7 26.7 16 33 31.3 5.8 13.9 5.5 28-0.2 41.9 -5.2 12.5-14 21.8-26.1 28 -9.4 4.8-19.3 6.7-29.7 5.7 -15.8-1.5-28.8-8.6-38.7-21.2 -5.3-6.8-8.8-14.4-10.5-22.8C41.8 88.2 54.6 63 77.6 52.3c1.7-0.8 3.5-1.5 5.3-2.2C83.8 49.8 84 50 84 51 84 53.9 84 56.9 84 59.8z"/><path d="M91.8 70.4c0-10.4 0-20.9 0-31.3 0-1.3 0.3-1.6 1.6-1.6 5.3 0.1 10.5 0.1 15.8 0 1.1 0 1.3 0.3 1.3 1.3 0 21 0 42 0 63.1 0 1.2-0.4 1.4-1.5 1.4 -5.2 0-10.4-0.1-15.7 0 -1.3 0-1.6-0.5-1.6-1.7C91.8 91.3 91.8 80.9 91.8 70.4z"/></svg>',

    init() {
        const NRA = NuclearReactorApp;

        const setHTMLObjects = function(){
             //WRAPPER
             NRA.htmlWrap = $('<div>');
             NRA.titleWrap = $('<h2>');
             NRA.loginWrap = $('<div>');

             //LOGIN
             NRA.unInput = $('<input>');
             NRA.pwInput = $('<input>');
             NRA.unLabel = $('<label>');
             NRA.pwLabel = $('<label>');
             NRA.loginBtn = $('<div>');
             NRA.pwInput.attr('type', 'password');

        }();

        const setAppGUI = function(){
            //WRAPPERS
            NRA.titleWrap.html(NRA.titleString);

            //LOGIN
            NRA.unLabel.html(NRA.unString);
            NRA.pwLabel.html(NRA.pwString);
            NRA.loginBtn.html(NRA.loginBtnString);
            NRA.loginWrap.append(NRA.unLabel);
            NRA.loginWrap.append(NRA.unInput);
            NRA.loginWrap.append(NRA.pwLabel);
            NRA.loginWrap.append(NRA.pwInput);
            NRA.loginWrap.append(NRA.loginBtn);

            //APPEND TIL HTMLWRAP
            NRA.htmlWrap.append(NRA.titleWrap);
            NRA.htmlWrap.append(NRA.loginWrap);
            NRA.loginWrap.hide();
            printReactors();
        }();

        const setEvents = function(){
            //LOGIN FUNCTION, sjekker om input stemmer med checkLogin function i nuclearReactorModule
            NRA.loginBtn.on("click", function(){
                let usernameVal = NRA.unInput.val();
                let passwordVal = NRA.pwInput.val();
                if(nuclearReactorModule.checkLogin(usernameVal, passwordVal)){
                    NRA.loginWrap.fadeOut();
                    NRA.reactorWrap.fadeIn();
                } else{
                    alert("Sorry, you have entered an invalid username or password");
                }
            });
        }();

        const setAppStyle = function(){
            $('body').css({width: "100%", height: "100%", backgroundColor:"#222", margin: "0px", padding: "0px", color: "#fff"});
            NRA.htmlWrap.css({fontFamily: "Helvetica", fontSize: "26px", padding: "50px"});
            NRA.titleWrap.css({width: "100%"});
            NRA.loginWrap.css({fontSize:"16px"});
            NRA.loginWrap.children().css({padding:"4px"});
            NRA.loginBtn.css({padding:"10px", backgroundColor:"#ffffff", color:"#222", width:"120px", textAlign:"center", marginTop:"20px", cursor: "pointer"});
        }();

        function printReactors() {
            $.each(nuclearReactorModule.getReactors(), function(i, reactors){
                //SET OBJECTS
                let reactorWrap = $('<div>');
                let reactorTitle = $('<h2>');
                let onButtonWrap = $('<div>');
                onButtonWrap.attr({state: "off"});
                let onButtonP = $('<p>');
                let reactorInfoWrap = $('<div>');
                let reactorLevels = $('<div>');
                let levelsInside = $('<div>');
                let setChangeLabel = $('<label>');
                let setChangeNumber = $('<input>');
                let increaseBtn = $('<div>');
                let decreaseBtn = $('<div>');
                let degreesTitle = $('<div>');

                //STRING
                reactorTitle.html(reactors.name);
                setChangeLabel.html("Temp Increase/Decrease: <br><br>");
                setChangeNumber.attr({type: "number", max: "100", value: "50", step: "2", min: "0"});
                increaseBtn.html("Increase Temprature");
                decreaseBtn.html("Decrease Temprature");

                //APPENDS
                onButtonP.html(NRA.offString);
                onButtonWrap.append(NRA.btnSVG);
                onButtonWrap.append(onButtonP);

                //CSS
                reactorWrap.css({width: "50%", float: "left", position: "relative"});
                onButtonWrap.css({width: "10%", textAlign: "center", marginTop: "30px", float: "left"});
                onButtonWrap.children().css({width: "70px", fill: "red", color: "red", margin: "auto", cursor: "pointer"});
                reactorInfoWrap.css({width: "80%", height: "300px", float: "left", position: "relative", paddingLeft: "5%", paddingRight: "5%", marginTop: "30px", fontSize: "18px"});
                reactorLevels.css({width: "100%", height: "100px", border: "1px solid #fff", marginBottom: "30px"});
                levelsInside.css({height: "100%", width: "0%", backgroundColor: "#222"});
                setChangeNumber.css({padding: "10px", fontSize: "18px", float: "left", position: "relative"});
                increaseBtn.css({float: "left", position: "relative", padding: "10px", backgroundColor: "#fff", color: "#222", marginLeft: "10px", marginTop: "2px", cursor: "pointer"});
                decreaseBtn.css({float: "left", position: "relative", padding: "10px", backgroundColor: "#fff", color: "#222", marginLeft: "20px", marginTop: "2px", cursor: "pointer"});
                degreesTitle.css({clear: "both", position: "relative", paddingTop: "20px", fontSize: "22px"});


                //APP GUI
                reactorLevels.append(levelsInside);
                reactorInfoWrap.append(reactorLevels);
                reactorInfoWrap.append(setChangeLabel);
                reactorInfoWrap.append(setChangeNumber);
                reactorInfoWrap.append(decreaseBtn);
                reactorInfoWrap.append(increaseBtn);
                reactorInfoWrap.append(degreesTitle);
                reactorWrap.append(reactorTitle);
                reactorWrap.append(onButtonWrap);
                reactorWrap.append(reactorInfoWrap);
                NRA.htmlWrap.append(reactorWrap);

                //EVENTS
                onButtonWrap.on("click", function(){
                    let btnState = $(this).attr("state");
                    if(btnState == "off") 
                    {
                        onButtonWrap.children().css({width: "70px", fill: "green", color: "green"});
                        onButtonP.html(NRA.onString);
                        onButtonWrap.attr({state: "on"});

                        //TEMPRATURE COUNT
                        let degreesNumber = nuclearReactorModule.getValueNumber();
                        degreesTitle.html(degreesNumber + "&deg;C");

                        //COLOR
                        let bgColor = setBackgroundColor(degreesNumber);
                        levelsInside.css({backgroundColor: bgColor});

                        //WIDTH
                        let widthOfDiv = nuclearReactorModule.getWidth(degreesNumber) + "%";
                        console.log(widthOfDiv);
                        levelsInside.animate({
                            width: widthOfDiv
                        }, 1300);

                    } else if (btnState == "on") {
                        onButtonWrap.children().css({width: "70px", fill: "red", color: "red"});
                        onButtonP.html(NRA.offString);
                        onButtonWrap.attr({state: "off"});
                        levelsInside.animate({
                            width: "0%"
                        }, 1300);
                    }
                }); //END OF FUNCTION
                increaseBtn.on("click", function() {
                    let numberValue = parseInt(setChangeNumber.val());
                    if(numberValue > 0 && numberValue <= 100) {
                        let oldNumber = parseInt(degreesTitle.html());
                        let newNumber = oldNumber += numberValue;
                        if(newNumber <= 500) {
                            let bgColor = setBackgroundColor(newNumber);
                            levelsInside.css({backgroundColor: bgColor});
                            degreesTitle.html(newNumber + "&deg;C");
                            let widthOfDiv = nuclearReactorModule.getWidth(newNumber) + "%";
                            levelsInside.animate({
                                width: widthOfDiv
                            }, 1300);
                        } else {
                            newNumber = 500;
                            let bgColor = setBackgroundColor(newNumber);
                            levelsInside.css({backgroundColor: bgColor});
                            degreesTitle.html(newNumber + "&deg;C");
                            let widthOfDiv = nuclearReactorModule.getWidth(newNumber) + "%";
                            levelsInside.animate({
                                width: widthOfDiv
                            }, 1300);
                        }
                        console.log(newNumber);
                    } else {
                        alert("Please choose a number between '0' and '100'");
                    }
                }); //END OF INCREASEBTN

                decreaseBtn.on("click", function() {
                    let numberValue = parseInt(setChangeNumber.val());
                    if(numberValue > 0 && numberValue <= 100) {
                        let oldNumber = parseInt(degreesTitle.html());
                        let newNumber = oldNumber -= numberValue;
                        if(newNumber >= 0) {
                            let bgColor = setBackgroundColor(newNumber);
                            levelsInside.css({backgroundColor: bgColor});
                            degreesTitle.html(newNumber + "&deg;C");
                            let widthOfDiv = nuclearReactorModule.getWidth(newNumber) + "%";
                            levelsInside.animate({
                                width: widthOfDiv
                            }, 1300);
                        } else {
                            newNumber = 0;
                            let bgColor = setBackgroundColor(newNumber);
                            levelsInside.css({backgroundColor: bgColor});
                            degreesTitle.html(newNumber + "&deg;C");
                            let widthOfDiv = nuclearReactorModule.getWidth(newNumber) + "%";
                            levelsInside.animate({
                                width: widthOfDiv
                            }, 1300);
                        }
                        console.log(newNumber);
                    } else {
                        alert("Please choose a number between '0' and '100'");
                    }
                }); //END OF INCREASEBTN
            });
        } //END FUNCTION

        function setBackgroundColor(degreesNumber) {
            if(degreesNumber > 0 && degreesNumber <= 100) {
                return "red";
            } else if (degreesNumber > 100 && degreesNumber <= 250) {
                return "orange";
            } else if (degreesNumber > 250 && degreesNumber <= 350) {
                return "green";
            } else if (degreesNumber > 350 && degreesNumber <= 420) {
                return "orange";
            } else if (degreesNumber > 420) {
                return "red";
            } 
        }

        return NRA.htmlWrap;
    }
}