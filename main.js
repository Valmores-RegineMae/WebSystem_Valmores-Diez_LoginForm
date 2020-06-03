function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="admin")
    {
       document.getElementById("admin").innerHTML="It works!";
       document.getElementById("user").innerHTML="";
    }
    else if(username=="user" && password=="user"){
        document.getElementById("user").innerHTML="It works!";
        document.getElementById("admin").innerHTML="";
    } 
    else if(username.length==0 && password.length==0) {
        alert("Please enter username and password!");
        document.getElementById("admin").innerHTML="";
        document.getElementById("user").innerHTML="";
    } 
    else if(username.length==0) {
        alert("Please enter username.");
        document.getElementById("admin").innerHTML="";
        document.getElementById("user").innerHTML="";
    } 
    else if(password.length==0) {
        alert("Please enter password.");
        document.getElementById("admin").innerHTML="";
        document.getElementById("user").innerHTML="";
    }
    else
    {
        alert("Username or password is incorrect. Please try again!");
    }
}
