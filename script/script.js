document.onload = showData();
//clock

setInterval(showTime, 1000);

function showTime() {
    
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    }
    else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;
}

showTime();
var date = new Date();
var current_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
document.getElementById("datee").innerHTML = current_date;

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        deleteData(close);
    }

}
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var h2 = document.createElement("h4");
    var h5 = document.createElement("h5");
    var p = document.createElement("h5");
    var div = document.createElement("div");
    var br = document.createElement('br');
    var inputTitle = document.getElementById("title").value;
    var inputDate = document.getElementById("date").value;
    var inputDescrip = document.getElementById("descrip").value;
    // var data = "Title : \r\n" +inputTitle + "Date : \r\n" + inputDate + "Description :" + inputDescrip;

    var s1 = "Title :" + inputTitle;
    var s2 = "Date :" + inputDate;
    var s3 = "Description :" + inputDescrip;
    var t1 = document.createTextNode(s1);
    var t2 = document.createTextNode(s2);
    var t3 = document.createTextNode(s3);
    h2.appendChild(t1);
    h5.appendChild(t2);
    p.appendChild(t3);
    try {
        div.appendChild(h2);
        //div.appendChild(br);
        div.appendChild(h5);
        //div.appendChild(br);
        div.appendChild(p);

    } catch (error) {
        alert("error");
    }




    li.appendChild(div);
    if (inputTitle === '' && inputDate === '') {
        alert("You must write something!");
    } else {
        //document.getElementById("myUL").appendChild(li);
        addData(inputTitle, inputDate, inputDescrip);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

    }

}
function addData(inputTitle, inputDate, inputDescrip) {
    var todolist;
    if (localStorage.getItem("todolist") == null) {
        todolist = [];

    }
    else {
        todolist = JSON.parse(localStorage.getItem("todolist"));

    }
    todolist.push({
        localTitle: inputTitle,
        localDate: inputDate,
        localDescription: inputDescrip,

    });
    localStorage.setItem("todolist", JSON.stringify(todolist));
    showData();
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("descrip").value = "";

    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }


}

// show data from local Storage
function showData() {

    var todolist;
    if (localStorage.getItem("todolist") == null) {
        todolist = [];
    }
    else {
        todolist = JSON.parse(localStorage.getItem("todolist"));

    }
    todolist.forEach(function (element, index) {
        var li = document.createElement("li");
        var h2 = document.createElement("h4");
        var h5 = document.createElement("h5");
        var p = document.createElement("h5");
        var div = document.createElement("div");
        var br = document.createElement('br');
        var s1 = "Title :" + element.localTitle;
        var s2 = "Date :" + element.localDate;
        var s3 = "Description :" + element.localDescription;
        var t1 = document.createTextNode(s1);
        var t2 = document.createTextNode(s2);
        var t3 = document.createTextNode(s3);
        h2.appendChild(t1);
        h5.appendChild(t2);
        p.appendChild(t3);

        div.appendChild(h2);
        //div.appendChild(br);
        div.appendChild(h5);
        //div.appendChild(br);
        div.appendChild(p);
        li.appendChild(div);
        document.getElementById("myUL").appendChild(li);
    });
}
//delete local item

function deleteData(index) {
    var todolist;
    if (localStorage.getItem("todolist") == null) {
        todolist = [];
    }
    else {
        todolist = JSON.parse(localStorage.getItem("todolist"));
    }
    todolist.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(todolist));
    showData();

}