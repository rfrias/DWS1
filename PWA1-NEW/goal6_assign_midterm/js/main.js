/*
	* Mid Terms for PWA-1
*/

(function(){
	var obj1 = {students:[
						  person1 = {name:'Akashi Rakuzan', address:{address:'100 Air Lock', city:'Wind Sword', state:'AZ'}, gpa:[2.0, 2.5, 3.0]},
						  person2 = {name:'Byaku Setsume', address:{address:'200 Fire Mock', city:'Burning Axe', state:'BA'}, gpa:[2.5, 3.0, 3.5]},
						  //person3 = {name:'Chiharu Tetsuya', address:{address:'300 Water Nock', city:'Mist Geizer', state:'CB'}, gpa:[3.0, 3.5, 4.0]}
						 ]
	};
	
	for(var key in obj1){
		console.log('Key Name: ', key);
		console.log('Value of the Key[',key,']: ', obj1[key]);
	};
	console.log("--------------------Below are the original Objects--------------------");
	console.log("Name: " + obj1.students[0].name);
	console.log("Address: " + obj1.students[0].address.address +" "+ obj1.students[0].address.city +" "+ obj1.students[0].address.state);
	console.log("GPA: " + obj1.students[0].gpa);
	console.log("Date: ");
	console.log("Name: " + obj1.students[1].name);
	console.log("Address: " + obj1.students[1].address.address +" "+ obj1.students[1].address.city +" "+ obj1.students[1].address.state);
	console.log("GPA: " + obj1.students[1].gpa);
	console.log("Date: ");
	
	function addData(name, address, city, state, gpa){
		
		'Chiharu Tetsuya' = name;
		
		console.log(obj1.students[2].name);
	};
	
	addData('Chiharu Tetsuya', '300 Water Nock', 'Mist Geizer', 'CB', [3.0, 3.5, 4.0]);

	
	
	
		
/*			example	
		var newObj = {
		schoolName: 'Full Sail',
		address: '123 University Ave',
		studentCount: 16000,
		students:[
			{name: 'James Bond', GPA: 2.6, classes: ['PWA1', 'PWA2']},
			{name: 'Albert Einstein', GPA: 4.0},
			{name: 'Jane Doe', GPA: 3.9}
			]
		};*/
	

	



























})();