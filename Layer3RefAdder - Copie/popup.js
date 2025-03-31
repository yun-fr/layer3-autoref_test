document.addEventListener("DOMContentLoaded", function() {
  const refInput = document.getElementById("refInput");
  const saveButton = document.getElementById("saveButton");

  // Charge le ref sauvegardé
  chrome.storage.sync.get(["userRef"], function(result) {
    if (result.userRef) {
      refInput.value = result.userRef;
    }
  });

  // Sauvegarde le ref
  saveButton.addEventListener("click", function() {
    const userRef = refInput.value.trim();
    chrome.storage.sync.set({ "userRef": userRef }, function() {
      alert("Ref save : " + userRef);
      // Rafraîchit la page pour appliquer immédiatement
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });
});