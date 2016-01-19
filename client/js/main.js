// accounts config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

// Load template script for smooth scrolling
// Q: Script needs to be loaded inside the <body> tag for some reason
Template.navbar.rendered = function(){
	console.log("Navbar rendered");
	$('#js-src-creative').attr("src","/js/creative.js");
};				

// Header template events
Template.header.events({
	// Show the New Entry form
	'click .js-entry-modal-open':function(event){
		$("#entry_add_form").modal('show');
	}
});

Template.entry_add_form.rendered = function(){
	console.log("New Entry form rendered");
	$('#entry_datepicker').datepicker({
		dateFormat: 'dd-mm-yy',
		minDate: '+5d',
		changeMonth: true,
		changeYear: true,
		altFormat: "yy-mm-dd"
	});
};		

// New Entry form (modal) events		
Template.entry_add_form.events({
	'click .js-entry-datepicker':function(event){
		//$('#entry_datepicker').attr("placeholder","vana jopp");
		//$('#entry_datepicker').datepicker('show');
		console.log("fuck");
	},
	'click .js-add-entry':function(event){

	//TODO: add entry functionality
	
	}
});

Template.fb_login.events({
	'click #fb-login':function(event){
		Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
	}
});

Template.user_logged_in.events({
    'click #fb-logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        });
	}
});

Template.user_logged_in.events({
	'click #logout':function(e, tmpl){
		Meteor.logout(function(err) {
			if (err) {
				// error handling
			} else {
				// show an alert
			}
		});
	}
});

console.log("Finished loading main.js");
