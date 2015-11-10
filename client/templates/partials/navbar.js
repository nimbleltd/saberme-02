Template.navbar.whatsMyUsername = function(){
	var username = Meteor.user().profile.name;
    return username;
  };