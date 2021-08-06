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
            + "Promotion total: <i>" + localStorage.getItem("promotion") + " USD</i><br><br>" 

            summary_raw += 
            "Promotion\n" 
            + "Promotion total: " + localStorage.getItem("promotion") + " USD\n\n" 

            price = BigNumber(price).plus(localStorage.getItem("promotion"))
        }

        summary += "<br><h2>Total: " + price + " USD</h2>"
        summary += $("#contact1").is(":checked") ? "Email: <i>" + $("#contact-input").val() + "</i>" : ($("#contact2").is(":checked") ? "Telegram: <i>" + $("#contact-input").val() + "</i>" : "Twitter: <i>" + $("#contact-input").val() + "</i>")

        summary_raw += "Total: " + price + " USD\n\n"
        summary_raw += $("#contact1").is(":checked") ? "Email: " + $("#contact-input").val() : ($("#contact2").is(":checked") ? "Telegram: " + $("#contact-input").val() : "Twitter: " + $("#contact-input").val())

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
    
                    return response;
                },
                error: function() {
                    alert('Please try again.');
                }
            })
        }
    }
})

$("#submit-q").click(function() {
    if($("#email-q").val() != "" && $("#question").val() != "") {

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

                return response;
            },
            error: function() {
                alert('Please try again.');
            }
        })
    }
});

async function successMessage() {
    $("#success").modal('show')
    await delay(5000)
    $("#success").modal('hide')
}