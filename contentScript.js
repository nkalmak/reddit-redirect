chrome.storage.sync.get(['setUrl'], (result) => {
  if (!result.setUrl) {
    var newUrl;
    do {
      newUrl = prompt('Enter a full URL to redirect reddit to (include https://) :');
    } while (!newUrl.startsWith('http'));
    chrome.storage.sync.set({ 'setUrl': newUrl }, () => {
      console.log('Settings saved');
    })
    window.location = newUrl;
  } else {
    window.location = result.setUrl;
  }
})