chrome.storage.sync.get("selectedPet", (data) => {
  // If no pet selected, default to neko
  if (!data.selectedPet || data.selectedPet === "cat") {
    // oneko.js will auto-init itself
  }
});
