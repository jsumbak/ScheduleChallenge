var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var saveBtn = $(".saveBtn");
saveBtn.click(function(event){
var input = event.target.attributes[0].value
var inputValue = $("." + input).val()
    console.log(inputValue)
    localStorage.setItem(input,inputValue)
})

// create local storage for text
$(".nine").val(localStorage.getItem("nine"))
$(".ten").val(localStorage.getItem("ten"))
$(".eleven").val(localStorage.getItem("eleven"))
$(".twelve").val(localStorage.getItem("twelve"))
$(".one").val(localStorage.getItem("one"))
$(".two").val(localStorage.getItem("two"))
$(".three").val(localStorage.getItem("three"))
$(".four").val(localStorage.getItem("four"))
$(".five").val(localStorage.getItem("five"))

function hourTracker() {
    var currentHour = moment().hour(); 

    // loop for time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass(".past");
            $(this).removeClass(".future");
            $(this).removeClass(".present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass(".past");
            $(this).addClass(".present");
            $(this).removeClass(".future");
        }
        else {
            $(this).removeClass(".present");
            $(this).removeClass(".past");
            $(this).addClass(".future");
        }

        hourTracker(); 
    })
}

