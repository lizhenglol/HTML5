function onVisibilityChanged(){document.hidden||document.mozHidden||document.webkitHidden||document.msHidden?cr_setSuspended(!0):cr_setSuspended(!1)}jQuery(window).resize(function(){cr_sizeCanvas(jQuery(window).width(),jQuery(window).height())}),window.addEventListener("orientationchange",cr_sizeCanvas,!1),jQuery(document).ready(function(){cr_createRuntime("c2canvas"),cr_sizeCanvas(jQuery(window).width(),jQuery(window).height())}),document.addEventListener("visibilitychange",onVisibilityChanged,!1),document.addEventListener("mozvisibilitychange",onVisibilityChanged,!1),document.addEventListener("webkitvisibilitychange",onVisibilityChanged,!1),document.addEventListener("msvisibilitychange",onVisibilityChanged,!1)