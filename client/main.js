/*
// Function for creating an Activity object from the user input values
function createActivity(name,quantity,unit) {
	return {
		name: name,
		quantity: quantity,
		unit: unit
	};
};

// Function for creating an Entry object from the user selected place and Activity
function createEntry(place,activity) {
	return {
		date: new Date(),
		place: place,
		activity: activity	
	};
};

// Function for inserting an Entry object to the Collection
function insertEntry(user,entry){
	Entries.insert({
		user: user,
		entry: entry
	});	
};

Template.hello.events({
    'click button': function () {
		insertEntry(this.user,
			createEntry(this.place,
				createActivity(this.name,this.quantity,this.unit)));
		console.log("Olen kliendi kaustas");
    }
});
*/