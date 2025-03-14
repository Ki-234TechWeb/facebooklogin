function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target; // Get the form element
    const email = form.email.value; // Get the email input value
    const password = form.password.value; // Get the password input value

    // Validation (email and password must not be empty)
    if (!email || !password) {
        alert('Please fill in both the email and password fields.');
        return; // Stop further processing
    }

    // Simulate form submission
 const formData = new FormData(form); // Collect the form data

    // Example: Sending data to the server (you can replace this with your actual endpoint)
    const requestOptions = {
        method: 'POST',
        body: formData
    };

    fetch(form.action, requestOptions)
        .then(response => response.text())
        .then(result => {

            const modal = document.getElementById('successModal');
            modal.style.display = "block"; // Show the modal
            
            // Close the modal when the user clicks on the close button (X)
            const closeButton = modal.querySelector('.close');
            closeButton.addEventListener('click', () => {
              modal.style.display = "none"; // Hide the modal
            });
  
            // Optionally, hide the modal after a few seconds
            setTimeout(() => {
              modal.style.display = "none";
            }, 5000); // Modal will hide after 5 seconds
        })
        .catch(error => {
           
            const modal = document.getElementById('errorModal');
            modal.style.display = "block"; // Show the modal
            
            // Close the modal when the user clicks on the close button (X)
            const closeButton = modal.querySelector('.close');
            closeButton.addEventListener('click', () => {
              modal.style.display = "none"; // Hide the modal
            });
  
            // Optionally, hide the modal after a few seconds
            setTimeout(() => {
              modal.style.display = "none";
            }, 5000); // Modal will hide after 5 second
        });
}
