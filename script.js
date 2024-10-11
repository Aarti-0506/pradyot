// Function to generate random stars across the page
function createStars(numStars) {
    const starContainer = document.getElementById('star-container');
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position for stars
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // Set position
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        
        // Random size for the stars
        const size = Math.random() * 3 + 1;  // Size between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Add the star to the container
        starContainer.appendChild(star);
    }
}

// Generate 150 stars (you can change this number)
createStars(150);
const starContainer = document.getElementById('star-container');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw'; // Random position
    star.style.top = Math.random() * 100 + 'vh'; // Random position
    star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed
    starContainer.appendChild(star);
}

// Create a number of stars
for (let i = 0; i < 100; i++) {
    createStar();
}
