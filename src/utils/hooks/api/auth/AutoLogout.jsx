let logoutTimer;
const logoutTime = 30 * 60 * 1000; // 30 minutes

export const resetLogoutTimer = () => {
  // Update the last interaction time
  localStorage.setItem(
    "lastInteractionTime",
    JSON.stringify(new Date().getTime()),
  );

  clearTimeout(logoutTimer); // Clear existing timer
  logoutTimer = setTimeout(checkInactivity, logoutTime); // Set new timer
};

// Function to log out the user
function logout() {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/login";
}

// Function to check inactivity and log out if necessary
function checkInactivity() {
  const lastInteractionTime = JSON.parse(
    localStorage.getItem("lastInteractionTime"),
  );

  if (lastInteractionTime) {
    const currentTime = new Date().getTime();
    const timeElapsed = currentTime - lastInteractionTime;

    if (timeElapsed > logoutTime) {
      logout();
    }
  } else {
    logout(); // If last interaction time is not set, log out immediately
  }
}

// Initialize event listeners
window.addEventListener("load", () => {
  resetLogoutTimer(); // Start the timer on load
});

// Use a single handler for multiple events
const resetTimerHandler = () => resetLogoutTimer();
document.addEventListener("mousemove", resetTimerHandler);
document.addEventListener("keypress", resetTimerHandler);
document.addEventListener("click", resetTimerHandler);
document.addEventListener("scroll", resetTimerHandler);
