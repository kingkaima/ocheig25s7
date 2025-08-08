// Make show/hide comments button keyboard accessible
const toggleBtn = document.getElementById('toggle-comments');
const commentList = document.getElementById('comment-list');

toggleBtn.addEventListener('click', () => {
  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
  commentList.hidden = isExpanded;
});

// Also allow Enter key to trigger the toggle
toggleBtn.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleBtn.click();
  }
});
