var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("myInput");
  
  qrcode.makeCode(elText.value);
}

makeCode();

$("#myInput").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  }).on($('.btn').click(e => makeCode()))