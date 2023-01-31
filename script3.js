// Get the form and submit button
var form = document.querySelector('form');
var submitBtn = document.querySelector('input[type="submit"]');

// Listen for submit event on the form
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Disable the submit button
  submitBtn.disabled = true;

  // Add a loading animation to the submit button
  submitBtn.style.backgroundColor = '#fff';
  submitBtn.style.color = '#333';
  submitBtn.value = 'Sending...';

  // Submit the form after a 2 second delay
  setTimeout(function() {
    form.submit();
  }, 2000);
});

// Listen for resize event on the window
window.addEventListener('resize', function() {
  // Get the window width
  var windowWidth = window.innerWidth;

  // Change the font size of the form based on the window width
  if (windowWidth < 576) {
    form.style.fontSize = '14px';
  } else if (windowWidth >= 576 && windowWidth < 768) {
    form.style.fontSize = '16px';
  } else {
    form.style.fontSize = '18px';
  }
});
