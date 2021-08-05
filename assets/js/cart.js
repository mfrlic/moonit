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
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#price1-1").on("change", function() { 
    if(BigNumber($("#price1-1").val()).lt(50)) {
        $("#price1-1").val(50)
        $("#calc1-1").html("+<span id='total1-1'>" + $("#price1-1").val() + "</span> USD")
    }
    else if(BigNumber($("#price1-1").val()).lte(10000)){
        $("#calc1-1").html("+<span id='total1-1'>" + $("#price1-1").val() + "</span> USD")
    }
    else {
        $("#price1-1").val(10000)
        $("#calc1-1").html("+<span id='total1-1'>" + $("#price1-1").val() + "</span> USD")
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#y1").click(function() {
    if(!$("#y1").hasClass("active")) {
        $("#y1-radio").prop("checked", true)

        $("#y1").addClass("active")
        $("#n1").removeClass("active")

        $("#calc1-2").html("+<span id='total1-2'>10</span> USD")
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#n1").click(function() {
    if(!$("#n1").hasClass("active")) {
        $("#n1-radio").prop("checked", true)

        $("#n1").addClass("active")
        $("#y1").removeClass("active")

        $("#calc1-2").html("")
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#h1").click(function() {
    if(!$("#h1").hasClass("active")) {
        $("#h1-radio").prop("checked", true)

        $("#h1").addClass("active")
        $("#d1").removeClass("active")

        if($("#price1-4").val() == "") {
            $("#calc1-4").text("")
        }
        else if(BigNumber($("#price1-4").val()).lte(24) && BigNumber($("#price1-4").val()).gt(0)){
            if($("#h1-radio").is(":checked")){
                if(BigNumber($("#price1-4").val()).gt(1) && BigNumber($("#price1-4").val()).lt(12)) {
                    $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).minus($("#price1-4").val()) + "</span> USD")
                }
                else if($("#price1-4").val() == 12){
                    $("#calc1-4").html("+<span id='total1-4'>20</span> USD)")
                }
                else if(BigNumber($("#price1-4").val()).gt(12) && BigNumber($("#price1-4").val()).lt(24)){
                    $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).plus(BigNumber($("#price1-4").val()).times(0.2)) + "</span> USD")
                }
                else if($("#price1-4").val() == 24){
                    $("#calc1-4").html("+<span id='total1-4'>25</span> USD")
                }
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
            }
        }
        else {
            $("#price1-4").val(24)
            if($("#h1-radio").is(":checked")){
                $("#calc1-4").html("+<span id='total1-4'>25</span> USD")
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
            }
        }
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#d1").click(function() {
    if(!$("#d1").hasClass("active")) {
        $("#d1-radio").prop("checked", true)

        $("#d1").addClass("active")
        $("#h1").removeClass("active")

        if($("#price1-4").val() == "") {
            $("#calc1-4").text("")
        }
        else if(BigNumber($("#price1-4").val()).lte(24) && BigNumber($("#price1-4").val()).gt(0)){
            if($("#h1-radio").is(":checked")){
                if(BigNumber($("#price1-4").val()).gt(1) && BigNumber($("#price1-4").val()).lt(12)) {
                    $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).minus($("#price1-4").val()) + "</span> USD")
                }
                else if($("#price1-4").val() == 12){
                    $("#calc1-4").html("+<span id='total1-4'>20</span> USD")
                }
                else if(BigNumber($("#price1-4").val()).gt(12) && BigNumber($("#price1-4").val()).lt(24)){
                    $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).plus(BigNumber($("#price1-4").val()).times(0.2)) + "</span> USD")
                }
                else if($("#price1-4").val() == 24){
                    $("#calc1-4").html("+<span id='total1-4'>25</span> USD")
                }
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
            }
        }
        else {
            $("#price1-4").val(24)
            if($("#h1-radio").is(":checked")){
                $("#calc1-4").html("+<span id='total1-4'>25</span> USD)")
            }
            else if($("#d1-radio").is(":checked")){
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
            }
        }
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#price1-3").on("keyup", function() {
    if($("#price1-3").val() == "") {
        $("#calc1-3").text("")
    }
    else if(BigNumber($("#price1-3").val()).lte(5)){
        $("#calc1-3").html("+<span id='total1-3'>" + BigNumber($("#price1-3").val()).times(5) + "</span> USD")
    }
    else {
        $("#price1-3").val(5)
        $("#calc1-3").html("+<span id='total1-3'>25</span> USD")
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#price1-3").on("change", function() {
    if($("#price1-3").val() == "") {
        $("#calc1-3").text("")
    }
    else if(BigNumber($("#price1-3").val()).lte(5)){
        $("#calc1-3").html("+<span id='total1-3'>" + BigNumber($("#price1-3").val()).times(5) + "</span> USD")
    }
    else {
        $("#price1-3").val(5)
        $("#calc1-3").html("+<span id='total1-3'>25</span> USD")
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#price1-4").on("keyup", function() {
    if($("#price1-4").val() == "") {
        $("#calc1-4").text("")
    }
    else if(BigNumber($("#price1-4").val()).lte(24) && BigNumber($("#price1-4").val()).gt(0)){
        if($("#h1-radio").is(":checked")){
            if(BigNumber($("#price1-4").val()).gte(1) && BigNumber($("#price1-4").val()).lt(12)) {
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).minus(BigNumber(12).minus($("#price1-4").val())) + "</span> USD")
            }
            else if($("#price1-4").val() == 12){
                $("#calc1-4").html("+<span id='total1-4'>20</span> USD")
            }
            else if(BigNumber($("#price1-4").val()).gt(12) && BigNumber($("#price1-4").val()).lt(24)){
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).plus(BigNumber($("#price1-4").val()).minus(12)) + "</span> USD")
            }
            else if($("#price1-4").val() == 24){
                $("#calc1-4").html("+<span id='total1-4'>25</span> USD")
            }
        }
        else if($("#d1-radio").is(":checked")){
            $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
        }
    }
    else {
        $("#price1-4").val(24)
        if($("#h1-radio").is(":checked")){
            $("#calc1-4").html("+<span id='total1-4'>25</span> USD)")
        }
        else if($("#d1-radio").is(":checked")){
            $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
        }
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
})

