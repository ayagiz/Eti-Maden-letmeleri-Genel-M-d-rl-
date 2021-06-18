
$(document).ready(function(){
    $("#urun_ekle").click(function(){
         $("#secim_arayüzü").hide();
            var key="";

            var xml = new XMLHttpRequest();
            xml.open("GET","son_sutunu_cek",true);
            xml.send();
            xml.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                key = this.responseText.trim();
                var inner = "<form target=\"_blank\" action=\"urun_ekle.php\" method=\"post\">";
                inner = inner + "<label>Yeni ürün kodu:<input name=\"kod\" type=\"text\" ></label>";
                inner = inner + "<label>Yeni ürün özeti:<input name=\"ozet\" type=\"text\"></label>";
                inner = inner + "<label>Yeni ürün fiyatı:<input name=\"fiyat\" type=\"text\"></label>";
                var tur_select = "<label>Tür:<select name=\"tur\">"+
                "<option value=\"cay\">Çay</option>"+
                "<option value=\"bitkicayi\">Bitki Çayı</option>"+
                "<option value=\"kahve\" >Kahve</option>"+
                "<option value=\"yiyecek\">Yiyecek</option>"+
                "<option value=\"sogukicecek\">Soğuk içecek</option>"+
                "<option value=\"tatli\">Tatlı</option>"+
                "<option value=\"sicakicecek\">Sıcak içecek</option></select></label>";
                inner = inner + tur_select;
                inner = inner + "<input name=\"son_sutun\" type=\"hidden\" value=\""+key+"\">";
                inner = inner + "<input id=\"ekle_güncelle\" type=\"submit\" value=\"güncelle\">";
                inner = inner + "<input id=\"ekle_geri\" type=\"reset\" value=\"geri dön\"></form>";
                document.getElementById("urun_ekle_arayüzü").innerHTML = inner;
                set_ekle_button_event();
                }
            };



            
                
            
                
            
});
});
function set_ekle_button_event(){
    $("#ekle_güncelle").click(function(){
        location.reload();
        
    });
    $("#ekle_geri").click(function(){
        location.reload();
        
    }); 

    }
