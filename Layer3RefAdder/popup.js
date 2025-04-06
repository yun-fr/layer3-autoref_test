document.addEventListener("DOMContentLoaded", function() {
  const refInput = document.getElementById("refInput");
  const enableWindowCheckbox = document.getElementById("enableWindow");
  const saveButton = document.getElementById("saveButton");

  chrome.storage.sync.get(["userRef", "enableTransferWindow"], function(result) {
    refInput.value = result.userRef || "";
    const isEnabled = result.enableTransferWindow !== undefined ? result.enableTransferWindow : true;
    enableWindowCheckbox.checked = isEnabled;
    console.log("État initial de la checkbox :", isEnabled);

    if (result.enableTransferWindow === undefined) {
      chrome.storage.sync.set({ "enableTransferWindow": true });
    }
  });

  chrome.runtime.onMessage.addListener(function(message) {
    if (message.type === "WINDOW_ENABLED") {
      enableWindowCheckbox.checked = true;
      chrome.storage.sync.set({ "enableTransferWindow": true });
      console.log("Fenêtre activée, checkbox mise à jour");
    } else if (message.type === "WINDOW_DISABLED") {
      enableWindowCheckbox.checked = false;
      chrome.storage.sync.set({ "enableTransferWindow": false });
      console.log("Fenêtre désactivée, checkbox mise à jour");
    }
  });

  saveButton.addEventListener("click", function() {
    const userRef = refInput.value.trim();
    const enableTransferWindow = enableWindowCheckbox.checked;
    chrome.storage.sync.set({ 
      "userRef": userRef, 
      "enableTransferWindow": enableTransferWindow 
    }, function() {
      alert(`Ref saved: ${userRef}\nTransfer Window: ${enableTransferWindow ? "Enabled" : "Disabled"}`);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });
});