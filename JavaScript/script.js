 document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-number');
    const options = { threshold: 0.5 };

    const animate = (el, target) => {
      let count = 0;
      const step = () => {
        count += 1;
        el.textContent = count + '%';
        if (count < target) requestAnimationFrame(step);
      };
      step();
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.textContent);
          animate(el, target);
          obs.unobserve(el);
        }
      });
    }, options);

    counters.forEach(counter => observer.observe(counter));
  });