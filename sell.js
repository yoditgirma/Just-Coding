
// FAQ js

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const icon = button.querySelector('.toggle-icon');
    const isOpen = faqItem.classList.contains('active');

    // Close all other FAQ items and reset their icons to plus
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
      const otherIcon = item.querySelector('.toggle-icon');
      if (otherIcon) otherIcon.src = './images/sell images/plus.png'; // Reset to the plus icon
    });

    // Toggle the current item
    if (!isOpen) {
      faqItem.classList.add('active');
      icon.src = './images/sell images/icons8-minus-24.png'; // Change to the minus icon
    } else {
      icon.src = '../images/sell images/plus.png'; // Reset to the plus icon
    }
  });
});
