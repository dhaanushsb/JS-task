function changeColor(color) {
    // Change background color of the page
    document.body.style.backgroundColor = color;
    
    // Update the selected color hex code
    document.getElementById('selectedColorHexCode').textContent = color;
    
    // Reset all button backgrounds to default (if any were set)
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = '';
    });
    
    // Set background color of the clicked button
    event.currentTarget.style.backgroundColor = color;
    
    // Set text content of the span to match the button text
    document.getElementById('selectedColorHexCode').textContent = color;
}
