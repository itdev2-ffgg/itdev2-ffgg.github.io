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
    content.innerHTML = "This dialog was created by a third-party JS file.";
    content.style.padding = "1rem";

    // footer btn
    footerBtn.onclick = () => {
        window.location.href = "https://www.google.com"; // Redirect to Google
    };
    footerBtn.innerHTML = "Go to Google";

    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);

    // open dialog
    dialog.show();
})();
