document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    // Si está bloqueado, no hacer nada
    if (ramo.classList.contains('bloqueado')) return;

    // Alternar clase aprobado
    ramo.classList.toggle('aprobado');

    // Revalidar todos los ramos con prerrequisitos
    document.querySelectorAll('.ramo.bloqueado').forEach(r => {
      const requisitos = JSON.parse(r.getAttribute('data-prerrequisitos') || "[]");
      const aprobados = [...document.querySelectorAll('.ramo.aprobado')].map(e => e.dataset.nombre);
      const habilitado = requisitos.every(req => aprobados.includes(req));

      if (habilitado) {
        r.classList.remove('bloqueado');
      }
    });
  });
});

