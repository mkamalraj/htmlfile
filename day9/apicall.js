function apicall(){
	fetch("https://swapi.co/api/people/")
	.then(response => response.json())
	.then(data =>{
		console.log(data);
		 var value=data.results;
	
		for (var i=0;i<=value.length;i++){
			var newhtml= "<table border><tr>";
            newhtml = newhtml + "<td>" + value[i].name + "</td>" + "<td>" + value[i].height + "</td>" + "<td>" + value[i].mass + "</td>"+ "<td>" + value[i].hair_color + "</td>"+"<td>" + value[i].skin_color + "</td>"
            newhtml = newhtml + "</tr></table>"
            document.write(newhtml);
        }

	
		});
	// })
}


//  dat.resultsforEach(function(value){
//  	console.log(value.name)
//  	});
// })