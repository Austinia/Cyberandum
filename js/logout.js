const logOut = document.querySelector("#weather");

function handleLouout(){
  localStorage.removeItem(USER_NAME)
}

logOut.addEventListener("submit", handleLouout)