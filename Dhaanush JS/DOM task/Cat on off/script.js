function toggleImages(isOn) {
    const bulbOnImage = document.getElementById('bulbOnImage');
    const catImage = document.getElementById('catImage');
    const bulbOffImage = document.getElementById('bulbOffImage');
    const catEyesImage = document.getElementById('catEyesImage');
  
    if (isOn) {
      bulbOnImage.classList.add('active');
      catImage.classList.add('active');
      bulbOffImage.classList.remove('active');
      catEyesImage.classList.remove('active');
    } else {
      bulbOnImage.classList.remove('active');
      catImage.classList.remove('active');
      bulbOffImage.classList.add('active');
      catEyesImage.classList.add('active');
    }
  }
  