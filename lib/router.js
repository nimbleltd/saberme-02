Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('home', {
		path:'/',
		template: 'home'
	});
});

Router.map(function(){
	this.route('login', {
		path:'/login',
		template: 'login'
	});
});

// AccountsTemplates.configureRoute('signIn', {
//     name: 'signin',
//     path: '/login',
//     template: 'myLogin',
//     layoutTemplate: 'signin',
//     redirect: '/user-profile',
// });