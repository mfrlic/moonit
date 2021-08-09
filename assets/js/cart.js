$(document).ready(function() {
    updateTotal()
    updateUI();
})

$("#price1-1").on("change", function() {
    $("#calc1-1").html("+<span id='total1-1'>" + $("#price1-1").val() + "</span> USD")
    if(localStorage.getItem("giveaway") && localStorage.getItem("giveaway") != $("#price1-1").val()) {
        $("#btn-giveaway").html('<i class="bx bxs-cart-download"></i> Update cart')
    }
    else if(localStorage.getItem("giveaway")) {
        $("#btn-giveaway").html('<i class="bx bx-check"></i> Added to cart')
    }
    updateTotal()
})

$("#y1").click(function() {
    if(!$("#y1").hasClass("active")) {
        $("#y1-radio").prop("checked", true)

        $("#y1").addClass("active")
        $("#n1").removeClass("active")

        $("#calc1-2").html("+<span id='total1-2'>10</span> USD")

        if(localStorage.getItem("giveaway") && localStorage.getItem("giveaway_pinned") != "Yes") {
            $("#btn-giveaway").html('<i class="bx bxs-cart-download"></i> Update cart')
        }
        else if(localStorage.getItem("giveaway")) {
            $("#btn-giveaway").html('<i class="bx bx-check"></i> Added to cart')
        }
    }
    updateTotal()
})

$("#n1").click(function() {
    if(!$("#n1").hasClass("active")) {
        $("#n1-radio").prop("checked", true)

        $("#n1").addClass("active")
        $("#y1").removeClass("active")

        $("#calc1-2").html("")

        if(localStorage.getItem("giveaway") && localStorage.getItem("giveaway_pinned") != "No") {
            $("#btn-giveaway").html('<i class="bx bxs-cart-download"></i> Update cart')
        }
        else if(localStorage.getItem("giveaway")) {
            $("#btn-giveaway").html('<i class="bx bx-check"></i> Added to cart')
        }
    }
    updateTotal()
})

$("#price1-3").on("change", function() {
    if($("#price1-3").val() != 1) {
        $("#calc1-3").html("+<span id='total1-3'>" + BigNumber($("#price1-3").val()).times(10).minus(10) + "</span> USD")
    }
    else {
        $("#calc1-3").html("")
    }

    if(localStorage.getItem("giveaway") && localStorage.getItem("giveaway_interactions") != $("#price1-3").val()) {
        $("#btn-giveaway").html('<i class="bx bxs-cart-download"></i> Update cart')
    }
    else if(localStorage.getItem("giveaway")) {
        $("#btn-giveaway").html('<i class="bx bx-check"></i> Added to cart')
    }

    updateTotal()
})

$("#price1-4").on("change", function() {

    if($("#price1-4").val() == 12) {
        $("#calc1-4").html("+<span id='total1-4'>25</span> USD")
    }
    else if($("#price1-4").val() == 24) {
        $("#calc1-4").html("+<span id='total1-4'>50</span> USD")
    }
    else if($("#price1-4").val() == 48) {
        $("#calc1-4").html("+<span id='total1-4'>75</span> USD")
    }
    else if($("#price1-4").val() == 72) {
        $("#calc1-4").html("+<span id='total1-4'>100</span> USD")
    }

    if(localStorage.getItem("giveaway") && localStorage.getItem("giveaway_duration") != $("#price1-4").val() + "h") {
        $("#btn-giveaway").html('<i class="bx bxs-cart-download"></i> Update cart')
    }
    else if(localStorage.getItem("giveaway")) {
        $("#btn-giveaway").html('<i class="bx bx-check"></i> Added to cart')
    }

    updateTotal()
})

$("#cart-close").click(function() {
    localStorage.clear();
    updateUI();
})

function updateTotal(){
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
    $("#total-sum").text(sum + " USD")

    if($("#y2-radio").is(":checked")) {
        $("#total-sum-promo").text("50 USD")
    }
    else {
        $("#total-sum-promo").text("40 USD")
    }

}

$("#btn-giveaway").click(function() {
    if($("#price1-1").val() != "" && $("#price1-3").val() != "" && $("#price1-4").val() != "") {
        localStorage.setItem("giveaway", $("#price1-1").val())

        localStorage.setItem("giveaway_pinned", $("#y1-radio").is(":checked") ? "Yes" : "No")
        localStorage.setItem("giveaway_pinned_total", $("#calc1-2").text() != "" ? $("#calc1-2").text() : "-")

        localStorage.setItem("giveaway_interactions", $("#price1-3").val())
        localStorage.setItem("giveaway_interactions_total", $("#price1-3").val() != 1 ? $("#calc1-3").text() : "-")

        localStorage.setItem("giveaway_duration", $("#price1-4").val() + "h")
        localStorage.setItem("giveaway_duration_total", $("#calc1-4").text())

        localStorage.setItem("giveaway_total", $("#total-sum").text().split(" ")[0])


        $("#btn-giveaway").html('<i class="bx bx-check"></i> Added to cart')
        updateUI()
    }
})


$("#y2").click(function() {
    if(!$("#y2").hasClass("active")) {
        $("#y2-radio").prop("checked", true)

        $("#y2").addClass("active")
        $("#n2").removeClass("active")

        $("#calc2-1").html("+<span id='total2-1'>10</span> USD")

        if(localStorage.getItem("promotion") && localStorage.getItem("promotion_pinned") != "Yes") {
            $("#btn-promotion").html('<i class="bx bxs-cart-download"></i> Update cart')
        }
        else if(localStorage.getItem("promotion")) {
            $("#btn-promotion").html('<i class="bx bx-check"></i> Added to cart')
        }
    }
    updateTotal()
})

