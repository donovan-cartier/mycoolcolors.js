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

            let specifiedColor = options.color;

            // For number of columns
            for(i = 0; i < columnQuantity; i++){

                // Append a column container
                $(mccContainer).append("<div class='mcc-column'></div>");
                currentCol = i+1;

                // Create the specified quantity of shapes
                for(j = 0; j < options.quantity; j++){

                    if(options.color == "random"){
                        specifiedColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
                    } else {
                        specifiedColor = options.color;   
                    }

                    var newShape = document.createElement("div");

                    // Select the shape
                    switch(options.shape){
                        case "stripe":
                            newShape.style.height = shapeHeight + "px";
                            break;

                        case "diamond":
                            newShape.style.height = shapeHeight + "px";
                            newShape.style.width = shapeHeight + "px";
                            newShape.style.position = "relative";
                            newShape.style.transform = 'rotate(45deg)';
                            break;
        
                        case "circle":
                            newShape.style.height = shapeHeight + "px";
                            newShape.style.width = shapeHeight + "px";
                            newShape.style.borderRadius = "50%";
                            break;
                    }

                    newShape.style.position = "relative";

                    if(options.shadeDirection == "horizontal"){
                        var NewColor = LightenDarkenColor(options.color, options.shadeAmount * currentCol);
                    } else {
                        var NewColor = LightenDarkenColor(options.color, options.shadeAmount * j); 
                    }
                    newShape.style.backgroundColor = options.useShade ? NewColor : specifiedColor;

                    if(options.shape == "stripe"){
                        $(mccContainer).find(".mcc-column:nth-of-type(" + currentCol + ")").append(newShape).css({
                            'position' : 'relative',
                            'display' : "inline-block",
                            'width' : $(mccContainer).width() / columnQuantity
                        });
                    } else {
                        $(mccContainer).find(".mcc-column:nth-of-type(" + currentCol + ")").append(newShape).css({
                            'position' : 'relative',
                            'display' : "inline-block"
                        });
                    }

                    
                switch(options.align){
                    case "center":
                        $(mccContainer).css({
                            "display" : "flex",
                            "justify-content" : "center"
                        })
                        break;

                    case "left":
                        $(mccContainer).css({
                            "display" : "flex",
                            "justify-content" : "flex-start"
                        })
                        break;

                    case "right":
                        $(mccContainer).css({
                            "display" : "flex",
                            "justify-content" : "flex-end"
                        })
                        break;
                }

                }
            }
        }
    };

    // DEFAULTS
    $.colors.defaults = {
       shape: "stripe",
       quantity: 2,
       columns: 2,
       autofill: false,
       color: '#F06D06',
       useShade: true,
       shadeDirection: 'vertical',
       shadeAmount: 20,
       align: "center"
    };

})(jQuery);


function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

$("section:first-of-type").colors({
    shape: "diamond",
    quantity: 8,
    columns: 16,
    autofill: true,
    useShade: true,
    // color: "#0000DD",
    // shadeDirection: 'horizontal'
}
)


$("section:nth-of-type(2)").colors({
    shape: "stripe",
    quantity: 2,
    autofill: false,
    // color: "",
    shadeAmount: 20,
    columns: 3,
    useShade: true

}
)

$("section:nth-of-type(3)").colors({
    shape: "circle",
    quantity: 2,
    autofill: false,
    // color: "",
    shadeAmount: 20,
    columns: 3,
    useShade: true,
    // align: "center"
}
)

