window.load=doShowAll();

$("#100RT").click(function() {
    if (localStorage.getItem("100 Retweets") == null) {
        SaveItem("100 Retweets", 1);
    }
    else {
        ModifyItem("100 Retweets", 1);
    }
})
$("#500RT").click(function() {
    if (localStorage.getItem("500 Retweets") == null) {
        SaveItem("500 Retweets", 1);
    }
    else {
        ModifyItem("500 Retweets", 1);
    }
})
$("#1000RT").click(function() {
    if (localStorage.getItem("1000 Retweets") == null) {
        SaveItem("1000 Retweets", 1);
    }
    else {
        ModifyItem("1000 Retweets", 1);
    }
})
$(document).on("click", "#RTclose100", function() {
    RemoveItem("100 Retweets")
})
$(document).on("click", "#RTclose500", function() {
    RemoveItem("500 Retweets")
})
$(document).on("click", "#RTclose1000", function() {
    RemoveItem("1000 Retweets")
})
$(document).on("change", "#RTinput100", function() {
    if(parseInt($("#RTinput100").val()) < 100) {
        ModifyItem("100 Retweets", parseInt($("#RTinput100").val()) - localStorage.getItem("100 Retweets"))
    }
    else {
        SaveItem("100 Retweets", 1)
    }
})
$(document).on("change", "#RTinput500", function() {
    if(parseInt($("#RTinput500").val()) < 100) {
        ModifyItem("500 Retweets", parseInt($("#RTinput500").val()) - localStorage.getItem("500 Retweets"))
    }
    else {
        SaveItem("500 Retweets", 1)
    }
})
$(document).on("change", "#RTinput1000", function() {
    if(parseInt($("#RTinput1000").val()) < 100) {
        ModifyItem("1000 Retweets", parseInt($("#RTinput1000").val()) - localStorage.getItem("1000 Retweets"))
    }
    else {
        SaveItem("1000 Retweets", 1)
    }
})

$("#100FAV").click(function() {
    if (localStorage.getItem("100 Favorites") == null) {
        SaveItem("100 Favorites", 1);
    }
    else {
        ModifyItem("100 Favorites", 1);
    }
})
$("#500FAV").click(function() {
    if (localStorage.getItem("500 Favorites") == null) {
        SaveItem("500 Favorites", 1);
    }
    else {
        ModifyItem("500 Favorites", 1);
    }
})
$("#1000FAV").click(function() {
    if (localStorage.getItem("1000 Favorites") == null) {
        SaveItem("1000 Favorites", 1);
    }
    else {
        ModifyItem("1000 Favorites", 1);
    }
})
$(document).on("click", "#FAVclose100", function() {
    RemoveItem("100 Favorites");
});
$(document).on("click", "#FAVclose500", function() {
    RemoveItem("500 Favorites");
});
$(document).on("click", "#FAVclose1000", function() {
    RemoveItem("1000 Favorites");
});
$(document).on("change", "#FAVinput100", function() {
    if(parseInt($("#FAVinput100").val()) < 100) {
        ModifyItem("100 Favorites", parseInt($("#FAVinput100").val()) - localStorage.getItem("100 Favorites"))
    }
    else {
        SaveItem("100 Favorites", 1)
    }
})
$(document).on("change", "#FAVinput500", function() {
    if(parseInt($("#FAVinput500").val()) < 100) {
        ModifyItem("500 Favorites", parseInt($("#FAVinput500").val()) - localStorage.getItem("500 Favorites"))
    }
    else {
        SaveItem("500 Favorites", 1)
    }
})
$(document).on("change", "#FAVinput1000", function() {
    if(parseInt($("#FAVinput1000").val()) < 100) {
        ModifyItem("1000 Favorites", parseInt($("#FAVinput1000").val()) - localStorage.getItem("1000 Favorites"))
    }
    else {
        SaveItem("1000 Favorites", 1)
    }
})
//------------------------------------------------------------------------------
//add new key=>value to the HTML5 storage
function SaveItem(type, quantity) {
    localStorage.setItem(type, quantity);
    doShowAll();
}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem(type, quantity) {
    localStorage.setItem(type, quantity + parseInt(localStorage.getItem(type)));
    doShowAll();
}
//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem(type) {
    localStorage.removeItem(type);
    doShowAll();
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
    localStorage.clear();
    doShowAll();
}
//--------------------------------------------------------------------------------------
// dynamically populate the table with shopping list items
//below step can be done via PHP and AJAX too. 
function doShowAll() {
    if (CheckBrowser()) {
    var key = "";
    var key_close = "";
    var key_input = "";
    var list = "<tr><th>Item</th><th>Value</th><th></th></tr>\n";
    var total = 0;
    var i = 0;
    //for more advance feature, you can set cap on max items in the cart
    for (i = 0; i <= localStorage.length-1; i++) {
        key = localStorage.key(i);
        if(key == "100 Retweets") {
            key_close = "RTclose100";
            key_input = "RTinput100"
        }
        else if(key == "500 Retweets") {
            key_close = "RTclose500";
            key_input = "RTinput500"
        }
        else if(key == "1000 Retweets") {
            key_close = "RTclose1000";
            key_input = "RTinput1000"
        }
        else if(key == "100 Favorites") {
            key_close = "FAVclose100";
            key_input = "FAVinput100"
        }
        else if(key == "500 Favorites") {
            key_close = "FAVclose500";
            key_input = "FAVinput500"
        }
        else if(key == "1000 Favorites") {
            key_close = "FAVclose1000";
            key_input = "FAVinput1000"
        }
        else key_close = "blj";

        list += "<tr><td>" + key + "</td>\n<td> <input type='number' id='" + key_input + "' value='" + localStorage.getItem(key) + "' min='1' max='99'>"
        + '</td><td><span class="cart-close-single" id="' + key_close + '"><i class="bx bx-x"></i></span></td></tr>\n';
        total += parseInt(localStorage.getItem(key));
    }
    list += ""
        //if no item exists in the cart
    if (list == "<tr><th>Item</th><th>Value</th><th></th></tr>\n") {
        list = "<i>Your cart is empty.</i>";
    }
    //bind the data to html table

    $("#list").html(list)

    if(total == 0) {
        $("#btn-cart").html("<i class='bx bx-cart'></i>")
    }
    else {
        $("#btn-cart").html("<i class='bx bx-cart'></i> <span class='cart-quantity'>" + total + "</span>")
    }
    }
    else {
        alert('Cannot save items to cart as your browser does not support HTML 5. Please contact us via email contact@moonit.marketing.');
    }
}

/*
=====> Checking the browser support
//this step may not be required as most of modern browsers do support HTML5
*/
//below function may be redundant
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // we can use localStorage object to store data
        return true;
    } 
    else {
        return false;
    }
}
//-------------------------------------------------
/*
You can extend this script by inserting data to database or adding payment processing API to shopping cart..
*/
