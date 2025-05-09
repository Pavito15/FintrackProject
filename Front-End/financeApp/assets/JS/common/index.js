async function handleResponse(func, response, successStatus) {
  if (response.status == successStatus) {
    func();
  } else if (response.status == 400) {
    let data = await response.json();
    alert([data.errors]);
  } else if (response.status == 500) {
    window.location.replace("/");
  } else {
    alert("Ha ocurrido un error");
  }
}

async function testAPI() {
  let url = "http://3.21.22.144";
  return await Request.get(url);
}
