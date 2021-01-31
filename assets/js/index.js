const bootstrap = () => {
  setupSectionTwo();
  setupConnectorLine();
  setupEndLine();
  setupScroll();
};

const setupSectionTwo = () => {
  const box = document.getElementsByClassName('box')[0];
  const testimonyContainer = document.getElementsByClassName('testimony-container')[0];

  // Float slices
  const slices = document.getElementsByClassName('slice');
  for (slice of slices) {
    const svg = slice.getElementsByTagName('svg')[0];
    svg.style.height = `${testimonyContainer.clientHeight}px`;
  }

  // Position slices
  const boxPosition = box.getBoundingClientRect();
  const testimonyOne = document.getElementsByClassName('testimony')[0];
  const testimonyOnePosition = testimonyOne.getBoundingClientRect();
  const testimonyOnePos = {
    x: testimonyOnePosition.x - boxPosition.x,
    y: testimonyOnePosition.y - boxPosition.y
  };
  const testimonyTwo = document.getElementsByClassName('testimony')[1];
  const testimonyTwoPosition = testimonyTwo.getBoundingClientRect();
  const testimonyTwoPos = {
    x: testimonyTwoPosition.x - boxPosition.x,
    y: testimonyTwoPosition.y - boxPosition.y
  };

  const padding = 50;
  const sliceTwo = document.getElementsByClassName('slice-two')[0];
  sliceTwo.style.top = `${(testimonyOnePos.y - (sliceTwo.clientWidth / 2)).toString()}px`;
  sliceTwo.style.left = `${(testimonyTwoPos.x + (testimonyTwo.clientWidth / 2) + padding).toString()}px`;
  const sliceThree = document.getElementsByClassName('slice-three')[0];
  sliceThree.style.top = `${(testimonyTwoPos.y).toString()}px`;
  sliceThree.style.left = `${(testimonyTwoPos.x - sliceThree.clientWidth - padding).toString()}px`;
}

const setupConnectorLine = () => {
  const landingCircle = document.getElementsByClassName('circle')[0];
  const landingCirclePosition = landingCircle.getBoundingClientRect();
  const sections = document.getElementsByClassName('fixed-padded-section');
  
  let height = 0;
  for (let i = 0; i < sections.length - 1; i++) {
    height += sections[i].clientHeight;
  }
  height = height - (landingCirclePosition.height / 2) - landingCircle.offsetParent.offsetTop;
  const lineConnector = document.getElementsByClassName('line-connector')[0];
  lineConnector.style.height = `${height}px`;
}

const setupEndLine = () => {
  const landingCircle = document.getElementsByClassName('circle')[0];
  const landingCirclePosition = landingCircle.getBoundingClientRect();
  const endLine = document.getElementsByClassName('line-end')[0];
  const endLineSvg = endLine.getElementsByTagName('svg')[0];
  endLine.style.width = `${landingCirclePosition.x + (landingCircle.clientWidth * 2)}px`;
  endLine.style.left = `-${landingCircle.clientWidth}px`;
  endLine.style.top = `-${endLineSvg.clientHeight * (3/4)}px`;
}

const setupScroll = () => {
  const controller = new ScrollMagic.Controller();
  
  // Section 1
  const scene1 = new ScrollMagic.Scene({
    duration: 100,
    offset: 50
  });
  controller.addScene(scene1);

  // Section 2
  const scene2 = new ScrollMagic.Scene({});
  controller.addScene(scene2);

  // Section 3
  const scene3 = new ScrollMagic.Scene({});
  controller.addScene(scene3);

  // Section 4
  const scene4 = new ScrollMagic.Scene({});
  controller.addScene(scene4);
};

window.onload = bootstrap;
window.onresize = bootstrap;
