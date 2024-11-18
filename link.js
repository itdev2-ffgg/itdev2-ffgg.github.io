(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    
    // set attributes
    dialog.setAttribute("header-text", "Third Party JavaScript");
    footer.setAttribute("slot", "footer");
    
    // content
    content.innerHTML = "This dialog was created by third party JS file";
    content.style.padding = "1rem";
    
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    
    // open dialog
    dialog.show();
    
    // Wait 5 seconds and make a server call
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1') // Example URL
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Data received:", data);
                content.innerHTML += `<br><br>Received JSON: <pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
                content.innerHTML += `<br><br>Error fetching JSON: ${error.message}`;
            });
    }, 5000);
})();
