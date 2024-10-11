// Function to generate random star positions
function createStars(count) {
    const container = document.getElementById('starContainer');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    for (let i = 0; i < count; i++) {
        // Create a star element
        const star = document.createElement('div');
        star.classList.add('star');

        // Generate random positions within the container
        const randomX = Math.floor(Math.random() * containerWidth);
        const randomY = Math.floor(Math.random() * containerHeight);

        // Set the star's position
        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;

        // Append the star to the container
        container.appendChild(star);
    }
}

// Call the function to create 50 stars
createStars(50);
