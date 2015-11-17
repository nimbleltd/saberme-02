Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.map(function(){
	this.route('home', {path:'/'});
	this.route('contact', {path:'/contact'});
	this.route('about', {path:'/about'});	
	this.route('profile', {path:'/profile'});
});

Router.route("/products/:sku", {
	name: "productsShow",
	data : function(){
		return Products.findOne({sku : this.params.sku})
	}
});

Router.route("/cart", {
	name: "cartShow"
});

// Router.map(function(){
// 	this.route('login', {
// 		path:'/login',
// 		template: 'login'
// 	});
// });

// AccountsTemplates.configureRoute('signIn', {
//     name: 'sign-in',
//     path: '/sign-in',
//     template: 'signin',
//     layoutTemplate: 'signin',
//     redirect: '/user-profile',
// });