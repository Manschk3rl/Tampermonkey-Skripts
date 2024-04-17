// ==UserScript==
// @name         Studydrive-DownloadButton
// @namespace    https://github.com/Manschk3rl/Tampermonkey-Skripts
// @version      1.0
// @description  Stellt die originale Funktionalität des Download-Buttons wieder her.
// @author       Manschk3rl
// @match        https://www.studydrive.net/*/doc/*
// @icon         https://github.com/Manschk3rl/Tampermonkey-Skripts/blob/main/Studydrive-DownloadButton.png?raw=true
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Manschk3rl/Tampermonkey-Skripts/main/Studydrive-DownloadButton.js
// @updateURL    https://raw.githubusercontent.com/Manschk3rl/Tampermonkey-Skripts/main/Studydrive-DownloadButton.js
// ==/UserScript==

(function() {
    console.log("[" + GM_info.script.name + "] Aktiv");
    addEventListener("load", main)
})();

function main() {
        var DownloadButton = document.querySelector('button[data-specific-auth-trigger="download"]');
        if (DownloadButton) {
            // Entferne alle vorhandenen Eventlistener des Buttons
            var NewDownloadButton = DownloadButton.cloneNode(true);
            DownloadButton.parentNode.replaceChild(NewDownloadButton, DownloadButton);

            // Ändere den Eventlistener des Buttons auf die eigene Download-Funktion
            NewDownloadButton.addEventListener('click', function(event) {
                downloadPDF();
            });
            console.log("[" + GM_info.script.name + "] Download-Button wurde ersetzt!");
        }
}

function downloadPDF() {
    window.PDFViewerApplication.pdfDocument.getData().then( data => {
        const downloadLink = document.createElement("a");
        downloadLink.href = window.URL.createObjectURL(new Blob([data], {type: "application/pdf"}));
        downloadLink.download = getDocName();
        downloadLink.click();
    })
}

function getDocName() {
    const docName = document.querySelector("h1").textContent
    switch (true) {
        case (docName.endsWith(".pdf")):
            return docName
        case (!docName.endsWith(".pdf")):
            return docName + ".pdf"
        default:
            return GM_info.script.name + ".pdf";
    }
}
