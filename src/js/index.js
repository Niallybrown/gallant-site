const toggleButton = document.getElementById('menu-button');
const header = document.getElementById('header');
const content = document.getElementById('content-wrapper')

toggleButton.addEventListener('click', () => {
  header.classList.toggle('showMenu');
	if(content) content.classList.toggle('hide');
});
