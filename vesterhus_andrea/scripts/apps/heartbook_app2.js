const HeartbookApp = {

    //WRAPPERS
    htmlWrap: null, 
    usersWrap: null,
    userWrap: null,
    singleUserWrap: null,
    singleUserInfoWrap: null,

    firstNameP: null,
    ageSpan: null,
    userId: null,
    backButton: null,

    //SELECT BOKS
    selectBox: null,

    //STRINGS
    titleString: "HeartBook",
    backString: "&#x2190; Tilbake",

    //ANDRE VARIABLER
    filepath: "images/profiles/",

    init() {
        const HA = HeartbookApp;

        const setHTMLObjects = function(){
            HA.htmlWrap = $('<div>');
            HA.siteTitle = $('<h2>');
            HA.usersWrap = $('<div>');
            HA.selectBox = $('<select>');  
            HA.backButton = $('<div>');
            HA.singleUserInfoWrap = $('<div>');

            //PrintSingleUser ITEMS
            HA.singleUserName = $('<p>');
            HA.singleUserImg = $('<img>')
            HA.singleUserWrap = $('<div>');

            

            //SELECT for alle profiler, menn eller kvinner
            options = [
                {val : 1, text: 'Vis alle profiler'},
                {val : 2, text: 'Vis menn'},
                {val : 3, text: 'Vis kvinner'}
            ];
            $(options).each(function() {
                HA.selectBox.append($('<option>').attr('value', this.val).text(this.text));
            })
        }();

        const setAppGUI = function() {
            //STRINGS
            HA.siteTitle.html(HA.titleString);
            HA.backButton.html(HA.backString);

            HA.backButton.hide();
            //APPEND TIL WRAPPERS
            HA.htmlWrap.append(HA.siteTitle);
            HA.htmlWrap.append(HA.backButton);
            HA.htmlWrap.append(HA.selectBox);
            createUsers();
            HA.htmlWrap.append(HA.usersWrap);
        }();

        const setEvents = function() {
            //FUNCTION FOR Å 
            HA.selectBox.on("change", function(){
                let selectValue = $(this).val();
                if(selectValue == 1) {
                    console.log("Print all users");
                    HA.usersWrap.html("");
                    createUsers();
                } else if (selectValue == 2) {
                    HA.usersWrap.html("");
                    createMaleUsers();
                } else if (selectValue == 3) {
                    HA.usersWrap.html("");
                    createFemaleUsers();
                }
                HA.backButton.hide();
            });

            //FUNCTION FOR TILBAKEKNAPP - FUNKSJONEN SJEKKER HVILKEN KATEGORI BRUKEREN VAR PÅ FØR DE GIKK INN PÅ EN PROFIL OG SENDER DE TILBAKE DIT
            HA.backButton.on("click", function(){
                let selectValue = HA.selectBox.val();
                if(selectValue == 1) {
                    console.log("Print all users");
                    HA.usersWrap.html("");
                    createUsers();
                } else if (selectValue == 2) {
                    HA.usersWrap.html("");
                    createMaleUsers();
                } else if (selectValue == 3) {
                    HA.usersWrap.html("");
                    createFemaleUsers();
                }
                HA.backButton.hide();
            });
        }();

        const setAppStyle = function() {
            HA.htmlWrap.css({width: "1200px", margin: "auto", height: "200px", fontFamily: "Helvetica" });
            HA.siteTitle.css({fontSize: "32px"});
            HA.backButton.css({float: "left", height: "40px", width: "200px", backgroundColor: "#f8f8f8", border: "1px solid rgba(0, 0, 0, 0.3)", "line-height": "40px", "vertical-align": "middle", textAlign: "center", borderRadius: "5px", marginLeft: "30px", cursor: "pointer"});
            HA.selectBox.css({width: "250px", height: "40px", fontSize: "16px", float: "right", marginRight: "30px"});
            HA.usersWrap.css({clear:"both"})

            //Print Single User 
            HA.singleUserWrap.css({padding: "30px"});
            HA.singleUserName.css({fontSize: "22px"});
            HA.singleUserImg.css({float: "left", position: "relative"});
            HA.singleUserInfoWrap.css({float: "left", position: "relative", maxWidth: "600px", paddingLeft: "30px", paddingTop: "50px"});
        }();

        function createUsers() {
            $.each(getUsersModule.getAllUsers(), function(i, users){
                HA.userWrap = $('<div>');
                HA.userId = users.id;
                HA.userWrap.attr({userid: HA.userId});

                HA.firstNameP = $('<p>').html(users.firstname + " " + users.lastname);
                HA.ageSpan = $('<span>').html(users.age + " år");
                HA.image = $('<img>');
                HA.image.attr({src: `${HA.filepath}${users.profileimg}`, width: "240px"});
                
                HA.userWrap.append(HA.image);
                HA.userWrap.append(HA.firstNameP);
                HA.firstNameP.append(HA.ageSpan)
                HA.usersWrap.append(HA.userWrap);

                //STYLING AV USERWRAP DIVER
                HA.userWrap.css( {width: "240px", float: "left", position: "relative", padding: "30px"} );
                HA.firstNameP.css( {fontSize: "22px"});
                HA.ageSpan.css({paddingLeft: "30px", color: "#C03225", fontWeight: "bold"});
                HA.usersWrap.append(HA.userWrap);

                //EVENTS
                HA.userWrap.on("click", function(){
                    console.log($(this).attr('userid'));
                    let clickedUser = $(this).attr('userid')
                    printSingleUser(clickedUser);
                });

            });
        }//END OF CREATEALLUSERS FUNCTION

        function createFemaleUsers() {
            $.each(getUsersModule.getFemaleUsers(), function(i, users){
                HA.userWrap = $('<div>');
                HA.userId = users.id;
                HA.userWrap.attr({userid: HA.userId});

                HA.firstNameP = $('<p>').html(users.firstname + " " + users.lastname);
                HA.ageSpan = $('<span>').html(users.age + " år");
                HA.image = $('<img>');
                HA.image.attr({src: `${HA.filepath}${users.profileimg}`, width: "240px"});
                
                HA.userWrap.append(HA.image);
                HA.userWrap.append(HA.firstNameP);
                HA.firstNameP.append(HA.ageSpan)
                HA.usersWrap.append(HA.userWrap);

                //STYLING AV USERWRAP DIVER
                HA.userWrap.css( {width: "240px", float: "left", position: "relative", padding: "30px"} );
                HA.firstNameP.css( {fontSize: "22px"});
                HA.ageSpan.css({paddingLeft: "30px", color: "#C03225", fontWeight: "bold"});
                HA.usersWrap.append(HA.userWrap);

                //EVENTS
                HA.userWrap.on("click", function(){
                    console.log($(this).attr('userid'));
                    let clickedUser = $(this).attr('userid')
                    printSingleUser(clickedUser);
                });

            });
        }//END OF CREATEFEMALEUSERS FUNCTION

        function createMaleUsers() {
            $.each(getUsersModule.getMaleUsers(), function(i, users){
                HA.userWrap = $('<div>');
                HA.userId = users.id;
                HA.userWrap.attr({userid: HA.userId});

                HA.firstNameP = $('<p>').html(users.firstname + " " + users.lastname);
                HA.ageSpan = $('<span>').html(users.age + " år");
                HA.image = $('<img>');
                HA.image.attr({src: `${HA.filepath}${users.profileimg}`, width: "240px"});
                
                HA.userWrap.append(HA.image);
                HA.userWrap.append(HA.firstNameP);
                HA.firstNameP.append(HA.ageSpan)
                HA.usersWrap.append(HA.userWrap);

                //STYLING AV USERWRAP DIVER
                HA.userWrap.css( {width: "240px", float: "left", position: "relative", padding: "30px"} );
                HA.firstNameP.css( {fontSize: "22px"});
                HA.ageSpan.css({paddingLeft: "30px", color: "#C03225", fontWeight: "bold"});
                HA.usersWrap.append(HA.userWrap);

                //EVENTS
                HA.userWrap.on("click", function(){
                    console.log($(this).attr('userid'));
                    let clickedUser = $(this).attr('userid')
                    printSingleUser(clickedUser);
                });

            });
        } //END OF CREATEMALEUSER FUNCTION

        function printSingleUser(clickedUser) {
            HA.singleUserInfoWrap.html(""); //CLEAR WRAPPER

            let user = [];
            user.length = 0;
            user = getUsersModule.getUser(clickedUser);
            HA.usersWrap.html("");

            var preferance = "";
            if(user[0].pref == "menn") {
                preferance = "Menn";
            } else if (user[0].pref == "kvinner") {
                preferance = "Kvinner";
            } else if (user[0].pref == "begge") {
                preferance = "Menn og kvinner";
            }
            //APP GUI
            HA.singleUserImg.attr({src: `${HA.filepath}${user[0].profileimg}`, width: "240px"});
            HA.singleUserName.html(user[0].firstname + " " + user[0].lastname);
            HA.singleUserInfoWrap.append("Alder: " + user[0].age + "<br>");
            HA.singleUserInfoWrap.append("Kjønn: " + user[0].sex + "<br>");
            HA.singleUserInfoWrap.append("Interessert i: " + preferance);
            HA.singleUserInfoWrap.append("<br><br>" + user[0].description);

            HA.backButton.show();
            HA.singleUserWrap.append(HA.singleUserName);
            HA.singleUserWrap.append(HA.singleUserImg);
            HA.singleUserWrap.append(HA.singleUserInfoWrap);
            HA.usersWrap.append(HA.singleUserWrap);
        }

        return HA.htmlWrap;
    }
}