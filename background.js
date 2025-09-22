chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "TIMER_DONE") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Time's Up!",
      message: "It's Time to break! 🚀"
    });
  }
});