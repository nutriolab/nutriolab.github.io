const packages = document.querySelectorAll('.package');
packages.forEach(package => {
  package.addEventListener('click', () => {
    const options = package.getElementsByClassName('options')[0];
    if (options.className.indexOf(' hide') > 0) {
      options.className = options.className.replace(' hide', '');
    } else {
      options.className += ' hide';
    }
  });
});
