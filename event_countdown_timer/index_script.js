// const daysLeft = document.getElementById("days");
// const hoursLeft= document.getElementById("hours");
// const minsLeft = document.getElementById("mins");
// const secondsLeft = document.getElementById("seconds");

const newYears = "1 Jan 2022";
let years = ["2021", "2022", "2023"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
              "November", "December"];

function dropDown() {
    for (i = 1; i < years.length; i++) {
      var opt = document.createElement("option");
      document.getElementById("year").innerHTML += '<option value="' + i + '">' + years[i-1] + '</option>';

    }
    for (i = 1; i < months.length; i++) {
      var opt = document.createElement("option");
      document.getElementById("month").innerHTML += '<option value="' + i + '">' + months[i-1] + '</option>';

    }
    for (i = 1; i < 32; i++) {
      var opt = document.createElement("option");
      document.getElementById("day").innerHTML += '<option value="' + i + '">' + i + '</option>';
    }
}

function checkDate(){
  var yy = document.getElementById("year");
  var yy_text = yy.options[yy.selectedIndex].text;
  var mm = document.getElementById("month");
  var mm_text = mm.options[mm.selectedIndex].text;
  var dd = document.getElementById("day");
  var dd_text = dd.options[dd.selectedIndex].text;
  var d = new Date(yy_text+" "+mm_text+" "+dd_text);
  var validity = document.getElementById("validity");
  var countButton = document.getElementById("count");
  var cur_d = new Date();
  Date.prototype.isValid = function () {

    // If the date object is invalid it
    // will return 'NaN' on getTime()
    // and NaN is never equal to itself.
    return this.getTime() === this.getTime();
  };

  if (d.isValid()){
    if (d.getDate()==dd_text){
      if (cur_d-d>0){
        validity.style.color = "red";
        validity.innerHTML = "Sorry, Invalid Date. Pick A Valid Date, Please.";
        countButton.style.display = "none";
      }else{
        validity.style.color = "green";
        validity.innerHTML = "Valid Date";
        countButton.style.display = "block";
        localStorage.setItem("EventDay", d.getTime());
      }

    }else{
      validity.style.color = "red";
      validity.innerHTML = "Sorry, Invalid Date. Pick A Valid Date, Please.";
      countButton.style.display = "none";
    }
  }else{
    validity.style.color = "red";
    validity.innerHTML = "Sorry, You Haven't Set A Date.";
    countButton.style.display = "none";
  }
}
// initial call
// countdown();
dropDown();

// setInterval(countdown, 1000);
