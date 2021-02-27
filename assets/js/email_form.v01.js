const setupForm = () => {
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
    const whatsappNumber = document.getElementsByName('whatsapp-number')[0];
    if (!whatsappNumber.value) {
      setHelperMessage(whatsappNumber, true);
      valid = false;
    } else {
      setHelperMessage(whatsappNumber, false);
    }
    const businessName = document.getElementsByName('business-name')[0];
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

    const data = {
      service_id: 'service_owpbfpv',
      template_id: 'template_uphwfvj',
      user_id: 'user_LuhkWzKItFUM76Q0inNdL',
      template_params: {
          full_name: fullName.value,
          email: email.value,
          whatsapp_number: whatsappNumber.value,
          business_name: businessName.value,
          subject: subject.value,
          message: message.value
      }
    };
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        $('#modal-email').modal('hide');
        $('#modal-email-success').modal('show');
      }).fail(function(error) {
        $('#modal-email').modal('hide');
        $('#modal-email-failure').modal('show');
    });
  };

  const setHelperMessage = (inputElement, isDisplayed) => {
    const helperMessage = document.getElementById(inputElement.name + "-helper-message");
    if (isDisplayed) {
      helperMessage.className = helperMessage.className.replace(" hide", "");
    } else {
      helperMessage.className += " hide";
    }
  }
}

$(window).on("load", function() {
  setupForm();
});
$(window).resize(function() {
  setupForm();
})
