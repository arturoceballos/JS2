//Step 1: Create your app module

var app = angular.module('store', []);
//Step 2: Create 3 js objects. Your Gems must have a name, description,  price, images, and shine
var gems = [
    {
        name: "Ruby",
        description: "This is a description",
        price: 20,
        shine: 8,
        images: [
            "img/gem-01.gif",
            "img/gem-02.gif",
            "img/gem-03.gif"
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    },
    {
        name: "Diamond",
        description: "This is a diamond",
        price: 200000.00,
        shine: 10,
        images: [
            "img/gem-04.gif",
            "img/gem-05.gif",
            "img/gem-06.gif"
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    },
    {
        name: "Emerald",
        description: "This is an emerald",
        price: 0,
        shine: 3,
        images: [
            "img/gem-07.gif",
            "img/gem-03.gif",
            "img/gem-09.gif"
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    }
];
//Step 3: Create your StoreController
app.controller('StoreController', function(){
    this.products = gems;
});
//Step 4: Create your TabController
app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
        this.tab = newValue;
    };

    this.isSet = function(tabName){
        return this.tab === tabName;
    };
});

app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newImage){
        this.current = newGallery || 0;
    };
});
//Step 5: Set your tab to a specific value
//Step 6: Create function (method) that sets tab to new value when clicked
//Step 7: Create function (method) that sets the selected tab to an active class to see which tab is selected

//Do the same thing with your images
//Step 8: Create your GalleryController

