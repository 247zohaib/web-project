document.getElementById('changeGreeting').addEventListener('click', function() {
    const greetings = [
        "Hello, World!",
        "Welcome to My Web App!",
        "Enjoy Your Stay!",
        "Have a Great Day!",
        "Keep Smiling!"
    ];
    
    const randomIndex = Math.floor(Math.random() * greetings.length);
    document.getElementById('greeting').textContent = greetings[randomIndex];
});

