const email = document.querySelector('.inp_email');
const imagErro = document.querySelector('#imagem');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


function botao(){
   if(email.value == ''){
       imagErro.classList.add('des')
       email.style.border = '1px solid red'
   }else{
      imagErro.classList.remove('des')
      email.style.border = ''
   }
   validate()
}

function validate(){
   if(emailRegex.test(email.value)){
      imagErro.classList.remove('des')
      email.style.border = ''
   } else{
       imagErro.classList.add('des')
       email.style.border = '1px solid red'
   }
}