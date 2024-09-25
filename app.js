//  Date & time Logic

var user_birth=new Date(prompt("Enter your birthday Month, Day & Year"))
var new_get_time=user_birth.getTime()
var new_age=Math.floor(new_get_time/1000/60/60/24/365)
console.log(new_age)

var total_time=new Date()
var get_time=total_time.getTime()
var age=Math.floor(get_time/1000/60/60/24/365)
console.log(age)

var final_age=age-new_age
alert(`You are ${final_age} years old`)