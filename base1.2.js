const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);

function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let charSet = "";
    if (includeLowercase) charSet += lowercase;
    if (includeUppercase) charSet += uppercase;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    if (charSet === "") {
        alert("Будь ласка, виберіть хоча б один тип символів.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    passwordOutput.value = password;
}

function copyToClipboard() {
    passwordOutput.select();
    document.execCommand("copy");
    alert("Пароль скопійовано!");
}
