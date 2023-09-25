- your_folder/
    - your_html_file.html
    - script.js
    - styles.css
    - atxpowersupply.jpeg
    - sfxpowersupply.jpeg
    - aircooler.jpeg
    - liquidcooler.jpeg

document.addEventListener('DOMContentLoaded', () => {
    const matterTypeDropdown = document.getElementById('matterType');
    const displayArea = document.getElementById('displayArea');
    const question = document.getElementById('question');
    const feedback = document.getElementById('feedback');
    const quizButtons = document.querySelectorAll('.quizBtn');

    const matterProperties = {
        solid: 'Solids have a definite shape and volume.',
        liquid: 'Liquids have a definite volume but take the shape of their container.',
        gas: 'Gases fill any container and do not have a definite shape or volume.',
        plasma: 'Plasma is an ionized state of matter similar to gas.',
        mixture: 'Mixtures contain more than one chemical substance, and their properties can vary.',
        pure: 'Pure substances have consistent properties and are composed of only one type of element or compound.',
    };

    // Update display area based on dropdown selection
    matterTypeDropdown.addEventListener('change', (event) => {
        const matterType = event.target.value;
        displayArea.textContent = matterProperties[matterType] || 'Select a matter type to view its properties.';
        displayArea.className = matterType; // this sets the class for CSS styling
    });

    // Cable description interactive functionality
    document.querySelectorAll('.cable').forEach(cable => {
        cable.addEventListener('mouseenter', function() {
            this.querySelector('.description').style.display = 'block';
        });
        cable.addEventListener('mouseleave', function() {
            this.querySelector('.description').style.display = 'none';
        });
    });

    // Quiz logic
    function generateQuestion() {
        question.textContent = 'Which state of matter has fixed volume property?'; // Modify as needed
    }
    generateQuestion();

    quizButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const chosenAnswer = this.getAttribute('data-answer');
            // Assuming "solid", "liquid", "gas", and "plasma" are the correct answers for now. Adjust as needed.
            if(['solid', 'liquid'].includes(chosenAnswer)) {
                feedback.textContent = 'Correct!';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = 'Try again.';
                feedback.style.color = 'red';
            }
        });
    });
});
    


  // Existing JS code...

// Add this code
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("cpu").addEventListener("click", function() {
      alert("CPU: Central Processing Unit. The brain of the computer.");
    });
  
    document.getElementById("ram").addEventListener("click", function() {
      alert("RAM: Random Access Memory. Temporary storage for running applications.");
    });
  
    document.getElementById("pci").addEventListener("click", function() {
      alert("PCI: Peripheral Component Interconnect. For adding expansion cards like GPUs.");
    });
  });

  document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
  });
  
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropZone = document.getElementById("pci-slot");
    dropZone.appendChild(document.getElementById(data));
  });

  document.addEventListener("DOMContentLoaded", function() {
    const components = document.querySelectorAll('.motherboard-component');
    
    components.forEach((component) => {
      component.addEventListener('click', function(event) {
        const componentType = event.target.getAttribute('data-component');
        
        // Display detailed information based on componentType
        displayComponentInfo(componentType);
      });
    });
  });
  
  function displayComponentInfo(type) {
    // Here you'll populate the info for each component type
    const infoBox = document.querySelector('.info-box');
    
    if (type === 'CPU') {
      infoBox.innerHTML = 'Details about CPU, it stands for centeral prossecing unit and is the brains behind a computer';
    }
    if (type === 'RAM') {
        infoBox.innerHTML = 'Details about RAM. RAM is temporary memory so if your are playing a game it is using RAM most PCs have 8,16,32 or 64 gigabytes of RAM';
      }
    // add more cases for different components
  }
  
  const draggables = document.querySelectorAll('.GPU');
const containers = document.querySelectorAll('.Cooler');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

containers.forEach(container => {
  container.addEventListener('dragover', event => {
    event.preventDefault();
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);
  });
});




document.addEventListener("DOMContentLoaded", function () {
    // Get references to the SVG lines
    const solidGasLine = document.getElementById("solidGasLine");
    const liquidGasLine = document.getElementById("liquidGasLine");
    const liquidSolidLine = document.getElementById("liquidSolidLine");

    // Get references to the text labels
    const solidText = document.querySelector('text[x="100"][y="90"]');
    const gasText = document.querySelector('text[x="285"][y="90"]');
    const liquidText = document.querySelector('text[x="100"][y="320"]');

    // Get references to the temperature and pressure sliders
    const temperatureSlider = document.getElementById("temperature");
    const pressureSlider = document.getElementById("pressure");

    // Initial positions of the lines
    let initialTemperature = 50; // Adjust as needed
    let initialPressure = 50; // Adjust as needed

    // Function to update the position of lines and text labels
    function updateDiagram() {
        const temperature = Number(temperatureSlider.value) + initialTemperature;
        const pressure = Number(pressureSlider.value) + initialPressure;

        // Update the x2 attribute of each line based on the slider values
        solidGasLine.setAttribute("x2", 100 + temperature);
        liquidGasLine.setAttribute("x2", 300 - pressure);
        liquidSolidLine.setAttribute("x2", 100 + temperature);

        // Update the text labels' positions
        solidText.setAttribute("x", 100 + temperature - 20); // Adjusted position
        gasText.setAttribute("x", 285 - pressure);
        liquidText.setAttribute("x", 100 + temperature - 20); // Adjusted position
    }
})

function showConnector(connectorType) {
  const imgElement = document.getElementById('connectorImage');
  imgElement.src = connectorType.toLowerCase() + "powersupply.jpeg";
}

function showCooling(coolingType) {
  const imgElement = document.getElementById('coolingImage');
  imgElement.src = coolingType.toLowerCase() + "cooler.jpeg";
}





let hooked = false;

function grapple() {
    const wreckingBall = document.getElementById('wreckingBall');
    const hook = document.getElementById('hook');

    if (!hooked) {
        hook.style.display = 'block';
        let pos = 0;
        let id = setInterval(frame, 5);

        function frame() {
            if (pos >= 300) {
                clearInterval(id);
                hooked = true;
            } else {
                pos++; 
                hook.style.bottom = (50 + pos) + 'px';
            }
        }
    } else {
        hook.style.display = 'none';
        hooked = false;
    }
}


