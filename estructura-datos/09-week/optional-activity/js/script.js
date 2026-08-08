/* OVA CORHUILA · Actividad práctica · Semana 9 · interacción mínima */
document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('readingBar');
    if (bar) window.addEventListener('scroll', () => {
        const h = document.documentElement;
        bar.style.width = Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100) + '%';
    });

    const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
    const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const spy = () => {
        const y = window.scrollY + 140;
        let cur = sections[0];
        sections.forEach(s => { if (s.offsetTop <= y) cur = s; });
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur.id));
    };
    window.addEventListener('scroll', spy); spy();

    const topBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => { topBtn.style.display = window.scrollY > 320 ? 'block' : 'none'; });
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Persistencia local de la lista de verificación
    const boxes = document.querySelectorAll('#checklist input[type=checkbox]');
    boxes.forEach((b, i) => {
        try { b.checked = localStorage.getItem('oa_s9_chk_' + i) === '1'; } catch (e) {}
        b.addEventListener('change', () => {
            try { localStorage.setItem('oa_s9_chk_' + i, b.checked ? '1' : '0'); } catch (e) {}
        });
    });
});
