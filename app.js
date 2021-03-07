		function cg() {
			var currentCG = document.getElementById('current_cg').value;
			var tcredits =  document.getElementById('tpastcredits').value;
			var sub1grade = document.getElementById('sub1grade').value;
			var sub1credits = document.getElementById('sub1credits').value;
			var sub2grade = document.getElementById('sub2grade').value;
			var sub2credits = document.getElementById('sub2credits').value;
			var sub3grade = document.getElementById('sub3grade').value;
			var sub3credits = document.getElementById('sub3credits').value;
			var sub4grade = document.getElementById('sub4grade').value;
			var sub4credits = document.getElementById('sub4credits').value;
			var sub5grade = document.getElementById('sub5grade').value;
			var sub5credits = document.getElementById('sub5credits').value;
			var sub6grade = document.getElementById('sub6grade').value;
			var sub6credits = document.getElementById('sub6credits').value;
		 var totalCred = Number(tcredits)+Number(sub1credits)+Number(sub2credits)+Number(sub3credits)+Number(sub4credits)+Number(sub5credits)+Number(sub6credits);
		 var weightedCredits = (currentCG*tcredits) + (sub1grade*sub1credits)+ (sub2grade*sub2credits) +(sub3grade*sub3credits)+(sub4grade*sub4credits)+ (sub5grade*sub5credits)+(sub6grade*sub6credits);
		 var expected_cg = weightedCredits/totalCred;
		 alert('Your Expected CGPA is ' + expected_cg.toFixed(2));
		}