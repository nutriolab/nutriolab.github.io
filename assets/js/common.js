const setup = () => {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');
  logo.onclick = () => {
    menu.className = '';
  };
  const closeButton = document.getElementById('close-button');
  closeButton.onclick = () => {
    menu.className = 'closed';
  }
};

setup();
