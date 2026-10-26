
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

const CATEGORIES = ["All games", "Arcade", "Action", "Racing", "Puzzle", "Casual", "Adventure", "Sports", "Shooter"];
const $=s=>document.querySelector(s);
const grid=$("#game-grid"),search=$("#search"),cats=$("#categories");
let activeCategory="All games",favoritesOnly=false;
function getFavs(){try{return JSON.parse(localStorage.getItem("playzone-favs")||"[]")}catch{return []}}
function setFavs(v){localStorage.setItem("playzone-favs",JSON.stringify(v))}
function isFav(id){return getFavs().includes(id)}
function toggleFav(id){let f=getFavs();f=f.includes(id)?f.filter(x=>x!==id):[...f,id];setFavs(f);render();showToast(f.includes(id)?"Added to favorites":"Removed from favorites")}
function showToast(msg){const t=$("#toast");if(!t)return;t.textContent=msg;t.classList.add("show");clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>t.classList.remove("show"),1800)}
function thumbStyle(theme){const colors={neon:"linear-gradient(135deg,#0b7b88,#16224d 70%,#25134a)",pink:"linear-gradient(135deg,#a52e83,#40266c)",orange:"linear-gradient(135deg,#e36b34,#6b2c48)",blue:"linear-gradient(135deg,#277fc0,#292b72)",purple:"linear-gradient(135deg,#7b49c8,#222b62)",green:"linear-gradient(135deg,#147e67,#163c47)",red:"linear-gradient(135deg,#c34454,#51264e)",cyan:"linear-gradient(135deg,#188eaa,#254c87)",lime:"linear-gradient(135deg,#76a832,#17685f)"};return colors[theme]||colors.purple}
function makeCard(g,related=false){const a=document.createElement("a");a.className="game-card"+(related?" related-card":"");a.href=`game.html?id=${encodeURIComponent(g.id)}`;a.innerHTML=`<div class="game-thumb" style="background:${thumbStyle(g.theme)}"><span class="thumb-art">${g.icon}</span><span class="thumb-label">${g.tag}</span><button class="card-fav" aria-label="${isFav(g.id)?"Remove from":"Add to"} favorites" aria-pressed="${isFav(g.id)}">${isFav(g.id)?"♥":"♡"}</button></div><div class="card-title">${g.title}</div><div class="card-meta"><span>${g.category}</span><span class="tag">${g.type==="builtin"?"INSTANT PLAY":"BROWSER GAME"}</span></div>`;a.querySelector(".card-fav").addEventListener("click",e=>{e.preventDefault();e.stopPropagation();toggleFav(g.id)});return a}
function renderCategories(){cats.innerHTML="";CATEGORIES.forEach(c=>{const b=document.createElement("button");b.className="category-chip"+(activeCategory===c?" active":"");b.textContent=c;b.addEventListener("click",()=>{activeCategory=c;renderCategories();render()});cats.appendChild(b)})}
function render(){const q=(search.value||"").trim().toLowerCase();const list=GAMES.filter(g=>(activeCategory==="All games"||g.category===activeCategory)&&(!favoritesOnly||isFav(g.id))&&(!q||(g.title+" "+g.category+" "+g.tag).toLowerCase().includes(q)));grid.innerHTML="";list.forEach(g=>grid.appendChild(makeCard(g)));$("#result-count").textContent=`${list.length} game${list.length===1?"":"s"}`;$("#empty-state").classList.toggle("hidden",list.length!==0);$("#game-grid").classList.toggle("hidden",list.length===0);$("#section-title").textContent=favoritesOnly?"Your favorites":q?`Search results for “${search.value.trim()}”`:activeCategory==="All games"?"Popular games":activeCategory+" games";$("#favorites-toggle").setAttribute("aria-pressed",favoritesOnly)}
search.addEventListener("input",render);
$("#favorites-toggle").addEventListener("click",()=>{favoritesOnly=!favoritesOnly;render();if(favoritesOnly)$("#games").scrollIntoView({behavior:"smooth"})});
$("#clear-search").addEventListener("click",()=>{search.value="";activeCategory="All games";favoritesOnly=false;renderCategories();render()});
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement!==search&&document.activeElement.tagName!=="INPUT"){e.preventDefault();search.focus()}if(e.key==="Escape"){search.value="";search.blur();render()}});
renderCategories();render();
