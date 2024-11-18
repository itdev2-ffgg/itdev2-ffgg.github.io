(function () {
    var userId = document.getElementById("userId").getAttribute("content");

    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    
    // set attributes
    dialog.setAttribute("header-text", "Asistente RRHH");
    footer.setAttribute("slot", "footer");
    
    // content
    content.innerHTML = "Redirigiendo al asistente virtual...";
    content.style.padding = "1rem";
    
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Cerrar";
    
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    
    // open dialog
    dialog.show();
    
    fetch(`https://localhost:7096/api/Employee/Encode?id=${userId}`)
        .then(response => {
            if (!response.ok) {
                content.innerHTML += `<br><br>Error en la respuesta.`;
            }
            return response.json();
        })
        .then(data => {
            console.log("Dato recibido:", data);
            // Wait 2 seconds and make a server call
            setTimeout(() => {
                window.location.href = `http://www.webdataka.com/?userId=${data}`;
            }, 2000);
        })
        .catch(error => {
            content.innerHTML += `<br><br>Error con el dato obtenido: ${error.message}`;
    });

})();
