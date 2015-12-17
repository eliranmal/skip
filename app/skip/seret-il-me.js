
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
	linkNodes = [].slice.call(document.querySelectorAll('a[href]'));

linkNodes.forEach(function (node, index, collection) {

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			var href;
			if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
				href = mutation.target.href;
				if (href.startsWith('http://adf.ly')) {
					mutation.target.href = href.substring(href.lastIndexOf('http'));
				}
			}
		});
	});
	
	observer.observe(node, {
		attributes: true
	});
});


