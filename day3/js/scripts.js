var musicBox = {

};

var box = MusicBox(),
    a1 = Album("The Who", "Tommy"),
    a2 = Album("Pink Floyd", "The Wall"),
    a3 = Album("Sublime", "The Best of Sublime"),
    favorite;

box.addAlbum(a1);
box.addAlbum(a2);
box.addAlbum(a3);

a1.play() ; // prints "Playing The Who - Tommy"
a2.play(); // prints "Pink Floyd", "The Wall"
a1.play(); // prints "Playing The Who - Tommy"

favorite = box.favoriteAlbum();

// prints "favorite album is The Who - Tommy"
console.log("favorite album is " + favorite);
}());
