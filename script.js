function login() {
    var UserName = document.getElementById("inUserName").value;
    var psd = document.getElementById("inPsd").value;

    if (!UserName && !psd) {
        document.getElementById("errMsg").innerHTML = "Please fill in your user name and password";
    } else if (!UserName && psd.length > 5) {
        document.getElementById("errMsg").innerHTML = "Please fill in your user name";
    } else if (!UserName && psd.length < 6) {
        document.getElementById("errMsg").innerHTML = "Please fill in your user name and password at least 6 characters";
    } else if (UserName.length > 3 && !psd) {
        document.getElementById("errMsg").innerHTML = "Please fill in your password";
    } else if (UserName.length < 5 && !psd) {
        document.getElementById("errMsg").innerHTML = "Please user name at least 4 characters and fill in your password";
    } else if (UserName.length < 5 && psd.length < 6) {
        document.getElementById("errMsg").innerHTML = "Please user name at least 4 characters and password at least 6 characters";
    } else if (UserName.length < 5 && psd) {
        document.getElementById("errMsg").innerHTML = "Please user name at least 4 characters";
    } else if (UserName && psd.length < 6) {
        document.getElementById("errMsg").innerHTML = "Please password at least 6 characters";



    } else if (UserName && psd) {
        document.getElementById("loginForm").submit();
    }
}

function nodigit() {
    var name = document.getElementById("name").value;
    let hasnum = /\d/.test(name);
    if (hasnum) {
        document.getElementById("errName").innerHTML = "Please remove any digits in your name";
    } else {
        document.getElementById("errName").innerHTML = "";
    }
}

function feedback_submit() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("Subject").value;
    var list = document.getElementById('list').value == "";
    var emailValidation = document.getElementById('email').value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);    let hasnum = /\d/.test(name);


    
       if (!name) {
        document.getElementById("errName").innerHTML = "Please enter your name";
    } else if (name.length < 6) {
        document.getElementById("errName").innerHTML = "Please name at least 6 characters";
    } else if (hasnum & name) {
        document.getElementById("errName").innerHTML = "Please remove any digits in your name";
    } else{
        document.getElementById("errName").innerHTML = "";
    }


    if (!phone) {
        document.getElementById("errPhone").innerHTML = "Please enter your phone number";
    } else if (!/^(9665\d{8})$/.test(phone)) {
        document.getElementById("errPhone").innerHTML = "Please enter a correct phone format: 9665x xxx xxxx ";
    } else {
        document.getElementById("errPhone").innerHTML = "";
    }

    if (!email) {
        document.getElementById("errEmail").innerHTML = "Please enter your email address";
    } else if (email != "" &&emailValidation != 0) {
        document.getElementById("errEmail").innerHTML = "Please enter a correct email format: example@example.com";
    } else {
        document.getElementById("errEmail").innerHTML = "";
    }

    if (!msg) {
        document.getElementById("errSubject").innerHTML = "Please fill in your message";
    } else {
        document.getElementById("errSubject").innerHTML = "";
    }

    if (list) {
        document.getElementById("errlist").innerHTML = "Please Select the feedback type";
    } else {
        document.getElementById("errlist").innerHTML = "";
    }

    if (document.getElementById("errName").innerHTML == ""
            &&document.getElementById("errName1").innerHTML == ""
            && document.getElementById("errPhone").innerHTML == ""
            && document.getElementById("errEmail").innerHTML == ""
            && document.getElementById("errSubject").innerHTML == ""
            && document.getElementById('errlist').innerHTML == "") {

        document.getElementById("feedbackForm").submit();
    }

}


//var inputs = document.querySelectorAll("input")
//
//for (var i = 0, len = inputs.length; i < len; i++) {
//    inputs[i].addEventListener('focus', function () {
//        this.style.backgroundColor = "yellow";
//        
//    })
//    inputs[i].addEventListener('blur', function () {
//        this.style.backgroundColor = "white";
//    })
//
//}

//
//var inputs = document.querySelectorAll('textarea');
//
//for (var i = 0, len = inputs.length; i < len; i++) {
//    inputs[i].addEventListener('focus', function () {
//        this.style.backgroundColor = "yellow";
//        
//    })
//    inputs[i].addEventListener('blur', function () {
//        this.style.backgroundColor = "white";
//    })
//
//
//
//}
//
//var inputs = document.querySelectorAll('select');
//
//for (var i = 0, len = inputs.length; i < len; i++) {
//    inputs[i].addEventListener('focus', function () {
//        this.style.backgroundColor = "yellow";
//        
//    })
//    inputs[i].addEventListener('blur', function () {
//        this.style.backgroundColor = "white";
//    })
//
//}
function FOCUS(color) {
    color.style.background = "yellow";
}

function BLUR(color2) {
    color2.style.background = "white";
}