const topPart = document.getElementsByClassName('top')[0];
const aboutUsTitle = document.getElementsByClassName('about-us-title')[0];
const topWidth = topPart.clientWidth + topPart.offsetParent.offsetLeft;
const topHeight = aboutUsTitle.clientHeight + topPart.offsetParent.offsetTop;
const lineEndTop = document.getElementsByClassName('line-end-top')[0];
lineEndTop.style.width = `${topWidth * 2}px`;
lineEndTop.style.height = `${topHeight * 2}px`;

const lineEndBottom = document.getElementsByClassName('line-end-bottom')[0];
