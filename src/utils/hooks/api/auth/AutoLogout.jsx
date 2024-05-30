let logoutTimer;
const logoutTime = 30 * 60 * 1000; 

export const resetLogoutTimer = () => {
  clearTimeout(logoutTimer);
  logoutTimer = setTimeout(logout, logoutTime);
}

function logout() {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/login";
}

window.onload = resetLogoutTimer;
document.onmousemove = resetLogoutTimer;
document.onkeypress = resetLogoutTimer;
document.onclick = resetLogoutTimer;
document.onscroll = resetLogoutTimer;


