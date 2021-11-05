const wrongUsername = "Gebruikersnaam mag geen @ bevatten"
const wrongPassword = "Wachtwoord is te kort, gebruik minimaal 6 tekens"


const checkUsernameInput = document.getElementById("username");
const checkPasswordInput = document.getElementById("password");

const userNameWarning = document.getElementById("foutmelding-gebruikersnaam");
const passwordWarning = document.getElementById("foutmelding-wachtwoord");


checkUsernameInput.addEventListener('keyup', checkUsername);
checkPasswordInput.addEventListener('keyup', checkPassword);

function checkUsername(e){
    if (e.target.value.includes('@')){
        userNameWarning.textContent = wrongUsername;
    }
    else {
        userNameWarning.textContent = ""
    }

}

function checkPassword(e){
    if (e.target.value.length > 5 || e.target.value === ""){
        passwordWarning.textContent = '';
    }
    else {
        passwordWarning.textContent = wrongPassword
    }
}