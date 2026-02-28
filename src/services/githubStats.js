export async function fetchGitHubStats() {
  try {
    const response = await fetch("https://api.github.com/users/Visheshjha11", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const reposElement = document.getElementById("repos-count");
    if (reposElement) reposElement.textContent = data.public_repos || "0";

    const followersElement = document.getElementById("followers-count");
    if (followersElement) followersElement.textContent = data.followers || "0";

    if (data.created_at) {
      const date = new Date(data.created_at);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
      const createdElement = document.getElementById("created-at");
      if (createdElement) createdElement.textContent = formattedDate;
    }

    const contribHeader = document.getElementById("total-contributions");
    const contribGrid = document.getElementById("total-contributions-grid");
    const contribValue = `${data.public_repos * 20 + data.followers * 5}+`;

    if (contribHeader) contribHeader.textContent = contribValue;
    if (contribGrid) contribGrid.textContent = contribValue;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    
    const reposElement = document.getElementById("repos-count");
    if (reposElement) reposElement.textContent = "ERR";

    const followersElement = document.getElementById("followers-count");
    if (followersElement) followersElement.textContent = "ERR";

    const createdElement = document.getElementById("created-at");
    if (createdElement) createdElement.textContent = "N/A";

    const contribElement = document.getElementById("total-contributions");
    if (contribElement) contribElement.textContent = "API Error";
  }
}
