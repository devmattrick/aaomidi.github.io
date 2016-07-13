var load = function (doc) {
    'use strict';

    if (!window.XMLHttpRequest && 'ActiveXObject' in window) {
        window.XMLHttpRequest = function () {
            return new ActiveXObject('MSXML2.XMLHttp');
        };
    }

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://aaomidi.com/extras/html/navbar.html", true);

    xmlhttp.onreadystatechange = function () {
        if (this.readyState !== 4 || this.status !== 200) {
            document.getElementById('navbar').innerHTML = "<b> Error reading navbar.html </b>";
            return;
        }

        document.getElementById('navbar').innerHTML = this.responseText;
    };

    xmlhttp.send();


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://aaomidi.com/extras/html/footer.html", true);

    xmlhttp.onreadystatechange = function () {
        if (this.readyState !== 4 || this.status !== 200) {
            document.getElementById('footer').innerHTML = "<b> Error reading footer.html </b>";
            return;
        }

        document.getElementById('footer').innerHTML = this.responseText;
    };

    xmlhttp.send();

    setHighlight("home");
    return xmlhttp.responseText;
};

function setHighlight(site) {
    var id = site.toLowerCase();
    id = "#nav-" + id;
    $(id).addClass("active");
}