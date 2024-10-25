const originalCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let characters = [...originalCharacters];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let removedElements = [];
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const toggleSwitchSymbol = document.querySelector('.perip-switch input[type="checkbox"]#symbols');
const toggleSwitchNumber = document.querySelector('.perip-switch input[type="checkbox"]#numbers');
const currentTheme = localStorage.getItem('theme');

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let lengthPassword = 13;

// Function to remove symbols based on toggle
function handleSymbolToggle(e) {
    if (e.target.checked) {
        characters = characters.filter(item => {
            return !symbols.includes(item);
        });        
    } else {
        characters = [...characters, ...symbols.filter(item => !characters.includes(item))];
    }
}

// Function to remove numbers based on toggle
function handleNumberToggle(e) {
    if (e.target.checked) {
        // Remove numbers from characters
        characters = characters.filter(item => {
            return !numbers.includes(item); // Exclude numbers
        });
    } else {
        // Add back numbers if toggle is unchecked
        characters = [...characters, ...numbers.filter(item => !characters.includes(item))];
    }
}

function generateChar() {
    for (let i = 0; i < lengthPassword; i++) {
        password1.value += characters[Math.floor(Math.random() * characters.length)];
        password2.value += characters[Math.floor(Math.random() * characters.length)];
    }
}

function generatePassword() {
    password1.value = "";
    password2.value = "";
    generateChar();
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

function copy1() {
    password1.select();
    password1.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(password1.value);
    alert("Password copied to clipboard");
}

function copy2() {
    password2.select();
    password2.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(password2.value);
    alert("Password copied to clipboard");
}

toggleSwitch.addEventListener('change', switchTheme, false);
toggleSwitchSymbol.addEventListener('change', handleSymbolToggle, false);
toggleSwitchNumber.addEventListener('change', handleNumberToggle, false);









