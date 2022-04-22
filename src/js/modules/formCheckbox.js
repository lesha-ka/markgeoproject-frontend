const init = () => {

  var checkboxIsChecked = $('#form-checkbox');
  function checked(){     
    
    if( checkboxIsChecked[0].checked == true ) { 
      checkboxIsChecked.val('1');
    } else {
      checkboxIsChecked.val('0');
    }
  }
  checkboxIsChecked.on('click', function() {
    checked();
  });

  // отправка формы
  
  $('#login-form-submit').on('click', function() {
    $('#login-form-submit-post').trigger('click');
  });
};

export default {
	init
};
