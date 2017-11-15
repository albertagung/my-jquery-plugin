(function ($) {
	$.fn.emailValidator = function (email) {
		let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		let str = email[0].value
		if(str == str.match(pattern)){
			return true
		}
		else{
			return false
		}
	}
})(jQuery)
