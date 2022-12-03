const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    }));
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.getElementById("submitBtn").addEventListener("click", norefresh);
function norefresh(click) {
    click.preventDefault();
}

var selection; 

document.getElementById("happy").addEventListener("click", highlight0);

function highlight0() {
    document.getElementById("response").innerHTML = "Yipee! That's great to hear! It's important to look for the good in each day.";
    document.getElementById("lastresponse").innerHTML = "Thinking about what we are happy about helps us feel grateful for what we have.";
    var emotion = document.getElementById("happy");
    emotion.classList.toggle("clicked");
    console.log(emotion);
}

document.getElementById("calm").addEventListener("click", highlight1);

function highlight1() {
    document.getElementById("response").innerHTML = "Yipee! That's great to hear! It's important to look for the good in each day.";
    document.getElementById("lastresponse").innerHTML = "Thinking about what we are happy about helps us feel grateful for what we have.";
    var emotion = document.getElementById("calm");
    emotion.classList.toggle("clicked");
    console.log(emotion);
}

document.getElementById("excited").addEventListener("click", highlight2);

function highlight2() {
    document.getElementById("response").innerHTML = "Yipee! That's great to hear! It's important to look for the good in each day.";
    document.getElementById("lastresponse").innerHTML = "Thinking about what we are happy about helps us feel grateful for what we have.";
    var emotion = document.getElementById("excited");
    emotion.classList.toggle("clicked");
    console.log(emotion);
}

document.getElementById("sad").addEventListener("click", highlight3);

function highlight3() {
    document.getElementById("response").innerHTML = "I'm sorry you're having a tough time! It's important to look after your mental health on days like this.";
    document.getElementById("lastresponse").innerHTML = "Remember, a problem shared is a problem halved, and always talk to a grown-up when you feel down.";
    var emotion = document.getElementById("sad");
    emotion.classList.toggle("clicked");
    console.log(emotion);
}

document.getElementById("angry").addEventListener("click", highlight4);

function highlight4() {
    document.getElementById("response").innerHTML = "I'm sorry you're having a tough time! It's important to look after your mental health on days like this.";
    document.getElementById("lastresponse").innerHTML = "Remember, a problem shared is a problem halved, and always talk to a grown-up when you feel down.";
    var emotion = document.getElementById("angry");
    emotion.classList.toggle("clicked");
    console.log(emotion);
}

document.getElementById("worried").addEventListener("click", highlight5);

function highlight5() {
    document.getElementById("response").innerHTML = "I'm sorry you're having a tough time! It's important to look after your mental health on days like this.";
    document.getElementById("lastresponse").innerHTML = "Remember, a problem shared is a problem halved, and always talk to a grown-up when you feel down.";
    var emotion = document.getElementById("worried");
    emotion.classList.toggle("clicked");
    console.log(emotion);
}