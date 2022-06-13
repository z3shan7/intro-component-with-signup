const form = document.getElementById('form');
const firstName = document.getElementById('First name')
const lastName = document.getElementById('Last name')
const email = document.getElementById('Email')
const password = document.getElementById('Password')

function showError(input, message){
    const formControl = input.parentNode ;
    formControl.className = 'form-control error' ;
    const small = formControl.querySelector('small')
    small.innerHTML = message ;
}

function showSuccess(input){
    const formControl = input.parentElement ;
    formControl.className = 'form-control success'
}

// input check required

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${input.id} cannot be empty`)
        } else{
            showSuccess(input)
        }
        
    })
}


// check input length 

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input , `${input.id} must be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input , `${input.id} must be less then ${max} characters`);
    } else{
        showSuccess(input)
    }
}



form.addEventListener('submit', function(e){
    e.preventDefault()
    checkRequired([firstName,lastName,email,password]);
    checkLength(password, 6, 25); 

    
})



