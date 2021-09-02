//create a random pin

function getPin(){

    let pin = Math.round(Math.random()*10000);
    
    let pinStr = pin + '';

    if (pinStr.length == 4) {
        return pin;
    }
    
}

//show random pin
document.getElementById('generate-pin').addEventListener('click',function(){
    
    const pin = getPin();

    document.getElementById('generate-pin-field').value = pin;
})

//enter pin number 
document.getElementById('calc-button').addEventListener('click',function(event){
    
    let newPinNumber = event.target.innerText;
    // console.log(enterNewPin);
    
    let pinField = document.getElementById('enter-pin-field');

    if (isNaN(newPinNumber)) {
        if (newPinNumber == 'C') {
            pinField.value = ' ';
        }
    }else{
            

        let priviousPinNum = pinField.value;

        let pinNum = priviousPinNum + newPinNumber;

        pinField.value = pinNum;
    }

})

//check Submit Button
document.getElementById('submit-button').addEventListener('click',function(){
    let enterPinNUm = document.getElementById('enter-pin-field').value;
    enterPinNUm = parseInt(enterPinNUm);
    
    let generatePinNum = document.getElementById('generate-pin-field').value;
    generatePinNum = parseInt(generatePinNum);

    const successMsg = document.getElementById('notify-success');
    const errorMsg = document.getElementById('notify-fail');

    if (enterPinNUm == generatePinNum) {
        
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';

    }else{

        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
})