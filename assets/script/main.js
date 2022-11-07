
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

/*-----------------------------------------------------------------------------*/




let vittorieGiocatore = [];
let vittorieCpu = [];


function gioca(){
    let giocatore =  Math.round( Math.random()* 6 )+ 1;
    let cpu =  Math.round( Math.random()* 6 )+ 1;
    
    document.getElementById('numGiocatore').innerText = `Il numero giocatore è ${giocatore}`
    document.getElementById('numCpu').innerText = `Il numero giocatore è ${cpu}`

    if(giocatore > cpu){
        document.getElementById('risultato').innerText = `Ha vinto: Giocatore`
        vittorieGiocatore.push('vinto')
    } else if(cpu > giocatore){
        document.getElementById('risultato').innerText = `Ha vinto: Cpu`
        vittorieCpu.push('vinto')
    }
    else{
        document.getElementById('risultato').innerText = `Pareggio`
    }
    
    document.getElementById('numeroVittorieGiocatore').innerText= `vittorie player:${vittorieGiocatore.length}`
    document.getElementById('numeroVittorieCpu').innerText= `vittore giocatore: ${vittorieCpu.length}`
}