var date = new Date();
date.setTime(date.getTime() + (30*24*60*60*1000));
var datestring = date.toUTCString();
datestring = datestring.substring(0,datestring.length-3);
datestring = datestring + "UTC";
var name;
$(document).ready(function () {
    $("#submit").click(function () {
        alert("hah");
        var room = document.getElementById("ROOM");
        var check = check_room(parseInt(room.value));
        var id = document.getElementById("ID");
        var id_check = check_id(id.value);
        alert("hah");
        if(!id_check){
            alert("id:"+id.value + " mevcut değil");
        }
        else if (parseInt(id.value) == admin_ID && check) {

            var admin_check = check_admin_room(parseInt(room.value));
            if (admin_check) {

               document.cookie = "ID=" + id.value + "; expires=" + datestring;
               document.cookie = "ROOM=" + room.value + "; expires=" + datestring;
               
            }
            else {
                var ocaknumaraları = "";
                for (var i = 0; i < ocaklar.length; ++i) {
                    
                    ocaknumaraları = ocaknumaraları + ocaklar[i] + ",";
                }
                alert("Oda " + room.value + " ocak numarası değildir.\nOcak numaraları: " + ocaknumaraları);
                id.value = "";
                room.value = "";
            }
        }
         else if (check && id_check) {

            document.cookie = "ID=" + id.value + "; expires="+ datestring;
            document.cookie = "ROOM=" + room.value + "; expires=" + datestring;
            document.cookie = "NAME=" + name + "; expires=" + datestring;
            
            control_cookie();
        }
        else if(!check && id_check) {
            alert("Oda " + room.value + " mevcut değil.");
            id.value = "";
            room.value = "";
        }
        
    });
   
});
function check_id(id){
var xml = new XMLHttpRequest();
var wait = true;
var result = true;
xml.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
    wait = false;
    if(this.responseText == "error"){
       result = false;
    }else{
        name = this.responseText;
    }
    return result;
}
};
xml.open("GET","check_id.php?id="+id,false);
xml.send();
return result;
}