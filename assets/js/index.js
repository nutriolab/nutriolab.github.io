const bootstrap = () => {
  const landingCircle = document.getElementsByClassName('circle')[0];
  const landingCirclePosition = landingCircle.getBoundingClientRect();
  const landingCircleWidth = landingCircle.clientWidth;

  setupSectionTwo();
  setupConnectorLine(landingCirclePosition, landingCircle.offsetParent.offsetTop);
  setupEndLine(landingCirclePosition, landingCircleWidth);
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
  sliceTwo.style.left = `${(testimonyOnePos.x + testimonyOne.clientWidth + padding).toString()}px`;
  const sliceThree = document.getElementsByClassName('slice-three')[0];
  sliceThree.style.top = `${(testimonyTwoPos.y).toString()}px`;
  sliceThree.style.left = `${(testimonyTwoPos.x - sliceThree.clientWidth - padding).toString()}px`;
}

const setupConnectorLine = (landingCirclePosition, top) => {
  const sections = document.getElementsByClassName('fixed-padded-section');
  
  let height = 0;
  for (let i = 0; i < sections.length - 1; i++) {
    height += sections[i].clientHeight;
  }
  height = height - (landingCirclePosition.height / 2) - top;
  const lineConnector = document.getElementsByClassName('line-connector')[0];
  lineConnector.style.height = `${height}px`;
}

const setupEndLine = (landingCirclePosition, landingCircleWidth) => {
  const endLine = document.getElementsByClassName('line-end')[0];
  endLine.style.width = `${landingCirclePosition.x + landingCircleWidth}px`;
}

window.onload = bootstrap;
window.onresize = bootstrap;
