 const HeartbookApp = {
    
    //WRAPPERS
    htmlWrap: null, 
    usersWrap: null,
    userWrap: null,
    singleUserWrap: null,

    firstNameP: null,
    ageSpan: null,
    userId: null,

    //SELECT BOKS
    selectBox: null,

    //STRINGS
    titleString: "HeartBook",
    firstNameString: "",
    lastNameString: "",
    sexString: "",
    prefString:"",

    image: "",
    singleUserImg: "",
    //ANDRE VARIABLER
    filepath: "images/profiles/",

    init() {
        const HA = HeartbookApp;

        const setHTMLObjects = function(){
            HA.htmlWrap = $('<div>');
            HA.siteTitle = $('<h2>');
            HA.usersWrap = $('<div>');
            HA.selectBox = $('<select>');            

            //SELECT for alle profiler, menn eller kvinner
            options = [
                {val : 1, text: 'Alle profiler'},
                {val : 2, text: 'Vis menn'},
                {val : 3, text: 'Vis kvinner'}
            ];
            $(options).each(function() {
                HA.selectBox.append($('<option>').attr('value', this.val).text(this.text));
            })
        }();

        const setAppGUI = function(){

            //Print alle profiler når siden lastes
            function createUserObjects(users) {
                HA.firstNameP = $('<p>').html(users.firstname + " " + users.lastname);
                HA.ageSpan = $('<span>').html(users.age + " år");
                HA.image = $('<img>');
                HA.image.attr({src: `${HA.filepath}${users.profileimg}`, width: "240px"});
                HA.userId = users.id;
                
                //LEGGE TIL ELEMENTER
                HA.userWrap = $('<div>');
                HA.userWrap.attr({userid: HA.userId});
                HA.userWrap.append(HA.image);
                HA.userWrap.append(HA.firstNameP);
                HA.firstNameP.append(HA.ageSpan)

                //STYLING AV USERWRAP DIVER
                HA.userWrap.css( {width: "240px", float: "left", position: "relative", padding: "30px"} );
                HA.firstNameP.css( {fontSize: "22px"});
                HA.ageSpan.css({paddingLeft: "30px", color: "#C03225", fontWeight: "bold"});
                HA.usersWrap.append(HA.userWrap);

                HA.userWrap.on("click", function(){
                    console.log($(this).attr('userid'));
                    let clickedUser = $(this).attr('userid')
                    printSingleUser(clickedUser);
                });
            }
            $.each(getUsersModule.getAllUsers(), function(i, users){
                createUserObjects(users);
            });
            HA.siteTitle.html(HA.titleString);
            HA.htmlWrap.append(HA.siteTitle);
            HA.htmlWrap.append(HA.selectBox);
            
            HA.htmlWrap.append(HA.usersWrap);
            HA 

            function printSingleUser(clickedUser) {
                let user = [];
                user.length = 0;
                user = getUsersModule.getUser(clickedUser);
                console.log(user[0]);
                HA.usersWrap.html("");
                HA.singleUserImg = $('<img>')
                HA.singleUserWrap = $('<div>');

                HA.singleUserImg.attr({src: `${HA.filepath}${users.profileimg}`, width: "240px"});
                HA.singleUserName.html(user[0].firstname + " " + user[0].lastname);
                HA.singleUserWrap.append(HA.singleUserName);
                
                HA.singleUserWrap.append(HA.singleUserImg);
                HA.usersWrap.append(HA.singleUserWrap);
                console.log(user[0].firstname);
            }
        }();

        const setEvents = function(){
            HA.selectBox.on("change", function(){
                let selectValue = $(this).val();
                printUsers(selectValue);
                function printUsers(selectVal) {
                    HA.usersWrap.html("");
                    function createUserObjects(users) {
                        HA.firstNameP = $('<p>').html(users.firstname + " " + users.lastname);
                        HA.ageSpan = $('<span>').html(users.age + " år");
                        HA.image = $('<img>');
                        HA.image.attr({src: `${HA.filepath}${users.profileimg}`, width: "240px"});
                        HA.userId = users.id;
                        
                        //LEGGE TIL ELEMENTER
                        HA.userWrap = $('<div>');
                        HA.userWrap.attr({userid: HA.userId});
                        HA.userWrap.append(HA.image);
                        HA.userWrap.append(HA.firstNameP);
                        HA.firstNameP.append(HA.ageSpan)
        
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

                        function printSingleUser(clickedUser) {
                            let user = [];
                            user.length = 0;
                            user = getUsersModule.getUser(clickedUser);
                            console.log(user[0]);
                            HA.usersWrap.html("");
                            HA.singleUserImg = $('<img>')
                            HA.singleUserWrap = $('<div>');

                            HA.singleUserImg.attr({src: `${HA.filepath}${users.profileimg}`, width: "240px"});
                            HA.singleUserName.html(user[0].firstname + " " + user[0].lastname);
                            HA.singleUserWrap.append(HA.singleUserName);
                            
                            HA.singleUserWrap.append(HA.singleUserImg);
                            HA.usersWrap.append(HA.singleUserWrap);
                            console.log(user[0].firstname);
                        }
                    }
                    if(selectVal == 1) {
                        console.log("Print all users");
                        HA.usersWrap.html("");
                        $.each(getUsersModule.getAllUsers(), function(i, users){
                            createUserObjects(users);
                            console.log(users);
                        })
                    } else if (selectVal == 2) {
                        HA.usersWrap.html("");
                        users = null;
                        $.each(getUsersModule.getMaleUsers(), function(i, users){
                            createUserObjects(users);
                        })
                    } else if (selectVal == 3) {
                        HA.usersWrap.html("");
                        $.each(getUsersModule.getFemaleUsers(), function(i, users){
                            createUserObjects(users);
                        })
                    }
                }
            });
        }();

        const setAppStyle = function(){
            HA.htmlWrap.css({width: "1200px", margin: "auto", height: "200px", fontFamily: "Helvetica" });
            HA.siteTitle.css({fontSize: "32px"});
            HA.singleUserName.css({fontSize: "44px"});
        }();

        return HA.htmlWrap;
    }
 }