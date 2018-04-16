const NuclearReactorApp = {
    
    //Wrappers
    htmlWrap: null,
    loginWrap: null,
    reactorWrap: null,
    reactor2Wrap: null,
    onBtnWrap: null,
    onBtn2Wrap: null,
    reactorItemsWrap: null,
    reactor2ItemsWrap: null,

    //Andre Elementer
    unInput: null,
    pwInput: null,
    unLabel: null,
    pwLabel: null,
    loginBtn: null,
    onBtnP: null,
    onBtn2P: null,
    cpP: null,
    rcP: null,
    sgP: null,
    cp2P: null,
    rc2P: null,
    sg2P: null,
    reactor1Title: null,
    reactor2Title: null,

    r1slider: null,
    r2slider: null,
    r1checkbox: null,
    r2checkbox: null,
    r1cbLabel: null,
    r2cbLabel: null,

    //Strings
    titleString: "Nuclear Reactor X",
    unString: "Brukernavn: ",
    pwString: "Passord: ",
    loginBtnString: "Logg Inn",
    onString: "ON",
    offString: "OFF",
    cpString: "Coolant Pumps:",
    rcString: "Reactor Core:",
    sgString: "Steam Generator:",
    r1TitleString: "Reactor 1",
    r2TitleString: "Reactor 2",
    cbString: "Lower rods",
    btnSVG: '<svg viewBox="0 0 200 200"><path d="M95.7 10.5c3.4 0 6.8 0 10.2 0 0.4 0.3 1 0.2 1.5 0.3 5.5 0.4 11 1.2 16.3 2.7 21.7 5.9 39 18 51.7 36.5 8.1 11.7 13 24.7 14.9 38.8 0.3 2.3 0.6 4.7 0.9 7 0 3.4 0 6.8 0 10.2 -0.3 0.5-0.3 1.1-0.3 1.6 -0.4 5.5-1.2 10.9-2.7 16.1 -5.9 21.7-18 39-36.5 51.7 -11.7 8.1-24.7 13-38.8 14.9 -2.3 0.3-4.7 0.6-7 0.9 -3.4 0-6.8 0-10.2 0 -0.4-0.3-1-0.2-1.5-0.3 -5.5-0.4-11-1.2-16.3-2.7 -21.7-5.9-39-18-51.7-36.5 -8.1-11.7-13-24.7-14.9-38.8 -0.3-2.3-0.6-4.7-0.9-7 0-3.4 0-6.8 0-10.2 0.3-0.5 0.3-1.1 0.3-1.6 0.4-5.5 1.2-10.9 2.7-16.1 5.9-21.7 18-39 36.5-51.7 11.7-8.1 24.7-13 38.8-14.9C91.1 11.1 93.4 10.8 95.7 10.5zM180.6 100.8c0-44-35.8-79.8-79.8-79.8 -44 0-79.8 35.8-79.8 79.8 0 44 35.8 79.8 79.8 79.8C144.9 180.6 180.6 144.8 180.6 100.8z"/><path d="M84 59.8c0 2.9 0 5.7 0 8.6 0 0.9-0.3 1.3-1 1.8C70.1 78 63.3 89.3 64.3 104.4c1 15.1 8.8 26.1 22.8 31.8 14.7 6 28.4 3.1 39.9-7.9 16.1-15.4 14.3-41.7-3.4-55.2 -1.5-1.1-3-2.2-4.7-3 -0.7-0.3-0.9-0.8-0.9-1.5 0-5.9 0-11.7 0-17.6 0-0.9 0.2-1.1 1.1-0.8 15.5 5.7 26.7 16 33 31.3 5.8 13.9 5.5 28-0.2 41.9 -5.2 12.5-14 21.8-26.1 28 -9.4 4.8-19.3 6.7-29.7 5.7 -15.8-1.5-28.8-8.6-38.7-21.2 -5.3-6.8-8.8-14.4-10.5-22.8C41.8 88.2 54.6 63 77.6 52.3c1.7-0.8 3.5-1.5 5.3-2.2C83.8 49.8 84 50 84 51 84 53.9 84 56.9 84 59.8z"/><path d="M91.8 70.4c0-10.4 0-20.9 0-31.3 0-1.3 0.3-1.6 1.6-1.6 5.3 0.1 10.5 0.1 15.8 0 1.1 0 1.3 0.3 1.3 1.3 0 21 0 42 0 63.1 0 1.2-0.4 1.4-1.5 1.4 -5.2 0-10.4-0.1-15.7 0 -1.3 0-1.6-0.5-1.6-1.7C91.8 91.3 91.8 80.9 91.8 70.4z"/></svg>',

    init() {
        const NRA = NuclearReactorApp;

        const setHTMLObjects = function(){
            //WRAPPERS
            NRA.htmlWrap = $('<div>');
            NRA.titleWrap = $('<h2>');
            NRA.loginWrap = $('<div>');
            NRA.reactorWrap = $('<div>');
            NRA.reactor2Wrap = $('<div>');
            NRA.onBtnWrap = $('<div>');
            NRA.onBtn2Wrap = $('<div>');
            NRA.reactorItemsWrap = $('<div>');
            NRA.reactor2ItemsWrap = $('<div>');
            NRA.reactor1Title = $('<h3>');
            NRA.reactor2Title = $('<h3>');

            //Andre elementer
            NRA.unInput = $('<input>');
            NRA.pwInput = $('<input>');
            NRA.unLabel = $('<label>');
            NRA.pwLabel = $('<label>');
            NRA.loginBtn = $('<div>');
            NRA.r1slider = $('<input>');
            NRA.r2slider = $('<input>');
            NRA.r1checkbox = $('<input>');
            NRA.r2checkbox = $('<input>');
            NRA.r1cbLabel = $('<label>');
            NRA.r2cbLabel = $('<label>');

            //<p> elementer
            NRA.onBtnP = $('<p>');
            NRA.onBtn2P = $('<div>');
            NRA.cpP = $('<p>');
            NRA.rcP = $('<p>');
            NRA.sgP = $('<p>');
            NRA.cp2P = $('<p>');
            NRA.rc2P = $('<p>');
            NRA.sg2P = $('<p>');

            NRA.pwInput.attr('type', 'password');
            NRA.r1checkbox.attr('type', 'checkbox');
            NRA.r2checkbox.attr('type', 'checkbox');

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
                    alert("Beklager, du har tastet feil passord eller brukernavn.");
                }
            });

            //Function for av/på knapp - Reactor 1
            NRA.onBtnWrap.on("click", function(){
                let btnState =  NRA.onBtnWrap.attr("state");
                if(btnState == "off") {
                    NRA.onBtnWrap.children().css({width: "70px", fill: "green", color: "green"});
                    NRA.onBtnP.html(NRA.onString);
                    NRA.onBtnWrap.attr({state: "on"});
                    let valueNumber = nuclearReactorModule.getValueNumber();
                    NRA.r1slider.animate({
                        value: valueNumber
                    }, 1000);
                } else if(btnState == "on") {
                    NRA.onBtnWrap.children().css({width: "70px", fill: "red", color: "red"});
                    NRA.onBtnP.html(NRA.offString);
                    NRA.onBtnWrap.attr({state: "off"});
                    NRA.r1slider.animate({
                        value: 0
                    }, 2000);
                }
            });
            //Function for av/på knapp - Reactor 2
            NRA.onBtn2Wrap.on("click", function(){
                let btnState =  NRA.onBtn2Wrap.attr("state");
                if(btnState == "off") {
                    NRA.onBtn2Wrap.children().css({width: "70px", fill: "green", color: "green"});
                    NRA.onBtn2P.html(NRA.onString);
                    NRA.onBtn2Wrap.attr({state: "on"});
                    let valueNumber = nuclearReactorModule.getValueNumber();
                    console.log(valueNumber);
                    NRA.r2slider.animate({
                        value: valueNumber
                    }, 1000);
                } else if(btnState == "on") {
                    NRA.onBtn2Wrap.children().css({width: "70px", fill: "red", color: "red"});
                    NRA.onBtn2P.html(NRA.offString);
                    NRA.onBtn2Wrap.attr({state: "off"});
                    NRA.r2slider.animate({
                        value: 0
                    }, 2000);
                }
            });
        }();

        const setAppGUI = function(){

            //Sette STRINGS
            NRA.titleWrap.html(NRA.titleString);
            NRA.unLabel.html(NRA.unString);
            NRA.pwLabel.html(NRA.pwString);
            NRA.loginBtn.html(NRA.loginBtnString);

            NRA.onBtnP.html(NRA.offString);
            NRA.onBtn2P.html(NRA.offString);
            NRA.cpP.html(NRA.cpString);
            NRA.rcP.html(NRA.rcString);
            NRA.sgP.html(NRA.sgString);
            NRA.cp2P.html(NRA.cpString);
            NRA.rc2P.html(NRA.rcString);
            NRA.sg2P.html(NRA.sgString);
            NRA.reactor1Title.html(NRA.r1TitleString);
            NRA.reactor2Title.html(NRA.r2TitleString);
            NRA.r1cbLabel.html(NRA.cbString);
            NRA.r2cbLabel.html(NRA.cbString);

            //INPUTS
            NRA.r1slider.attr({type: "range", min: "1", max: "100", value: "0"}); 
            NRA.r2slider.attr({type: "range", min: "1", max: "100", value: "0"}); 

            //SVG IKON - av/på knapp
            NRA.onBtnWrap.html(NRA.btnSVG);
            NRA.onBtn2Wrap.html(NRA.btnSVG);

            //APPEND og HTML
            NRA.loginWrap.append(NRA.unLabel);
            NRA.loginWrap.append(NRA.unInput);
            NRA.loginWrap.append(NRA.pwLabel);
            NRA.loginWrap.append(NRA.pwInput);
            NRA.loginWrap.append(NRA.loginBtn);

            NRA.onBtnWrap.append(NRA.onBtnP);
            NRA.onBtnWrap.attr({state: "off"});
            NRA.reactorWrap.append(NRA.reactor1Title);
            NRA.reactorWrap.append(NRA.onBtnWrap);
            NRA.reactorItemsWrap.append(NRA.cpP);
            NRA.reactorItemsWrap.append(NRA.rcP);
            NRA.reactorItemsWrap.append(NRA.r1slider);
            NRA.reactorItemsWrap.append(NRA.sgP);
            NRA.reactorItemsWrap.append(NRA.r1checkbox);
            NRA.reactorItemsWrap.append(NRA.r1cbLabel);
            NRA.reactorWrap.append(NRA.reactorItemsWrap)

            NRA.onBtn2Wrap.append(NRA.onBtn2P);
            NRA.onBtn2Wrap.attr({state: "off"});
            NRA.reactor2Wrap.append(NRA.reactor2Title);
            NRA.reactor2Wrap.append(NRA.onBtn2Wrap);
            NRA.reactor2ItemsWrap.append(NRA.cp2P);
            NRA.reactor2ItemsWrap.append(NRA.rc2P);
            NRA.reactor2ItemsWrap.append(NRA.r2slider);
            NRA.reactor2ItemsWrap.append(NRA.sg2P);
            NRA.reactor2ItemsWrap.append(NRA.r2checkbox);
            NRA.reactor2ItemsWrap.append(NRA.r2cbLabel);
            NRA.reactor2Wrap.append(NRA.reactor2ItemsWrap);

            //APPEND TIL HTMLWRAP
            NRA.htmlWrap.append(NRA.titleWrap);
            NRA.htmlWrap.append(NRA.loginWrap);
            NRA.htmlWrap.append(NRA.reactorWrap);
            NRA.htmlWrap.append(NRA.reactor2Wrap);
        }();

        const setAppStyle = function(){
            $('body').css({width: "100%", height: "100%", backgroundColor:"#222", margin: "0px", padding: "0px", color: "#fff"});
            NRA.htmlWrap.css({fontFamily: "Helvetica", fontSize: "26px", padding: "50px"});
            NRA.titleWrap.css({width: "100%"});
            NRA.onBtnWrap.css({width: "100px", textAlign: "center", marginTop: "30px", float: "left"});
            NRA.onBtnWrap.children().css({width: "70px", fill: "red", color: "red", margin: "auto", cursor: "pointer"});
            NRA.onBtn2Wrap.css({width: "100px", textAlign: "center", marginTop: "30px", float: "left"});
            NRA.onBtn2Wrap.children().css({width: "70px", fill: "red", color: "red", margin: "auto", cursor: "pointer"});
            NRA.loginWrap.css({fontSize:"16px"});
            NRA.loginWrap.children().css({padding:"4px"});
            NRA.loginBtn.css({padding:"10px", backgroundColor:"#ffffff", color:"#222", width:"120px", textAlign:"center", marginTop:"20px", cursor: "pointer"});

            NRA.r1slider.css({"-webkit-appearance": "none", appearance: "none", width: "300px", height: "10px", outline: "none", "background": "-moz-linear-gradient(left, #ffff32 0%, #30ff30 50%, #ff0000 100%)", "background": "-webkit-linear-gradient(left, #ffff32 0%,#30ff30 50%,#ff0000 100%)", cursor: "pointer"});
            NRA.r2slider.css({"-webkit-appearance": "none", appearance: "none", width: "300px", height: "10px", outline: "none", "background": "-moz-linear-gradient(left, #ffff32 0%, #30ff30 50%, #ff0000 100%)", "background": "-webkit-linear-gradient(left, #ffff32 0%,#30ff30 50%,#ff0000 100%)", cursor: "pointer"});
            NRA.r1checkbox.css({"-webkit-appearance": "none", appearance: "none", width: "30px", height: "30px", backgroundColor: "#ffffff"});
            NRA.r2checkbox.css({"-webkit-appearance": "none", appearance: "none", width: "30px", height: "30px", backgroundColor: "#ffffff"});

            NRA.reactorWrap.css({width: "50%", float: "left", position: "relative"});
            NRA.reactor2Wrap.css({width: "50%", float: "left", position: "relative"});

            NRA.reactorItemsWrap.css({float: "left", position: "relative", paddingLeft: "100px"});
            NRA.reactor2ItemsWrap.css({float: "left", position: "relative", paddingLeft: "100px"});
            NRA.loginWrap.hide();
            //NRA.reactorWrap.hide();

        }();

        return NRA.htmlWrap;
    }
}