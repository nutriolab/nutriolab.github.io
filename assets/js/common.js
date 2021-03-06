const commonSetup = () => {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');
  const menuOverlay = document.getElementById('menu-overlay');
  logo.onclick = () => {
    menu.className = '';
    menuOverlay.className = 'active';
  };
  const closeButton = document.getElementsByClassName('close-button')[0];
  closeButton.onclick = () => {
    menu.className = 'closed';
    menuOverlay.className = '';
  }
  
  const closeSelectedLang = () => {
    langOptions.className = 'closed';
    menuOverlay.className = '';
  }

  menuOverlay.onclick = (e) => {
    closeButton.onclick();
    closeSelectedLang();
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

$(window).on("load", function() {
  commonSetup();
});
