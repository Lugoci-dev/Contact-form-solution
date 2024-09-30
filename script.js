
window.boton.addEventListener('click', formValidation);

function autoResize(textarea){
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function formValidation(){
    const inputs = document.querySelectorAll('input, textarea')
    let canSubmit = true;

    inputs.forEach(input => {
        const errorSpan = input.nextElementSibling;
        const nextElementSpan = errorSpan.nextElementSibling;

        if(input.type == 'text' || input.type == 'email' || input.type == 'textarea' ){
            if( input.type == 'email' && input.value != '' ){
                //validate the email
                errorSpan.style.display = 'none';
                
                if(validEmail(input.value)){
                    nextElementSpan.style.display = 'none';
                    input.classList.remove('danger');
                }else{
                    nextElementSpan.style.display = 'block';
                    input.classList.add('danger');
                }
            }else if(input.value == ''){
                //Show the span
                errorSpan.style.display = 'block';
                input.classList.add('danger');
            }else{
                //Hide the span
                errorSpan.style.display = 'none';
                input.classList.remove('danger');
            }
        }else if( input.type == 'checkbox' ){
            if(input.checked){
                nextElementSpan.style.display = 'none';
                input.classList.remove('danger');
            }else{
                nextElementSpan.style.display = 'block';
                input.classList.add('danger');
            }
        }else if(input.type == 'radio'){
            const radios = document.querySelectorAll('input[type="radio"]');
            const querySpan = document.querySelector('.querySpan');
            let valid = false;

            radios.forEach(radio => {
                if(radio.checked){
                    valid = true;
                }
            });
            if(!valid){
                querySpan.style.display = 'block';
                input.classList.add('.danger');
            }else{
                querySpan.style.display = 'none';
                input.classList.remove('.danger');
            }
        }

        if(input.className == 'danger'){
            canSubmit = false;
        }
    });

    if(canSubmit){
        formSubmmit()
    }
}

function validEmail(email){
    const gmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (gmailPattern.test(email)) {
        return true
    } else {
        return false
    }
}

function formSubmmit(){
    //todo Database process
    showDialog();
}

function showDialog(){
    const dialog = document.querySelector('.dialog');
    dialog.style.display = 'block'
    setTimeout(()=>{
        dialog.style.display = 'none';
    }, 3000);
}

function checkRadio(radio){
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(ratio => {
        if(!ratio.checked){
            ratio.parentNode.className = '';
        }
    });
    if(radio.checked){
        radio.parentNode.classList.add('shecked')
    }
}


