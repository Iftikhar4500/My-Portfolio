document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close the menu after clicking a link
            document.querySelector('.nav').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});


//animated name
document.addEventListener("DOMContentLoaded", () => {
    const typedText = document.querySelector('.typed-text');
    const cursor = document.querySelector('.typing-cursor');
    
    const text = "Iftikhar Ahmad";
    let index = 0;
    let typing = true;
    
    function type() {
        if (typing) {
            if (index < text.length) {
                typedText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 150); // Typing speed
            } else {
                setTimeout(() => {
                    typing = false;
                    type();
                }, 2000); // Wait before deleting
            }
        } else {
            if (index > 0) {
                typedText.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(type, 100); // Deleting speed
            } else {
                setTimeout(() => {
                    typing = true;
                    type();
                }, 500); // Wait before typing again
            }
        }
    }

    type();
});


