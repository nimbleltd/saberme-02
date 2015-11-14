Products = new Mongo.Collection("products");

Products.featured = function(){
    var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry"];
    // return _.filter(Products, function(product){
    //   return featuredSkus.indexOf(product.sku) > -1;
    return Products.find({sku : {$in : featuredSkus}},
      {fields : {inventory : false, cost : false}});
};