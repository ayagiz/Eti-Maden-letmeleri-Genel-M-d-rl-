
$(document).ready(function(){
    $("#urun_sil").click(function(){
         $("#secim_arayüzü").hide();
         var xml = new XMLHttpRequest();

         xml.onreadystatechange = function(){
            if(xml.readyState == 4 && xml.status == 200){
                var data = this.responseText.split("|");
                var inner = "<form target=\"_blank\" action=\"urun_sil.php\" method=\"post\"><label>Silinecek ürünü seçiniz:<select name=\"select\">";
                for(var i  =0 ; i < data.length-1 ; ++i){
                    data[i] = data[i].trim();
                    var single_data = data[i].split(",");
                    inner = inner +"<option value=\""+single_data[0] + "\" >" + single_data[2] + "</option>"; 
                }
                inner = inner + "</select></label>";
                inner = inner + "<input id=\"sil_güncelle\" type=\"submit\" value=\"sil\">";
                inner = inner + "<input id=\"sil_geri\" type=\"reset\" value=\"geri dön\"></form>";
                document.getElementById("urun_sil_arayüzü").innerHTML = inner;
               set_sil_button_event();
            }

         };
         var url = "listeyi_cek.php";
         xml.open("GET",url,true);
         xml.send();
    });



});
function set_sil_button_event(){
    $("#sil_güncelle").click(function(){
        location.reload();
        
    });
    $("#sil_geri").click(function(){
        location.reload();
       
    }); 
    }