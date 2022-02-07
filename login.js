function validate()
{
    var username =document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password =="user"){
        alert("login succesfully");
        return false;
        
    }
    else if(username=="" && password ==""){
        alert("empty! pls login!")
        return false;
    }
    else{
        alert("login failed!");
    }
}
