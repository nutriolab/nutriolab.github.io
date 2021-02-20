const setup = () => {
  setupHorizontalSquare();
  setupVerticalSquare();
}

const padding = 25;
const setupHorizontalSquare = () => {
  const horizontalSquare = document.getElementsByClassName('rect-horizontal')[0];
  const horizontalSquareSvg = horizontalSquare.getElementsByTagName('svg')[0];
  
  const aboutUsTitle = document.getElementsByClassName('about-us-title')[0];
  const width = aboutUsTitle.clientWidth + aboutUsTitle.offsetParent.offsetLeft;
  horizontalSquare.style.width = `${width * 2}px`;

  const offsetTop = horizontalSquareSvg.clientHeight - (aboutUsTitle.offsetParent.offsetTop + aboutUsTitle.clientHeight + padding);
  horizontalSquare.style.top = `-${offsetTop}px`;
  horizontalSquare.style.left = `-${width}px`;
};

const setupVerticalSquare = () => {
  const verticalSquare = document.getElementsByClassName('rect-vertical')[0];

  const visMis = document.getElementsByClassName('vision-mission')[0];
  const ctaContainer = document.getElementsByClassName('cta-container')[0];
  const values = document.getElementsByClassName('values')[0];
  const footerContainer = document.getElementsByClassName('footer-container')[0];
  const rightPadding = window.innerWidth - visMis.getBoundingClientRect().right;
  const width = visMis.clientWidth + rightPadding;

  verticalSquare.style.width = `${width * 2}px`;
  verticalSquare.style.left = `${visMis.offsetParent.offsetLeft}px`;
};
