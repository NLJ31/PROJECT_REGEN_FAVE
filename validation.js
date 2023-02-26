
function validation(){

    let Name = document.getElementById("Name").value.trim()
    let Email = document.getElementById("Email").value.trim()
    let Subject = document.getElementById("Subject").value.trim()
    let message = document.getElementById("Message").value.trim()
    let wordcount = document.getElementById("Message").value.trim().split(/\s+/).length;

    if(Name==""){
        alert("Please Enter your name")
        return false
    }
    else if(Name.length<3){
        alert("Name must be more than 3 characters")
        return false
    }

    if(Email ==""){
        alert("Please enter your email")
        return false
    }
    else if(Email.split("@").length !==2){
        alert("Email harus ada tanda @")
        return false
    }
    else if(!Email.split("@")[1].includes(".com")){
        alert("Email harus ada .com setelah @")
        return false
    }

    if(Subject==""){
        alert("Please enter your subject")
        return false
    }
   
    if(message==""){
        alert("Please enter a message")
        return false
    }
    else if(wordcount<3){
        alert("Message must be atleast 3 words")
        return false
    }

    return true;

}