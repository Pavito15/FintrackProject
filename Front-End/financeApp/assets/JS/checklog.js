let response = await AuthAPI.checkLog();
if (response.status != 200) {
  window.location.replace("/index.html");
}
