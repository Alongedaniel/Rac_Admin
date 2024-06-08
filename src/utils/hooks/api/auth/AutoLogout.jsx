let logoutTimer;
const logoutTime = 30 * 60 * 1000; 

export const resetLogoutTimer = () => {
  const currentTime = new Date().getTime();
  localStorage.setItem("lastInteractionTime", currentTime);
  clearTimeout(logoutTimer);
  logoutTimer = setTimeout(checkInactivity, logoutTime);
};

// Function to log out the user
function logout() {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/login";
}

// Function to check inactivity and log out if necessary
function checkInactivity() {
  const lastInteractionTime = localStorage.getItem("lastInteractionTime");
  if (lastInteractionTime) {
    const currentTime = new Date().getTime();
    const timeElapsed = currentTime - lastInteractionTime;
    if (timeElapsed > logoutTime) {
      logout();
    }
  } else {
    logout();
  }
}


window.addEventListener("load", () => {
  checkInactivity();
  resetLogoutTimer();
});

document.addEventListener("mousemove", resetLogoutTimer);
document.addEventListener("keypress", resetLogoutTimer);
document.addEventListener("click", resetLogoutTimer);
document.addEventListener("scroll", resetLogoutTimer);
