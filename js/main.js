function valid(){
    let userName = document.getElementById('uname');
    let password = document.getElementById('pass');

    if(userName.value.trim()==""){
            return false;
        }
        else if(password.value.trim()==""){
            swal("Blank PassWord!", "Please Try Again", "error");
            // alert('Blank PassWord');
            return false;
        }
        else if(password.value.trim().length<7){
            swal("PassWord is too Short!", "Please Try Again", "error");
            // alert('PassWord is too Short.');
            return false;
        }
        else{
            return true;
        }
}

function user(){
    let username = document.getElementById('uname').value;
    let regx = /^@([a-z A-Z]+)([0-9]+)/; 

    if(regx.test(username)){  
        document.getElementById("note").style.visibility = "hidden";
    }
    else{
        swal("Invalid UserName!", "Please Try Again", "error");
        // alert('Invalid UserName');
        document.getElementById("note").style.visibility = "visible";
    }
}



function signUp(){
    swal("Sorry!", "ShoesString Registration Temporarily Unavailable.", "error");
    // alert("ShoesString Registration Temporarily Unavailable.");
}