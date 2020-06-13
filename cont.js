//var xmlhttp = new XMLHttpRequest();
/* var obj=[
  {
    "name": "hardik",
    "score":0
  }
  {
    "name":"Ravina",
    "score":0
  }
]*/
//xmlhttp.onreadystatechange = function() {
  //if (this.readyState == 4 && this.status == 200) {
    //var myObj = JSON.parse(this.responseText);
  /*  var myObj = JSON.parse(obj);
    for (var i=0;i<myObj.length;i++) {
            alert(myObj[i].name);
         }

    document.getElementById("demo").innerHTML = myObj[i].name;
  } */
  //}
//};
//xmlhttp.open("GET", "json_demo.txt", true);
//xmlhttp.send();
function tableFromJson(myBooks) {
		// the json data. (you can change the values for output.)
       // var myBooks = [{
       //     'round': '1',
       //     'scores': [{
       //       'name': 'A',
       //       'score': 10
       //       },
       //       {
       //         'name': 'B',
       //         'score': 10
       //       }
       //     ]
       //   },
       //   {
       //     'round': '2',
       //     'scores': [{
       //       'name': 'A',
       //       'score': 10
       //       },
       //       {
       //         'name': 'B',
       //         'score': 10
       //       }
       //     ]
       //   },
       //   {
       //     'round': '3',
       //     'scores': [{
       //       'name': 'A',
       //       'score': 10
       //       },
       //       {
       //         'name': 'B',
       //         'score': 10
       //       },
       //       {
       //         'name': 'C',
       //         'score': 10
       //       }
       //     ]
       //   }
       // ]

        // Extract value from table header.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var table=[];
        for (var t=0; t< myBooks.length; t++){
        var col = [];
        for (var i = 0; i < myBooks[t].scores.length; i++) {
            for (var key in myBooks[t].scores[i]) {
                if (col.indexOf(key) === -1) {
                  console.log(key)
                    col.push(key);
                }
            }
        }

        // Create a table.

        table[t]= document.createElement("table");
        table[t].setAttribute('class', "table table-bordered table-dark");
        // Create table header row using the extracted headers above.
        var tr = table[t].insertRow(-1);

        for (var i = 0; i < 2; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i].toUpperCase();
            tr.appendChild(th);

        }
        for (var i = 2; i < col.length; i++) {
            var td = document.createElement("td");      // table header.
            td.innerHTML = col[i];
            tr.appendChild(td);

        }

        // add json data to the table as rows.
        for (var i = 0; i < myBooks[t].scores.length; i++) {

            tr = table[t].insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[t].scores[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var showDataNumber = t + 1;
        var showData = 'showData' + showDataNumber;
        console.log(showData);
        var divShowData = document.getElementById(showData);
        divShowData.innerHTML = "";
        divShowData.appendChild(table[t]);
      }
        // var divShowData = document.getElementById('showData1');
        // divShowData.innerHTML = "";
        // divShowData.appendChild(table[0]);
        // var divShowData1 = document.getElementById('showData2');
        // divShowData1.innerHTML = "";
        // divShowData1.appendChild(table[1]);
        // var divShowData1 = document.getElementById('showData3');
        // divShowData1.innerHTML = "";
        // divShowData1.appendChild(table[2]);

    }
