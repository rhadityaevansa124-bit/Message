const message = `Terimakasih buat hari ini. \n\nSebenarnya hal terbaik yang terjadi padaku adalah kamu. \nTapi aku gamau berhenti sampai situ\naku mau ini menjadi ****. \n\nApa mungkin aku menatap hari esok bersama kamu?`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    typeWriter();
  }, 600);
}
