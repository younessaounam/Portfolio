var a = "x"
var password = document.getElementById('password')
function change(){
    if(password.type=="text" && a == "x"){
        password.type = "password"
        a = "o"
    }
    else if(a!="x" && password.type == "password"){
        password.type="text" 
        a = "x"
    }
}