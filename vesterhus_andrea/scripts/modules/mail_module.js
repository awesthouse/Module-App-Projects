const getMailsModule = (function(){ 

    //JSON ARRAY MED LOGIN-ELEMENTER
    const loginJSON = { user: [
        {"id": 1, "mail": "user@mail.com", "password": "user"},
    ]};

    //FUNCTION FOR Å SJEKKE LOGIN
    function checkLogin(username, password) {
        let correctUser = loginJSON.user[0].mail;
        let correctPassword = loginJSON.user[0].password;
        if(username == correctUser && password == correctPassword) {
            return true;
        } else {
            return false;
        }
    }

    //FUNCTION FOR Å FÅ TAK I MAIL-ADRESSE AV BRUKER
    function getMailAddress() {
        return loginJSON.user[0].mail;
    }

    //JSON ARRAY MED MAILER
    const mailListJSON = { mails: [
        {"id": 5, "title": "Tilfredshetsundersøkelse SiO Helse 2018", "from": "Studentsamskipnaden i Oslo og Akershus", "mailFrom": "feedback@questback.com", "isRead": 0, "isDeleted": 0, "time": "15:37", "date": "13.apr", "content": "Hei!<br><br>Studentsamskipnaden i Oslo og Akershus (SiO) gjennomfører for tiden en tilfredshetsundersøkelse blant studenter i Oslo om SiO Helse.<br><br> Undersøkelsen tar ca. 8 minutter å gjennomføre. Når du har besvart undersøkelsen kan du være med i trekningen om 5 universal gavekort på 500 kr. Alle svar vil bli behandlet konfidensielt. På forhånd, takk for hjelpen! <br><br>Med vennlig hilsen <br> Trond Morten Trondsen, Leder SiO Helse"},
        {"id": 4, "title": "Women Techmakers: Take machine learning to the next level", "from": "Women Techmakers Membership", "mailFrom": "wtmmembership@google.com", "isRead": 0, "isDeleted": 0, "time": "15:01", "date": "12.apr", "content": "<h2>Dive into Udacity’s “Deep Learning” course</h2> One of the most exciting fields in tech, Machine Learning -- which allows computers to act without explicit programming -- has led to pivotal breakthroughs, such as practical speech recognition and self-driving cars. Delve into Deep Learning, the bleeding edge of this fast-growing area of study, through the “Deep Learning” Udacity course -- developed with Google. In this intermediate/advanced-level course, learn how to create intelligent systems that learn from complex and/or large-scale datasets. Learn More"},
        {"id": 3, "title": "[Newsletter] Chatting with Robots", "from": "Margot at Codecademy", "mailFrom": "newsletter@codecademy.com", "isRead": 0, "isDeleted": 0, "time": "00:44", "date": "12.apr", "content": "<h2>Build Alexa Skills that Understand You</h2> Whether it’s a conversation with an Amazon Alexa device or a friend named Alexa, we don’t want to think twice about how our words will be interpreted. That’s why we teamed up with Amazon to help you build natural, voice-first Alexa experiences that feel like talking to a friend who understands you.To celebrate our new course and the possibilities it unlocks, we shared what makes a good voice interface, what the field of voice design might look like in a few years, and how you can play a part in that shift."},
        {"id": 2, "title": "Drum up inspiration to live your best creative life", "from": "Clark from InVision", "mailFrom": "clarkv@invisionapp.com", "isRead": 1, "isDeleted": 0, "time": "16:56", "date": "11.apr", "content": "5 takeaways from Questlove's new book on creativity. In Creative Quest, the drummer, DJ, and Late Night musical director dives into his own successes and failures, and shares inspiration from a few of his A-list friends."},
        {"id": 1, "title": "E-BØKER FRA 109,-", "from": "ARK Bokhandel", "mailFrom": "ark@post.ark.no", "isRead": 1, "isDeleted": 0, "time": "14:32", "date": "6.apr", "content": "Månedens bøker!"},
    ]};

    //TOMME ARRAYS
    const inboxMailListJSON = [];
    const singleMailJSON = [];
    const unReadMailsJSON = [];
    const readMailsJSON = [];
    const deletedMailListJSON = [];

    //FUNCTION FOR Å HENTE ALLE MAILER SOM IKKE ER SLETTET - BRUKES I 'INNBOKS'
    function getAllMails(){
        inboxMailListJSON.length = 0;
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].isDeleted == 0) {
                inboxMailListJSON.push(mailListJSON.mails[i]);
            }
        }
        return inboxMailListJSON;
    }

    //FUNCTION FOR Å HENTE ALLE MAILER SOM IKKE ER LEST OG IKKE SLETTET - BRUKES I 'LESTE MAILER'
    function getUnreadMails(){
        unReadMailsJSON.length = 0;
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].isRead == 0 && mailListJSON.mails[i].isDeleted == 0) {
                unReadMailsJSON.push(mailListJSON.mails[i]);
                console.log(unReadMailsJSON);
            }
        }
        return unReadMailsJSON;
    }

    //FUNCTION FOR Å HENTE ALLE MAILER SOM ER LEST OG IKKE SLETTET - BRUKES I 'ULESTE MAILER'
    function getReadMails(){
        readMailsJSON.length = 0;
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].isRead == 1 && mailListJSON.mails[i].isDeleted == 0) {
                readMailsJSON.push(mailListJSON.mails[i]);
            }
        }
        return readMailsJSON;
        console.log(readMailsJSON);
    }

    //FUNCTION FOR Å HENTE EN UTVALGT MAIL - HENTES VED Å SAMMENLIGNE MAIL ID
    function getMail(mailid){
        singleMailJSON.length = 0;
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].id == mailid) {
                singleMailJSON.push(mailListJSON.mails[i]);
            }
        }
        return singleMailJSON;
    }

    //FUNCTION FOR Å SETTE OM MAIL ER LEST TIL TRUE
    function setRead(mailid){
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].id == mailid) {
                mailListJSON.mails[i].isRead = 1;
            }
        } 
    }

    //FUNCTION FOR Å SETTE OM MAIL ER LEST TIL FALSE
    function markAsUnread(mailid) {
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].id == mailid) {
                mailListJSON.mails[i].isRead = 0;
            }
        } 
    }

    //FUNCTION FÅR Å RETURNERE EN INT MED ANTALL MAILER SOM ER ULESTE
    function getUnreadMailsCount() {
        unReadMailsJSON.length = 0;
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].isRead == 0 && mailListJSON.mails[i].isDeleted == 0) {
                unReadMailsJSON.push(mailListJSON.mails[i]);
                var unreadMailsCount = unReadMailsJSON.length;
            }
        }
        return unreadMailsCount;
    }

    //FUNCTION FOR Å SLETTE MAIL - SAMMENLIGNER MAIL ID
    function deleteMail(mailid) {
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].id == mailid) {
                mailListJSON.mails[i].isDeleted = 1;
            }
        } 
    }

    //FUNCTION FOR Å HENTE ALLE MAILER SOM ER SLETTET
    function getDeletedMails() {
        deletedMailListJSON.length = 0;
        for(i = 0; i < mailListJSON.mails.length; i++) {
            if(mailListJSON.mails[i].isDeleted == 1) {
                deletedMailListJSON.push(mailListJSON.mails[i]);
            }
        }
        return deletedMailListJSON;
    }

    console.log("TEST: MODULE working");

    return {
        checkLogin, getMailAddress, getAllMails, getUnreadMails, getReadMails, getMail, setRead, markAsUnread, getUnreadMailsCount, deleteMail, getDeletedMails
    }

})();

