function generateQR() {
  const qrText = document.getElementById("qrText").value.trim();
  const qrImage = document.getElementById("qrImage");

  if (qrText === "") {
    alert("Please enter some text or a URL");
    return;
  }

  // API for QR code Generator
  const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`;

  qrImage.src = qrAPI;
}
