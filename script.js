// Animação de entrada das seções ao rolar a página
const elements = document.querySelectorAll('.fade-up');

// Se o navegador não suportar IntersectionObserver, mostra tudo direto
if (!('IntersectionObserver' in window)) {
  elements.forEach(el => el.classList.add('show'));
  } else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
              if (entry.isIntersecting) {
                      entry.target.classList.add('show');
                              observer.unobserve(entry.target); // para de observar depois
                                    }
                                        });
                                          }, {
                                              threshold: 0.1
                                                });

                                                  elements.forEach(el => observer.observe(el));
                                                  }