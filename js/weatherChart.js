function getFarenheits(result){
  var farenheits = [];
  for (farenheit in result["hourly_forecast"]){
    farenheits.push(result["hourly_forecast"][farenheit]["temp"]["english"]);    
  }
  return farenheits;
}

function getHours(result){
  var hours = [];
  for (hourNum in result["hourly_forecast"]){
    hours.push(result["hourly_forecast"][hourNum]["FCTTIME"]["hour"]);    
  }
  return hours;
}

function generateDataSet(labels, data) {
  return {
        labels: labels, 
        datasets: [ {
          label: "Hourly Weather for New York",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: data
        } ]
      };
}

function makeAjaxRequest(endpoint, success) {
  debugger;
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });

  // the below seems functionally identical but doesn't pass the spec
  // $.ajax({
  //   url: endpoint,
  //   dataType: 'jsonp'
  // }).done(success);
}
