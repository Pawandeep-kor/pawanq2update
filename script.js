document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        openConfirmationWindow();
    });
});

function openConfirmationWindow() {
    const id = document.getElementById('id').value;
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const status = document.getElementById('status').value;

    const confirmationWindow = window.open("", "_blank", "width=400,height=400");
    
    if (confirmationWindow) {
        confirmationWindow.document.write(`
            <h2>Confirmation Notice</h2>
            <p>ID: ${id}</p>
            <p>Full Name: ${fullName}</p>
            <p>Address: ${address}</p>
            <p>Status: ${status}</p>
        `);
    } else {
        console.error('Confirmation window failed to open');
    }
}
