const init = () => {
  var licensePoint = $('.company-license-nav-item');
  var licenseBox = $('.company-license-box');

  licensePoint.on('click', function(){
    var idLicense = $(this).attr('id');
    licensePoint.removeClass('is-active');

    $(this).addClass('is-active');

    if (idLicense == 'id-license-1'){
      $('.company-license-nav-license').addClass('is-active');
    } else {
      $('.company-license-nav-license').removeClass('is-active');
    }

    if (idLicense == 'id-license-2'){
      $('.company-license-nav-sertificate').addClass('is-active');
    } else {
      $('.company-license-nav-sertificate').removeClass('is-active');
    }

    if (idLicense == 'id-license-3'){
      $('.company-license-nav-evidence').addClass('is-active');
    } else {
      $('.company-license-nav-evidence').removeClass('is-active');
    }

  });
}

export default {
	init
};