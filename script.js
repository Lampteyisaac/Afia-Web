var images = document.querySelectorAll('.slider-img');
var currentIndex = 0;

function showImage(index) {
  // Hide all images
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  // Show the selected image
  images[index].style.display = 'block';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Set interval for automatic sliding (change 3000 to the desired interval in milliseconds)
setInterval(nextImage, 3000);

// Show the first image initially
showImage(currentIndex);



