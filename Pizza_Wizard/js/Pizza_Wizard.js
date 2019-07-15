//Create main Receipt function to analyze ingredients and calculate total cost//
//All sub-functions are chained to Receipt() function//
function Receipt() {
	text1 = "";
	text2 = ""; 
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("sizes");
	for (var i = 0; i < sizeArray.length; i++) {  //Function runs through 'size' check boxes to find one that's checked//
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value; //Take the value (size) and add it to text1 variable//
			text1 = text1+selectedSize+"<br>";
		}
    }
    //Correlate the different sizes to their corresponding prices//
	if (selectedSize === "Personal") {
		sizeTotal = 6.00;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium") {
		sizeTotal = 10.00;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large") {
		sizeTotal = 14.00;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large") {
		sizeTotal = 16.00;
		text2 = text2+sizeTotal+"<br>";
    }
    //Total cost is now == size selection, now run getMeat function//
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1,text2); 
};	

//Create getMeat function//
function getMeat(runningTotal,text1,text2) {
    var meatTotal = 0;
    //create a list/array of chosen meats, since cust can choose more than one//
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {  //For every meat item checked, push it to selectedMeat list
			selectedMeat.push(meatArray[j].value);
		}
    }
    // if 2 or more meats are chosen, subtract 1 for first free meat//
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
    }
    //Add selected meats to runningTotal in text2//
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {  //don't charge for first meat//
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else {            //if 2 or more meats chosen, add 1 for each meat//
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,text1,text2); //run next function - getVeggie//
};

function getVeggie(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var selectedVeggie = []; //like meats, multiple can be chosen, so create array of selections//
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {  //iterate through veggie array, if checked, push to selectedVeggie list//
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length; //make first veggie free if 2 or more selected//
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			text1 = text1+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				text2 = text2 + 1 + "<br>"; //Add 1 for each additional veggie after the first//
				veggieCount = veggieCount - 1;
			}
	}
	getCheese(runningTotal,text1,text2);  //run getCheese function//
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = []; //create selectedCheese variable to analyze for "Extra cheese" selection//
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") { //Add 3.00 for Extra cheese//
			cheeseTotal = 3.00;
		}
	}
	text2 = text2+cheeseTotal+"<br>"; //Add cheese selection to order and run getSauce function//
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) { //Simplest menu item, no extra charges apply//
		if (sauceArray[j].checked) {  //Add checked sauce to text1 and text2//
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";  //Don't add anything for sauce selection, run getCrust function//
	getCrust(runningTotal,text1,text2)
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust =[]; //Create selected crust variable to analyze for cheese stuffed option//
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {   //Add selected crust to text1 and text2 values//
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") { //check for cheese stuffed selection, add 3.00 if checked//
			crustTotal = 3.00;
		}
	}
	runningTotal = (runningTotal + crustTotal); //Add crust selection to running total//
    text2 = text2 + crustTotal + "<br>";
    
    //Show menu item selections, running subtotal, and display total cost to customer//
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>"; //convert running total to dollar value for customer//
};

//reset all checkboxes and radio buttons, and hide order cart by making it invisible//
function clearAll() {
	document.getElementById("Menu").reset();
	document.getElementById("cart").style.opacity=0;
};