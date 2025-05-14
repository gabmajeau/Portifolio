  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) return; // ignora âncoras

      e.preventDefault();
      const fade = document.getElementById('fade');
      fade.classList.add('active');

      setTimeout(() => {
        window.location.href = href;
      }, 800); // igual ao tempo do transition
    });
  });