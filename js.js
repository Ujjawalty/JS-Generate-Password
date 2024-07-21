const pass= document.getElementById("password");
const length = 8;
const number= "1234567890";
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const symbol= "~!@#$%^&*,.";
const allChars= uppercase + lowercase + number + symbol;
function createPassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(length> password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    pass.value = password;
}