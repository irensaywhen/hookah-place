//Caching

$window = $(window);
$animatedElements = $('.animate');
//console.log($animatedElements);

//Define object with methods to deal with scrolling

/*const scrolling = {
    visibilityOptions: {
        root: null,
        threshold: 0.1,
    },

    isPartiallyVisible: function(){

        let observer = new IntersectionObserver(scrolling.dealWithScrolling, scrolling.visibilityOptions); //Change this line
        
        $animatedElements.each(function(){
            observer.observe(this);
        })
    },

    dealWithScrolling: function(){
        alert('Hello from observer!');
    },
};

scrolling.isPartiallyVisible();*/