/* aufgabe1.js */
birth = true;
cell = true;
child = true;
elec = true;
internet = true;

function hover(element) {
    element.setAttribute('src', 'images/world_data_logo_v1_hover.png');
}
function unhover(element) {
    element.setAttribute('src', 'images/world_data_logo_v1_normal.png');
}

function sortTableUp() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("worldTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // I so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableDown() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("worldTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // I so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function show_hide_column(col_no) {

    var stl;

	switch(col_no) {

	case 2:

    		if (birth){
			 stl = 'none';
			 birth = false;
			}else {
      		  stl = 'initial';
			birth = true;
			}
		break;
	case 3:

    		if (cell){
			 stl = 'none';
			 cell = false;
			}else {
      		  stl = 'initial';
			cell = true;
			}
		break;
	case 4:

    		if (child){
			 stl = 'none';
			 child = false;
			}else {
      		  stl = 'initial';
			child = true;
			}
		break;
	case 5:

    		if (elec){
			 stl = 'none';
			 elec = false;
			}else {
      		  stl = 'initial';
			elec = true;
			}
		break;
	case 6:

    		if (internet){
			 stl = 'none';
			 internet = false;
			}else {
      		  stl = 'initial';
			internet = true;
			}
		break;
	}
    var tbl  = document.getElementById('worldTable');
    var rows = tbl.getElementsByTagName('tr');

    for (var row=0; row<rows.length;row++) {
      var cels = rows[row].getElementsByTagName('td')
      cels[col_no].style.display=stl;
    }
  } 

