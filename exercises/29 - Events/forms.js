const link = document.querySelector('.wes');

link.addEventListener('click', function(event) {
  const shouldChangePage = confirm('Do you really want to go here?');

  if (!shouldChangePage) {
    event.preventDefault();
  }
});
