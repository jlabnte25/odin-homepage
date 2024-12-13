var myWorkContainer = document.querySelector(".portfolioItemsContainer");
for (var i = 0; i < 9; i++) {
  var projectHTML = "\n    <div class=\"projectIndividualContainer\">\n      <div>\n        <p>screenshot of the project</p>\n      </div>\n      <div>\n        <p>Project name</p>\n      </div>\n      <div>\n        <img src=\"./assets/github_Icon.png\" width=\"16px\" />\n        <img src=\"./assets/linkedIn_Icon.png\" width=\"16px\" />\n      </div>\n      <div>\n        <p>Short description of the project. Just a couple sentences will do</p>\n      </div>\n    </div>\n  ";
  myWorkContainer.innerHTML += projectHTML;
}