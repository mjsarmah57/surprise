document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const enterSiteButton = document.getElementById('enter-site');
    const surprisePage = document.getElementById('surprise-page');
    const backToMainButton = document.getElementById('back-to-main');
    const galleryButton = document.getElementById('gallery-button');
    const gallery = document.getElementById('gallery');
    const backToMainFromGalleryButton = document.getElementById('back-to-main-from-gallery');

    

    enterSiteButton.addEventListener('click', () => {
        landingPage.style.display = 'none';
        mainContent.style.display = 'block';
        music.play(); // Start music when entering
    });

    

    // Optional music control (click to toggle)
  //  document.addEventListener('click', () => {
   //     if (music.paused && mainContent.style.display === 'block') {
   //         music.play();
    //    } else if (mainContent.style.display === 'block') {
    //        music.pause();
    //    }
  //  });

    // Surprise page reveal (example - trigger however you want)
    // In this example, it's triggered after a delay
    setTimeout(() => {
        mainContent.style.display = 'none';
        surprisePage.style.display = 'block';
    }, 20000); // 3 minutes (180000 milliseconds) - adjust as needed

    backToMainButton.addEventListener('click', () => {
        surprisePage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Gallery button functionality
    galleryButton.addEventListener('click', () => {
        gallery.style.display = 'block';
        galleryButton.style.display = 'none'; // Hide the "View Gallery" button
    });

    backToMainFromGalleryButton.addEventListener('click', () => {
        gallery.style.display = 'none';
        galleryButton.style.display = 'block'; // Show the "View Gallery" button again
    });
});



// Function to show/hide the "Back to Top" button
function scrollFunction() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  // Scroll to top function
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Add the scroll event listener
  window.onscroll = function() {
    scrollFunction();
  };

