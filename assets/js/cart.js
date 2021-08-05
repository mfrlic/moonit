window.load=updateUI();

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
        updateUI()
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
    updateUI();
})

$("#btn-promotion").click(function() {
    localStorage.setItem("promotion", 35);
    updateUI();
})

$("#promotion-close").click(function() {
    localStorage.removeItem("promotion");
    updateUI();
})

function ClearAll() {
    localStorage.clear();
    updateUI();
}

function updateUI() {
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

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // we can use localStorage object to store data
        return true;
    } 
    else {
        return false;
    }
}