﻿if (location.host == "www.gkkxd.com" && location.protocol == "https:") {
	if (location.href.indexOf("https://www.gkkxd.com/KXD/kxd/lcgl.shtml?action=getLCXXByPage") > -1) {
		var o = {}
		function requestPermission() {
			webkitNotifications.requestPermission();
		}
		function notify(title, msg) {
			var notification = webkitNotifications.createNotification("https://www.gkkxd.com/favicon.ico", title, msg);
			notification.show();
		}
		var tbody = document.getElementsByTagName('tbody')[0];
		if (webkitNotifications.checkPermission() != 0) {
			var btn = document.createElement('input');
			btn.type = 'button';
			btn.value = 'requestPermission';
			tbody.appendChild(btn);
			btn.onclick = requestPermission;
			btn = null;
		}
		var trs = tbody.getElementsByTagName('tr');
		for (var i = 0; i < trs.length; ++i) {
			var tr = trs[i];
			var tds = tr.getElementsByTagName('td');
			var id = tds[0].innerText;
			var duration = tds[4].innerText;
			duration = duration.substring(0, duration.length - 2);
			var interest = tds[5].innerText;
			interest = interest.substring(0, interest.length - 1);
			if (interest >= 10 || (duration <= 6)) {
				var url = tds[0].getElementsByTagName('a')[0]['href'];
				if (o[url]) continue;
				var gap = tds[2].innerText;
				if (gap == '￥0') continue;
				o[url] = 1;
				notify('got', id + "\n" + duration + "\n" + interest + "\n" + gap);
			}
			console.log(id + "\n" + duration + "\n" + interest);
		}
		setTimeout(function () {
			location.href = location.href;
		}, 5000);
	}
}
