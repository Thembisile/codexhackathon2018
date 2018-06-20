var resortsFactory = function (resortsArrayData) {



    var displayResorts = function (arrayToDisplay) {
        //put the array into an object 
        //compile the template with the resortsArray and set innerHTML

    }

    var sortByLocation = function (location) {
        //compare the resort locations against the user's location and sort them from closest to furthest
        //call the displayResorts function with the array from the above line.
    }

    var sortByRating = function (arrayToSort) {
        //sort the arrays by user rating from highest to lowest and call the displayResorts function with the sorted array
        let arrayByRating =  arrayToSort.sort(function(a,b){
            return b.rating - a.rating})
        };

    }
