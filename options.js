// Saves options to chrome.storage.sync.
function save_options() {

    var serverNo = parseInt(document.getElementById('serverNo').value, 10),
        postID = parseInt(document.getElementById('postID').value, 10),
        interval = parseInt(document.getElementById('interval').value, 10),
        message = document.getElementById('message').value;

    chrome.storage.sync.set({
        savedServerNo: serverNo,
        savedPostID: postID,
        savedInterval: interval,
        savedMessage: message
    }, function () {
    // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 1000);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.

    chrome.storage.sync.get(function (items) {
        document.getElementById('serverNo').value = items.savedServerNo;
        document.getElementById('postID').value = items.savedPostID;
        document.getElementById('interval').value = items.savedInterval;
        document.getElementById('message').value = items.savedMessage;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
