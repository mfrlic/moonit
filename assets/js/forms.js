$("#send-offer").click(function() {
    if(localStorage.getItem("promotion") && $("#contact-input").val() != "" || localStorage.getItem("giveaway") && $("#contact-input").val() != "") {
        var price = 0;

        var summary = "";
        var summary_raw = ""

        if(localStorage.getItem("giveaway")) {
            summary +=
            "<h4>Giveaway</h4>" 
            + "Amount: <i>" + localStorage.getItem("giveaway") + " USD (+" + localStorage.getItem("giveaway") + " USD)</i><br>" 
            + "Pinned: <i>" + localStorage.getItem("giveaway_pinned") + " (" + localStorage.getItem("giveaway_pinned_total") + ")</i><br>" 
            + "Interactions: <i>" + localStorage.getItem("giveaway_interactions") + " (" + localStorage.getItem("giveaway_interactions_total") + ")</i><br>" 
            + "Duration: <i>" + localStorage.getItem("giveaway_duration") + " (" + localStorage.getItem("giveaway_duration_total") + ")</i><br>" 
            + "Giveaway total: <i>" + localStorage.getItem("giveaway_total") + " USD</i><br><br>";

            summary_raw +=
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
            "<h4>Promotion</h4>" 
            + "Base fee: <i>" + localStorage.getItem("promotion") + " USD (+" + localStorage.getItem("promotion") + " USD)</i><br>" 
            + "Pinned: <i>" + localStorage.getItem("promotion_pinned") + " (" + localStorage.getItem("promotion_pinned_total") + ")</i><br>" 
            + "Promotion total: <i>" + localStorage.getItem("promotion_total") + " USD</i><br><br>" 

            summary_raw += 
            "Promotion\n" 
            + "Base fee: " + localStorage.getItem("promotion") + " USD (+" + localStorage.getItem("promotion") + " USD)\n" 
            + "Pinned: " + localStorage.getItem("promotion_pinned") + " (" + localStorage.getItem("promotion_pinned_total") + ")\n" 
            + "Promotion total: " + localStorage.getItem("promotion_total") + " USD\n\n" 

            price = BigNumber(price).plus(localStorage.getItem("promotion_total"))
        }

        summary += "<br><h2>Total: " + price + " USD</h2>"
        summary += $("#contact1").hasClass("active") ? "Email: <i>" + $("#contact-input").val() + "</i>" : ($("#contact2").hasClass("active") ? "Telegram: <i>" + $("#contact-input").val() + "</i>" : "Twitter: <i>" + $("#contact-input").val() + "</i>")

        summary_raw += "Total: " + price + " USD\n\n"
        summary_raw += $("#contact1").hasClass("active") ? "Email: " + $("#contact-input").val() : ($("#contact2").hasClass("active") ? "Telegram: " + $("#contact-input").val() : "Twitter: " + $("#contact-input").val())

        $.ajax ({
            url: "submission.php",
            type: "POST",
            async: false,
            cache: false,
            data: {
                title: "Order Received",
                summary: summary,
                summary_raw: summary_raw
            },

            success: function(response) {
                localStorage.clear()
                updateUI();
        
                $("#contact-input").val("")
                $("#contact1").prop("checked", true)
        
                $("#contact1").addClass("active")
                $("#contact2").removeClass("active")
                $("#contact3").removeClass("active")

                $("#summary").val("")

                $("#cart").modal('hide')

                successMessage()

                return response;
            },
            error: function() {
                alert('Please try again');
            }
        })
    }
    else if($("#contact-input").val() == "" || !email.test($("#contact-input").val().toLowerCase()) && $("#contact1").hasClass("active")) {
        $("#contact-input").addClass("invalid")
    }
})

$("#contact-input").focus(function() {
    $("#contact-input").removeClass("invalid")
})

$("#contact1, #contact2, #contact3").click(function() {
    $("#contact-input").removeClass("invalid")
})

