let newNamePrompt = prompt("İsminizi giriniz: ");
let newNameSelector = document.getElementById("myName");

newNameSelector.innerText = newNamePrompt;

function currentTime() {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  switch (day) {
    case 1:
      day = "Pazertesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    case 7:
      day = "Pazar";
      break;
    default:
      day = "";
      break;
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let time = hour + ":" + minute + ":" + second + " " + day;
  document.getElementById("myClock").innerText = time;
 setTimeout(() => currentTime(),1000);
}
currentTime();
