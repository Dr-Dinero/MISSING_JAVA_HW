var body_select = d3.select("tbody");

data.forEach(function (alien_data) {
    console.log(alien_data);
    var row = body_select.append("tr");
    Object.entries(alien_data).forEach(function ([key, value]) {
       
        var cell = row.append("td");
        cell.text(value);
    });
});