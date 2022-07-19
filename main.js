
let form=document.querySelector('form')
let age =document.querySelectorAll('#years')
let dimension =document.querySelector('#cm')
let mass = document .querySelector('#kgs')
let calculate= document.querySelector('#calculate')
let imperialUnits=document.querySelector('#unit1')
let metricUnits = document.querySelector('#unit2')
let result = document.querySelector('#result')
let heightStatus=false; let weightStatus=false;


calculate.addEventListener('click',()=>{
    let height= parseInt(document.querySelector('#height').value)
    let weight =parseInt(document.querySelector('#weight').value) 
    
    
    if(height===''|| isNaN(height)|| (height<0)){
        document.querySelector('#height-error').innerHTML='please provide  a valid height';
    }
    else{
        document.querySelector('#height-error').innerHTML='';
    }
    heightStatus=true

    if(weight===''|| isNaN(height)|| (weight<=0)){
        document.querySelector('#weight-error').innerHTML='please provide  a valid weight';
    }
    else{
        document.querySelector('#weight-error').innerHTML='';
    }
    weightStatus=true;


    if(heightStatus===true && weightStatus===true){
       const calculator =(weight/((height*height)/10000)).toFixed(2);

       if (calculator<18.6){
          result.innerHTML=`underweight ${calculator}`
       }else if( calculator >=18.6 && calculator <24.9){
         result.innerHTML='normal weight ::'+ calculator
       }else if( calculator>24.9){
        result.innerHTML= 'overweight::'+calculator
       }
       else{
        alert('the form has errors');
       }
    }
form.reset()    
})
imperialUnits.addEventListener('click',()=>{
 
 

})
