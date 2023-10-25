const inputEl = document.querySelector('#password');

const uppercaseCheckEl = document.querySelector('#uppercase-check');
const numberCheckEl = document.querySelector('#numbers-check');
const symbolCheckEl = document.querySelector('#symbol-check');

// INPUT RANGE OF THE BAR

const inputRangeEl = document.querySelector('#password-length')
let spanPasswordLength = document.querySelector('#password-length-text')

const bar = document.querySelector('#security-indicator-bar')

// INITIAL VALUE
let passwordLength = inputRangeEl.value
        
        function generatePassword() {
            let chars = 'abcdefghjklmnpqrstuvxwyz';
            
            const upperCaseChars = 'ABCDEFGHJKLMNPQRSTUVXWYZ';

            const numbers = '123456789';

            const symbols = '?!@&*()[]';
            

            if (uppercaseCheckEl.checked) {
                chars += upperCaseChars;
            } 
            if (numberCheckEl.checked) {
                chars += numbers;
            }
            if (symbolCheckEl.checked) {
                chars += symbols;
            }
            
            let password = '';

            for (let i = 0; i< passwordLength; i++) {
                const randomNumber = Math.floor(Math.random()*chars.length);
                password+= chars.substring(randomNumber, randomNumber + 1);
            }
 
            spanPasswordLength.innerHTML = inputRangeEl.value
            inputEl.value = password;
            calculateFontSize()
            calculatePasswordQuality()
        }


        //RANGE INFLUENCE
        const passwordLengthEl = document.querySelector('#password-length');
        
        passwordLengthEl.addEventListener('input', function () {
            
            passwordLength = passwordLengthEl.value 
            

            // CALLBACK
            generatePassword()
        });
        uppercaseCheckEl.addEventListener('click', calculatePasswordQuality);
        numberCheckEl.addEventListener('click', calculatePasswordQuality);
        symbolCheckEl.addEventListener('click', calculatePasswordQuality);

        // COPY
        function copy() {
            navigator.clipboard.writeText(inputEl.value)
        }

        function calculatePasswordQuality () {
            
            const percent = Math.round(((passwordLength/64) *100) *0.40
                + (uppercaseCheckEl.checked ? 10 : 0) 
                + (numberCheckEl.checked ? 20 : 0)
                + (symbolCheckEl.checked ? 30 : 0)
            )
            
            bar.style.width = `${percent}%`

            if ( passwordLength <= 5) {
                bar.style.width = `5%`
            }

            if (percent <= 25) {

                bar.classList.add('critical')
                bar.classList.remove('safe')
                bar.classList.remove('warning')
                
            }
            else if (percent <= 65) {
                
                bar.classList.add('warning')
                bar.classList.remove('safe')
                bar.classList.remove('critical')
                
            } else {

                    bar.classList.add('safe')
                    bar.classList.remove('critical')
                    bar.classList.remove('warning')
                    
            }
            if (percent >= 100) {
                bar.classList.add('completed completed')
            }
        }

        function calculateFontSize() {
            if (passwordLength > 45) {
                inputEl.classList.add('font-xxs')
                inputEl.classList.remove('font-xs')
                inputEl.classList.remove('font-sm')
            }
            else if (passwordLength >32) {
                inputEl.classList.add('font-xs')
                inputEl.classList.remove('font-xxs')
                inputEl.classList.remove('font-sm')

            }else if (passwordLength> 22) {
                inputEl.classList.add('font-sm')
                inputEl.classList.remove('font-xs')
                inputEl.classList.remove('font-xxs')

            }else {
                inputEl.classList.remove('font-sm')
                inputEl.classList.remove('font-xs')
                inputEl.classList.remove('font-xxs')
            }
        }

        generatePassword()