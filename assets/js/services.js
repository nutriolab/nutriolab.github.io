const setup = () => {
  const packageTitles = Array.from(document.querySelectorAll('.package .title'));
  for (const [i, packageTitle] of packageTitles.entries()) {
    packageTitle.addEventListener('click', () => {
      closeAllButToggleOne(i);
    });
  }
}

const closeAllButToggleOne = toggleI => {
  const packagesOptions = Array.from(document.getElementsByClassName('options'));
  for (const [i, packageOptions] of packagesOptions.entries()) {
    if (i === toggleI) {
      if (packageOptions.className.indexOf(' hide') > 0) {
        setOptionsVisibility(packageOptions, false);
      } else {
        setOptionsVisibility(packageOptions, true);
      }
    } else {
      setOptionsVisibility(packageOptions, true);
    }
  }
}

const setOptionsVisibility = (options, hide) => {
  if (hide) {
    if (options.className.indexOf(' hide') > 0) {
      return;
    }
    options.className += ' hide';
  } else {
    options.className = options.className.replace(' hide', '');
  }
}

$(window).on("load", function() {
  setup();
});
