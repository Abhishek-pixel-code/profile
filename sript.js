 // Function to smoothly scroll to the section
 function scrollToSection(event) {
     event.preventDefault(); // Prevent default anchor click behavior
     const targetId = event.target.getAttribute('href'); // Get the target section ID
     const targetElement = document.querySelector(targetId); // Find the target section

     // Scroll to the target section smoothly
     if (targetElement) {
         targetElement.scrollIntoView({ behavior: 'smooth' });
     }
 }

 // Attach click event listeners to all navbar items
 document.querySelectorAll('nav a').forEach(item => {
     item.addEventListener('click', scrollToSection);
 });