
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
    var name = getCookie("NAME");
   if (id != "") {
        $(document).ready(function () {
            $("#enterID").hide();
        });
        $(document).ready(function () {
            $("#client").show();
        });
      
        var welcome = document.getElementById("welcome_client");

        welcome.innerHTML = "<h3>İsim:"+  name + " Oda no:<input id=\"current_room\" type=\"text\" value=\"" + room + "\"></h3>";
    }
    else {
        $(document).ready(function () {
            $("#enterID").show();
        });
    }
}
window.addEventListener("load", control_cookie);

function check_room(room) {
    for (var i = 0; i < mevcut_odalar.length; ++i) {
        for (var j = 0; j < mevcut_odalar[i].length; ++j) {

            if (room == mevcut_odalar[i][j])
                return true;
        }

    }
    return false;
}