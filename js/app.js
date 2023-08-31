// setInterval(function(){
//     let time = new date();
//     document.getElementById('clock').innerText = time;
// },1000);





// PASSWORD-TOGGLE-START-MAIN

let password = document.getElementById('password')
let eye = document.getElementById('eye')



document.getElementById('eye').addEventListener('click', function(){

    if(password.type =='text'){
        password.type = "password";
        eye.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    }else{
        password.type = "text";
        eye.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
})
// PASSWORD-TOGGLE-END-MAIN










// PASSWORD-TOGGLE-START-EXTRA
// let passLength = input.value.length;
// // let validation = validation.value.length;


// input.addEventListener('keyup', function(){


//     if (passLength < 8){
//         validation.innertext = "Weak Password"
//         validation.style.color = 'red'
//     }else{
//         validation.innertext = 'Strong Password'
//         validation.style.color = 'black'
//     }
// })








password.addEventListener("keyup", function () {
    let passLength = password.value.length;
    let validation_msg = document.getElementById("validation_msg");

    if (passLength < 8) {
        validation_msg.innerText = "Weak Password";
        validation_msg.style.color = 'red'
    } else {
        validation_msg.innerText = "Strong Password";
        validation_msg.style.color = 'green'
    }
});





// PASSWORD-TOGGLE-END-EXTRA






// PASSWORD-TOGGLE-WITHOUT-VARIABLE--START

// document.getElementById('eye').addEventListener('click', function(){

//     if(document.getElementById('input').type =='text'){
//         document.getElementById('input').type = "password";
//         document.getElementById('eye').innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
//     }else{
//         document.getElementById('input').type = "text";
//         document.getElementById('eye').innerHTML = '<i class="fa-regular fa-eye"></i>'
//     }
// })

// PASSWORD-TOGGLE-WITHOUT-VARIABLE--END





// LIGHT-MODE--DARK-MODE-STAR



let modetoggler = document.getElementById('mode-toggler')
let root = document.documentElement


modetoggler.addEventListener('click', function(){
    if(root.classList.contains('dark')){
        root.classList.remove('dark')
        localStorage.removeItem('mode',)
        modetoggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }else{
        root.classList.add('dark')
        localStorage.setItem('mode', 'dark')
        modetoggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
})



if(localStorage.getItem('mode') == 'dark'){
    root.classList.add('dark')
}



// LIGHT-MODE--DARK-MODE-END
