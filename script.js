// let container = document.querySelector("section:first-of-type");
let container2 = document.querySelector("section:nth-of-type(2)");
let container3 = document.querySelector("section:nth-of-type(3)");
let container4 = document.querySelector("section:nth-of-type(4)");
let divQuantity = 3;
let divHeight = 100 / divQuantity;

// for(i = 0; i < divQuantity; i++){
//     // Stripes
//     let rectangle = document.createElement("div");
//     let randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
//     rectangle.style.height = divHeight + "vh";
//     rectangle.style.backgroundColor = randColor;
//     container.append(rectangle);

//     // Losanges
//     let rectangle2 = document.createElement("div");
//     rectangle2.style.height = divHeight + "vh";
//     rectangle2.style.width = divHeight + "vh";
//     rectangle2.style.backgroundColor = randColor;
//     rectangle2.style.transform = 'rotate(45deg)';
//     container2.append(rectangle2);

//     // Left stripes
//     let rectangle3 = document.createElement("div");
//     rectangle3.style.height = divHeight + "vh";
//     rectangle3.style.width = 100 / divHeight + "vw";
//     rectangle3.style.backgroundColor = randColor;
//     container3.append(rectangle3);

//     // Vertical stripes
//     let rectangle4 = document.createElement("div");
//     rectangle4.style.height = "100vw";
//     rectangle4.style.width = divHeight + "vh";
//     rectangle4.style.transform = 'rotate(90deg)';
//     rectangle4.style.backgroundColor = randColor;
//     container4.append(rectangle4);
// }





 
;(function($) {

    $.fn.extend({
        colors: function(options,arg) {
            if (options && typeof(options) == 'object') {
                options = $.extend( {}, $.colors.defaults, options );
            }

            // this creates a plugin for each element in
            // the selector or runs the function once per
            // selector.  To have it do so for just the
            // first element (once), return false after
            // creating the plugin to stop the each iteration 
            this.each(function() {
                new $.colors(this, options, arg );
            });
            return;
        }
    });

    $.colors = function( elem, options, arg ) {
        build_colors( options );
        return;
        
        function build_colors(options){

        $(elem).append("<div class='mcc-container'></div>");
        let mccContainer = $(elem).find(".mcc-container");
        shapeHeight = $(mccContainer).height() / options.quantity;

        let columnQuantity = options.columns;
        let currentCol = 0;

        if(options.autofill == true){
            columnQuantity = Math.round($(mccContainer).width() / shapeHeight);
        }

            switch(options.shape){
                case "stripe":
                    for(i = 0; i < options.quantity; i++){
                        newShape = document.createElement("div");
                        randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
                        newShape.style.height = shapeHeight + "px";
                        newShape.style.backgroundColor = randColor;
                        elem.append(newShape);
                    }
                    break;

                case "diamond":
                    for(i = 0; i < columnQuantity; i++){
                        $(mccContainer).append("<div class='mcc-column'></div>");
                        currentCol = i+1;

                        for(j = 0; j < options.quantity; j++){
                            newShape = document.createElement("div");
                            randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
                            newShape.style.height = shapeHeight + "px";
                            newShape.style.width = shapeHeight + "px";
                            newShape.style.position = "relative";
                            newShape.style.backgroundColor = randColor;
                            newShape.style.transform = 'rotate(45deg)';
                            
                            $(mccContainer).find(".mcc-column:nth-of-type(" + currentCol + ")").append(newShape).css({
                                'position' : 'relative',
                                'display' : "inline-block"
                            });
                            
                        }
                    }
                   
                    break;

                case "circle":
                    for(i = 0; i < columnQuantity; i++){
                        $(mccContainer).append("<div class='mcc-column'></div>");
                        currentCol = i+1;
                    for(j = 0; j < options.quantity; j++){
                        newShape = document.createElement("div");
                        randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
                        newShape.style.height = shapeHeight + "px";
                        newShape.style.width = shapeHeight + "px";
                        newShape.style.borderRadius = "50%";
                            newShape.style.position = "relative";
                            newShape.style.backgroundColor = randColor;

                        $(mccContainer).find(".mcc-column:nth-of-type(" + currentCol + ")").append(newShape).css({
                            'position' : 'relative',
                            'display' : "inline-block"
                        });
                    }}
                    break;
            }
        }
    };

    $.colors.defaults = {
       shape: "stripes",
       quantity: 2,
       columns: 2,
       autofill: false
    };

})(jQuery);

$("section:first-of-type").colors({
    shape: "diamond",
    quantity: 8,
    columns: 16,
    autofill: true
}
)


$("section:nth-of-type(2)").colors({
    shape: "circle",
    quantity: 8,
    columns: 5
}
)