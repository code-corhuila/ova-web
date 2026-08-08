/* =====================================================================
   OVA CORHUILA · Estructura de Datos · Semana 9 · Sesión 1
   Interacción: barra de lectura, scroll-spy, tabs, visualizador,
   autoevaluación con retroalimentación.
   Vanilla JS · sin dependencias · self-contained (SCORM-safe)
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Barra de progreso de lectura ---------- */
    const bar = document.getElementById('readingBar');
    const onScrollBar = () => {
        const h = document.documentElement;
        const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
        bar.style.width = Math.min(100, scrolled * 100) + '%';
    };
    window.addEventListener('scroll', onScrollBar);

    /* ---------- Scroll-spy en la navegación ---------- */
    const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
    const sections = navLinks
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
    const spy = () => {
        const y = window.scrollY + 140;
        let current = sections[0];
        sections.forEach(s => { if (s.offsetTop <= y) current = s; });
        navLinks.forEach(a => a.classList.toggle('active',
            a.getAttribute('href') === '#' + current.id));
    };
    window.addEventListener('scroll', spy);
    spy();

    /* ---------- Botón volver arriba ---------- */
    const topBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        topBtn.style.display = (window.scrollY > 320) ? 'block' : 'none';
    });
    topBtn.addEventListener('click', () =>
        window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ---------- Tabs de código ---------- */
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const panelId = btn.dataset.tab;
            const tabs = btn.closest('.tabs');
            tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(panelId).classList.add('active');
        });
    });

    /* ---------- Visualizador de recorridos ---------- */
    // Árbol de ejemplo:  A(B(D(G),E), C(_,F))
    const tree = {
        A: { l: 'B', r: 'C' },
        B: { l: 'D', r: 'E' },
        C: { l: null, r: 'F' },
        D: { l: 'G', r: null },
        E: { l: null, r: null },
        F: { l: null, r: null },
        G: { l: null, r: null }
    };
    const pre = [], ino = [], post = [];
    (function dfs(id) {
        if (!id) return;
        pre.push(id);
        dfs(tree[id].l);
        ino.push(id);
        dfs(tree[id].r);
        post.push(id);
    })('A');
    // BFS por niveles con cola
    const level = [];
    (function bfs() {
        const q = ['A'];
        while (q.length) {
            const id = q.shift();
            level.push(id);
            if (tree[id].l) q.push(tree[id].l);
            if (tree[id].r) q.push(tree[id].r);
        }
    })();
    const orders = { pre, in: ino, post, level };
    const labels = {
        pre: 'Preorden (Raíz → Izq → Der)',
        in: 'Inorden (Izq → Raíz → Der)',
        post: 'Postorden (Izq → Der → Raíz)',
        level: 'Por niveles (BFS)'
    };

    const seqEl = document.getElementById('vizSeq');
    const labelEl = document.getElementById('vizLabel');
    const nodeEls = {};
    document.querySelectorAll('.viz-node').forEach(n => { nodeEls[n.dataset.id] = n; });
    let animTimer = null;

    function resetViz() {
        if (animTimer) { clearTimeout(animTimer); animTimer = null; }
        Object.values(nodeEls).forEach(n => n.classList.remove('visited', 'current'));
        seqEl.innerHTML = '';
        labelEl.textContent = 'Elige un recorrido';
        setButtons(false);
    }
    function setButtons(disabled) {
        document.querySelectorAll('.viz-controls .btn-primary, .viz-controls .btn-lime')
            .forEach(b => b.disabled = disabled);
    }
    function play(order) {
        resetViz();
        const seq = orders[order];
        labelEl.textContent = labels[order];
        setButtons(true);
        let i = 0;
        const step = () => {
            if (i > 0) nodeEls[seq[i - 1]].classList.remove('current');
            if (i >= seq.length) {
                setButtons(false);
                animTimer = null;
                return;
            }
            const id = seq[i];
            nodeEls[id].classList.add('current');
            const span = document.createElement('span');
            span.className = 'step';
            span.textContent = (i === 0 ? '' : ' ') + id;
            seqEl.appendChild(span);
            requestAnimationFrame(() => span.classList.add('show'));
            setTimeout(() => nodeEls[id].classList.add('visited'), 350);
            i++;
            animTimer = setTimeout(step, 750);
        };
        step();
    }
    document.querySelectorAll('.viz-controls [data-order]').forEach(btn => {
        btn.addEventListener('click', () => play(btn.dataset.order));
    });
    document.getElementById('vizReset').addEventListener('click', resetViz);

    /* ---------- Autoevaluación ---------- */
    const explanations = [
        'La raíz se visita entre el subárbol izquierdo y el derecho: Izq → Raíz → Der.',
        'Preorden visita la raíz primero: A, luego el subárbol izquierdo (B, D, G, E) y por último el derecho (C, F).',
        'El recorrido por niveles usa una cola (FIFO) para procesar los nodos nivel por nivel.',
        'En un ABB, el inorden devuelve los elementos ordenados de menor a mayor.'
    ];
    let answered = 0, correctCount = 0;
    const answeredEl = document.getElementById('quizAnswered');
    const questions = Array.from(document.querySelectorAll('.q'));

    questions.forEach((q, qi) => {
        const opts = Array.from(q.querySelectorAll('.opt'));
        const correct = parseInt(q.dataset.correct, 10);
        const fb = q.querySelector('.feedback');
        opts.forEach((opt, oi) => {
            opt.addEventListener('click', () => {
                if (q.dataset.done) return;
                q.dataset.done = '1';
                answered++;
                answeredEl.textContent = answered;
                opts.forEach(o => o.disabled = true);
                opts[correct].classList.add('correct');
                if (oi === correct) {
                    correctCount++;
                    opt.insertAdjacentHTML('beforeend', '<span class="mark">✓</span>');
                    fb.className = 'feedback ok show';
                    fb.textContent = '¡Correcto! ' + explanations[qi];
                } else {
                    opt.classList.add('wrong');
                    opt.insertAdjacentHTML('beforeend', '<span class="mark">✕</span>');
                    opts[correct].insertAdjacentHTML('beforeend', '<span class="mark">✓</span>');
                    fb.className = 'feedback no show';
                    fb.textContent = 'Revisa: ' + explanations[qi];
                }
                if (answered === questions.length) showResult();
            });
        });
    });

    function showResult() {
        const res = document.getElementById('quizResult');
        document.getElementById('quizScore').textContent = correctCount + '/' + questions.length;
        const msg = document.getElementById('quizMsg');
        if (correctCount === questions.length) msg.textContent = '¡Excelente! Dominas los recorridos.';
        else if (correctCount >= questions.length / 2) msg.textContent = 'Bien. Repasa los puntos marcados en rojo.';
        else msg.textContent = 'Vuelve a la sección 4 y practica con el visualizador.';
        res.classList.add('show');
        res.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});
