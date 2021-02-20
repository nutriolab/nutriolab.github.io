const setupLine = () => {
  const line = document.getElementsByClassName('line')[0];
  line.style.height = `${document.body.clientHeight}px`;
  const teamSection = document.getElementsByClassName('team-section')[0];
  line.style.left = `${teamSection.getBoundingClientRect().right}px`;
};

const setup = () => {
  setupLine();  
}
