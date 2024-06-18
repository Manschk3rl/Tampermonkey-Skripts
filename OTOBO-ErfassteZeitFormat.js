// ==UserScript==
// @name         OTOBO-ErfassteZeitFormat
// @namespace    https://github.com/Manschk3rl/Tampermonkey-Skripts
// @version      1.0
// @description  Zeigt in OTOBO die Erfasste Zeit in einen bestimmten Format an.
// @author       Manschk3rl
// @match        https://ticket.owd.at/otobo/index.pl?Action=AgentTicketZoom;*
// @icon         https://github.com/Manschk3rl/Tampermonkey-Skripts/blob/main/OTOBO-ErfassteZeitFormat.png?raw=true
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Manschk3rl/Tampermonkey-Skripts/main/OTOBO-ErfassteZeitFormat.js
// @updateURL    https://raw.githubusercontent.com/Manschk3rl/Tampermonkey-Skripts/main/OTOBO-ErfassteZeitFormat.js
// ==/UserScript==

(function() {
    console.log("[" + GM_info.script.name + "] Aktiv");
    addEventListener("load", main)
})();

function main() {
    // Function to convert minutes to hours and minutes
    function convertTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours} h ${remainingMinutes} m`;
    }

    // Find all label elements
    const labels = document.querySelectorAll('fieldset label');

    labels.forEach(label => {
        if (label.textContent.trim() === 'Erfasste Zeit:') {
            // Find the next sibling p.Value element
            const timeElement = label.nextElementSibling;

            if (timeElement && timeElement.classList.contains('Value')) {
                // Get the time in minutes
                const timeInMinutes = parseInt(timeElement.textContent.trim(), 10);

                if (!isNaN(timeInMinutes)) {
                    // Convert the time
                    const convertedTime = convertTime(timeInMinutes);

                    // Append the converted time to the existing time element
                    timeElement.textContent += ` (${convertedTime})`;
                }
            }
        }
    });
}
