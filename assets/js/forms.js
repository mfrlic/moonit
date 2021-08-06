$("#send-offer").click(function() {
    if(localStorage.getItem("promotion") && $("#contact-input").val() != "" || localStorage.getItem("giveaway") && $("#contact-input").val() != "") {
        var price = 0;
        var summary = "Order summary\n\n";

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

        summary += 
        "Total: " + price + "USD\n\n"
        + $("#contact1").is(":checked") ? "Email: " + $("#contact-input").val() : ($("#contact2").is(":checked") ? "Telegram: " + $("#contact-input").val() : "Twitter: " + $("#contact-input").val())

        $.ajax ({
            url: "submission.php",
            type: "POST",
            async: false,
            cache: false,
            data: {
                summary: summary
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

                $("#cart").hide()

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
            "Position application\n\nEmail: " + $("#email-p").val() + "\n\n"
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
                    summary: summary
                },
    
                success: function(response) {
            
                    $("#email-p").val("")

                    $("#opt1").prop("checked", false)
                    $("#opt2").prop("checked", false)
                    $("#opt3").prop("checked", false)
                    $("#opt4").prop("checked", false)
                    $("#opt5").prop("checked", false)
                    $("#opt6").prop("checked", false)

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
        "General question\n\nEmail: " + $("#email-q").val() + "\n"
        + "\nQuestion:\n"
        + $("#question").val()

        $.ajax ({
            url: "submission.php",
            type: "POST",
            async: false,
            cache: false,
            data: {
                summary: summary
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
})