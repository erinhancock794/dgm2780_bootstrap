// gsap.to(".topButton", {duration: 3, x: 300});


gsap.to(".gsap", { 
  duration: 1.5,
  repeat: -1,
  "--x": 1,
  "--y": 1,
  "--angle": "360deg"
});



(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  })()
  

  $(window).on('load', function () {
    $('#myModal').modal('show')
  })

  $('.carousel').carousel({
    interval: 2000
  })

  function terms_change(checkbox) {
    //If it is checked.
    if (checkbox.checked) {
        console.log('checked');
    }
    //If it has been unchecked.
    else {
        console.log('unchecked');
    }
};


function validate() { //ensures that at least one checkbox is ticked
    let checkBoxes = document.getElementsByClassName('myCheckBox');
    let isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked = true;
        };
    };
    if (isChecked) {
        return;
    } else {
        alert('Must select at least one update!');
        
    }
}