$("#n2").click(function() {
    if(!$("#n2").hasClass("active")) {
        $("#n2-radio").prop("checked", true)

        $("#n2").addClass("active")
        $("#y2").removeClass("active")

        $("#calc2-1").html("")

        if(localStorage.getItem("promotion") && localStorage.getItem("promotion_pinned") != "No") {
            $("#btn-promotion").html('<i class="bx bxs-cart-download"></i> Update cart')
        }
        else if(localStorage.getItem("promotion")) {
            $("#btn-promotion").html('<i class="bx bx-check"></i> Added to cart')
        }
    }
    updateTotal()
})

$(document).on("click", "#giveaway-close", function() {
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
    localStorage.setItem("promotion", 40);
    localStorage.setItem("promotion_pinned", $("#y2-radio").is(":checked") ? "Yes" : "No")
    localStorage.setItem("promotion_pinned_total", $("#calc2-1").text() != "" ? $("#calc2-1").text() : "-")
    localStorage.setItem("promotion_total", $("#total-sum-promo").text().split(" ")[0])

    updateUI();
})

$(document).on("click", "#promotion-close", function() {
    localStorage.removeItem("promotion");
    localStorage.removeItem("promotion_pinned");
    localStorage.removeItem("promotion_pinned_total");
    localStorage.removeItem("promotion_total");

    updateUI();
})

function updateUI() {
    if (CheckBrowser()) {
    var list = "<tr><th></th><th></th><th></th><th></th></tr>\n";
    var total = 0;
    var price = 0;

    if(localStorage.getItem("giveaway")) {
        checkButton()

        list += 
        "<tr class='cart-main'><td>Giveaway</td>" 
        + "<td></td>" 
        + "<td></td>" 
        + "<td><span class='cart-close-single' id='giveaway-close'><i class='bx bx-x'></i></span></td></tr>"
        
        + "<tr class='cart-details'><td>Amount</td>"
        + "<td>$" + localStorage.getItem("giveaway") + "</td>" 
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
    else {
        $("#btn-giveaway").html('<i class="bx bxs-cart-add"></i> Add to cart')
    }

    if(localStorage.getItem("promotion")) {
        checkButton()

        list += 
        "<tr class='cart-main'><td>Promotion</td>" 
        + "<td></td>" 
        + "<td></td>" 
        + "<td><span class='cart-close-single' id='promotion-close'><i class='bx bx-x'></i></span></td></tr>"

        + "<tr class='cart-details'><td>Base fee</td>"
        + "<td>$" + localStorage.getItem("promotion") + "</td>" 
        + "<td>+" + localStorage.getItem("promotion") + " USD"
        + "<td></td></tr>"

        + "<tr class='cart-details'><td>Pinned</td>"
        + "<td>" + localStorage.getItem("promotion_pinned") + "</td>" 
        + "<td>" + localStorage.getItem("promotion_pinned_total") + "</td>"
        + "<td></td></tr>"

        + "<tr class='cart-total'><td>Total</td>" 
        + "<td></td>"
        + "<td>" + localStorage.getItem("promotion_total") + " USD</td>" 
        + "<td></td></tr>";

        total += 1;
        price = BigNumber(price).plus(localStorage.getItem("promotion_total"))
    }
    else {
        $("#btn-promotion").html('<i class="bx bxs-cart-add"></i> Add to cart')
    }

    if(localStorage.getItem("promotion") || localStorage.getItem("giveaway")) {
        $("#cart-total").text("Total: " + price + " USD")
    }
    else {
        $("#cart-total").text("")
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
        if(total == 1) {
            $("#btn-cart .cart-quantity").css("padding", "0.2px 5px")
        }
        else if(total == 2) {
            $("#btn-cart .cart-quantity").css("padding", "0.2px 4px")
        }
    }
    }
    else {
        alert('Cannot save items to cart as your browser does not support HTML 5. Please contact us via email contact@moonit.marketing.');
    }
}

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } 
    else {
        return false;
    }
}

function checkButton() {
    if(localStorage.getItem("giveaway") != $("#price1-1").val() || localStorage.getItem("giveaway_interactions") != $("#price1-3").val() || localStorage.getItem("giveaway_duration") != $("#price1-4").val() + "h" || $("#y1-radio").is(":checked") && localStorage.getItem("giveaway_pinned") != "Yes" || $("#n1-radio").is(":checked") && localStorage.getItem("giveaway_pinned") != "No") {
        $("#btn-giveaway").html('<i class="bx bxs-cart-download"></i> Update cart')
    }
    else if(localStorage.getItem("giveaway")) {
        $("#btn-giveaway").html('<i class="bx bx-check"></i> Added to cart')
    }

    if($("#y2-radio").is(":checked") && localStorage.getItem("promotion_pinned") != "Yes" || $("#n2-radio").is(":checked") && localStorage.getItem("promotion_pinned") != "No") {
        $("#btn-promotion").html('<i class="bx bxs-cart-download"></i> Update cart')
    }
    else if(localStorage.getItem("promotion")) {
        $("#btn-promotion").html('<i class="bx bx-check"></i> Added to cart')
    }
}