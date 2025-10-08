document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.card-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });


    // Skill Carousel with Context Cards functionality
    document.addEventListener('DOMContentLoaded', () => {
        const skillCarousel = document.querySelector('.skill-carousel');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const skillCards = document.querySelectorAll('.skill-card');
    
        if (skillCarousel && prevButton && nextButton && skillCards.length > 0) {
            const cardWidth = skillCards[0].offsetWidth + 30; // Card width + margin
    
            nextButton.addEventListener('click', () => {
                skillCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });
    
            prevButton.addEventListener('click', () => {
                skillCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            });
        }
            // // Proficiency Ring Animation
            // skillCards.forEach(card => {
            //     const proficiencyRing = card.querySelector('.proficiency-ring');
            //     const proficiencyText = card.querySelector('.proficiency-text');
            //     const proficiency = parseInt(proficiencyRing.dataset.proficiency);
            //     const circle = card.querySelector('.progress-ring-circle');
            //     const radius = circle.r.baseVal.value;
            //     const circumference = 2 * Math.PI * radius;
    
            //     circle.style.strokeDasharray = `${circumference} ${circumference}`;
            //     circle.style.strokeDashoffset = circumference;
    
            //     const offset = circumference - (proficiency / 100) * circumference;
            //     circle.style.strokeDashoffset = offset;
    
            //     proficiencyText.textContent = `${proficiency}%`;
            // });
    });

    // // Tooltip functionality for Skill Garden
    // document.querySelectorAll('.skill-item[data-tooltip]').forEach(item => {
    //     item.addEventListener('mouseenter', () => {
    //         item.style.setProperty('--translate-y', '-120%'); // Adjust as needed
    //         item.style.setProperty('--scale', '1');
    //     });

    //     item.addEventListener('mouseleave', () => {
    //         item.style.setProperty('--scale', '0');
    //     });
    // });

    // // Skill Story Map (Timeline) hover effects
    // document.querySelectorAll('.timeline-content').forEach(item => {
    //     item.addEventListener('mouseenter', () => {
    //         item.classList.add('hovered');
    //     });

    //     item.addEventListener('mouseleave', () => {
    //         item.classList.remove('hovered');
    //     });
    // });

}); // End of DOMContentLoaded