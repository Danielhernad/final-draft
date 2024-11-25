// Display current time in the input field
function updateDateTime() {
    const dateTime = new Date();
    const formattedDateTime = dateTime.toLocaleString();
    document.getElementById('dateTime').value = formattedDateTime;
  }
  
  // Call the updateDateTime function every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to set the time when the page loads
  updateDateTime();
  