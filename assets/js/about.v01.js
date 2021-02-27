const setup = () => {
  setupLine();
  setupOutOfFlowCta();
}

const setupLine = () => {
  const line = document.getElementsByClassName('line-connector')[0];
  line.style.height = `${document.body.clientHeight}px`;
  const topSection = $('.about .container');
  line.style.left = `${topSection[0].getBoundingClientRect().right - line.clientWidth}px`; 
}

const setupOutOfFlowCta = () => {
  const cta = document.getElementsByClassName('cta-2')[0];
  const ctaContainer = $('.cta-container');
  cta.style.top = `${ctaContainer.offset().top + (ctaContainer.outerHeight() / 2)}px`;
}

$(window).on("load", function() {
  setup();
});
$(window).resize(function() {
  setup();
})
