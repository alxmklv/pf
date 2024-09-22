

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
  // Function to scroll to bottom instantly
  function scrollToBottomInstant() {
    const chatWrapper = $('[layout-chat]');
    chatWrapper.css('scroll-behavior', 'auto');  // Disable smooth scrolling
    chatWrapper.scrollTop(chatWrapper[0].scrollHeight);  // Scroll instantly
    chatWrapper.css('scroll-behavior', 'smooth');  // Re-enable smooth scrolling
  }

  // Function to scroll to bottom smoothly (for future scrolling)
  function scrollToBottomSmooth() {
    const chatWrapper = $('[layout-chat]');
    chatWrapper.scrollTop(chatWrapper[0].scrollHeight);
  }

  // Add MutationObserver to detect any new nodes being added
  const chatWrapper = document.querySelector('[layout-chat]');
  const observer = new MutationObserver(() => {
    scrollToBottomSmooth(); // Scroll smoothly whenever new content is added
  });

  // Observe the chat wrapper for changes (new child nodes)
  observer.observe(chatWrapper, { childList: true });

  // Initial scroll to bottom without smooth behavior
  scrollToBottomInstant();
});

$(document).ready(function() {
  // Function to add a message from input selected by [chat-input]
  $('[chat-input]').on('keypress', function(event) {
    if (event.which === 13 && this.value.trim() !== "") { // Enter key and non-empty value
      const newMessage = $('<div class="message"></div>').text(this.value); // Create new message
      $('.chat_column').append(newMessage);  // Append message to .chat_column
      this.value = '';  // Clear input field
    }
  });
});
