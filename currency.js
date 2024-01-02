let select=document.querySelectorAll('.currency')
let btn=document.getElementById('button')
let input=document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(value=>validations(value))

function validations(value){
     let arry= Object.entries(value)
          
      for(i=0;i<=arry.length;i++){
        
         let opt=`<option value=${arry[i][0]}>${arry[i][0]}</option>`;
          select[0].innerHTML += opt
          select[1].innerHTML += opt 
      }
}

btn.addEventListener('click',()=>{
           let curr1=select[0].value;
           let curr2=select[1].value;
           let inputVal=input.value;
           if(curr1===curr2)
               alert("Choose different currency")
            else
              convert(curr1,curr2,inputVal)
})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    });
  
  }