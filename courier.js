document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const receiveButton = document.getElementById('receive-button');
    const pickupInput = document.querySelector('input[placeholder="Pickup location"]');
    const dropoffInput = document.querySelector('input[placeholder="Dropoff location"]');

    // Function to handle button state
    function setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.remove('btn-outline-dark');
        activeButton.classList.add('btn-dark');
        inactiveButton.classList.remove('btn-dark');
        inactiveButton.classList.add('btn-outline-dark');
    }

    // Set "Send" button as active by default
    setActiveButton(sendButton, receiveButton);

    sendButton.addEventListener('click', () => {
        setActiveButton(sendButton, receiveButton);
        // "Send" implies a user is sending a package from their location
        pickupInput.placeholder = "Pickup location";
        dropoffInput.placeholder = "Dropoff location";
    });

    receiveButton.addEventListener('click', () => {
        setActiveButton(receiveButton, sendButton);
        // "Receive" implies a user is receiving a package to their location
        pickupInput.placeholder = "Sender location";
        dropoffInput.placeholder = "My location";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const pickupInput = document.querySelector('input[placeholder="Pickup location"]');
    const dropoffInput = document.querySelector('input[placeholder="Dropoff location"]');

    // Set default values for inputs
    pickupInput.value = "123 Main St, City";
    dropoffInput.value = "456 Elm St, City";

    // Add event listeners to inputs for focus and blur events
    pickupInput.addEventListener('focus', () => {
        if (pickupInput.value === "123 Main St, City") {
            pickupInput.value = "";
        }
    });

    dropoffInput.addEventListener('focus', () => {
        if (dropoffInput.value === "456 Elm St, City") {
            dropoffInput.value = "";
        }
    });

    pickupInput.addEventListener('blur', () => {
        if (pickupInput.value === "") {
            pickupInput.value = "123 Main St, City";
        }
    });

    dropoffInput.addEventListener('blur', () => {
        if (dropoffInput.value === "") {
            dropoffInput.value = "456 Elm St, City";
        }
    });
});