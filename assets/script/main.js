
var element = document.getElementById('sendDatas');
element.addEventListener('click',
function sendDatas(){
    let emailServer = ["ciao", "leo", "saluti"];
    let emailValue = document.getElementById('inputEmail').value;
    
    let  ElementoTrovato = false;  
    for(let i=0; i<emailServer.length; i++){
    
    if(emailServer[i] ==emailValue){
        ElementoTrovato = true;
        console.log(`${emailValue} è presente con posizione ${i}`)
        
    }
    else{
          
    }
    
        
    }   
    for (let i = 0; i<emailServer.length; i++){

        if(ElementoTrovato == true){
            document.getElementById('emailOutput').innerHTML = `sei già registrato`
        }
        else{
            document.getElementById('emailOutput').innerHTML = `Welcome`
        }
    }
}

)

