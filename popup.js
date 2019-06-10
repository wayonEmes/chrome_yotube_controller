var open = document.getElementById("check_media");

var response = function (data) {
	alert(data.tips);
};

open.onclick = function (element) {
	// alert('即将打开一个有视频的网站，届时将自动检测是否存在视频！');
	// chrome.tabs.create({ url: 'http://www.w3school.com.cn/tiy/t.asp?f=html5_video' });

	chrome.tabs.query({ url: '*://www.youtube.com/*' }, function (tabs) {
		if (tabs.length === 0) {
			chrome.tabs.create({ 'url': "https://www.youtube.com/", 'pinned': true });
		}
	});
};