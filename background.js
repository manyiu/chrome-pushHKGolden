chrome.alarms.onAlarm.addListener(function (alarm) {

    var serverNo, postID, interval, message, pushLink;

    chrome.storage.sync.get(function (items) {
        serverNo = items.savedServerNo;
        postID = items.savedPostID;
        interval = items.savedInterval * 1000;
        message = items.savedMessage;
        pushLink = "http://forum" + serverNo + ".hkgolden.com/post.aspx?mt=Y&id=" + postID;
        chrome.tabs.create({url: pushLink}, function (tab) {
            chrome.tabs.executeScript(tab.ib, {
                code: 'document.getElementById("ctl00_ContentPlaceHolder1_messagetext").value = "' + message.replace(/(?:\r\n|\r|\n)/g, '\\n') + '";'/* + 'document.getElementById("ctl00_ContentPlaceHolder1_btn_Submit").click();'*/
            });
            setTimeout(function () { chrome.tabs.remove(tab.id, function () { }); }, interval);
        });
    });
});

