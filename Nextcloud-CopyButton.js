// ==UserScript==
// @name         Nextcloud-CopyButton
// @namespace    https://github.com/Manschk3rl/Tampermonkey-Skripts
// @version      1.0
// @description  Fügt einen Kopieren-Button in der Nextcloud App "Collectives" hinzu.
// @author       Manschk3rl
// @match        https://*/apps/collectives/*
// @icon         https://github.com/Manschk3rl/Tampermonkey-Skripts/blob/main/Nextcloud-CopyButton.png?raw=true
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Manschk3rl/Tampermonkey-Skripts/main/Nextcloud-CopyButton.js
// @updateURL    https://raw.githubusercontent.com/Manschk3rl/Tampermonkey-Skripts/main/Nextcloud-CopyButton.js
// ==/UserScript==

(function() {
    console.log("[" + GM_info.script.name + "] Aktiv");
    addEventListener("load", main)
})();

function main() {
    'use strict';

    // Funktion zum Kopieren des Codeblocks
    function copyCode(codeText) {
        // In die Zwischenablage kopieren
        navigator.clipboard.writeText(codeText)
            .then(function() {
                console.log('Code successfully copied to clipboard:', codeText);
            })
            .catch(function(error) {
                console.error('Unable to copy code to clipboard:', error);
            });
    }

    // Alle Codeblöcke auf der Seite auswählen
    var codeBlocks = document.querySelectorAll('.code-block');

    // Schleife durch jeden Codeblock
    codeBlocks.forEach(function(codeBlock) {
        // Textinhalt des Codeblocks erhalten
        var codeText = codeBlock.querySelector('code').textContent.trim();

        // Erstellen und Hinzufügen des Kopiersymbols innerhalb des Codeblocks
        var copyButton = document.createElement('div');
        copyButton.className = 'copy-button';
        copyButton.textContent = '📋';
        copyButton.style.cursor = 'pointer';
        copyButton.style.marginRight = '5px';
        copyButton.style.display = 'inline-block';
        copyButton.style.verticalAlign = 'middle';
        copyButton.style.lineHeight = '1';
        copyButton.style.position = 'relative';
        copyButton.style.top = '-2px';
        copyButton.style.zIndex = '9999'; // Sicherstellen, dass das Symbol über anderen Inhalten liegt
        copyButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Verhindern, dass der Klick auf das Symbol die Auswahl des Codes beeinträchtigt
            copyCode(codeText);
        });

        // Vor dem <code>-Element einfügen
        var codeElement = codeBlock.querySelector('code');
        codeElement.parentNode.insertBefore(copyButton, codeElement);
    });
};
