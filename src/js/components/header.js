import helpers from '../helpers';


const init = () => {
  var menuImg = $('.header-mob-right-menu-img');
	var menuBox = $('.header-mob-right-menu-box');

  menuImg.on('click', function(){

      menuImg.parent().toggleClass('is-active');
      menuBox.toggleClass('is-active');

    });
}



export default {
	init
};
