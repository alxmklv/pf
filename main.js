


 $(document).ready(function() {



// Chat Input behavour
  $('.chat-input').on('input', function() {
    this.style.height = 'auto';  // Reset height
    this.style.height = Math.min(this.scrollHeight, 25 * 16) + 'px';  // Set new height with max 25rem

    if (this.scrollHeight > 25 * 16) {  // Add scroll if height exceeds 25rem
      this.style.overflowY = 'auto';
    } else {
      this.style.overflowY = 'hidden';
    }
  });




// Scroll to bottom


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



///Send message


  // Function to scroll to the bottom of the chat container
  function scrollToBottom() {
    const chatWrapper = $('#chatColumn');
    chatWrapper.scrollTop(chatWrapper[0].scrollHeight);
  }

  // Function to scroll to bottom smoothly (for future scrolling)
  function scrollToBottomSmooth() {
    const chatWrapper = $('[layout-chat]');
    chatWrapper.scrollTop(chatWrapper[0].scrollHeight);
  }

  // Function to add a message
  function sendMessage() {
    const messageInput = $('[chat-input]');
    if (messageInput.val().trim() !== "") { // Check for non-empty value
      // Create the message structure
      const messageWrapper = $('<div class="w-layout-vflex message-user-wrapper"></div>');
      const messageInner = $('<div class="message-user-inner"></div>').text(messageInput.val());

      // Append the message content inside the wrapper
      messageWrapper.append(messageInner);

      // Append the wrapper to the chat container with ID #chatColumn
      $('#chatColumn').append(messageWrapper);

      // Clear the input field
      messageInput.val('');

      // Scroll to the bottom of the chat container after the message is added
      scrollToBottomSmooth();
    }
  }

  // Send message by pressing Enter (for textarea)
  $('[chat-input]').on('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) { // Enter key without Shift
      event.preventDefault(); // Prevent default behavior (new line)
      sendMessage();
    }
  });

  // Send message by clicking the send button
  $('[send-button]').on('click', function() {
    sendMessage();
  });


  const scrollableContainer = $('[scroll-container]'); // The container that you're scrolling inside

  // Function to check the scroll position and toggle visibility
  function toggleHiddenBefore() {
    const hiddenBeforeElements = $('[hidden-before]');
    const hiddenTriggerElement = $('[hidden-trigger]');
    const triggerPosition = hiddenTriggerElement.position().top; // Get the position relative to the container
    const triggerHeight = hiddenTriggerElement.outerHeight();  // Get the height of the trigger element
    const triggerScrollPoint = triggerPosition + triggerHeight; // Calculate when the element is fully scrolled

    if (scrollableContainer.scrollTop() >= triggerScrollPoint) {
      hiddenBeforeElements.show();  // Show elements when scrolled past the trigger element
    } else {
      hiddenBeforeElements.hide();  // Hide elements when above the scroll point
    }
  }

  // Run the function on scroll within the container
  scrollableContainer.on('scroll', function() {
    toggleHiddenBefore();
  });

  // Run the function on page load (in case the container starts scrolled)
  toggleHiddenBefore();







});
