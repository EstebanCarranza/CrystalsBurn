function menuPausa() 
{
    $("#mnuPausaOpc").hide();
    $("#mnuPausaControles").hide();
    $("#mnuPausaInstrucciones").hide();

    $("#btnSalir").click(function () { window.location = "index.html"; });
    $("#btnRegresarMenu").click(function () {
        $("#mnuPausaOpc").hide();
        $("#mnuPausa").show();
    });
    $("#btnOpciones").click(function () {
        $("#mnuPausa").hide();
        $("#mnuPausaOpc").show();
    });
    $("#btnControles").click(function () {
        $("#mnuPausaOpc").hide();
        $("#mnuPausaControles").show();

    });
    $("#btnInstrucciones").click(function () {
        $("#mnuPausaOpc").hide();
        $("#mnuPausaInstrucciones").show();
    });
    $(".btnRegresarOpc").click(function () {
        $(this).parent().parent().hide();
        $("#mnuPausaOpc").show();
    });
    $("#ctrl-control").hide();
    $("#btnCtrlControl").click(
        function () {
            $("#ctrl-keyboard").hide();
            $("#ctrl-control").show();
        }
    );
    $("#btnCtrlTeclado").click(
        function () {
            $("#ctrl-keyboard").show();
            $("#ctrl-control").hide();
        }
    );

}