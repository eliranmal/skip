$(function () {
	$('a[href^="/watch"]').parent().click(function () {
		window.eval.call(window, 'window.loadEpisode(true);');
	});
});
