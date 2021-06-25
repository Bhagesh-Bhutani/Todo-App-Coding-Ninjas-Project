// Get Current Date and set Min date in the datepicker so that user cannot set due date to past dates

var currDate = new Date();
var year = currDate.getFullYear().toString();
var month = currDate.getMonth() + 1;
month = month.toString();
var day = currDate.getDate().toString();

// if month or day has 1 digit, for eg. month = '1' or day = '9', prefix it with '0' to follow yyyy-mm-dd format, otherwise wont work

if(month.length == 1){
    month = "0" + month;
}

if(day.length == 1){
    day = "0" + day;
}

var date_to_str = year + '-' + month + '-' + day;
document.querySelector('input[type = date]').setAttribute('min', date_to_str);

// When delete tasks button is clicked, the following event handler will detect it

var delete_tasks_btn = document.getElementById('delete-tasks-btn');
delete_tasks_btn.addEventListener('click', function(event){
    let checked_boxes = document.querySelectorAll('input[type = checkbox]:checked');
    let check_boxes_arr = Array.from(checked_boxes);
    let checked_ids = check_boxes_arr.map(box => {
        return box.getAttribute('value');
    });
    console.log(checked_ids);
    $.post('/delete-tasks', {checked: checked_ids}, function(){
        window.location.href = '/';
    });
});