// JavaScript to handle like functionality

// Initialize like counts
const likeCounts = {
    review1: 0,
    review2: 0
};

function likeReview(reviewId) {
    // Increment the like count
    if (likeCounts[reviewId] !== undefined) {
        likeCounts[reviewId]++;
        // Update the like count display
        const likeElement = document.getElementById(`${reviewId}-likes`);
        if (likeElement) {
            likeElement.textContent = `${likeCounts[reviewId]} gillamarkeringar`;
        }
        alert('Tack för att du gillade recensionen!');
    }
}
