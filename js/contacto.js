$(document).ready(function() {
    $('#loading').fadeOut('slow');
    $('body').removeClass('hidden');
  });

  const btn = document.getElementById('button');
  button.addEventListener('click', (e) => {

  })

  document.getElementById('form')
   .addEventListener('click','submit', function(event) {
     event.preventDefault();
  
     btn.value = 'Sending...';
  
     const serviceID = 'default_service';
     const templateID = 'template_v4wwurl';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });