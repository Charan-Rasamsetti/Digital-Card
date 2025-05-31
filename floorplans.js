const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active to clicked
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});
