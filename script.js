document.addEventListener("DOMContentLoaded", function () {
    let signIn = document.getElementById("signin");

    signIn.addEventListener("click", function () {
        let usn = document.getElementById("username").value.trim();
        let pass = document.getElementById("password").value.trim();
        let position = document.getElementById("password");
        let errorBefore = document.getElementById("msgError");
        if (errorBefore) {
            errorBefore.remove();
        }

        if (usn == "" || usn != "kent" || pass == "" || pass.length < 8 || pass.length > 16) {
            let errorSound = new Audio("bomb.mp3"); 
            
            errorSound.play().catch(function(error) {
                console.log("Gagal memutar suara: ", error);
            });

            let msgError = document.createElement("p");
            msgError.id = "msgError";
            msgError.style.color = "red";
            msgError.style.fontSize = "12px";
            msgError.style.marginLeft = "5px";
            msgError.style.textAlign = "left";

            if (usn == "") {
                msgError.textContent = "Username harus diisi";
            } else if (usn != "kent") {
                msgError.textContent = "Username salah";
            } else if (pass == "") {
                msgError.textContent = "Password tidak boleh kosong";
            } else if (pass.length < 8 || pass.length > 16) {
                msgError.textContent = "Password minimal 8 karakter, maksimal 16 karakter";
            }

            position.after(msgError);
        } else {
            window.open("https://www.instagram.com/kentson.thio?igsh=MTdsdml2aHd3amozdA==");
        }
    })
} )