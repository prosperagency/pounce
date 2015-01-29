$ (document).ready (function () {
	mouse = {x: 0, y: 0};

	document.addEventListener ('mousemove', function (e) { 
		mouse.x = e.clientX || e.pageX; 
		mouse.y = e.clientY || e.pageY 
	}, false);
		
	pounce = function (element) {
		var img = $ ('<img>', {
			src: 'pounce.svg',
			style: 'position:absolute;top:' + mouse.y + 'px;left:' + mouse.x + 'px;'
		});
		
		$ ('body').append (img);
		
		var position = $ (element).offset ();
		position.top = position.top + ($ (element).height () / 2);
		position.left = position.left + ($ (element).width () / 2);
		
		console.log (element);
		console.log (position);

		$ (img).animate ({
			top:position.top,
			left:position.left
		}, 1000, 'linear', function () {
			$ (img).remove ();
		});
	};
});