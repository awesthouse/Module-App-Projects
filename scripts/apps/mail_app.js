const MailApp = {

    //WRAPPERS
    htmlWrap: null,
    loginWrap: null,
    mainWrap: null,
    topWrap: null,
    leftWrap: null,
    middleWrap: null,
    rightWrap: null,
    mailWrap: null,
    mailsWrap: null,

    //LOGIN ELEMENTS
    unInput: null,
    pwInput: null,
    unLabel: null,
    pwLabel: null,
    loginBtn: null,

    //STRING WRAPPERS
    pageTitle: null,
    mailTitle: null,
    inboxTitle: null,
    readTitle: null,
    unreadTitle: null,
    deletedTitle: null,
    deleteWrap: null,
    markUnreadWrap: null,

    //MAIL PREVIEW ELEMENTS
    rTitleWrap: null,
    rMetaWrap: null,
    rContentWrap: null,

    //STRINGS
    unString: "Brukernavn: ",
    pwString: "Passord: ",
    loginBtnString: "Logg Inn",
    inboxString: "Innboks", 
    readString: "Leste mailer",
    unreadString: "Uleste mailer",
    deleteString: "Slett",
    markUnreadString: "Merk som ulest",
    deletedMailsString: "Papirkurv",

    init() {
        const MA = MailApp;

        const setHTMLObjects = function(){

            //WRAPPERS
            MA.htmlWrap = $('<div>');
            MA.loginWrap = $('<div>');
            MA.mainWrap = $('<div>');
            MA.topWrap = $('<div>');
            MA.leftWrap = $('<div>');
            MA.middleWrap = $('<div>'); 
            MA.rightWrap = $('<div>');

            //LOGIN
            MA.unInput = $('<input>');
            MA.pwInput = $('<input>');
            MA.unLabel = $('<label>');
            MA.pwLabel = $('<label>');
            MA.loginBtn = $('<div>');
            MA.pwInput.attr('type', 'password');

            //STRING WRAPPERS
            MA.pageTitle = $('<h2>');
            MA.mailTitle = $('<h5>');
            MA.inboxTitle = $('<p>');
            MA.readTitle = $('<p>');
            MA.unreadTitle = $('<p>');
            MA.deletedTitle = $('<p>');

            //MAIL PREVIEW WRAP
            MA.rTitleWrap = $('<div>');
            MA.rMetaWrap = $('<div>');
            MA.rContentWrap = $('<div>');

        }();

        const setAppGUI = function(){
            let mailAddress = getMailsModule.getMailAddress();
            let mailCount = getMailsModule.getUnreadMailsCount();

            //STRINGS
            MA.unLabel.html(MA.unString);
            MA.pwLabel.html(MA.pwString);
            MA.loginBtn.html(MA.loginBtnString);

            MA.pageTitle.html(MA.inboxString);
            MA.mailTitle.html(mailAddress);
            updateCount();
            MA.readTitle.html(MA.readString);
            MA.unreadTitle.html(MA.unreadString);
            MA.deletedTitle.html(MA.deletedMailsString);

            //LOGIN
            MA.loginWrap.append(MA.unLabel);
            MA.loginWrap.append(MA.unInput);
            MA.loginWrap.append(MA.pwLabel);
            MA.loginWrap.append(MA.pwInput);
            MA.loginWrap.append(MA.loginBtn);

            //TOPWRAP
            MA.topWrap.append(MA.pageTitle);
            MA.topWrap.append(MA.mailTitle);

            //LEFTWRAP
            MA.leftWrap.append(MA.inboxTitle);
            MA.leftWrap.append(MA.readTitle);
            MA.leftWrap.append(MA.unreadTitle);
            MA.leftWrap.append(MA.deletedTitle);

            printMails();

            //RIGHT WRAP
            MA.rightWrap.append(MA.rTitleWrap);
            MA.rightWrap.append(MA.rMetaWrap);
            MA.rightWrap.append(MA.rContentWrap);

            //APPEND TIL MAINWRAP OG HTMLWRAP
            MA.mainWrap.append(MA.leftWrap);
            MA.mainWrap.append(MA.middleWrap);
            MA.mainWrap.append(MA.rightWrap); 
            MA.htmlWrap.append(MA.loginWrap);
            MA.htmlWrap.append(MA.topWrap);
            MA.htmlWrap.append(MA.mainWrap);
        }();

        const setEvents = function(){
            MA.topWrap.hide();
            MA.mainWrap.hide();
            //LOGIN FUNCTION
            MA.loginBtn.on("click", function(){
                let usernameVal = MA.unInput.val();
                let passwordVal = MA.pwInput.val();
                if(getMailsModule.checkLogin(usernameVal, passwordVal)){
                    MA.loginWrap.hide();
                    MA.topWrap.fadeIn(1000);
                    MA.mainWrap.fadeIn(1000);
                } else{
                    alert("Beklager, du har tastet feil passord eller brukernavn.");
                }
            });
            

            MA.inboxTitle.on("click", function(){
                MA.pageTitle.html(MA.inboxString);
                printMails();
            })
            MA.readTitle.on("click", function() {
                MA.pageTitle.html(MA.readString);
                printReadMails();
            })
            MA.unreadTitle.on("click", function() {
                MA.pageTitle.html(MA.unreadString);
                printUnreadMails();
            })
            MA.deletedTitle.on("click", function() {
                MA.pageTitle.html(MA.deletedMailsString);
                printDeletedMails();
            })

        }();

        const setAppStyle = function(){

            //WRAPPERS
            $('html').css({width: "100%", height: "100%", margin: "0px", padding: "0px", position: "relative"});
            $('body').css({width: "100%", height: "100%", margin: "0px", marginTop: "-20px", padding: "0px", position: "relative", fontSize: "14px"});
            $('#mail-app-section').css({width: "100%", height: "100%", margin: "0px", padding: "0px", position: "relative"});
            MA.htmlWrap.css({width: "100%", height: "100%", position: "relative", margin: "0px", padding: "0px", fontFamily: "Helvetica, sans-serif"});
            MA.mainWrap.css({margin: "0px", width: "100%", height: "88%"});
            MA.topWrap.css({marginTop: "0px", height: "10%", width: "100%", textAlign: "center", paddingTop: "2%", borderBottom: "1px solid rgba(0, 0, 0,0.1)"});
            MA.leftWrap.css({position: "relative", float: "left", height: "98%", paddingTop: "2%", width: "15%", textAlign: "right"});
            MA.leftWrap.children().css({paddingRight: "20px", fontSize: "16px", cursor: "pointer" });
            MA.middleWrap.css({position: "relative", float: "left", height: "100%", width: "35%", overflowY: "scroll", borderLeft: "1px solid rgba(0, 0, 0, 0.1)", marginLeft: "-1px"});
            MA.rightWrap.css({position: "relative", float: "left", height: "100%", width: "40%", paddingLeft: "5%", paddingRight: "5%", borderLeft: "1px solid rgba(0, 0, 0, 0.1)", marginLeft: "-1px"});

            //TOPWRAP
            MA.mailTitle.css({fontWeight: "400", marginTop: "-20px"});

            //RIGHTWRAP
            MA.rTitleWrap.css({fontSize: "22px", paddingTop: "100px", fontWeight: "700"});
            MA.rContentWrap.css({paddingTop: "40px", fontSize: "14px"});

            //LOGIN
            MA.loginWrap.css({fontSize:"16px", textTransform: "uppercase", width: "580px", margin: "auto", paddingTop: "300px"});
            MA.loginWrap.children().css({padding:"10px"});
            MA.loginBtn.css({padding:"10px", backgroundColor:"#222", color:"#fff", width:"120px", textAlign:"center", marginTop:"20px", marginLeft: "10px", cursor: "pointer"});

        }();
        
        //FUNCTION FOR Å PRINTE MAILER TIL INNBOKS
        function printMails() {
            MA.middleWrap.html("");
            $.each(getMailsModule.getAllMails(), function(i, mails){

                MA.mailWrap = $('<div>');
                MA.mailsWrap = $('<div>');
                MA.deleteWrap = $('<p>');
                MA.markUnreadWrap = $('<p>');
                let mailID = mails.id;
                MA.mailWrap.attr({mailid: mailID});
                MA.deleteWrap.attr({mailid: mailID});
                MA.markUnreadWrap.attr({mailid: mailID});
                let mailFrom = $('<h2>');
                let mailsTitle = $('<h3>');
                let metainfo = $('<p>');

                mailFrom.html(mails.from);
                metainfo.html("Motatt: " + mails.date + " " + mails.time);
                mailsTitle.html(mails.title);
                MA.deleteWrap.html(MA.deleteString);
                MA.markUnreadWrap.html(MA.markUnreadString);

                if(mails.isRead == 0) {
                    mailsTitle.css({margin: "0px"});
                    mailFrom.css({margin: "0px"});
                } else if (mails.isRead == 1) {
                    mailsTitle.css({margin: "0px", fontWeight: "400"});
                    mailFrom.css({margin: "0px", fontWeight: "400"});
                }

                metainfo.css({margin: "0px"});
                MA.mailWrap.css({width: "90%", height: "100px", padding: "5%", borderBottom: "1px solid rgba(0, 0, 0,0.1)", cursor: "pointer"});
                MA.deleteWrap.css({float: "left", position: "relative"});
                MA.markUnreadWrap.css({float: "left", position: "relative", marginLeft: "20px"});

                MA.mailWrap.append(mailFrom);
                MA.mailWrap.append(mailsTitle);
                MA.mailWrap.append(metainfo);
                MA.mailWrap.append(MA.deleteWrap);
                MA.mailWrap.append(MA.markUnreadWrap);
                MA.mailsWrap.append(MA.mailWrap);
                MA.middleWrap.append(MA.mailsWrap);

                //FUNCTION FOR Å PRINTE MAIL TIL HØYRE
                MA.mailWrap.on("click", function(){
                    let thisMailID = $(this).attr('mailid');
                    let mail = getMailsModule.getMail(thisMailID);
                    MA.rTitleWrap.html(mail[0].title);
                    MA.rMetaWrap.html(mail[0].from + " (" + mail[0].mailFrom + ")" + "<br>" + mail[0].date + " " + mail[0].time);
                    MA.rContentWrap.html(mail[0].content);

                    getMailsModule.setRead(thisMailID);
                    printMails();
                    updateCount();
                });

                //FUNCTION FOR Å SLETTE MAIL
                MA.deleteWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.deleteMail(thisMailID);
                    printMails();
                    updateCount();
                });

                //FUNCTION FOR Å SETTE MAIL SOM 'IKKE LEST'
                MA.markUnreadWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.markAsUnread(thisMailID);
                    printMails();
                    updateCount();
                });
            });
        } //END OF FUNCTION PRINTMAILS

        //FUNCTION FOR Å PRINTE MAILER TIL 'LESTE MAILER'
        function printReadMails() {
            MA.middleWrap.html("");
            
            $.each(getMailsModule.getReadMails(), function(i, mails){
                MA.mailWrap = $('<div>');
                MA.mailsWrap = $('<div>');
                MA.deleteWrap = $('<p>');
                MA.markUnreadWrap = $('<p>');
                let mailID = mails.id;
                MA.mailWrap.attr({mailid: mailID});
                MA.deleteWrap.attr({mailid: mailID});
                MA.markUnreadWrap.attr({mailid: mailID});
                let mailFrom = $('<h2>');
                let mailsTitle = $('<h3>');
                let metainfo = $('<p>');

                mailFrom.html(mails.from);
                metainfo.html("Motatt: " + mails.date + " " + mails.time);
                mailsTitle.html(mails.title);
                MA.deleteWrap.html(MA.deleteString);
                MA.markUnreadWrap.html(MA.markUnreadString);

                if(mails.isRead == 0) {
                    mailsTitle.css({margin: "0px"});
                    mailFrom.css({margin: "0px"});
                } else if (mails.isRead == 1) {
                    mailsTitle.css({margin: "0px", fontWeight: "400"});
                    mailFrom.css({margin: "0px", fontWeight: "400"});
                }

                //CSS
                metainfo.css({margin: "0px"});
                MA.mailWrap.css({width: "90%", height: "100px", padding: "5%", borderBottom: "1px solid rgba(0, 0, 0,0.1)", cursor: "pointer"});
                MA.deleteWrap.css({float: "left", position: "relative"});
                MA.markUnreadWrap.css({float: "left", position: "relative", marginLeft: "20px"});

                //APPENDS
                MA.mailWrap.append(mailFrom);
                MA.mailWrap.append(mailsTitle);
                MA.mailWrap.append(metainfo);
                MA.mailWrap.append(MA.deleteWrap);
                MA.mailWrap.append(MA.markUnreadWrap);
                MA.mailsWrap.append(MA.mailWrap);
                MA.middleWrap.append(MA.mailsWrap);

                //FUNCTION FOR Å PRINTE MAIL TIL HØYRE
                MA.mailWrap.on("click", function(){
                    let thisMailID = $(this).attr('mailid');
                    let mail = getMailsModule.getMail(thisMailID);
                    MA.rTitleWrap.html(mail[0].title);
                    MA.rMetaWrap.html(mail[0].from + " (" + mail[0].mailFrom + ")" + "<br>" + mail[0].date + " " + mail[0].time);
                    MA.rContentWrap.html(mail[0].content);

                    getMailsModule.setRead(thisMailID);
                    printReadMails();
                    updateCount();
                });

                //FUNCTION FOR Å SLETTE MAIL
                MA.deleteWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.deleteMail(thisMailID);
                    printReadMails();
                    updateCount();
                });

                //FUNCTION FOR Å SETTE MAIL SOM 'IKKE LEST'
                MA.markUnreadWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.markAsUnread(thisMailID);
                    printReadMails();
                    updateCount();
                });
            });
        } //END OF FUNCTION PRINTREADMAILS

        //FUNCTION FOR Å PRINTE MAILER TIL 'ULESTE MAILER'
        function printUnreadMails() {
            MA.middleWrap.html("");
            $.each(getMailsModule.getUnreadMails(), function(i, mails){
                MA.mailWrap = $('<div>');
                MA.mailsWrap = $('<div>');
                MA.deleteWrap = $('<p>');
                MA.markUnreadWrap = $('<p>');
                let mailID = mails.id;
                MA.mailWrap.attr({mailid: mailID});
                MA.deleteWrap.attr({mailid: mailID});
                MA.markUnreadWrap.attr({mailid: mailID});
                let mailFrom = $('<h2>');
                let mailsTitle = $('<h3>');
                let metainfo = $('<p>');

                mailFrom.html(mails.from);
                metainfo.html("Motatt: " + mails.date + " " + mails.time);
                mailsTitle.html(mails.title);
                MA.deleteWrap.html(MA.deleteString);
                MA.markUnreadWrap.html(MA.markUnreadString);

                if(mails.isRead == 0) {
                    mailsTitle.css({margin: "0px"});
                    mailFrom.css({margin: "0px"});
                } else if (mails.isRead == 1) {
                    mailsTitle.css({margin: "0px", fontWeight: "400"});
                    mailFrom.css({margin: "0px", fontWeight: "400"});
                }

                //CSS
                metainfo.css({margin: "0px"});
                MA.mailWrap.css({width: "90%", height: "100px", padding: "5%", borderBottom: "1px solid rgba(0, 0, 0,0.1)", cursor: "pointer"});
                MA.deleteWrap.css({float: "left", position: "relative"});
                MA.markUnreadWrap.css({float: "left", position: "relative", marginLeft: "20px"});

                //APPENDS
                MA.mailWrap.append(mailFrom);
                MA.mailWrap.append(mailsTitle);
                MA.mailWrap.append(metainfo);
                MA.mailWrap.append(MA.deleteWrap);
                MA.mailWrap.append(MA.markUnreadWrap);
                MA.mailsWrap.append(MA.mailWrap);
                MA.middleWrap.append(MA.mailsWrap);

                //FUNCTION FOR Å PRINTE MAIL TIL HØYRE
                MA.mailWrap.on("click", function(){
                    let thisMailID = $(this).attr('mailid');
                    let mail = getMailsModule.getMail(thisMailID);
                    MA.rTitleWrap.html(mail[0].title);
                    MA.rMetaWrap.html(mail[0].from + " (" + mail[0].mailFrom + ")" + "<br>" + mail[0].date + " " + mail[0].time);
                    MA.rContentWrap.html(mail[0].content);

                    getMailsModule.setRead(thisMailID);
                    printUnreadMails();
                    updateCount();
                });
                //FUNCTION FOR Å SLETTE MAIL
                MA.deleteWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.deleteMail(thisMailID);
                    printUnreadMails();
                    updateCount();
                });
                //FUNCTION FOR Å SETTE MAIL TIL 'IKKE LEST'
                MA.markUnreadWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.markAsUnread(thisMailID);
                    printUnreadMails();
                    updateCount();
                });
            });
        } //END OF FUNCTION PRINTUNREADMAILS

        //FUNCTION FOR Å PRINTE SLETTEDE MAILER
        function printDeletedMails() {
            MA.middleWrap.html("");

            $.each(getMailsModule.getDeletedMails(), function(i, mails){
                MA.mailWrap = $('<div>');
                MA.mailsWrap = $('<div>');
                MA.deleteWrap = $('<p>');
                MA.markUnreadWrap = $('<p>');
                let mailID = mails.id;
                MA.mailWrap.attr({mailid: mailID});
                MA.deleteWrap.attr({mailid: mailID});
                MA.markUnreadWrap.attr({mailid: mailID});
                let mailFrom = $('<h2>');
                let mailsTitle = $('<h3>');
                let metainfo = $('<p>');

                mailFrom.html(mails.from);
                metainfo.html("Motatt: " + mails.date + " " + mails.time);
                mailsTitle.html(mails.title);
                MA.deleteWrap.html(MA.deleteString);
                MA.markUnreadWrap.html(MA.markUnreadString);

                if(mails.isRead == 0) {
                    mailsTitle.css({margin: "0px"});
                    mailFrom.css({margin: "0px"});
                } else if (mails.isRead == 1) {
                    mailsTitle.css({margin: "0px", fontWeight: "400"});
                    mailFrom.css({margin: "0px", fontWeight: "400"});
                }

                //CSS
                metainfo.css({margin: "0px"});
                MA.mailWrap.css({width: "90%", height: "100px", padding: "5%", borderBottom: "1px solid rgba(0, 0, 0,0.1)", cursor: "pointer"});
                MA.deleteWrap.css({float: "left", position: "relative"});
                MA.markUnreadWrap.css({float: "left", position: "relative", marginLeft: "20px"});

                //APPENDS
                MA.mailWrap.append(mailFrom);
                MA.mailWrap.append(mailsTitle);
                MA.mailWrap.append(metainfo);
                MA.mailWrap.append(MA.deleteWrap);
                MA.mailWrap.append(MA.markUnreadWrap);
                MA.mailsWrap.append(MA.mailWrap);
                MA.middleWrap.append(MA.mailsWrap);

                //FUNCTION FOR Å PRINTE MAIL TIL HØYRE
                MA.mailWrap.on("click", function(){
                    let thisMailID = $(this).attr('mailid');
                    let mail = getMailsModule.getMail(thisMailID);
                    MA.rTitleWrap.html(mail[0].title);
                    MA.rMetaWrap.html(mail[0].from + " (" + mail[0].mailFrom + ")" + "<br>" + mail[0].date + " " + mail[0].time);
                    MA.rContentWrap.html(mail[0].content);

                    getMailsModule.setRead(thisMailID);
                    printDeletedMails();
                    updateCount();
                });

                //FUNCTION FOR Å SLETTE MAIL
                MA.deleteWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.deleteMail(thisMailID);
                    printDeletedMails();
                    updateCount();
                });

                //FUNCTION FOR Å MERKE MAIL SOM 'IKKE LEST'
                MA.markUnreadWrap.on("click", function() {
                    let thisMailID = $(this).attr('mailid');
                    getMailsModule.markAsUnread(thisMailID);
                    printDeletedMails();
                    updateCount();
                });
            });
        } //END OF FUNCTION PRINTDELETEDMAILS

        //FUNCTION FOR Å OPPDATERE INT SOM VISER ANTALL ULESTE MAILER
        function updateCount(){
            var mailCount = getMailsModule.getUnreadMailsCount();
            if(mailCount > 0) {
                MA.inboxTitle.css({fontWeight: "700"});
                MA.inboxTitle.html(MA.inboxString + " (" + mailCount + ")");
            } else {
                MA.inboxTitle.css({fontWeight: "400"});
                MA.inboxTitle.html(MA.inboxString);
            }
        } //END OF FUNCTION UPDATECOUNT
        
        return MA.htmlWrap;
    }
 }