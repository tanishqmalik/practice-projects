let eyeOpened=document.querySelector(".eyeOpened")
let eyeClosed = document.querySelector(".eyeclosed")
let password= document.getElementById("password")

eyeClosed.addEventListener('click', ()=>{
    if(password.type=='password'){
        password.type='text'
        eyeClosed.classList.add('okay')
        // console.log(eyeClosed)
        eyeOpened.classList.add('red')
        // console.log(eyeOpened)
    }
    else{
        console.log(eyeOpened)
        // eyeClosed.classList.remove('okay')
        // eyeOpened.classList.remove('okay')
        password.type='password'
    }
})

eyeOpened.addEventListener('click', ()=>{
    if(password.type=='text'){
        password.type='password'
        eyeOpened.classList.remove('red')
        eyeClosed.classList.remove('okay')
    }
    else{
        password.type='text'
    }
})

