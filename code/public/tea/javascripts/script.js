$(document).ready( function() {
  $(".health").click(function(e){
    $.get("/health", function(data, status){
        $('#status').text('Health:'+data);
      });
          //alert("Data: " + data + "\nStatus: " + status);
    });
  $(".kill").click(function(e){
    $.get("/kill", function(data, status){
      $('#status').text('Health:'+data);
          //  alert("Data: " + data + "\nStatus: " + status);
        });
  });
});
