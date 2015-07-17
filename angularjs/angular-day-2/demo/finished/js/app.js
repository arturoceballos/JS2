//step 1: Create and encapsulate your app module
(function() {
    var app = angular.module('gemStore', []);

    //step 3: Create your StoreController
    app.controller('StoreController', function(){
        this.products = gems;
    });

    //step 4: Create your TabController
    app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });

    //step 5: Create your GalleryController
    app.controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
        };
    });


    //step 2: Create 3 js objects. Your Gems must have a name, description,  price, images, and shine
    var gems = [
        {
            name: 'Azurite',
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
            shine: 8,
            price: 110.50,
            images: [
                "img/gem-02.gif",
                "img/gem-05.gif",
                "img/gem-09.gif"
            ]
        },
        {
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
            price: 22.90,
            images: [
                "img/gem-01.gif",
                "img/gem-03.gif",
                "img/gem-04.gif"
            ]
        },
        {
            name: 'Zircon',
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            shine: 70,
            price: 1100,
            images: [
                "img/gem-06.gif",
                "img/gem-07.gif",
                "img/gem-09.gif"
            ]
        }
    ];
})();
