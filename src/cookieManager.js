﻿function getCookie() {
  const cookieName = "RegisteredEmotions";
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      var cookie = c.substring(name.length, c.length);
      if (cookie !== "") {
        cookie = JSON.parse(cookie);
      }
      return cookie;
    }
  }
  document.cookie = cookieName + "=";
  return "";
}
