function animateCounter(counterElement, target) {
    let current = 0;
    const duration = 2000; // 2 secondes
    const startTime = Date.now();
    
    function updateCounter() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        current = Math.min(target * progress, target);
        counterElement.textContent = Math.floor(current);
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } 
        else {
            counterElement.textContent = target; // Assure qu'on finit exactement à la valeur cible
        }
    }
    
    requestAnimationFrame(updateCounter);
}
  
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            counter.classList.add('visible');
            animateCounter(counter, target);
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});