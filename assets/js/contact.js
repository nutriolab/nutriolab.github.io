const sendButton = document.getElementsByClassName('send-button')[0];
sendButton.onclick = () => {
  let valid = true;
  const fullName = document.getElementsByName('fullName')[0];
  if (!fullName.value) {
    setHelperMessage(fullName, true);
    valid = false;
  } else {
    setHelperMessage(fullName, false);
  }
  const email = document.getElementsByName('email')[0];
  if (!email.value) {
    setHelperMessage(email, true);
    valid = false;
  } else {
    setHelperMessage(email, false);
  }
  const subject = document.getElementsByName('subject')[0];
  if (!subject.value) {
    setHelperMessage(subject, true);
    valid = false;
  } else {
    setHelperMessage(subject, false);
  }
  const message = document.getElementsByName('message')[0];
  if (!message.value) {
    setHelperMessage(message, true);
    valid = false;
  } else {
    setHelperMessage(message, false);
  }

  if (!valid) {
    return;
  }

  console.log(fullName.value, email.value, subject.value, message.value);
};

const setHelperMessage = (inputElement, isDisplayed) => {
  const helperMessage = document.getElementById(inputElement.name + "-helper-message");
  if (isDisplayed) {
    helperMessage.className = helperMessage.className.replace(" hide", "");
  } else {
    helperMessage.className += " hide";
  }
}

// function isCalendlyEvent(e) {
//   return e.data.event &&
//          e.data.event.indexOf('calendly') === 0;
// };
 
// window.addEventListener(
//   'message',
//   function(e) {
//     if (isCalendlyEvent(e)) {
//       console.log(e.data);
//     }
//   }
// );