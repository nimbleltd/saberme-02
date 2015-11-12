Template.navbar.whatsMyUsername = function(){
	var username = Meteor.user().username;
    return username;
  };