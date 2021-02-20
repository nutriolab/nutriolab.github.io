const setup = () => {
  setupSectionTwo();
  setupConnectorLine();
  setupEndLine();
  setupScroll();
};

const setupSectionTwo = () => {
  const box = document.getElementsByClassName('box')[0];
  const testimonyContainer = document.getElementsByClassName('testimony-container')[0];

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
  sliceTwo.style.left = `${(testimonyOnePos.x + testimonyOne.clientWidth + 10).toString()}px`;
  const sliceThree = document.getElementsByClassName('slice-three')[0];
  sliceThree.style.top = `${(testimonyTwoPos.y).toString()}px`;
  sliceThree.style.left = `${(testimonyTwoPos.x - sliceThree.clientWidth - padding).toString()}px`;
}

const setupConnectorLine = () => {
  const landingCircle = document.getElementsByClassName('circle')[0];
  const landingCirclePosition = landingCircle.getBoundingClientRect();
  let sections = Array.from(document.getElementsByClassName('fixed-padded-section'));
  const extraSections = Array.from(document.getElementsByClassName('extra-section'));
  sections = sections.concat(extraSections);
  
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
  // const controller = new ScrollMagic.Controller({ addIndicators: true });
  const controller = new ScrollMagic.Controller();
  
  // Common scene  
  const sections = document.getElementsByClassName('fixed-padded-section');
  let scenes = [];
  let totalHeight = 0;
  const extraSection = document.getElementsByClassName('extra-section')[0];
  for (section of sections) {
    const scene = new ScrollMagic.Scene({
      duration: section.clientHeight + extraSection.clientHeight,
      offset: 0,
      triggerHook: "onEnter",
      triggerElement: section
    })
    scenes.push(scene);
    totalHeight += section.clientHeight + extraSection.clientHeight;
  }
  scenes[0].on('enter', () => {
    changeCommonEls('#0D25FD', 'white');
    changeSocialMediaColors('#E7FB69');
  });
  scenes[1].on('enter', () => {
    changeCommonEls('rgb(231, 251, 105)', '#0D25FD');
    changeSocialMediaColors('#0D25FD');
  });
  scenes[2].on('enter', () => {
    changeCommonEls('rgb(23, 22, 177)', 'white');
    changeSocialMediaColors('white');
  });
  scenes[3].on('enter', () => {
    changeCommonEls('rgb(196, 196, 196)', '#0D25FD');
    changeSocialMediaColors('#0D25FD');
  });

  for (scene of scenes) {
    controller.addScene(scene);
  }

  const lineConnector = document.getElementsByClassName('line-connector')[0];
  const circleBorder = document.getElementsByClassName('dashed-circle')[0];
  const endLineStroke = document.getElementsByClassName('rect-horizontal-stroke')[0];
  const commonScene = new ScrollMagic.Scene({
    duration: totalHeight,
    offset: 0,
    triggerHook: 'onCenter'
  })
  .on('progress', () => {
    circleBorder.style.strokeDashoffset = window.pageYOffset;
    lineConnector.style.webkitMaskPositionY = `${window.pageYOffset}px`;
    lineConnector.style.maskPositionY = `${window.pageYOffset}px`;
    endLineStroke.style.strokeDashoffset = `-${window.pageYOffset}`
  });
  controller.addScene(commonScene);
};

const changeCommonEls = (bgColor, strokeColor) => {
  let sections = Array.from(document.getElementsByClassName('fixed-padded-section'));
  const extraSections = Array.from(document.getElementsByClassName('extra-section'));
  sections = sections.concat(extraSections);
  const footerContainer = document.getElementsByClassName('footer-container')[0];
  sections.push(footerContainer);
  for (section of sections) {
    section.style.backgroundColor = bgColor;
  }
  const circleBorder = document.getElementById('circle-border');
  circleBorder.style.stroke = strokeColor;
  const lineConnector = document.getElementsByClassName('line-connector')[0];
  lineConnector.style.backgroundColor = strokeColor;
  const lineEnd = document.getElementsByClassName('rect-horizontal-stroke')[0];
  const lineEndStroke = lineEnd.getElementsByTagName('use')[0];
  lineEndStroke.style.stroke = strokeColor;
  const strokeComms = document.getElementsByClassName('stroke-comm');
  for (strokeComm of strokeComms) {
    strokeComm.style.stroke = strokeColor;
  }
}

const changeSocialMediaColors = color => {
  const socialMediaIcons = document.getElementsByClassName('social-media');
  for (socialMediaIcon of socialMediaIcons) {
    const paths = socialMediaIcon.getElementsByTagName('path');
    for (path of paths) {
      path.style.stroke = color;
    }
  }
}
