function cuandoDiceSi() {
  alert ("Te quiero <3")
}

function cuandodiceNo() {
  width = window.innerWidth;
  height = window.innerHeight;

  newWidth = (Math.random() * width);
  newHeight = (Math.random() * height);

  document.getElementById('botonNo').style.position = "absolute";
  document.getElementById('botonNo').style.left = newWidth + "px";
  document.getElementById('botonNo').style.top = newHeight + "px";
}
