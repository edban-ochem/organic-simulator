function loadCompound() {
  if (typeof $3Dmol === "undefined") {
    alert("3Dmol.js is not loaded. Please check if 3Dmol-min.js is available.");
    return;
  }

  const compound = document.getElementById("compoundInput").value.trim().toUpperCase();
  if (!compound) {
    alert("Please enter a valid 3-letter compound ID (e.g., BEN, ETH)");
    return;
  }

  const element = document.getElementById("viewer");
  const config = { backgroundColor: "white" };
  const viewer = $3Dmol.createViewer(element, config);

  viewer.clear();
  const url = `https://files.rcsb.org/ligands/view/${compound}_model.pdb`;

  $3Dmol.download(url, viewer, {}, function () {
    viewer.setStyle({}, { stick: {}, sphere: { scale: 0.3 } });
    viewer.zoomTo();
    viewer.render();
    viewer.spin("y");
  }, function () {
    alert("Failed to load compound. Make sure the ID is correct.");
  });
}
