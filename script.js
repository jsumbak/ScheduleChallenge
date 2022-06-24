var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var saveBtn = $(".saveBtn");
saveBtn.click(function(event){
var input = event.target.attributes[0].value
var inputValue = $("." + input).val()
    console.log(inputValue)
    localStorage.setItem(input,inputValue)
})

$(".nine").val(localStorage.getItem("nine"))
$(".ten").val(localStorage.getItem("ten"))
$(".eleven").val(localStorage.getItem("eleven"))
$(".twelve").val(localStorage.getItem("twelve"))
$(".one").val(localStorage.getItem("one"))
$(".two").val(localStorage.getItem("two"))
$(".three").val(localStorage.getItem("three"))
$(".four").val(localStorage.getItem("four"))
$(".five").val(localStorage.getItem("five"))

// momnent js is before and after