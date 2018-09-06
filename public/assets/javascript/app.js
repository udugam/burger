$("#submitBurger").on("click", function() {
    event.preventDefault()
    var burgerObj = {
        BurgerName: $("#newBurgerInput").val().trim(),
        Devoured: 0
    }
    $.ajax({
        url: '/api/burger',
        method: 'POST',
        data: burgerObj
    }).then(function(response) {
        console.log(response)
    }) 
})

$(".eat").on("click", function() {
    event.preventDefault()
    var burgerUpdate = {
        Devoured: 1
    }
    var burgerID = $(this).attr("data-id")
    $.ajax({
        url: '/api/burger/'+burgerID,
        method: 'POST',
        data: burgerUpdate
    }).then(function(response) {
        console.log(response)
    }) 
})