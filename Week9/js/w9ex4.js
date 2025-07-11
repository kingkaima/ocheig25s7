console.log('Test 4')

function Multiplynumber(){
    let Number1 = document.querySelector('#Number1').value;
    let Number2 = document.querySelector('#Number2').value;
    document.querySelector('#output').textContent='The multiplication of 5 and 6 is 30';
    

}
//Multiplynumber();
document.querySelector('#btn').addEventListener('click',Multiplynumber);