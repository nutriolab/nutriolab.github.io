const commonSetup = () => {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');
  logo.onclick = () => {
    menu.className = '';
  };
  const closeButton = document.getElementById('close-button');
  closeButton.onclick = () => {
    menu.className = 'closed';
  }

  const langContainer = document.getElementById('lang-container');
  const langOptions = document.getElementById('lang-options');
  langContainer.onclick = () => {
    if (langOptions.className == 'closed') {
      langOptions.className = '';
    } else {
      langOptions.className = 'closed';
    }
  }
};

const bootstrap = () => {
  commonSetup();
  setup();
}

window.onload = bootstrap();
