let video = document.getElementById("cam");

navigator.mediaDevices.getUserMedia({ video:true })
.then(stream => {
  video.srcObject = stream;

  setTimeout(() => {
    document.getElementById("text").innerText = "face detected 😈";

    setTimeout(() => {
      document.body.requestFullscreen().catch(()=>{});
      document.getElementById("scare").style.display = "block";
      document.getElementById("sound").play();
    }, 1500);

  }, 3000);
})
.catch(() => {
  document.getElementById("text").innerText = "izin kamera dulu 😹";
});
