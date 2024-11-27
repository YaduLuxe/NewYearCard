document.getElementById('submitBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    const greetingDiv = document.getElementById('greeting');

    if (name) {
        greetingDiv.innerText = `🎉 Happy New Year, ${name}! 🎉`;
        startFireworks();
    } else {
        greetingDiv.innerText = 'Please enter your name!';
    }
});

// Fireworks effect (basic)
function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Add basic fireworks code here later!
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Placeholder
}
