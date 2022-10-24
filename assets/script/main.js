
var element = document.getElementById("sendDatas");
element.addEventListener('click',
function sendDatas(){
    for(let i=0; i<emailServer.length; i++){

    
    let emailServer = ["ciao", "leo", "saluti"];
    let emailValue = document.getElementById('inputEmail')
    if(emailServer[i] == emailValue){
        console.log(`${emailValue} is already in the Database`)
    }
    else{
        console.log(`${emailValue} has just been added`)
    }
    }   
    
}

)

