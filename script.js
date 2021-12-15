var random = Math.floor(Math.random() * 100);
var random2 = Math.floor(Math.random() * 100);

var sayi1 = (document.getElementById("num1").innerText = random);
var sayi2 = (document.getElementById("num2").innerText = random2);
var cevap = (document.getElementById("cevap").innerText = sayi1 + sayi2);

var inp = document.getElementById("in");
var input = document.getElementById("in").value;

function btn() {
  if (inp.value == cevap) {
    alert("doru cevap");
  } else {
    alert("yanlıs");
  }
  location.reload();
}
