// güncel siparişi göster tuşuna basıldığın da bu değişken show_orders() fonksiyonunu saniye başı çağıran fonksiyonu tutar
var show_order_interval;
$(document).ready(function () {
        $("#kahve_table").hide();
        $("#cay_table").hide();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").hide();
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_kahve").css("background-color","lightgrey");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","lightgrey");
    $("#change_customer").click(function () {
        //kullanıcı değiştirilmek istendiğin de kullanıcının sicil ve oda sını tutan çerezler silinir.
        document.cookie = "ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "ROOM=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        $("#row").hide();
        $("#sürec_tablosu").hide();
        clearInterval(show_order_interval);
        $("#client").hide();
        $("#enterID").show();
    });
    $("#show_order_table").click(function(){

        clearInterval(show_order_interval);
        //sipariş verilmek istendiğin de optimize etme amacı ile show_orders() fonksiyonunun zamanlayıcısı silinir.
        $("#row").show();
        $("#sürec_tablosu").hide();

    });
    $("#show_current_orders").click(function(){
        show_orders();
        show_order_interval = setInterval(show_orders,1000);
        //güncel siparişleri göster tuşuna basıldığın da show_orders() fonksiyonu saniye başı çağırılcak şekil de ayarlanır. 
        $("#row").hide();
        $("#sürec_tablosu").show();
    });
    $("#show_sıkkullanılanlar").click(function (){
        $("#sıkkullanılanlar_table").show();

    });
    $("#show_sıkkullanılanlar").click(function (){

        $("#show_kahve").css("background-color","lightgrey");
        $("#show_sıkkullanılanlar").css("background-color","green");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","lightgrey");
        $("#kahve_table").hide();
        $("#cay_table").hide();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").show();


    });
    $("#show_kahve").click(function (){
        $("#show_kahve").css("background-color","green");
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","lightgrey");
        $("#kahve_table").show();
        $("#cay_table").hide();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").hide();

    });
    $("#show_çay").click(function (){
        $("#show_kahve").css("background-color","lightgrey");
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_çay").css("background-color","green");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","lightgrey");
        $("#kahve_table").hide();
        $("#cay_table").show();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").hide();

    });
    $("#show_bitkiçayı").click(function (){
        $("#show_kahve").css("background-color","lightgrey");
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","green");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","lightgrey");
        $("#kahve_table").hide();
        $("#cay_table").hide();
        $("#bitki_cayi_table").show();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").hide();
    });
    $("#show_sıcakiçecekler").click(function (){
        $("#show_kahve").css("background-color","lightgrey");
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","green");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","lightgrey");
        $("#kahve_table").hide();
        $("#cay_table").hide();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").show();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").hide();

    });
    $("#show_yiyecekler").click(function (){
        $("#show_kahve").css("background-color","lightgrey");
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","green");
        $("#show_tatlılar").css("background-color","lightgrey");
        $("#kahve_table").hide();
        $("#cay_table").hide();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").show();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").hide();
    });
    $("#show_soğukiçecekler").click(function (){
        $("#show_kahve").css("background-color","lightgrey");
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","green");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","lightgrey");
        $("#kahve_table").hide();
        $("#cay_table").hide();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").show();
        $("#tatli_table").hide();
        $("#sıkkullanılanlar_table").hide();

    });
    $("#show_tatlılar").click(function (){
        $("#show_kahve").css("background-color","lightgrey");
        $("#show_sıkkullanılanlar").css("background-color","lightgrey");
        $("#show_çay").css("background-color","lightgrey");
        $("#show_bitkiçayı").css("background-color","lightgrey");
        $("#show_sıcakiçecekler").css("background-color","lightgrey");
        $("#show_soğukiçecekler").css("background-color","lightgrey");
        $("#show_yiyecekler").css("background-color","lightgrey");
        $("#show_tatlılar").css("background-color","green");
        $("#kahve_table").hide();
        $("#cay_table").hide();
        $("#bitki_cayi_table").hide();
        $("#sicak_icecek_table").hide();
        $("#yiyecek_table").hide();
        $("#soguk_icecek_table").hide();
        $("#tatli_table").show();
        $("#sıkkullanılanlar_table").hide();

    });

});

  
            var id_array = new Array();
            var fiyat_array = new Array();
            function create_order_table(){
                //bu fonksiyon sipariş listesini oluşturur. Sadece 1 kere çağırılır.
                var xml = new XMLHttpRequest();

                xml.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        var cay_table = document.getElementById("cay_table");
                        var bitki_table = document.getElementById("bitki_cayi_table");
                        var kahve_table = document.getElementById("kahve_table");
                        var sicak_icecek_table = document.getElementById("sicak_icecek_table");
                        var yiyecek_table = document.getElementById("yiyecek_table");
                        var soguk_icecek_table = document.getElementById("soguk_icecek_table");
                        var tatli_table = document.getElementById("tatli_table");
                        var data = this.responseText.split(";");
                    
                        var cay_table_innertext= "<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>Çay</th><th>Fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                        var bitki_cayi_table_innertext ="<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>Çay</th><th>Fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                        var kahve_table_innertext = "<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>Kahve</th><th>Fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                        var sicak_icecek_table_innertext ="<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>içecek</th><th>Fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                        var yiyecek_table_innertext ="<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>Yiyecek</th><th>Fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                        var soguk_icecek_table_innertext = "<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>İçecek</th><th>Fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                        var tatli_table_innertext = "<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>Tatlı</th><th>Fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                        for(var i = 0 ; i < data.length-1; ++i){

                            var specific_data = data[i].split(",");
                            id_array.push(specific_data[0]);
                            fiyat_array.push(parseFloat(specific_data[1]));
                            if(specific_data[3] == "kahve"){
                                kahve_table_innertext = kahve_table_innertext + "<tr id=\"row"+specific_data[0]+"\"><td id=\""+specific_data[0]+"_ozet"+"\">" + specific_data[2] + "</td><td id=\""+specific_data[0] + "_fiyat" + "\">" + specific_data[1] + "</td><td> <button type=\"button\" id=\"d"+specific_data[0] + "\">-</button> <p style=\"width:5%\" id=\""+specific_data[0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"i" +specific_data[0]+ "\">+</button></tr>";
                            }
                            else if(specific_data[3] == "bitkicayi"){
                                bitki_cayi_table_innertext = bitki_cayi_table_innertext +"<tr id=\"row"+specific_data[0]+"\"><td id=\""+specific_data[0]+"_ozet"+"\">" + specific_data[2] + "</td><td id=\""+specific_data[0] + "_fiyat" + "\">" + specific_data[1] + "</td><td> <button type=\"button\" id=\"d"+specific_data[0] + "\">-</button> <p style=\"width:5%\" id=\""+specific_data[0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"i" +specific_data[0]+ "\">+</button></tr>";
                            }
                            else if(specific_data[3] == "cay"){
                                cay_table_innertext = cay_table_innertext + "<tr id=\"row"+specific_data[0]+"\"><td id=\""+specific_data[0]+"_ozet"+"\">" + specific_data[2] + "</td><td id=\""+specific_data[0] + "_fiyat" + "\">" + specific_data[1] + "</td><td> <button type=\"button\" id=\"d"+specific_data[0] + "\">-</button> <p style=\"width:5%\" id=\""+specific_data[0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"i" +specific_data[0]+ "\">+</button></tr>";
                            }
                            else if(specific_data[3] == "yiyecek"){
                                yiyecek_table_innertext = yiyecek_table_innertext +"<tr id=\"row"+specific_data[0]+"\"><td id=\""+specific_data[0]+"_ozet"+"\">" + specific_data[2] + "</td><td id=\""+specific_data[0] + "_fiyat" + "\">" + specific_data[1] + "</td><td> <button type=\"button\" id=\"d"+specific_data[0] + "\">-</button> <p style=\"width:5%\" id=\""+specific_data[0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"i" +specific_data[0]+ "\">+</button></tr>";
                            }
                            else if(specific_data[3] == "sogukicecek"){
                                soguk_icecek_table_innertext = soguk_icecek_table_innertext + "<tr id=\"row"+specific_data[0]+"\"><td id=\""+specific_data[0]+"_ozet"+"\">" + specific_data[2] + "</td><td id=\""+specific_data[0] + "_fiyat" + "\">" + specific_data[1] + "</td><td> <button type=\"button\" id=\"d"+specific_data[0] + "\">-</button> <p style=\"width:5%\" id=\""+specific_data[0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"i" +specific_data[0]+ "\">+</button></tr>";
                            }
                            else if(specific_data[3] == "tatli"){
                                tatli_table_innertext = tatli_table_innertext + "<tr id=\"row"+specific_data[0]+"\"><td id=\""+specific_data[0]+"_ozet"+"\">" + specific_data[2] + "</td><td id=\""+specific_data[0] + "_fiyat" + "\">" + specific_data[1] + "</td><td> <button type=\"button\" id=\"d"+specific_data[0] + "\">-</button> <p style=\"width:5%\" id=\""+specific_data[0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"i" +specific_data[0]+ "\">+</button></tr>";
                            }
                            else if(specific_data[3] == "sicakicecek"){
                                sicak_icecek_table_innertext = sicak_icecek_table_innertext + "<tr id=\"row"+specific_data[0]+"\"><td id=\""+specific_data[0]+"_ozet"+"\">" + specific_data[2] + "</td><td id=\""+specific_data[0] + "_fiyat" + "\">" + specific_data[1] + "</td><td> <button type=\"button\" id=\"d"+specific_data[0] + "\">-</button> <p style=\"width:5%\" id=\""+specific_data[0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"i" +specific_data[0]+ "\">+</button></tr>";
                            }
                            
                        }
                        cay_table.innerHTML = cay_table_innertext + "</tbody>";
                        bitki_table.innerHTML = bitki_cayi_table_innertext + "</tbody>";
                        kahve_table.innerHTML = kahve_table_innertext + "</tbody>";
                        sicak_icecek_table.innerHTML = sicak_icecek_table_innertext + "</tbody>";
                        yiyecek_table.innerHTML = yiyecek_table_innertext + "</tbody>";
                        soguk_icecek_table.innerHTML = soguk_icecek_table_innertext + "</tbody>";
                        tatli_table.innerHTML = tatli_table_innertext + "</tbody>";
                        create_sıkkullanılanlar_table();
                        set_order_table_buttons();
                        
                    }

                };
                var url = "client_php/get_order_table_data.php";
                xml.open("GET",url,true);
                xml.send();
            }
            create_order_table();

            function create_sıkkullanılanlar_table(){
                //Bir sipariş verildiğin de hangi üründen kaç tane sipariş edildiği çerezlerde tutulur ve en çok söylenen ilk 5 ürün sık kullanılanlar tablosunda gösterilir.
                var sık_kullanılanlar_array = new Array();
                for(var i = 0 ; i < id_array.length ; ++i){
                    if(getCookie(id_array[i]) != ""){
                       
                    sık_kullanılanlar_array.push([id_array[i],getCookie(id_array[i])]);

                    }
                }

                for(var i = 0 ; i < sık_kullanılanlar_array.length-1 ; ++i){
                    for(var j = i + 1 ; j > 0 ;){
                        
                        if(parseInt(sık_kullanılanlar_array[j][1]) > parseInt(sık_kullanılanlar_array[j-1][1]) ){

                            var temp = sık_kullanılanlar_array[j-1];
                            sık_kullanılanlar_array[j-1] = sık_kullanılanlar_array[j];
                            sık_kullanılanlar_array[j] = temp;

                            --j;
                        }
                        else{
                            break;
                        }
                    }
                }
                var first_five = new Array();
                var inner ="<tbody class=\"scrollclass\"><tr style=\"text-align:center\"><th>Ürün</th><th>fiyat</th><th style=\"width:10%\">Adet</th></tr>";
                for(var i = 0 ; i < sık_kullanılanlar_array.length ; ++i){

                    if(i < 5){
                       
                  inner = inner + "<tr id=\"row"+sık_kullanılanlar_array[i][0]+"_sık"+"\"><td>" + $("#"+sık_kullanılanlar_array[i][0]+"_ozet").text() + "</td><td>" + $("#"+sık_kullanılanlar_array[i][0] + "_fiyat").text() + "</td><td> <button type=\"button\" id=\"dsık"+sık_kullanılanlar_array[i][0] + "\">-</button> <p style=\"width:5%\" id=\"sık"+sık_kullanılanlar_array[i][0]+ "\">0</p>"
                                + "<button type=\"button\" id=\"isık" +sık_kullanılanlar_array[i][0]+ "\">+</button></tr>";
                                first_five.push(sık_kullanılanlar_array[i]);
                    }
                    else{
                        break;
                    }
                }
                document.getElementById("sıkkullanılanlar_table").innerHTML = inner;
                set_sıkkullanılanlar_table_buttons(first_five);

                
            }
            function set_sıkkullanılanlar_table_buttons(arr){
                for(var i = 0 ; i < arr.length ; ++i){
 
                    set_sıkkullanılan_button(arr[i][0]);
                }
            }
            function set_sıkkullanılan_button(id){
                $("#dsık"+id).click(function (){
            
                    var value = parseInt($("#sık"+id).text());
                    value = value - 1 ;
                    if (value < 0)
                    value = 0;

                    document.getElementById("sık"+id).innerHTML = value;
                    document.getElementById(id).innerHTML = value;
                    if(value == 0){
                        $("#row"+id+"_sık").css("background-color","white");
                        $("#row"+id).css("background-color","white");
                    }
                sum();

                });
                $("#isık"+id).click(function (){
          
                    var value = parseInt($("#sık"+id).text());
                    value = value + 1 ;
     
                    document.getElementById("sık"+id).innerHTML = value;
                    document.getElementById(id).innerHTML = value;
                    $("#row"+id+"_sık").css("background-color","lightgreen");
                    $("#row"+id).css("background-color","lightgreen");
                sum();
                });
            }
            


            var value_array = new Array();


            var mevcut_odalar = new Array();
            for (var i = 0; i < 22; ++i) {
                mevcut_odalar[i] = new Array();
            }
            for (var i = 0; i < 22; ++i) {
               
                mevcut_odalar[i] = [i * 100 + 1, i * 100 + 1, i * 100 + 2, i * 100 + 3, i * 100  + 4, i * 100 + 5, i* 100 + 6]; 
            }

            $(document).ready(function () {
                $("#submitorder").click(function () {
                    var room = parseInt(document.getElementById("current_room").value);
                    var check = check_room(room);
                    if(!check){
                        alert("Oda mevcut değil, kontrol ediniz.");
                        return;
                    }else{
                        document.cookie = "ROOM=" + room + "; expires=" + datestring;
                    }

                    var sum_arr = $("#sum").text().split(":");

                    sum_arr = sum_arr[1].split(" ");
                    var sum = parseFloat(sum_arr[0]);
                    

                    if (sum != 0) {

                        var xmlhttp = new XMLHttpRequest();
                 
                        xmlhttp.onreadystatechange = function () {
                            if (this.readyState == 4 && this.status == 200) {
                              
                                if(this.responseText == "1 den fazla siparis verilemez"){
                                    alert("1 den fazla sipariş veremezsiniz, mevcut siparişinizin teslim edilmesini bekleyiniz.");
                                    reset_table();

                                }
                                else{
                            
                                reset_table();
                              
                                show_orders();
                          
                                alert("Sipariş verildi!!");
                                //update_admin_table
                                }
                                $("#kahve_table").hide();
                                $("#cay_table").hide();
                                $("#bitki_cayi_table").hide();
                                $("#sicak_icecek_table").hide();
                                $("#yiyecek_table").hide();
                                $("#soguk_icecek_table").hide();
                                $("#tatli_table").hide();
                                for(var i = 0 ; i < id_array.length ; ++i){
                                    $("#row"+id_array[i]).css("background-color","white");
                                }
                            }
                         
                        };

                        for (var i = 0; i < id_array.length; ++i) {
                            value_array[i] = parseInt($("#" + id_array[i]).text());
                            if(getCookie(id_array[i]) == ""){
                                document.cookie = id_array[i] + "=" + value_array[i] + "; expires=" + datestring;
                            }
                            else{
                                document.cookie = id_array[i] + "="+  (parseInt(getCookie(id_array[i])) + value_array[i]) + "; expires=" + datestring;
                            }
                        }
                  

                        var url = "client_php/SubmitOrder.php?id=" + getCookie("ID") + "&value_array=" + JSON.stringify(value_array);
                        
                        url = url + "&sum=" + sum + "&room=" + getCookie("ROOM");
                        
                        xmlhttp.open("GET", url, true);
                        xmlhttp.send();
                    }
                    else {
                        alert("Boş sipariş verilemez!!");
                    }

                });
                $("#cancel_order").click(function(){
                    reset_table();

                });
                $("#updateorder").hide();
                $("#updateorder").click(function () {
                    
                    var xml = new XMLHttpRequest();
                   
                    xml.onreadystatechange = function () {
                       
                        if (this.readyState == 4 && this.status == 200) {
                           
                           
                            $("#updateorder").hide();
                            $("#iptal").hide();
                            $("#sürec_tablosu").show();
                            $("#change_customer").show();
                            $("#submitorder").show();
                            $("#row").hide();
                            
                            reset_table();
                            show_orders();
                   
                            if(this.responseText == "error")
                                alert("Sipariş durumu ocak başı tarafından değiştirildi, sonuç olarak sipariş artık güncellenemez.");
                                else{
                                    alert(this.responseText);
                                }
                            //update_admin_table
                    }
                    };
                    var sum_arr = $("#sum").text().split(":");
                    sum_arr = sum_arr[1].split(" ");
                    var sum = parseFloat(sum_arr[0]);

                    for (var i = 0; i < id_array.length; ++i) {
                        value_array[i] = parseFloat($("#" + id_array[i]).text());
                    }

                    var url = "client_php/siparis_guncelle.php?id=" + getCookie("siparisNO") + "&value_array=" + JSON.stringify(value_array);

                    
                    url = url + "&sum=" + sum;
                    
                    xml.open("GET", url, true);
                    xml.send();
                    
                });
                $("#iptal").hide();
                $("#iptal").click(function () {
                    
                   
                    
                    
                    var xml = new XMLHttpRequest();
                    xml.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){
                        
                            $("#updateorder").hide();
                            $("#iptal").hide();
                            $("#sürec_tablosu").show();
                            $("#row").hide();
                            $("#change_customer").show();
                            $("#submitorder").show();
                            reset_table();
                            show_orders();
                        }
                    }
                    var url = "client_php/set_siparis_to_beklemede.php?id=" + getCookie("siparisNO");
                    xml.open("GET",url,true);
                    xml.send();
                    document.cookie = "siparisNO=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                });

            });
            function reset_table(){
               for(var i = 0 ; i < id_array.length ; ++i){
                   document.getElementById(id_array[i]).innerHTML = "0";
                   $("#row"+id_array[i]).css("background-color","white");
                   if( document.getElementById("sık"+id_array[i]) != null){
                   document.getElementById("sık"+id_array[i]).innerHTML = "0";
                    $("#row"+ id_array[i]+"_sık").css("background-color","white");
                   }
               }
                sum();
                
            }

            function set_order_table_buttons() {
                for(var i = 0 ; i < id_array.length ; ++i){
                    set_order_table_button_events(id_array[i]);
                }
           }
           function set_order_table_button_events(id){
            $("#d"+id).click(function (){
                       
                       var value = parseInt($("#"+id).text());
                       value = value - 1 ;
                       if (value < 0)
                       value = 0;

                       document.getElementById(id).innerHTML = value;
                       if(document.getElementById("sık"+id) !=  null){
                        document.getElementById("sık"+id).innerHTML = value;
                       }
                       if(value == 0){
                           $("#row"+id).css("background-color","white");
                           $("#row"+id+"_sık").css("background-color","white");
                       }
                   sum();
                   });
                   $("#i"+id).click(function(){
                      
                       var value = parseInt($("#"+id).text());
                       value = value + 1;

                       document.getElementById(id).innerHTML = value;
                       if(document.getElementById("sık"+id) !=  null){
                        document.getElementById("sık"+id).innerHTML = value;
                       }
                       $("#row"+id).css("background-color","lightgreen");
                       $("#row"+id+"_sık").css("background-color","lightgreen");
                   sum();
                   });
           }
           function sum() {
          
            var sum = 0;
            for(var i = 0 ; i < id_array.length ; ++i){
                sum = sum + parseInt($("#"+id_array[i]).text()) * parseFloat(fiyat_array[i]);
            }
            if(sum == 0){
                $("#sepet").hide();
            }
            else{
                $("#sepet").show();
                show_sepet();
   
            }
            document.getElementById("sum").innerHTML = "Toplam:" + sum + " TL";
            return sum;
        }
        function show_orders() {
             
            var xml = new XMLHttpRequest();

            xml.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {
                 
                    var alldata = "";
                    var surectable = document.getElementById("sürecT");
                    var inner = "<caption><h3>Süreç İçerisinde ki Sipariş</h3></caption> <tr style=\"text_align:center\"> <th>Siparis durumu</th> <th>Siparis verilme tarihi ve saati </th> <th>Sipariş özet </th> ";
                    if (this.responseText != "") {
                        alldata = this.responseText.split("|");
                        for (var i = 0; i < alldata.length-1; ++i) {
                            var singledata = alldata[i].split("*");
                            inner = inner + "<tr id=\"siparisid_" + i + "\"><td>" + singledata[0] + "</td><td>" + singledata[1] + "</td><td>" + singledata[2] + "</td>";
                            if (singledata[0] == "beklemede")
                                inner = inner + "<td><button type=\"button\" id=\"iptal_" + singledata[4] + "\" >IPTAL</button></td>" + "<td><button type=\"button\" id=\"guncelle_" + singledata[4] + "\" >GUNCELLE</button></td>";
                            inner = inner + "</tr>";
                        }   
                    }
                    surectable.innerHTML = inner;
                    if (alldata != "") {
                        update_row_colors(alldata, alldata.length - 1);
                        
                        set_buttons(alldata, alldata.length-1);
                    }
                }

            }
            var url = "client_php/ShowOrders.php?id=" + getCookie("ID");
            xml.open("GET", url, true);
            xml.send();
        }
        
        function set_buttons(alldata,size) {
            for (var i = 0; i < size; ++i) {
                var data = alldata[i].split("*");
                var id = parseInt(data[4]);
                if (data[0] == "beklemede") {
                    set_delete_button_event(id);
                    set_update_button_event(id);
                }
            
                }
                    
        }

        function set_update_button_event(id) {
            $("#guncelle_" + id).click(function () {
                var xml = new XMLHttpRequest();
                xml.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        
                        if(this.responseText != "error"){
                       
                            
                        var data = this.responseText.split("*");
                        $("#submitorder").hide();
                        $("#change_customer").hide();
                        $("#sürec_tablosu").hide();
                        $("#row").show();
                        $("#cancel_order").hide();
                        //update gotten data
                        for(var i = 1 ; i < data.length ; ++i){
                         
                            document.getElementById(id_array[i-1]).innerHTML = data[i];
                            if(document.getElementById("sık"+id_array[i-1]) != null ){
                                document.getElementById("sık"+id_array[i-1]).innerHTML = data[i];
                            }
                        }
                        sum();
                        $("#updateorder").show();
                        document.cookie = "siparisNO=" + data[0] + "; expires=" + datestring;
                        $("#iptal").show();
                        for(var i = 0 ; i < id_array.length ; ++i){
                               
                            var value = parseInt($("#"+id_array[i]).text());
                         
                            if( value > 0){
                                $("#row"+id_array[i]).css("background-color","lightgreen");
                                if(document.getElementById("sık"+id_array[i]) != null){
                                    $("#row"+id_array[i]+"_sık").css("background-color","lightgreen");
                                }
                            }
                            else{
                                $("#row"+id_array[i]).css("background-color","white");
                                if(document.getElementById("sık"+id_array[i]) != null){
                                    $("#row"+id_array[i]+"_sık").css("background-color","white");
                                }
                            }
                        }
                        }
                        else{
                            alert("sipariş durumu artık beklemede değildir, sonuç olarak sipariş artık güncellenemez.");
                            show_orders();
                        }
                    }

                }
                var url = "client_php/getorderdata.php?id=" + id;
                xml.open("GET", url, true);
                xml.send();

            });

        }
        function set_delete_button_event(id) {
            $("#iptal_" + id).click(function () {

                var xml = new XMLHttpRequest();
                xml.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("temp").innerHTML = this.responseText;
                        show_orders();
                        if(this.responseText == "error")
                            alert("Sipariş durumu artık beklemede değil, sonuç olarak sipariş artık iptal edilemez.");
                            else{
                                alert("Sipariş başarı ile iptal edildi.");
                            }
                      

                        //update_admin_table
                    }
                };

                var url = "client_php/siparis_iptal.php?id=" + id;
             
                xml.open("GET", url, true);
                xml.send();

            });
        }

      
        function update_row_colors(alldata, size) {
           
            for (var i = 0; i < size; ++i) {
                var text = "#siparisid_" + i;
                var sp = alldata[i].split("*");
                if (sp[0] == "beklemede")
                    $(text).css("background-color","yellow");
                else if (sp[0] == "hazirlaniyor")
                    $(text).css("background-color", "green");
                else if(sp[0] == "teslim ediliyor")
                    $(text).css("background-color", "red");
            }


        }
        window.addEventListener("load", show_orders);
        function set_siparis_to_beklemede(){
            var xml = new XMLHttpRequest();
            var url = "client_php/set_siparis_to_beklemede.php?id=" + getCookie("siparisNO");
                xml.open("GET",url,true);
                xml.send();
                alert("siparis_beklemeye alındı.");
        }
        window.onbeforeunload = function() {
            set_siparis_to_beklemede();
            show_orders();
    }
    function show_sepet(){

            var innertext = "<p ><h4 style=\"color:red\">SEPET</h4></p>";

            for(var i = 0 ; i < id_array.length; ++i){
                var value = parseInt($("#"+id_array[i]).text());
               
                if( value != 0 ){
                   
                    var ozet = $("#"+id_array[i]+"_ozet").text();
                        innertext = innertext + "<h3> " + value + " adet " + ozet  +", </h3>";
                }

            }
            document.getElementById("sepet_text").innerHTML = innertext;
    }