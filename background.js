var BLOCKADS = true
var BLOCKIMG = false
browser.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {cancel:BLOCKADS}
	},
	{urls:blocked_domains},
	['blocking']
);
browser.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
	    console.log(details)
		return {cancel:BLOCKIMG}
	},
	{urls:['<all_urls>'],types:['image']},
	['blocking']
);
