const myForm = document.getElementById("my-form");
const loaderContainer = document.querySelector(".loader-container");
const loadingText = document.querySelector(".loading-text");
const loader = document.querySelector(".loader");

loader.style.display = "none"
loadingText.style.display = "none";

myForm.addEventListener("submit", function(event) {
  event.preventDefault();

  loadingText.style.display = "block";
  loader.style.display = "block"

  setTimeout(function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var genderInputs = document.getElementsByName("genders");
    var selectedGender = "";
    genderInputs.forEach(function(input) {
      if (input.checked) {
        selectedGender = input.value;
      }
    });

    var languageInputs = document.getElementsByName("languages");
    var selectedLanguages = [];
    languageInputs.forEach(function(input) {
      if (input.checked) {
        selectedLanguages.push(input.value);
      }
    });

    var answers = document.querySelector(".answers");
    answers.innerHTML = "";
    var nameElement = document.createElement("p");
    nameElement.innerHTML = "Name: " + name;
    answers.appendChild(nameElement);
    var emailElement = document.createElement("p");
    emailElement.innerHTML = "Email: " + email;
    answers.appendChild(emailElement);
    var genderElement = document.createElement("p");
    genderElement.innerHTML = "Gender: " + selectedGender;
    answers.appendChild(genderElement);
    var languagesElement = document.createElement("p");
    languagesElement.innerHTML = "Languages: " + selectedLanguages.join(", ");
    answers.appendChild(languagesElement);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    genderInputs.forEach(function(input) {
      input.checked = false;
    });
    languageInputs.forEach(function(input) {
      input.checked = false;
    });

    loader.style.display = "none"
    loadingText.style.display = "none";
  }, 2000);
});