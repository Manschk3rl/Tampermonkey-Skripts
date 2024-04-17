// ==UserScript==
// @name         Studydrive-DownloadButton
// @namespace    https://github.com/Manschk3rl/Tampermonkey-Skripts
// @version      1.0
// @description  Stellt die originale Funktionalität des Download-Buttons wieder her.
// @author       Manschk3rl
// @match        https://www.studydrive.net/*/doc/*
// @icon         data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkQqInYQccjQOtlFRRxLFYtgobQVWnUwufQLmrQkKS6OgmvBwY/FqoOLs64OroIg+AHi7OCk6CIl/i8ptIjx4Lgf7+497t4BQqvKNDMQAzTdMtKJuJTLr0riKwIYhogIRJmZ9WRmMQvP8XUPH1/vojzL+9yfY1AtmAzwScQxVjcs4g3i2U2rznmfOMTKskp8Tjxp0AWJH7muuPzGueSwwDNDRjY9Txwilko9rPQwKxsa8QxxWNV0yhdyLquctzhr1Qbr3JO/MFjQVzJcpzmOBJaQRAoSFDRQQRUWorTqpJhI037cwz/m+FPkUshVASPHAmrQIDt+8D/43a1ZnJ5yk4JxoO/Ftj8igLgLtJu2/X1s2+0TwP8MXOldf60FzH2S3uxq4SNgaBu4uO5qyh5wuQOMPtVlQ3YkP02hWATez+ib8sDILTCw5vbW2cfpA5ClrpZvgINDYKJE2ese7+7v7e3fM53+fgBx0HKmW+fwgQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+gEEQcsBBD1HEcAAAScSURBVFjDzZh7UFRVHMe/v3Pvsgu7uSqKsjx9gZpNGTNKhQ8GNR+NUjBJND3GsUYnNcbGtAcDjqWNleM46F86U01gTS+LKMwUBd/pWGqJNGwgJYouuro7LHsfv/4gNQZY9gX6/efeufec3/mcc36Pcy8hSL1ZzbGXPNqms1cx928XW9wKhM1M7amD6c+UgVy4caq8Kxi7FGiHoiqWm1V9a7ldX+zwQPTU7pFYupxh49x3MwwH+wxoZZVWsKeJ15+/xpH+tI+SgZmJdHTMUCl7fTpdDhtQYQ1PPnFFK9vbxCOD2YZhZmhzksSO2Bli6VoiPWigohM8pK5F+7LCztM8GkLWhGhyZyai4MOp8vaAgIqYxZV9+gcVf+nLm92QEUYJAjLjyT7ZJj1ZnE6newV6rUZ9rvoCSn67ygPQhzIbgNnJdCB1sDS/OJ1udAEqOsUDTzXqh3Y36uM5QOM/Z3W4xYy9ImCwEVbyzh+FF9+fIu+8DfTWcU74/rxWe66Vo4KZrfuVDhDzVj2o1TJJwPPjxHslWdIboohZHGnUjgYLEw55NKCsTl+9pkaZLW4e0AsOXmQb7rJcXtAvl2m7OOPgV3GP6Egzx4mGG4i9V4BUHZCb3WzoqcGCAYz1swCD1Pn55ycYhfW+I2rDGB05D3fOKooGvF4JVLh6zsey10cGXprGGG2L6PI8Z6KCwnrfs81+iJA0rOtcV0zyomKfDyBfRuX/FqHhkoKq2o57nYHN53ovgQu+IawYq9y2kTkWSB5ugNRLV7/KQqsLWHI6sJNKnQosO3unz5F4RrI/pSUY51sSw0g39fz+AQPwckyQtS7QDmkRwOaFMna/QMixdi0yOVbGwUWELQslpEX0A9BJL9ByTYXJKGFHnsAcyx2oORbGjjwBk1HClesqTnr7AQgAZnxGcDgVRBollOYLCCIIIpTmC0QaJTicCrJ2Uv9s2S2HnV5KaL2hwGySIARBCILZJOG6S8XjZYQ6Ff0HdAvqiTKC031nZFebhtydwBklhANcKKn+pBfIKQMcTgUOp4LsTxk1baGVj5CPpzVtgO1jQrgkcI9JRPmzRtR/QHKsmdrrnWz01ShpCHB4Loc0UNJQP4FSBlF9vZPHd3tWbu+4RlsNiLaGZwVuenx+ibCcOoiLKhvwRXfzX3VUQNW9sJjCA+P2AAXHenbbqXHiDwKA3HL12Hd2nnQ3nTnWAi0/RR4vAOB+izQtM4Ea7hbMcDO0p0fTsxumUF2n+Fn0k1pWbuc8Z3v/xVWGjS5OjpOyNjxKtd0G9NuHeNTvDv2rygb9QY37DmSklbyzkumdLdOldX5lmNXV6rxDzfjo+CUeEk6QgUbwvBG0KzFCyl+bSZ6AU97yKm3dD3Ze0+TikMqMLICsBHFuQox46tb2BJ2Di6vY0ujVPvnWztkub+D+lRZD16YkYPHGDPnrsBaFwsM88dcWvXTPBX2c7od/JQ0gZWYilWzLklb6O0ZQ0bRyv/rS/n+w6exVtnT33moEz06iH0cNkp75/7+fPgO6/XOrWl1cf52WOdo4zqMiIjoSrfH3oTo+SlpV/Bi1BGPzX96fqNiI8SF8AAAAAElFTkSuQmCC
// @grant        none
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