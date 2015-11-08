Template.navbar.whatsMyUsername = function(){
	var username = Meteor.user().username;
    return username;
    //add some logic for displaying error template.
  };


// var username = Meteor.user().username;