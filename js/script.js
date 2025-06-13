  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) return; 

      e.preventDefault();
      const fade = document.getElementById('fade');
      fade.classList.add('active');

      setTimeout(() => {
        window.location.href = href;
      }, 800);
    });
  });
  
 
  const btn = document.getElementById('dropdownBtn');
  const menu = document.getElementById('dropdownMenu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('show');
  });


  window.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  });

  
  function playSoundThenRedirect() {
    const audio = document.getElementById("meuAudio");
    audio.play();
    setTimeout(() => {
      window.location.href = "https://gabmajeau.github.io/Zelda-TailwindCSS/";
    }, 1000); 
  }


