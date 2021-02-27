const setup = () => {
  setupLine();
  setupOutOfFlowCta();
}

const setupLine = () => {
  const line = document.getElementsByClassName('line-connector')[0];
  line.style.height = `${document.body.clientHeight}px`;
  const topSection = document.getElementsByClassName('top')[0];
  line.style.left = `${topSection.getBoundingClientRect().right - line.clientWidth}px`; 
}

const setupOutOfFlowCta = () => {
  const cta = document.getElementsByClassName('cta-2')[0];
  const visionMission = document.getElementsByClassName('vision-mission')[0];
  cta.style.top = `${visionMission.getBoundingClientRect().bottom + 50}px`;
}