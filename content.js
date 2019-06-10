
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	console.log("message = " + message);
	let actElement = document.getElementsByClassName(message)[0];
	console.log(actElement);
	// if (/^\./.test(message)) {
		actElement.click();
	// }
});