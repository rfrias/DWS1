/*
Name: Ramon Rafael G. Frias IV
Date: 03/20/2014
Assignment: Goal4: Assignment: The Duel - Part III
*/

// self-executing function
(function(){
	
	 document.getElementById('fight_bg').onclick = function(e){
		
		console.log(e);
		
		e.preventDefault();
		return false;
	 };

     console.log("FIGHT!!!");
	 var fighterObj = {
		fighters: [
				  fighter1 = {name:'Spiderman', damage:20, health:100},
				  fighter2 = {name:'Batman', damage:20, health:100}
				  ]
	 };
	 
	 //guide
	 /*
	 fighter 1 name   = fighterObj.fighters[0].name
	 fighter 1 damage = fighterObj.fighters[0].damage
	 fighter 1 health = fighterObj.fighters[0].health
	 
	 fighter 2 name   = fighterObj.fighters[1].name
	 fighter 2 damage = fighterObj.fighters[1].damage
	 fighter 2 health = fighterObj.fighters[1].health
	 */
     var round = 0;

     function fight(){
        
        /*document.getElementById();*/
		/*alert(fighter1.name+":"+fighter1.health+" *START* "+fighter2.name+":"+fighter2.health);*/

			
       for (var i=0; i<10; i++){
         
           //random formula is - Math.Floor(Math.random() * (max - min) + min);

           var minDamage1 = fighterObj.fighters[0].damage * 0.5;
           var minDamage2 = fighterObj.fighters[1].damage * 0.5;
           var f1 = Math.floor(Math.random() * (fighterObj.fighters[0].damage - minDamage1) + minDamage1);
           var f2 = Math.floor(Math.random() * (fighterObj.fighters[1].damage - minDamage2) + minDamage2);

           //inflict damage
           fighter1.health-=f1; //this is similar to this formula: playerOneHealth = playerOneHealth - f1;
           fighter2.health-=f2;

           console.log(fighterObj.fighters[0].name + ":" + fighterObj.fighters[0].health + " " + fighterObj.fighters[1].name + ":" + fighterObj.fighters[1].health);

           var results = winnerCheck();
           console.log(results);

           if(results === "no winner"){
           	  round++;
          	  /*document.getElementById();*/
			  /*alert(fighter1.name+":"+fighter1.health+" *ROUND "+round+" OVER*"+fighter2.name+":"+fighter2.health);*/
           }else{
             /*document.getElementById();*/
			 /*alert(results);*/
             break;
           }
			
	};
     

     function winnerCheck(){
        console.log("in winnerChek FN");

     	var result="no winner";

     	if(fighterObj.fighters[0].health<1 && fighterObj.fighters[1].health<1){
           result = "You Both Die";
        }else if(fighterObj.fighters[0].health<1){
           result = fighterObj.fighters[1].name +" WINS!!!"
        }else if(fighterObj.fighters[1].health<1){
           result = fighterObj.fighters[0].name +" WINS!!!"
     	};

     	return result;


	 	}
     };
     /****** The program gets started below ******/
     console.log('program starts');
	 
	 /*e.onclick = */fight();
	 

})();