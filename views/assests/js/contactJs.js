// Show the popup when the form is submitted
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    document.getElementById('popup').style.display = 'block';
    document.body.classList.add('popup-active'); // Darken background
      // Clear the input fields
      this.reset();
});

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('popup-active'); // Remove darkened background
}