$("#price1-4").on("change", function() {
    if($("#price1-4").val() == "") {
        $("#calc1-4").text("")
    }
    else if(BigNumber($("#price1-4").val()).lte(24) && BigNumber($("#price1-4").val()).gt(0)){
        if($("#h1-radio").is(":checked")){
            if(BigNumber($("#price1-4").val()).gte(1) && BigNumber($("#price1-4").val()).lt(12)) {
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).minus(BigNumber(12).minus($("#price1-4").val())) + "</span> USD")
            }
            else if($("#price1-4").val() == 12){
                $("#calc1-4").html("+<span id='total1-4'>20</span> USD")
            }
            else if(BigNumber($("#price1-4").val()).gt(12) && BigNumber($("#price1-4").val()).lt(24)){
                $("#calc1-4").html("+<span id='total1-4'>" + BigNumber(20).plus(BigNumber($("#price1-4").val()).minus(12)) + "</span> USD")
            }
            else if($("#price1-4").val() == 24){
                $("#calc1-4").html("+<span id='total1-4'>25</span> USD")
            }
        }
        else if($("#d1-radio").is(":checked")){
            $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
        }
    }
    else {
        $("#price1-4").val(24)
        if($("#h1-radio").is(":checked")){
            $("#calc1-4").html("+<span id='total1-4'>25</span> USD)")
        }
        else if($("#d1-radio").is(":checked")){
            $("#calc1-4").html("+<span id='total1-4'>" + BigNumber($("#price1-4").val()).times(25) + "</span> USD")
        }
    }
    $("#total-sum").text("Total: " + checkTotal() + " USD")
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

