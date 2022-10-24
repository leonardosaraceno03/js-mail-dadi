
var element = document.getElementById('sendDatas')
element.addEventListener('click',
function sendDatas(){
    let emailServer = ["ciao", "leo", "saluti"];
    let emailValue = document.getElementById('inputEmail')
    for(let i=0; i<emailServer.length; i++){

    
    
    if(emailServer[i] == emailValue){
        console.log(`${emailValue} is already in the Database`)
    }
    else{
        console.log(`${emailValue} has just been added`)
    }
    }   
    
}

)

