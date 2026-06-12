// Sidebar functions
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

// Contact Form Submission
const form = document.getElementById('contactForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Please wait...";

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      result.innerHTML = "Success! Message Sent.";
      form.reset();
    } else {
      result.innerHTML = "Error: " + json.message;
    }
  })
  .catch(error => {
    result.innerHTML = "Something went wrong!";
  })
  .then(function() {
    setTimeout(() => {
      result.innerHTML = "";
    }, 5000);
  });
});