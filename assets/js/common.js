const commonSetup = () => {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');
  const menuOverlay = document.getElementById('menu-overlay');
  logo.onclick = () => {
    menu.className = '';
    menuOverlay.className = 'active';
  };
  const closeButton = document.getElementById('close-button');
  closeButton.onclick = () => {
    menu.className = 'closed';
    menuOverlay.className = '';
  }

  menuOverlay.onclick = (e) => {
    closeButton.onclick();
    selectedLangContainer.onclick();
  }

  const selectedLangContainer = document.getElementsByClassName('select-lang')[0];
  const langOptions = document.getElementById('lang-options');
  selectedLangContainer.onclick = () => {
    if (langOptions.className == 'closed') {
      langOptions.className = '';
      menuOverlay.className = 'active';
    } else {
      langOptions.className = 'closed';
      menuOverlay.className = '';
    }
  }
};

const bootstrap = () => {
  commonSetup();
  typeof setup !== 'undefined' && setup();
}

window.onload = bootstrap;
window.onresize = bootstrap;
