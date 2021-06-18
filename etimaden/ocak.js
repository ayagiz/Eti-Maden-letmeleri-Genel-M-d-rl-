var admin_ID = "1919";//ocak başına verilen id. Bu id ile ocak başı için tasarlanmış arayüz açılır .
var show_admin_orders_interval = setInterval(show_admin_orders,1000);
var ocaklar = new Array();

ocaklar[0] = 2100;
ocaklar[1] = 1900;
ocaklar[2] = 1600;
ocaklar[3] = 1500;
ocaklar[4] = 1400;
ocaklar[5] = 1200;
ocaklar[6] = 1000;
ocaklar[7] = 600;
ocaklar[8] = 300;

$(document).ready(function () {
    $("#change_admin").click(function () {
        document.cookie = "ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "ROOM=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        $("#server").hide();
        $("#enterID").show();
    });
});

class teslim_ediliyor{  
    constructor(){
        this.timer = 0;
        this.is_started = false;
        this.id = -1;
        }
    update_time(){
        if(this.is_started){
            this.timer = this.timer + 1;
            if(this.timer == 10){
                    
                    var xml = new XMLHttpRequest();
                    xml.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){

                        
                            show_admin_orders();
                        }
                    };
                    var url = "ocak_php/siparis_teslim_edildi.php?id="+ this.id;
                    xml.open("GET",url,true);
                    xml.send();
                    this.id = -1;
                        this.timer = 0;
                        this.is_started = false;
                }
        }
    }
    add_id(id){
        this.is_started = true;
        this.id = id;
    }

}
var teslim_control = new Array();
teslim_control[0] = new teslim_ediliyor();
teslim_control[1] = new teslim_ediliyor();
teslim_control[2] = new teslim_ediliyor();




function show_admin_orders() {
    var xml = new XMLHttpRequest;

    xml.onreadystatechange = function () {
        var datas = "";
        if (this.readyState == 4 && this.status == 200) {
            datas = this.responseText.split("|");
            var table = document.getElementById("admin_siparisler");
            var innerhtml = "<caption>TESLİM EDİLMEYİ BEKLEYEN SİPARİŞLER</caption>" +
                "<tr><th>Sipariş teslim odası</th><th>Sipariş özeti</th> <th>Tutar</th> <th>Sipariş durumu</th><th>Sipariş durumunu güncelle </tr>" ;
            for (var i = 0; i < datas.length - 1; ++i) {
                var row = datas[i].split("*");
                innerhtml = innerhtml + "<tr id=\"" + row[4] + "\"><td>" + row[5] + "</td><td><h4>" + row[2] + "</h4></td><td>" + row[3] + " TL</td><td>" + row[0] + "</td>"; 
                if(i < 3){
                    if(row[0] == "beklemede")
                        innerhtml = innerhtml  +"<td><button type\"button\" id=\"hazirlaniyor_" + row[4] + "\" >hazırlanıyor</button></td></tr>";
                    else if(row[0] == "hazirlaniyor")
                        innerhtml = innerhtml  +"<td><button type\"button\" id=\"teslim_ediliyor_"+ row[4] + "\">teslim ediliyor</button></td></tr>" ;   
                }


            }

            table.innerHTML = innerhtml;
            set_admin_buttons(datas,datas.length-1);

        }
    };

    var url = "ocak_php/ShowAll.php?room=" + getCookie("ROOM");
    xml.open("GET", url, true);
    xml.send();
}


function set_admin_buttons(datas,size) {
        for (var i = 0; i < size; ++i) {
            if(i < 3){
            var row = datas[i].split("*");
            var id = parseInt(row[4]);
            if(row[0] != "guncelleniyor"){
                if(row[0] == "beklemede")
                    set_status_buttons(id,"hazirlaniyor");
                else if(row[0] == "hazirlaniyor")
                    set_status_buttons(id,"teslim_ediliyor");
            }
            }
        }

    }
    function set_status_buttons(siparis_id,idtag){

$("#"+idtag+"_"+siparis_id).click(function (){

var xml = new XMLHttpRequest();
xml.onreadystatechange = function (){
if (this.readyState == 4 && this.status == 200) {

    if(this.responseText.trim() == "iptal")
    alert("Sipariş iptal edilmiştir");
    if(this.responseText.trim() == "guncelleniyor")
    alert("Sipariş sipariş eden kişi tarafından şuan güncelleniyor");

    if(idtag == "teslim_ediliyor"){
        
        start_timer(siparis_id);
    }
    show_admin_orders();
}
};

var url = "ocak_php/siparis_durumu_guncelle.php?id="+siparis_id +"&new_status="+idtag;
xml.open("GET",url,true);
xml.send();

});

}
function start_timer(id){
var siparis_id = parseInt(id);
for(var i = 0 ; i < teslim_control.length ; ++i){
if(!teslim_control[i].is_started){

    teslim_control[i].add_id(siparis_id);
    break;
}
else{
    console.log("teslim " + i + " is full" );
}
}
}
function update_time_for_teslim(){
for(var i = 0 ; i < teslim_control.length ; ++i){
if(teslim_control[i].is_started)
teslim_control[i].update_time();

}
}
var teslim_interval = setInterval(update_time_for_teslim,1000);
window.addEventListener("load", show_admin_orders);
