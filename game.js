const GAMES = [
  {
    id: "buildnow",
    title: "BuildNow.GG",
    category: "Shooter",
    icon: "🔫",
    theme: "purple",
    type: "external",
    description: "Build, edit, and battle other players in BuildNow.GG.",
    controls: "Keyboard and mouse.",
    url: "https://www.crazygames.com/game/buildnow-gg"
  }
];

const $ = selector => document.querySelector(selector);

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "buildnow";
const game = GAMES.find(item => item.id === id) || GAMES[0];

const titleElement = $("#game-title");
const categoryElement = $("#game-category");
const infoCategoryElement = $("#info-category");
const descriptionElement = $("#game-description");
const controlsElement = $("#game-controls");
const playerElement =
  $("#game-player") ||
  $("#game-frame") ||
  $("#player") ||
  $(".game-player");

if (titleElement) {
  titleElement.textContent = game.title;
  document.title = `${game.title} — PlayZone`;
}

if (categoryElement) {
  categoryElement.textContent = game.category;
}

if (infoCategoryElement) {
  infoCategoryElement.textContent = game.category;
}

if (descriptionElement) {
  descriptionElement.textContent = game.description;
}

if (controlsElement) {
  controlsElement.textContent = game.controls;
}

if (playerElement) {
  playerElement.innerHTML = "";

  const iframe = document.createElement("iframe");

  iframe.src = game.url;
  iframe.title = game.title;
  iframe.allow = "fullscreen; autoplay; gamepad";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";

  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.minHeight = "500px";
  iframe.style.border = "none";
  iframe.style.display = "block";

  playerElement.appendChild(iframe);
}
