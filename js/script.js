

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.querySelector("input[type='text']").value;
    let password = document.querySelector("input[type='password']").value;

    if (email === "" || password === "") {
        alert("Por favor, rellena todos los campos.");
        return;
    }
    
    alert("Formulario enviado correctamente!");
});