$("#submit-p").click(function() {
    if($("#email-p").val() != "" && $("#message").val() != "") {
        if($("#checkbox1").is(":checked") || $("#checkbox2").is(":checked") || $("#checkbox3").is(":checked") || $("#checkbox4").is(":checked") || $("#checkbox5").is(":checked") || $("#checkbox6").is(":checked")) {

            var summary = 
            "Email: <b>" + $("#email-p").val() + "</b><br><br>"
            + "Interested in:<br>"
            + ($("#checkbox1").is(":checked") ? "<b>Twitter</b><br>" : "")
            + ($("#checkbox2").is(":checked") ? "<b>Reddit</b><br>" : "")
            + ($("#checkbox3").is(":checked") ? "<b>4chan</b><br>" : "")
            + ($("#checkbox4").is(":checked") ? "<b>Telegram</b><br>" : "")
            + ($("#checkbox5").is(":checked") ? "<b>TikTok</b><br>" : "")
            + ($("#checkbox6").is(":checked") ? "<b>Youtube</b><br>" : "")
            + "<br>Message:<br><i>"
            + $("#message").val() + "</i>"

            var summary_raw = 
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

            $.ajax ({
                url: "submission.php",
                type: "POST",
                async: false,
                cache: false,
                data: {
                    title: "Position application",
                    summary: summary,
                    summary_raw: summary_raw
                },
    
                success: function(response) {
            
                    $("#email-p").val("")

                    $("#opt1").removeClass("active")
                    $("#opt2").removeClass("active")
                    $("#opt3").removeClass("active")
                    $("#opt4").removeClass("active")
                    $("#opt5").removeClass("active")
                    $("#opt6").removeClass("active")

                    $("#checkbox1").prop("checked", false)
                    $("#checkbox2").prop("checked", false)
                    $("#checkbox3").prop("checked", false)
                    $("#checkbox4").prop("checked", false)
                    $("#checkbox5").prop("checked", false)
                    $("#checkbox6").prop("checked", false)

                    $("#message").val("")

                    successMessage()

                    return response;
                },
                error: function() {
                    alert('Please try again.');
                }
            })
        }
    }
    else {
        if($("#email-p").val() == "" || !email.test($("#email-p").val().toLowerCase())) {
            $("#email-p").addClass("invalid")
        }
        if(!$("#checkbox1").is(":checked") && !$("#checkbox2").is(":checked") && !$("#checkbox3").is(":checked") && !$("#checkbox4").is(":checked") && !$("#checkbox5").is(":checked") && !$("#checkbox6").is(":checked")) {
            $("#opt-none").removeClass("d-none")
        }
        if($("#message").val() == "") {
            $("#message").addClass("invalid")
        }
    }
})

$("#email-p").focus(function() {
    $("#email-p").removeClass("invalid")
})

$("#message").focus(function() {
    $("#message").removeClass("invalid")
})

$("#opt1, #opt2, #opt3, #opt4, #opt5, #opt6").click(function() {
    $("#opt-none").addClass("d-none")
})

$("#submit-q").click(function() {
    if($("#email-q").val() != "" && $("#question").val() != "" && email.test($("#email-q").val().toLowerCase())) {
        var summary = 
        "Email: <b>" + $("#email-q").val() + "</b><br><br>"
        + "Question:<br><i>"
        + $("#question").val() + "</i>"

        var summary_raw = 
        "Email: " + $("#email-q").val() + "\n"
        + "\nQuestion:\n"
        + $("#question").val()

        $.ajax ({
            url: "submission.php",
            type: "POST",
            async: false,
            cache: false,
            data: {
                title: "General question",
                summary: summary,
                summary_raw: summary_raw
            },

            success: function(response) {
        
                $("#email-q").val("")
                $("#question").val("")

                successMessage()

                return response;
            },
            error: function() {
                alert('Please try again.');
            }
        })
    }
    else {
        if($("#email-q").val() == "" || !email.test($("#email-q").val().toLowerCase())) {
            $("#email-q").addClass("invalid")
        }
        if($("#question").val() == "") {
            $("#question").addClass("invalid")
        }
    }
});

$("#email-q").focus(function() {
    $("#email-q").removeClass("invalid")
})

$("#question").focus(function() {
    $("#question").removeClass("invalid")
})

$("#btn-q").click(function() {
    $("#email-p").removeClass("invalid")
    $("#message").removeClass("invalid")
    $("#opt-none").addClass("d-none")
})

$("#btn-p").click(function() {
    $("#email-q").removeClass("invalid")
    $("#question").removeClass("invalid")
})

const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const delay = ms => new Promise(res => setTimeout(res, ms));

async function successMessage() {
    $("#success").modal('show')
    await delay(2000);
    $("#success").modal('hide')
}