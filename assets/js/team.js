const setupLine = () => {
  const line = document.getElementsByClassName('line-connector')[0];
  line.style.height = `${document.body.clientHeight}px`;
  const teamSection = document.getElementsByClassName('team-section')[0];
  line.style.left = `${teamSection.getBoundingClientRect().right - line.clientWidth}px`;
};

const setup = () => {
  setupLine();  
}
