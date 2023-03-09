
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength);


const passwordCharacters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
  };
  
  function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let password = "";
    let characters = "";
    
    if (uppercase) characters += passwordCharacters.uppercase;
    if (lowercase) characters += passwordCharacters.lowercase;
    if (numbers) characters += passwordCharacters.numbers;
    if (symbols) characters += passwordCharacters.symbols;
    
   
   
   
   
   
   
   
   
   
   
    for (let i = 0; i < length; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
 }
    
     return password;
  }






  document.getElementById("uppercase","lowercase","numbers","symbols").addEventListener("click", function() {
    const length = document.getElementById("length").value;
     const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
 const symbols = document.getElementById("symbols").checked;
    
    const password = generatePassword(length, uppercase, lowercase, numbers, symbols);
    
    document.getElementById("password__result").value = password;
  });
    

