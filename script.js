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

        if (usn == "" || pass == "") {
            let msgError = document.createElement("p");
            msgError.id = "msgError";
            msgError.style.color = "red";
            msgError.style.fontSize = "12px";
            msgError.style.marginLeft = "5px";
            msgError.style.textAlign = "left";
            msgError.textContent = "Username atau Password Tidak Boleh Kosong";
            position.after(msgError);
        } else {
            window.open("https://www.instagram.com/kentson.thio?igsh=MTdsdml2aHd3amozdA==");
        }
    })
} )