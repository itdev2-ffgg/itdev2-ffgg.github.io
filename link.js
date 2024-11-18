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
    content.innerHTML = "Redirigiendo al asistente.";
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
    
    // Wait 5 seconds and make a server call
    setTimeout(() => {
        http://www.agrodesarrollo.com/test/?userId=${userId}
        fetch('https://jsonplaceholder.typicode.com/todoss/1') // Example URL
            .then(response => {
                if (!response.ok) {
                    content.innerHTML += `<br><br>Error en la respuesta.`;
                }
                return response.json();
            })
            .then(data => {
                console.log("Dato recibido:", data);
                content.innerHTML += `<br><br>Received JSON: <pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
                content.innerHTML += `<br><br>Error fetching JSON: ${error.message}`;
            });
    }, 5000);
})();
