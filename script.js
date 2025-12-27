const now  = new Date()
const hour = now.getHours()

if(hour < 12){
  document.getElementById("p").textContent = "Good Morning"
} else if (hour < 16){
  document.getElementById("p").textContent = "Good Afternoon"
}
else{
document.getElementById("p").textContent = "Good Evening"
}