const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY >0);
});

menuToggle.addEventListener('click', function(){
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');

});

navigation.addEventListener('click', function(){
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
});