document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    // The scroll-container's height determines how long the animation takes.
    // 200vh means the animation will complete over a scroll distance equal to the screen's height.
    const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.style.height = '200vh';

    window.addEventListener('scroll', () => {
        // Calculate scroll progress from 0 (top) to 1 (bottom of the animation distance)
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;
        let progress = scrollPosition / windowHeight;

        // Ensure progress stays between 0 and 1
        progress = Math.min(1, Math.max(0, progress));

        // --- Animate Section 1: Zoom out and fade out ---
        const scaleOut = 1 - progress * 0.5; // Scales from 1 down to 0.5
        const opacityOut = 1 - progress; // Fades from 1 down to 0

        section1.style.transform = `scale(${scaleOut})`;
        section1.style.opacity = opacityOut;

        // --- Animate Section 2: Fade in and normalize zoom ---
        const scaleIn = 1.5 - progress * 0.5; // Scales from 1.5 down to 1
        const opacityIn = progress; // Fades from 0 up to 1

        section2.style.transform = `scale(${scaleIn})`;
        section2.style.opacity = opacityIn;
    });

    // Run the scroll function once on load to set the initial state correctly
    window.dispatchEvent(new Event('scroll'));
});