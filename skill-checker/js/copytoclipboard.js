function CopyCodeToClipboard() {
  var copyText = document.getElementById("SkillCode");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("copybtn-tooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("URLField");
  tooltip.innerHTML = "Copy to clipboard";
};
function CopyURLToClipboard() {
  var copyText = document.getElementById("URLField");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("copybtn-tooltip2");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("URLField");
  tooltip.innerHTML = "Copy to clipboard";
};