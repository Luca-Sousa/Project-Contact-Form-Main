$(function(){
    // Função para lidar com o evento de foco nos inputs de rádio
    $(".query-type-wraper input[type=radio]").focus(function(){
        var $wrapper = $(this).closest(".query-type-wraper");
        handleRadioFocus($wrapper);
    });

    // Função para lidar com o evento de clique nos labels
    $(".query-type-wraper label").click(function(){
        var $wrapper = $(this).closest(".query-type-wraper");
        handleRadioClick($wrapper);
    });

    // Função para lidar com o evento de clique nos inputs de rádio vazios
    $(".query-type-wraper input[type=radio]:not(:checked)").click(function(){
        var $wrapper = $(this).closest(".query-type-wraper");
        handleRadioClick($wrapper);
    });

    // Função para manipular o foco nos inputs de rádio e atualizar o estilo
    function handleRadioFocus($wrapper) {
        $(".query-type-wraper").css({"background-color": "var(--white)", "border": "1px solid var(--Medium--Grey)"});
        $wrapper.css({"background-color": "var(--Light-Green)", "border": "2px solid var(--Green)"});
        $wrapper.find(".radio-mark").css("display", "none");
        $wrapper.find("input[type=radio]").css("display", "block");
    }

    // Função para manipular o clique nos inputs de rádio e atualizar o estilo
    function handleRadioClick($wrapper) {
        $(".query-type-wraper").css({"background-color": "var(--white)", "border": "1px solid var(--Medium--Grey)"});
        $wrapper.css({"background-color": "var(--Light-Green)", "border": "2px solid var(--Green)"});
        $wrapper.find(".radio-mark").css("display", "block");
        $wrapper.find("input[type=radio]").css("display", "none");
        
        // Resetar o estilo dos outros inputs de rádio
        $(".query-type-wraper").not($wrapper).each(function() {
            var $otherWrapper = $(this);
            $otherWrapper.find(".radio-mark").css("display", "none");
            $otherWrapper.find("input[type=radio]").css("display", "block");
        });
    }
});









    // $('form#form1').submit(function(){

    //     var email = $('input[name=email]').val();

    //     if (verificarEmail(email) == false) {
    //         aplicarCampoInvalido($('input[name=email]'));
    //         $('p.format-p').show();
    //         return false;
    //     } else {
    //         $('.container').css('display', 'none');
    //         $('.container2').css('display', 'flex');
    //         resetarCampoInvalido($('input[name=email]'));
    //         return false;
    //     }

    // });

    // $('input[name=email]').focus(function(){
    //     resetarCampoInvalido($(this));
    // });

    // $('.container2 input[type=submit]').click(function(){
    //     $('.container').css('display', 'flex');
    //     $('.container2').css('display', 'none');
    // });

    // function verificarEmail(email){
            
    //     if (email == ''){
    //         return false;
    //     }
    
    //     if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) == null){
    //         return false;
    //     }

    // }

    // function aplicarCampoInvalido(el){
    //     el.css('background-color', '#ffe8e6');
    //     el.css('color', '#d27e7e');
    //     el.css('border', '1px solid #c8918b')
    // }

    // function resetarCampoInvalido(el){
    //     el.css('color', 'var(--grey)');
    //     el.css('border', '1px solid  var(--grey)');
    //     el.css('background-color', 'var(--white)')
    //     el.val('');
    //     $('p.format-p').hide();
    // }

