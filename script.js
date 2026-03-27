function login() {
    let usuario = document.getElementById ('inputUsuario').value 
    let senha = document.getElementById ('inputSenha').value

    if (usuario == "Guilherme" && senha == "Guigas@Foda"){
        window.location.href = "home.html"
    } else {
        //alert("Usuário/Senha Incorreta! Tente Novamente!")
        Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Something went wrong!",
        footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
    }
}