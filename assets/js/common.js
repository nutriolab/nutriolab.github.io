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
    console.log('clicked');
    closeButton.onclick();
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
  typeof setup !== 'undefined' && setup();
}

window.onload = bootstrap;
window.onresize = bootstrap;
