const myWorkContainer = document.querySelector(".portfolioItemsContainer");
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
          <img src="./assets/github_Icon.png" width="16px" />
          <img src="./assets/linkedIn_Icon.png" width="16px" />
        </div>
      </div>
      <div class="projectDescription">
        <p>Short description of the project. Just a couple sentences will do</p>
      </div>
    </div>
  `;

  myWorkContainer.innerHTML += projectHTML;
}
