/* Dra. Inara Contin Rassi — comportamento mínimo.
   Nada de biblioteca: quatro coisas pequenas e só. */

(() => {
  'use strict';

  /* --------------------------------------------------------------
     1. Imagens que ainda não chegaram viram lacuna marcada.
     Assim que o arquivo for colocado em assets/img/, o placeholder
     some sozinho — não precisa mexer no HTML.
     -------------------------------------------------------------- */
  document.querySelectorAll('.frame, .painel__art').forEach((moldura) => {
    const img = moldura.querySelector('img');
    if (!img) return;

    // Parte-se do princípio de que falta; a foto que carregar limpa a marca.
    // (o caminho inverso — esperar o evento "error" — não é confiável em
    //  imagens fora da tela, que o navegador nem chega a pedir)
    const chegou = () => moldura.classList.remove('is-missing');
    moldura.classList.add('is-missing');

    if (img.complete && img.naturalWidth > 0) chegou();
    else img.addEventListener('load', chegou, { once: true });
  });

  /* --------------------------------------------------------------
     2. Menu do celular
     -------------------------------------------------------------- */
  const burger = document.querySelector('.burger');
  const navMobile = document.getElementById('nav-mobile');

  if (burger && navMobile) {
    const fechar = () => {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menu');
      navMobile.hidden = true;
    };

    burger.addEventListener('click', () => {
      const aberto = burger.getAttribute('aria-expanded') === 'true';
      if (aberto) {
        fechar();
      } else {
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Fechar menu');
        navMobile.hidden = false;
      }
    });

    navMobile.addEventListener('click', (e) => {
      if (e.target.closest('a')) fechar();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') fechar();
    });
  }

  /* --------------------------------------------------------------
     3. Barra do topo ganha filete depois do primeiro scroll
     -------------------------------------------------------------- */
  const topbar = document.querySelector('.topbar');
  if (topbar) {
    const sentinela = document.createElement('div');
    sentinela.style.cssText = 'position:absolute;top:0;height:1px;width:1px';
    document.body.prepend(sentinela);

    new IntersectionObserver(
      ([entrada]) => topbar.classList.toggle('is-stuck', !entrada.isIntersecting)
    ).observe(sentinela);
  }

  /* --------------------------------------------------------------
     4. Entrada em cena — só nos elementos com [data-reveal]
     -------------------------------------------------------------- */
  const alvos = document.querySelectorAll('[data-reveal]');
  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (semMovimento || !('IntersectionObserver' in window)) {
    alvos.forEach((el) => el.classList.add('is-in'));
  } else {
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add('is-in');
          obs.unobserve(entrada.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    alvos.forEach((el) => obs.observe(el));
  }

  /* Ano do rodapé */
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