$("#btn-giveaway").click(function() {
    if($("#price1-1").val() != "" && $("#price1-3").val() != "" && $("#price1-4").val() != "") {
        localStorage.setItem("giveaway", $("#price1-1").val())

        localStorage.setItem("giveaway_pinned", $("#y1-radio").is(":checked") ? "Yes" : "No")
        localStorage.setItem("giveaway_pinned_total", $("#calc1-2").text() != "" ? $("#calc1-2").text() : "-")

        localStorage.setItem("giveaway_interactions", $("#price1-3").val())
        localStorage.setItem("giveaway_interactions_total", $("#calc1-3").text())

        localStorage.setItem("giveaway_duration", $("#price1-4").val() + ($("#h1-radio").is(":checked") ? "h" : "d"))
        localStorage.setItem("giveaway_duration_total", $("#calc1-4").text())

        localStorage.setItem("giveaway_total", $("#total-sum").text().split(" ")[1])
        doShowAll()
    }
})

$("#giveaway-close").click(function() {
    localStorage.removeItem("giveaway");
    localStorage.removeItem("giveaway_pinned");
    localStorage.removeItem("giveaway_pinned_total");
    localStorage.removeItem("giveaway_interactions");
    localStorage.removeItem("giveaway_interactions_total");
    localStorage.removeItem("giveaway_duration");
    localStorage.removeItem("giveaway_duration_total");
    localStorage.removeItem("giveaway_total");
    doShowAll();
})

$("#btn-promotion").click(function() {
    localStorage.setItem("promotion", 35);
    doShowAll();
})

$("#promotion-close").click(function() {
    localStorage.removeItem("promotion");
    doShowAll();
})

$("#send-offer").click(function() {
    if(localStorage.getItem("promotion") || localStorage.getItem("giveaway") && $("#contact-input").val() != "") {
        var price = 0;
        var summary = "";

        if(localStorage.getItem("giveaway")) {
            summary +=
            "Giveaway\n" 
            + "Amount: " + localStorage.getItem("giveaway") + " USD (+" + localStorage.getItem("giveaway") + " USD)\n" 
            + "Pinned: " + localStorage.getItem("giveaway_pinned") + " (" + localStorage.getItem("giveaway_pinned_total") + ")\n" 
            + "Interactions: " + localStorage.getItem("giveaway_interactions") + " (" + localStorage.getItem("giveaway_interactions_total") + ")\n" 
            + "Duration: " + localStorage.getItem("giveaway_duration") + " (" + localStorage.getItem("giveaway_duration_total") + ")\n" 
            + "Giveaway total: " + localStorage.getItem("giveaway_total") + " USD\n\n";
        
            price = BigNumber(price).plus(localStorage.getItem("giveaway_total"))
        }

        if(localStorage.getItem("promotion")) {
            summary += 
            "Promotion\n" 
            + "Promotion total: " + localStorage.getItem("promotion") + " USD\n\n" 

            price = BigNumber(price).plus(localStorage.getItem("promotion"))
        }

        summary += "Total: " + price + "USD\n\n"

        summary += $("#contact1").is(":checked") ? "Email: " + $("#contact-input").val() : ($("#contact2").is(":checked") ? "Telegram: " + $("#contact-input").val() : "Twitter: " + $("#contact-input").val())

        $("#order-summary").val(summary)
    }
})

