function electric_bill(units){
	let bill = 0;
	if (units < 5 ){
		bill = 200;
	}
	else if (units >= 5 && units <=50 ){
		bill = 1000;
	}
	else{
		bill = 2000;
	}
	return bill;
}

console.log(electric_bill(5));
console.log(electric_bill(55));

function bill_status(payment_status){
	switch(payment_status){
	case "paid":
		console.log("Bill is paid.")
		break;
	case "pending":
		console.log("Bill is pending.")
		break;
	case "failed":
		console.log("Your bill transaction ahd failed.")
		break;
	default:
		console.log("Unexpected error occurred.")
	}
}

bill_status("paid");
bill_status("pending");
bill_status("failed");
bill_status("ieuvfen");