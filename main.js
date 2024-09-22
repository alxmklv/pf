

// Chat Input behavour
 $(document).ready(function() {
  $('.chat-input').on('input', function() {
    this.style.height = 'auto';  // Reset height
    this.style.height = Math.min(this.scrollHeight, 25 * 16) + 'px';  // Set new height with max 25rem

    if (this.scrollHeight > 25 * 16) {  // Add scroll if height exceeds 25rem
      this.style.overflowY = 'auto';
    } else {
      this.style.overflowY = 'hidden';
    }
  });
});



// Scroll to bottom

$(document).ready(function() {
  // Function to scroll to bottom
  function scrollToBottom() {
    const chatWrapper = $('[layout-chat]');
    chatWrapper.scrollTop(chatWrapper[0].scrollHeight);
  }

  // Add MutationObserver to detect any new nodes being added
  const chatWrapper = document.querySelector('[layout-chat]');
  const observer = new MutationObserver(() => {
    scrollToBottom(); // Scroll to bottom whenever new content is added
  });

  // Observe the chat wrapper for changes (new child nodes)
  observer.observe(chatWrapper, { childList: true });

  // Initial scroll to bottom on page load
  scrollToBottom();
});
