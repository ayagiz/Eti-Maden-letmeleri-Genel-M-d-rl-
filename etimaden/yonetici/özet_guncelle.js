
$(document).ready(function(){
    $("#ürün_özetini_güncelle").click(function(){
         $("#secim_arayüzü").hide();
         var xml = new XMLHttpRequest();

         xml.onreadystatechange = function(){
            if(xml.readyState == 4 && xml.status == 200){
                var data = this.responseText.split("|");
                var inner = "<form target=\"_blank\" action=\"ozet_guncelle.php\" method=\"post\"><label>Özeti güncellencek ürünü seçiniz:<select name=\"select\">";
                for(var i  =0 ; i < data.length-1 ; ++i){
                   data[i] = data[i].trim();
                    var single_data = data[i].split(",");
                    inner = inner +"<option value=\""+single_data[0]+","+single_data[3] + "\" >" + single_data[2] + "</option>"; 
                }
                inner = inner + "</select></label>";
                inner = inner + "<label>Yeni özet:<input name=\"ozet\" type=\"text\"></label>";
                inner = inner + "<input id=\"özet_güncelle\" type=\"submit\" value=\"güncelle\">";
                inner = inner + "<input id=\"özet_geri\" type=\"reset\" value=\"geri dön\"></form>";
                document.getElementById("özet_güncelle_arayüzü").innerHTML = inner;
               set_özet_button_event();
            }

         };
         var url = "listeyi_cek.php";
         xml.open("GET",url,true);
         xml.send();
    });



});
function set_özet_button_event(){
    $("#özet_güncelle").click(function(){
        location.reload();
        
    });
    $("#özet_geri").click(function(){
        location.reload();
       
    }); 
    }

