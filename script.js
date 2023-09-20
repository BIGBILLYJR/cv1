document.addEventListener('DOMContentLoaded', () => {
    const matterTypeDropdown = document.getElementById('matterType');
    const displayArea = document.getElementById('displayArea');
    const question = document.getElementById('question');
    const feedback = document.getElementById('feedback');
    const quizButtons = document.querySelectorAll('.quizBtn');

    const matterProperties = {
        solid: 'Properties of solid...',
        liquid: 'Properties of liquid...',
        // ... Add properties for other types
    };

    // Update display area based on dropdown selection
    matterTypeDropdown.addEventListener('change', (event) => {
        displayArea.textContent = matterProperties[event.target.value];
    });

    // Quiz logic
    function generateQuestion() {
        question.textContent = 'Which state of matter has ... property?'; // Change this to vary the question
    }
    generateQuestion();

    quizButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Basic logic to check answer. Modify as needed
            if (event.target.dataset.answer === 'solid') { // Simplified check; you can extend this logic
                feedback.textContent = 'Correct!';
            } else {
                feedback.textContent = 'Try again!';
            }
        });
    });
});


document.querySelectorAll('.cable').forEach(cable => {
    cable.addEventListener('mouseenter', function() {
        this.querySelector('.description').style.display = 'block';
    });
    cable.addEventListener('mouseleave', function() {
        this.querySelector('.description').style.display = 'none';
    });
});