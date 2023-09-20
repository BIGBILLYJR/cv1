document.addEventListener('DOMContentLoaded', () => {
    const matterTypeDropdown = document.getElementById('matterType');
    const displayArea = document.getElementById('displayArea');
    const question = document.getElementById('question');
    const feedback = document.getElementById('feedback');
    const quizButtons = document.querySelectorAll('.quizBtn');


    // Update display area based on dropdown selection
    matterTypeDropdown.addEventListener('change', (event) => {
        displayArea.textContent = matterProperties[event.target.value];
    });

    // Quiz logic
    function generateQuestion() {
        question.textContent = 'Which state of matter has ... property?'; // Change this to vary the question
    }
    generateQuestion();

   
    });


document.querySelectorAll('.cable').forEach(cable => {
    cable.addEventListener('mouseenter', function() {
        this.querySelector('.description').style.display = 'block';
    });
    cable.addEventListener('mouseleave', function() {
        this.querySelector('.description').style.display = 'none';
    });
});

document.getElementById('matterType').addEventListener('change', function() {
    const displayArea = document.getElementById('displayArea');

    // Reset classes
    displayArea.className = '';
    
    switch(this.value) {
        case 'solid':
            displayArea.textContent = 'Solids have a definite shape and volume.';
            displayArea.classList.add('solid');
            break;
        case 'liquid':
            displayArea.textContent = 'Liquids have a definite volume but take the shape of their container.';
            displayArea.classList.add('liquid');
            break;
        case 'gas':
            displayArea.textContent = 'Gases fill any container and do not have a definite shape or volume.';
            displayArea.classList.add('gas');
            break;
        case 'plasma':
            displayArea.textContent = 'Plasma is an ionized state of matter similar to gas.';
            displayArea.classList.add('plasma');
            break;
        case 'mixture':
            displayArea.textContent = 'Mixtures contain more than one chemical substance, and their properties can vary.';
            displayArea.classList.add('mixture');
            break;
        case 'pure':
            displayArea.textContent = 'Pure substances have consistent properties and are composed of only one type of element or compound.';
            displayArea.classList.add('pure');
            break;
        default:
            displayArea.textContent = 'Select a matter type to view its properties.';
    }
});

const quizButtons = document.querySelectorAll('.quizBtn');
quizButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const chosenAnswer = this.getAttribute('data-answer');
        const feedback = document.getElementById('feedback');
        // Assuming "solid", "liquid", "gas", and "plasma" are the correct answers for now. Adjust as needed.
        if(['solid', 'liquid', 'gas', 'plasma'].includes(chosenAnswer)) {
            feedback.textContent = 'Correct!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Try again.';
            feedback.style.color = 'red';
        }
    });
});