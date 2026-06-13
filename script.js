// Sidebar functions (YE AAPKA PURANA CODE HAI)

function showSideBar() {

  const mobileBar = document.querySelector('.mobile-nav');

  const allContent = document.querySelector('.container-main');

  allContent.style.display = 'none';

  mobileBar.style.display = "block";

}



function closeSideBar() {

  const allContent = document.querySelector('.container-main');

  allContent.style.display = 'block';

  const mobileBar = document.querySelector('.mobile-nav');

  mobileBar.style.display = "none";

}