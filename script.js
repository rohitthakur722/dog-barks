document.getElementById("generateBtn").addEventListener("click", function() {
    const length = parseInt(document.getElementById("length").value);
    const includeDigits = document.getElementById("includeDigits").checked;
    const includeSpecial = document.getElementById("includeSpecial").checked;

    if (isNaN(length) || length < 4 || length > 64) {
        alert("Please enter a valid number between 4 and 64.");
        return;
    }

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        (includeDigits ? "0123456789" : "") +
        (includeSpecial ? "!@#$%^&*()_+[]{}|;:,.<>?`~" : "");

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById("output").textContent = password;
});