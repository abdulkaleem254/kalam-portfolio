
function menu(){
    let chckbox=document.getElementById("dropdown");

    if(chckbox.checked!=true){
        document.getElementById("navbarline").classList.add("open");
        document.getElementById("mynav").classList.add("bg");
        
    }
    else{
        document.getElementById("navbarline").classList.remove("open");
        document.getElementById("mynav").classList.remove("bg");
    }
}


