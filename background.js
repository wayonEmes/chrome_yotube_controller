// // web请求监听，最后一个参数表示阻塞式，需单独声明权限：webRequestBlocking
// chrome.webRequest.onBeforeRequest.addListener(details => {
// 	// 简单的音视频检测
// 	// 大部分网站视频的type并不是media，且视频做了防下载处理，所以这里仅仅是为了演示效果，无实际意义
// 	if (details.type == 'media') {
// 		chrome.notifications.create(null, {
// 			type: 'image',
// 			iconUrl: 'img/sds.png',
// 			title: '祝福',
// 			message: '骚年，祝你圣诞快乐！Merry christmas!',
// 			imageUrl: 'img/sds.png'
// 		});
// 	}
// }, { urls: ["<all_urls>"] }, ["blocking"]);

chrome.commands.onCommand.addListener(function (command) {
	setupYoutubeCommand(command);
	setupXmlyCommand(command);
});

/**
 * Youtube
 */
function setupYoutubeCommand(command) {
	chrome.tabs.query({ url: '*://www.youtube.com/*' }, function (tabs) {
		if (tabs.length === 0) {
			return true;
		}
		var action = command;
		if (command == 'ply') {
			action = 'ytp-play-button';
		} else if (command == 'nxt') {
			action = 'ytp-next-button'
		}
		console.log('action = ' + action);
		var tab = tabs[0].id;
		chrome.tabs.sendMessage(tab, action);
	});
}
var isPlay = false;
/**
 * 喜马拉雅
 */
function setupXmlyCommand(command) {
	chrome.tabs.query({ url: '*://www.ximalaya.com/*' }, function (tabs) {
		if (tabs.length === 0) {
			return true;
		}
		var action = command;
		if (command == 'ply') {
			if (isPlay) {
				action = 'pause';
				isPlay = false;
			} else {
				action = 'play';
				isPlay = true;
			}
		} else if (command == 'nxt') {
			action = 'next'
		}
		console.log('action = ' + action);
		var tab = tabs[0].id;
		chrome.tabs.sendMessage(tab, action);
	});
}