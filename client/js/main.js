// accounts config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.header.events({
	'click .js-entry-modal-open':function(event){
		$("#entry_add_form").modal('show');
	}
});		
		
Template.entry_add_form.events({
	'loaded':function(event){
		$('#entry_datepicker input').datepicker({});
	},
	'click .js-entry-datepicker':function(event){
		console.log($('#entry_datepicker').attr("placeholder"));
		$('#entry_datepicker').attr("placeholder","vana jopp");
		$('#entry_datepicker').datepicker();
		$("#entry_add_form").modal('show');
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
