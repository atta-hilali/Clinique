document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".number");
  
    numbers.forEach((num) => {
      const updateCounter = () => {
        const target = +num.getAttribute("data-target"); // Get target number
        const current = +num.innerText; // Get current number
        const increment = target / 100; // Adjust speed of animation
  
        if (current < target) {
          num.innerText = Math.ceil(current + increment); // Increment number
          setTimeout(updateCounter, 20); // Update every 20ms
        } else {
          num.innerText = target; // Set the final value
        }
      };
  
      updateCounter();
    });
  });
  