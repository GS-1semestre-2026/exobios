document.querySelector(".form-contato").addEventListener("submit", (event) => {
    if (event.target.checkValidity()) {
        alert("Mensagem enviada com sucesso!");
    }
});