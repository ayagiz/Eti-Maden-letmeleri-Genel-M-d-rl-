
$(document).ready(function(){
    $("#urun_turunu_degistir").click(function(){
         $("#secim_arayüzü").hide();
         var xml = new XMLHttpRequest();
         xml.onreadystatechange = function(){
            if(xml.readyState == 4 && xml.status == 200){
                var data = this.responseText.split("|");
                var inner = "<form target=\"_blank\" action=\"urun_turu_degistir.php\" method=\"post\"><label>Türü değiştirilecek ürünü seçiniz:<select name=\"select\">";
                for(var i  =0 ; i < data.length-1 ; ++i){
                    data[i] = data[i].trim();
                    var single_data = data[i].split(",");
                    inner = inner +"<option value=\""+single_data[0] + "\" >" + single_data[2] + "</option>"; 
                }
                inner = inner + "</select></label>";
                var tur_select = "<select name=\"tur\">"+
                "<option value=\"cay\">Çay</option>"+
                "<option value=\"bitkicayi\">Bitki Çayı</option>"+
                "<option value=\"kahve\" >Kahve</option>"+
                "<option value=\"yiyecek\">Yiyecek</option>"+
                "<option value=\"sogukicecek\">Soğuk içecek</option>"+
                "<option value=\"tatli\">Tatlı</option>"+
                "<option value=\"sicakicecek\">Sıcak içecek</option></select>";
                inner = inner + "<label>Yeni tür: "+ tur_select +" </label>";
                inner = inner + "<input id=\"tur_guncelle\" type=\"submit\" value=\"güncelle\">";
                inner = inner + "<input id=\"tur_geri\" type=\"reset\" value=\"geri dön\"></form>";
                document.getElementById("urun_turu_degistir_arayüzü").innerHTML = inner;
               set_tur_button_event();
            }

         };
         var url = "listeyi_cek.php";
         xml.open("GET",url,true);
         xml.send();
    });



});
function set_tur_button_event(){
    $("#tur_guncelle").click(function(){
        location.reload();
        
    });
    $("#tur_geri").click(function(){
        location.reload();
        
    }); 
    }