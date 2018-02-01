//Naeun Kim | 2018.02.01


$(document).ready(function(){

	var isMobile = window.matchMedia("only screen and (max-width: 425px)");

	if (isMobile.matches) {
		$('.icon').filter(function(){
			var icons = this.className.slice(-1);
			for(var i = 0; i < icons.length; i++) {
				if(icons === 'w') {
					this.className += '-s';
				}
			}
		})
	}

});