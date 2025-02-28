chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'CHANGE_COLOR' && sender.tab?.id) {
    const color: string = message.color

    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      args: [color],
      func: (color) => {
        document.querySelectorAll('*').forEach((el) => {
          ;(el as HTMLElement).style.color = color as string
          ;(el as HTMLElement).style.backgroundColor = 'black'
        })
      }
    })
  }
})
