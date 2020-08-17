
 $(document).ready(function () {

    $('a[href^="#welcome"]').addClass("active");

    // send email code
    $("#form-submit").on("click", function (event) {
        debugger;
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
              
  })
  function loadClient() {
    gapi.client.setApiKey("AIzaSyBdSBdBbr_eQeRLp0LG6HETgPRMWserhZ4");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.sheets.spreadsheets.values.append({
      "resource": {}
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "736398544697-9l44nm54c9m49evh9m70hj32htl4sgat.apps.googleusercontent.com"});
  });
})