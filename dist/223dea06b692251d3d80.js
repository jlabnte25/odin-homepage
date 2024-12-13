const myWorkContainer = document.querySelector(".portfolioItemsContainer");

import github_icon from "./assets/github_Icon.png";
import linkedin_icon from "./assets/linkedIn_Icon.png";
import "./style.css";

for (let i = 0; i < 9; i++) {
  const projectHTML = `
    <div class="projectIndividualContainer">
      <div>
        <p>screenshot of the project</p>
      </div>
      <div>
        <div class="projectName">
          <h2>Project name</h2>
        </div>
        <div class="projectHyperLinks">
          <img src="${github_icon}" width="16px" alt="GitHub Icon">
          <img src="${linkedin_icon}" width="16px" alt="LinkedIn Icon"/>
        </div>
      </div>
      <div class="projectDescription">
        <p>Short description of the project. Just a couple sentences will do</p>
      </div>
    </div>
  `;

  myWorkContainer.innerHTML += projectHTML;
}
