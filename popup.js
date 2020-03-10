window.onload = function (){
	function updateLabel(dom,target) {
		var enabled = browser.extension.getBackgroundPage()[target];
		document.querySelector(dom).value = enabled ? 'Disable' : 'Enable';
	}

	document.querySelector('#blockads').addEventListener('click',function() {
		var background = browser.extension.getBackgroundPage();
		background.BLOCKADS = !background.BLOCKADS;
		updateLabel('#blockads','BLOCKADS');
	})
	document.querySelector('#blockimg').addEventListener('click',function() {
		var background = browser.extension.getBackgroundPage();
		background.BLOCKIMG = !background.BLOCKIMG;
		updateLabel('#blockimg','BLOCKIMG');
	})
    updateLabel('#blockimg','BLOCKIMG');
	updateLabel('#blockads','BLOCKADS');
}
