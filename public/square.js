$(document).ready(function () {

//variables

	var selected = $('select').first().html()
	var item_count = 0
	var total_cost = 0


 $('form').
  on('change', 'select', function(){
    
    $('form div:first').append("<select>" + selected + "</select><br />");
    item_count++;
    $('#drinks').text(item_count)
    
    total_cost = total_cost + Number($(this).find(':selected').attr('data-price'));
    $('#cost').text("$" + (total_cost/100).toFixed(2));
  });



 	$(".button").click(function(event) {

 		event.preventDefault();


 		$.ajax({

 			url:'/shop',
 			data: total_cost,
 			type: "POST",

 			success: function(){
 				$('#order_form').html("<div id='message'></div>");
 				$('#message').html("<h2>Thank you for your order!</h2>")
 					.append("<p>Give us 10 minutes.</p>")
 					.hide()
 					.fadeIn(1500, function() {
 						$('#message').append("We'll take your payment of $" + (total_cost/100).toFixed(2) + " when we deliver your drink.");
 					});
 			},
 			
 			error: function() {
 				alert("Sorry, our server is down.  Please try again!")
 			}

 		});


 		// $.post('/shop', total_cost, function(responsetext) {

 		// 		$('#order_form').html("<div id='message'></div>");
 		// 		$('#message').html("<h2>" + responsetext + "!</h2>")
 		// 			.append("<p>Give us 10 minutes.</p>")
 		// 			.hide()
 		// 			.fadeIn(1500, function() {
 		// 				$('#message').append("We'll take your payment of $" + (total_cost/100).toFixed(2) + " when we deliver your drink.");
 		// 			});
  	// 	});

 	
 	}); //closing $(".button").click.....etc



});

