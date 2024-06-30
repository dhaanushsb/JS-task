
    // JavaScript for handling button clicks and changing colors
    document.getElementById('stopButton').addEventListener('click', function() {
      document.getElementById('stopLight').style.backgroundColor = 'red';
      resetLights('stopLight');
      this.style.backgroundColor = 'red';
    });

    document.getElementById('readyButton').addEventListener('click', function() {
      document.getElementById('readyLight').style.backgroundColor = 'yellow';
      resetLights('readyLight');
      this.style.backgroundColor = 'yellow';
    });

    document.getElementById('goButton').addEventListener('click', function() {
      document.getElementById('goLight').style.backgroundColor = 'green';
      resetLights('goLight');
      this.style.backgroundColor = 'green';
    });

    // Function to reset other lights to default gray except the clicked one
    function resetLights(clickedLightId) {
      var lights = ['stopLight', 'readyLight', 'goLight'];
      lights.forEach(function(lightId) {
        if (lightId !== clickedLightId) {
          document.getElementById(lightId).style.backgroundColor = '#808080'; // Default gray
          document.getElementById(lightId.replace('Light', 'Button')).style.backgroundColor = ''; // Reset button color
        }
      });
    }
