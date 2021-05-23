window.onload = () => {
  chrome.storage.sync.get(['setUrl'], (e) => {
    if (!e.setUrl) {
      var newUrl;
      do {
        newUrl = prompt('Enter a full URL to redirect reddit to (include https://) :')
      } while (!newUrl.startsWith('http'));
      chrome.storage.sync.set({ 'setUrl': newUrl }, () => {
        console.log('Settings saved');
      });
      window.location = newUrl;
    } else {
      window.location = e.setUrl;
    };
  });
}