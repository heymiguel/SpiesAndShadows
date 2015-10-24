var sns ={};

//jquery listeners

sns.navigationListener = function(){
	$('.mainNavigation li').on('click', function(e){
		e.preventDefault();
		var selected = this.className;
		var secondNav = "";

		switch (selected){
			case "showGame":
				secondNav = "theGame";
				break;
			case "showWorld":
				secondNav = "theWorld";
				break;
			case "showAbout":
				secondNav = "about";
				break;
			case "showDownload":
				secondNav = "downloads";
				break;
		}
		console.log(secondNav);
		//hide all non selected menus
		$('.subNav').hide();
		$('.'+secondNav).show();
		//show this one

		// console.log(e.currentTarget.className);
		//need to turn all other menus off first
		

	});
};

//document ready function
sns.init = function (){
	sns.navigationListener();
};

//document ready 

$(document).ready(function(){
  sns.init();
}); 