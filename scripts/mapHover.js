Event.observe(window, 'load', function() {
	var mapLinks = $('headermap').childNodes;
	$A(mapLinks).map(function(element) {
		Event.observe(element, 'mouseover', function(){ $('mapBlock').addClassName(element.id)});
		Event.observe(element, 'mouseout', function(){ $('mapBlock').removeClassName(element.id)});
	});
});
