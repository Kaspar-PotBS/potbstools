function copytoclipboard() {
  var copyText = document.getElementById("SkillCode");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("copybtn-tooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("SkillCode");
  tooltip.innerHTML = "Copy to clipboard";
}