function showMessage(type) {
  document.getElementById("main-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";

  let msg = "";
  if (type === "surat") {
    msg = "Kepada Sahabat Tersayang,\nSemoga hari lahirmu dipenuhi dengan kebahagiaan, kesihatan, dan kejayaan.\nTerima kasih kerana menjadi insan yang memberi inspirasi dan semangat.\nSelamat Hari Jadi! 🎂✨";
  } else if (type === "kad") {
    msg = "🎉 HAPPY BIRTHDAY 🎉\nSemoga senyumanmu terus mekar,\nimpianmu tercapai, dan hidupmu penuh warna.\nNikmati hari istimewa ini dengan penuh kegembiraan! 🎁🥳";
  }
  document.getElementById("message").innerText = msg;
}

function openLink(url) {
  window.open(url, "_blank");
}

function goBack() {
  document.getElementById("second-page").style.display = "none";
  document.getElementById("main-page").style.display = "block";
}