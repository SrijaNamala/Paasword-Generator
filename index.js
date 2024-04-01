const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordlength = 12
let password11 = document.getElementById("password-btn1")


let password22 = document.getElementById("password-btn2")


function generatepassword() {
     
    let password1 = ""
    let password2 = ""
    for(let i=0; i< 13; i++) {
        let randomChar1 = Math.floor(Math.random() * characters.length)
        let randomChar2 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomChar1]
        password2 += characters[randomChar2] 
        password11.textContent = password1
        password22.textContent = password2
        
        
    }
    
    
    
}









