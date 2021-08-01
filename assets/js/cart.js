window.load=doShowAll();

$("#price1-1").on("keyup", function() {
    if($("#price1-1").val() == "") {
        $("#calc1-1").text("")
    }
    else if(BigNumber($("#price1-1").val()).lte(10000)){
        $("#calc1-1").html("+<span id='total1-1'>" + $("#price1-1").val() + "</span> USD")
    }
    else {
        $("#price1-1").val(10000)
        $("#calc1-1").html("+<span id='total1-1'>" + $("#price1-1").val() + "</span> USD")
    }
    $("#totalSum").text("Total: " + checkTotal() + " USD")
})

$("#y1").click(function() {
    if(!$("#y1").hasClass("active")) {
        $("#y1-radio").prop("checked", true)

        $("#y1").addClass("active")
        $("#n1").removeClass("active")

        if($("#price1-4").val() == "") {
            $("#calc1-2").text("+2 USD/hour")
        }
        else if($("#h1-radio").is(":checked")){
            $("#calc1-2").html("+2 USD/hour (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
        }
        else if($("#d1-radio").is(":checked")){
            $("#calc1-2").html("+48 USD/day (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
        }
    }
    $("#totalSum").text("Total: " + checkTotal() + " USD")
})

$("#n1").click(function() {
    if(!$("#n1").hasClass("active")) {
        $("#n1-radio").prop("checked", true)

        $("#n1").addClass("active")
        $("#y1").removeClass("active")

        $("#calc1-2").text("")
    }
    $("#totalSum").text("Total: " + checkTotal() + " USD")
})

$("#h1").click(function() {
    if(!$("#h1").hasClass("active")) {
        $("#h1-radio").prop("checked", true)

        $("#h1").addClass("active")
        $("#d1").removeClass("active")

        if($("#price1-4").val() == "") {
            $("#calc1-4").text("")
        }
        else if(BigNumber($("#price1-4").val()).lte(72)){
            if($("#h1-radio").is(":checked")){
                $("#calc1-4").html("+2 USD/hour (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+2 USD/hour (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                }
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+48 USD/day (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+48 USD/day (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                }
            }
        }
        else {
            $("#price1-4").val(72)
            if($("#h1-radio").is(":checked")){
                $("#calc1-4").html("+2 USD/hour (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+2 USD/hour (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                }
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+48 USD/day (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+48 USD/day (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                }
            }
        }
    }
    $("#totalSum").text("Total: " + checkTotal() + " USD")
})
$("#d1").click(function() {
    if(!$("#d1").hasClass("active")) {
        $("#d1-radio").prop("checked", true)

        $("#d1").addClass("active")
        $("#h1").removeClass("active")

        if($("#price1-4").val() == "") {
            $("#calc1-4").text("")
        }
        else if(BigNumber($("#price1-4").val()).lte(72)){
            if($("#h1-radio").is(":checked")){
                $("#calc1-4").html("+2 USD/hour (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+2 USD/hour (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                }
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+48 USD/day (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+48 USD/day (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                }
            }
        }
        else {
            $("#price1-4").val(72)
            if($("#h1-radio").is(":checked")){
                $("#calc1-4").html("+2 USD/hour (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+2 USD/hour (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
                }
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+48 USD/day (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                if($("#y1-radio").is(":checked")){
                    $("#calc1-2").html("+48 USD/day (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
                }
            }
        }
    }
    $("#totalSum").text("Total: " + checkTotal() + " USD")
})

$("#price1-3").on("keyup", function() {
    if($("#price1-3").val() == "") {
        $("#calc1-3").text("")
    }
    else if(BigNumber($("#price1-3").val()).lte(10)){
        if(BigNumber($("#price1-3").val()).lte(4)) {
            $("#calc1-3").html("+<span id='total1-3'>" + BigNumber($("#price1-3").val()).times(4) + "</span> USD")
        }
        else {
            $("#calc1-3").html("+<span id='total1-3'>" + BigNumber($("#price1-3").val()).times(6) + "</span> USD")
        }
    }
    else {
        $("#price1-3").val(10)
        $("#calc1-3").html("+<span id='total1-3'>60</span> USD")
    }
    $("#totalSum").text("Total: " + checkTotal() + " USD")
})

$("#price1-4").on("keyup", function() {
    if($("#price1-4").val() == "") {
        $("#calc1-4").text("")
    }
    else if(BigNumber($("#price1-4").val()).lte(72)){
        if($("#h1-radio").is(":checked")){
            $("#calc1-4").html("+2 USD/hour (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
            if($("#y1-radio").is(":checked")){
                $("#calc1-2").html("+2 USD/hour (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
            }
        }
        else if($("#d1-radio").is(":checked")){
            $("#calc1-4").html("+48 USD/day (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
            if($("#y1-radio").is(":checked")){
                $("#calc1-2").html("+48 USD/day (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
            }
        }
    }
    else {
        $("#price1-4").val(72)
        if($("#h1-radio").is(":checked")){
            $("#calc1-4").html("+2 USD/hour (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
            if($("#y1-radio").is(":checked")){
                $("#calc1-2").html("+2 USD/hour (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(2) + "</span> USD)")
            }
        }
        else if($("#d1-radio").is(":checked")){
            $("#calc1-4").html("+48 USD/day (<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
            if($("#y1-radio").is(":checked")){
                $("#calc1-2").html("+48 USD/day (<span id='total1-2'>" + BigNumber($("#price1-4").val()).times(48) + "</span>USD)")
            }
        }
    }
    $("#totalSum").text("Total: " + checkTotal() + " USD")
})

function checkTotal(){
    var sum = 0
    if($("#total1-1").length != 0) {
        sum = BigNumber(sum).plus($("#total1-1").text())
    }
    if($("#total1-2").length != 0) {
        sum = BigNumber(sum).plus($("#total1-2").text())
    }
    if($("#total1-3").length != 0) {
        sum = BigNumber(sum).plus($("#total1-3").text())
    }
    if($("#total1-4").length != 0) {
        sum = BigNumber(sum).plus($("#total1-4").text())
    }
    return sum
}


//add hidden radio buttons

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
