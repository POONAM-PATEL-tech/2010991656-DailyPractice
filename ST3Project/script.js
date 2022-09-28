function f1() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {

        let gmer = 0.38;
        //var gven = 0.91;
        //var gear = 1.0;
        // var gmars = 0.38;
        //var gjup = 2.34;
        //var gsat = 0.93;
        //var guran = 0.92;
        // var gnept = 1.12;
        document.getElementById("p").innerText = "Mercury";
        let newmass = n * gmer;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im1");
        pop.style.transtion = "2s ";

        pop.style.opacity = 0.9;
        pop.style.cursor = pointer;

    }

}

function f2() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {
        document.getElementById("p").innerText = "Venus";
        var gven = 0.91;
        var newmass = n * gven;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im2");
        pop.style.transtion = "2s ";
        pop.style.opacity = 0.9;



    }

}

function f3() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {
        document.getElementById("p").innerText = "Earth";
        var gear = 1.0;
        var newmass = n * gear;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im3");
        pop.style.transtion = "2s ";

        pop.style.opacity = 0.9;



    }

}

function f4() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {
        document.getElementById("p").innerText = "Mars";
        var gmars = 0.38;
        var newmass = n * gmars;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im4");
        pop.style.transtion = "2s ";

        pop.style.opacity = 0.9;

    }

}

function f5() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {
        document.getElementById("p").innerText = "Jupiter";
        var gjup = 2.34;
        var newmass = n * gjup;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im5");
        pop.style.transtion = "2s ";

        pop.style.opacity = 0.9;

    }

}

function f6() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {
        document.getElementById("p").innerText = "Saturn";
        var gsat = 0.93;
        var newmass = n * gsat;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im6");
        pop.style.transtion = "2s ";

        pop.style.opacity = 0.9;

    }

}

function f7() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {
        document.getElementById("p").innerText = "Uranus";
        var guran = 0.92;
        var newmass = n * guran;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im7");
        pop.style.transtion = "2s ";

        pop.style.opacity = 0.9;

    }

}

function f8() {
    var n = document.getElementById("css").value;
    n = Number(n);
    if (isNaN(n) || n == ' ') {
        alert("Please insert a number");
    } else {
        document.getElementById("p").innerText = "Neptune";
        var gnept = 1.12;
        var newmass = n * gnept;
        document.getElementById("d").innerHTML = newmass;
        let pop = document.getElementById("im8");
        pop.style.transtion = "2s ";

        pop.style.opacity = 0.9;

    }

}