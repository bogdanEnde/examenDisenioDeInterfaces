var id = 0;
$(document).ready(function () {
    datosTest = [{ "id": "0", "tipo": "0", "imgAnimal": "img/imagen1.jpg", "R1": "PANGOLIN", "R2": "ARMADILLO", "R3": "OSO HORMIGUERO", "correcto": "1" },
    { "id": "1", "tipo": "0", "imgAnimal": "img/imagen2.jpg", "R1": "TARSERO DE FILIPINAS", "R2": "LEMMING", "R3": "GAGALO", "correcto": "1" },
    { "id": "2", "tipo": "0", "imgAnimal": "img/imagen3.jpg", "R1": "LICAON", "R2": "DINGO", "R3": "COYOTE", "correcto": "2" },
    { "id": "3", "tipo": "0", "imgAnimal": "img/imagen4.jpg", "R1": "PATO NEOZELANDES", "R2": "ORNITORRINCO", "R3": "GAGALO", "correcto": "2" },
    { "id": "4", "tipo": "0", "imgAnimal": "img/imagen5.jpg", "R1": "OCELOTE", "R2": "GATO MONTES", "R3": "SERVAL", "correcto": "3" },
    { "id": "5", "tipo": "0", "imgAnimal": "img/imagen6.jpg", "R1": "CIERVO RATON", "R2": "ANTILOPE PIGMEO", "R3": "DICDIC", "correcto": "1" },
    { "id": "6", "tipo": "0", "imgAnimal": "img/imagen7.jpg", "R1": "LICAON", "R2": "HIENA", "R3": "OTOCION O ZORRO OREJUDO", "correcto": "1" },
    { "id": "7", "tipo": "0", "imgAnimal": "img/imagen8.jpg", "R1": "LAGARTO SPIDERMAN", "R2": "IGUANA BICOLOR", "R3": "DRAGON DE COMODO", "correcto": "1" },
    { "id": "8", "tipo": "0", "imgAnimal": "img/imagen9.jpg", "R1": "JIRAFA RALLADA", "R2": "CIERVO CEBRA", "R3": "OKAPI", "correcto": "3" },
    { "id": "9", "tipo": "0", "imgAnimal": "img/imagen10.jpg", "R1": "WOMBAT", "R2": "HAMSTER TODOTERRENO AUSTRALIANO", "R3": "CHINCHILLA", "correcto": "1" }]



    $('#hipnoSapo').on('click', function () {
        $('#continuar').removeClass("texto");
        $('#content').show();
        id = 0;
        datosTest[id]

        htmlR1 = "";
        htmlR2 = "";
        htmlR3 = "";
        htmlImg = "";
        var  continuar="";

        htmlImg += `<img src="` + datosTest[id].imgAnimal + `" alt="">`;

        htmlR1 += datosTest[id].R1;
        htmlR2 += datosTest[id].R2;
        htmlR3 += datosTest[id].R3;

        continuar+='<p>Continuar</p>';

        $('#continuar').html(continuar);
        $("#img").html(htmlImg);
        $("#R1").html(htmlR1);
        $("#R2").html(htmlR2);
        $("#R3").html(htmlR3);
        id++;


        
    });
    $('#continuar').on('click', function () {

        datosTest[id]

        htmlR1 = "";
        htmlR2 = "";
        htmlR3 = "";
        htmlImg = "";
        

        if (id == 1/*datosTest.length*/) {

            $('#Pet1').css("background-image", "url(../img/final.jpg)"); 

            fin = "";

            // fin += ' <a href="" data-transition="slide" id="continuar" class="ui-icon-arrow-r botonContinuar"></br></a>';
            htmlImg += ``;


            $('#content').hide();

            $("#img").html(fin);
            

            // $("#img").html(htmlImg);
            $('#Pet1').addClass("bkFin img"); 
            $('#continuar').html(fin); 
// 
        }else{
        htmlImg += `<img src="` + datosTest[id].imgAnimal + `" alt="">`;

        htmlR1 += datosTest[id].R1;
        htmlR2 += datosTest[id].R2;
        htmlR3 += datosTest[id].R3;

        


        
        $("#img").html(htmlImg);
        $("#R1").html(htmlR1);
        $("#R2").html(htmlR2);
        $("#R3").html(htmlR3);
        id++;
        }
    });
});