$("#submit-p").click(function() {
    if($("#email-p").val() != "" && $("#message").val() != "") {
        if($("#checkbox1").is(":checked") || $("#checkbox2").is(":checked") || $("#checkbox3").is(":checked") || $("#checkbox4").is(":checked") || $("#checkbox5").is(":checked") || $("#checkbox6").is(":checked")) {
            var summary = 
            "Email: " + $("#email-p").val() + "\n\n"
            + "Interested in:\n"
            + ($("#checkbox1").is(":checked") ? "Twitter\n" : "")
            + ($("#checkbox2").is(":checked") ? "Reddit\n" : "")
            + ($("#checkbox3").is(":checked") ? "4chan\n" : "")
            + ($("#checkbox4").is(":checked") ? "Telegram\n" : "")
            + ($("#checkbox5").is(":checked") ? "TikTok\n" : "")
            + ($("#checkbox6").is(":checked") ? "Youtube\n" : "")
            + "\nMessage:\n"
            + $("#message").val()

            $("#p-summary").val(summary)
            $("#p-form").submit()
        }
    }
})

$("#submit-q").click(function() {
    if($("#email-q").val() != "" && $("#question").val() != "") {
        var summary = 
        "Email: " + $("#email-q").val() + "\n"
        + "\nQuestion:\n"
        + $("#question").val()

        $("#q-summary").val(summary)
        $("#q-form").submit()
    }
})


//------------------------------------------------------------------------------
//add new key=>value to the HTML5 storage
function SaveItem(type, cost) {
    localStorage.setItem(type, cost);
    doShowAll();
}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem(type, cost) {
    localStorage.setItem(type, cost + parseInt(localStorage.getItem(type)));
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
    var list = "<tr><th></th><th></th><th></th><th></th></tr>\n";
    var total = 0;
    var price = 0;

    if(localStorage.getItem("giveaway")) {
        list += 
        "<tr class='cart-main'><td>Giveaway</td>" 
        + "<td></td>" 
        + "<td></td>" 
        + "<td><span class='cart-close-single' id='giveaway-close'><i class='bx bx-x'></i></span></td></tr>"
        
        + "<tr class='cart-details'><td>Amount</td>"
        + "<td>" + localStorage.getItem("giveaway") + " USD</td>" 
        + "<td>+" + localStorage.getItem("giveaway") + " USD</td>" 
        + "<td></td></tr>"

        + "<tr class='cart-details'><td>Pinned</td>" 
        + "<td>" + localStorage.getItem("giveaway_pinned") + "</td>" 
        + "<td>" + localStorage.getItem("giveaway_pinned_total") + "</td>" 
        + "<td></td></tr>"

        + "<tr class='cart-details'><td>Interactions</td>" 
        + "<td>" + localStorage.getItem("giveaway_interactions") + "</td>" 
        + "<td>" + localStorage.getItem("giveaway_interactions_total") + "</td>" 
        + "<td></td></tr>"

        + "<tr class='cart-details'><td>Duration</td>" 
        + "<td>" + localStorage.getItem("giveaway_duration") + "</td>" 
        + "<td>" + localStorage.getItem("giveaway_duration_total") + "</td>" 
        + "<td></td></tr>"

        + "<tr class='cart-total'><td>Total</td>" 
        + "<td></td>"
        + "<td>" + localStorage.getItem("giveaway_total") + " USD</td>" 
        + "<td></td></tr>";
    
        total += 1;
        price = BigNumber(price).plus(localStorage.getItem("giveaway_total"))
    }

    if(localStorage.getItem("promotion")) {
        list += 
        "<tr class='cart-promotion'><td>Promotion</td>" 
        + "<td></td>" 
        + "<td>" + localStorage.getItem("promotion") + " USD</td>" 
        + "<td><span class='cart-close-single' id='promotion-close'><i class='bx bx-x'></i></span></td></tr>"

        total += 1;
        price = BigNumber(price).plus(localStorage.getItem("promotion"))
    }

    if(localStorage.getItem("promotion") || localStorage.getItem("giveaway")) {
        $("#cart-total").text("Total: " + price + " USD")
    }

    if (list == "<tr><th></th><th></th><th></th><th></th></tr>\n") {
        list = "<i>Your cart is empty.</i>";
    }

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
