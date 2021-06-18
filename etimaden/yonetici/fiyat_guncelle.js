
$(document).ready(function(){
    $("#urun_fiyat_guncelle").click(function(){
         $("#secim_arayüzü").hide();
         var xml = new XMLHttpRequest();

         xml.onreadystatechange = function(){
            if(xml.readyState == 4 && xml.status == 200){
                var data = this.responseText.split("|");
                var inner = "<form target=\"_blank\" action=\"fiyat_guncelle.php\" method=\"post\"><label>Fiyatı güncellencek ürünü seçiniz:<select name=\"select\">";
                for(var i  =0 ; i < data.length-1 ; ++i){
                    data[i].trim();
                    var single_data = data[i].split(",");
                    inner = inner +"<option value=\""+single_data[0]+","+single_data[2]+","+single_data[3] + "\" >" + single_data[2] + "</option>"; 
                }
                inner = inner + "</select></label>";
                inner = inner + "<label>Yeni fiyat:<input name=\"fiyat\" type=\"text\"></label>";
                inner = inner + "<input id=\"fiyat_guncelle\" type=\"submit\" value=\"güncelle\">";
                inner = inner + "<input id=\"fiyat_geri\" type=\"reset\" value=\"geri dön\"></form>";
                document.getElementById("fiyat_guncelle_arayüzü").innerHTML = inner;
                set_fiyat_button_event();
            }

         };
         var url = "listeyi_cek.php";
         xml.open("GET",url,true);
         xml.send();
    });



});
function set_fiyat_button_event(){
    $("#fiyat_guncelle").click(function(){
        location.reload();
        
    });
    $("#fiyat_geri").click(function(){
        location.reload();
        
    }); 
    }