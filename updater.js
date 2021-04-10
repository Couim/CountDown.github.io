window.setInterval('refresh()', 1000); 	// Call a function every 1000 milliseconds (OR 1 seconds).


function refresh() {
    var current_date = Date.now(); //result in ms
    const GREEN_PLANE_RELEASE_DATE = new Date(2035, 0, 1); //1st january 2035
    
    var diff_date = GREEN_PLANE_RELEASE_DATE.getTime() - current_date; //results in ms
    console.log("diff_date = " + diff_date);
    var diff_jours = diff_date / (1000*3600*24);
    
    diff_seconds = diff_date / 1000;
    console.log("diff_seconds = " + diff_seconds);
    
    var element = document.getElementById("number_of_seconds");
    element.innerHTML = Math.round(diff_seconds);
}
