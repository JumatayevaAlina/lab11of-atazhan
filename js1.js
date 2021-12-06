$(document).ready(function() {
$("#forms").validate({
rules: {
  
username : {
required: true,
minlength: 5,
maxlength: 15
},

email: {
required: true,
email: true
},

password1: {
  required: true,
minlength: 6,
maxlength: 12
},

password2: {
  required: true,
minlength: 6,
maxlength: 12,
equalTo : "#password"
},
}
});
});