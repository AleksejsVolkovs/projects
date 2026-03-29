'use strict';

// Function to get the current date and time in specified format
function getCurrentDateTime() {
    const date = new Date();
    return date.toISOString().replace('T', ' ').substring(0, 19);
}

// Function to update the display of the date and time
function updateDateTimeDisplay() {
    const displayElement = document.getElementById('dateTimeDisplay');
    displayElement.innerText = getCurrentDateTime();
}

// Update the date and time display every second
setInterval(updateDateTimeDisplay, 1000);

// Initial call to display immediately
updateDateTimeDisplay();
