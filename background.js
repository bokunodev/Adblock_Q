var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log(blocked_domains);
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);
