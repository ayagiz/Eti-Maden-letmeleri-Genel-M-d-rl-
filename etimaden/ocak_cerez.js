
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function control_cookie() {
    //document.cookie = "ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    var id = getCookie("ID");
    var room = getCookie("ROOM");
    if (parseInt(id) == admin_ID) {
        $(document).ready(function () {
            $("#enterID").hide();
        });
        $(document).ready(function () {
            $("#server").show();
        });
        var welcome = document.getElementById("welcome_admin");

        welcome.innerHTML = "<h3>"+  "Oda no:" + room + "</h3>";
    }
    else {
        $(document).ready(function () {
            $("#enterID").show();
        });
    }
}
window.addEventListener("load", control_cookie);
function check_admin_room(room) {
    for (var i = 0; i < ocaklar.length; ++i) {
        if (ocaklar[i] === room)
            return true;
    }
    return false;
}
