function push() {
    chrome.browserAction.setIcon({path: "iconPushing.png"});
    var intervalMinute = parseInt(document.getElementById('interval').value, 10) / 60;
    chrome.alarms.create("pushAlarm", {periodInMinutes: intervalMinute});
    window.close();
}

function stop() {
    chrome.browserAction.setIcon({path: "icon.png"});
    chrome.alarms.clear("pushAlarm");
    window.close();
}

document.getElementById('push').addEventListener('click', push);
document.getElementById('stop').addEventListener('click', stop);
