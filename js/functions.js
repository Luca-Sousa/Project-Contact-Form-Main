$(function(){

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

    // Função para lidar com o evento de clique no input de checkbox vazio
    $(".checkbox-content input[type=checkbox]:not(:checked)").click(function(){
        var $wrapper = $(this).closest(".checkbox-content");
        handleCheckboxClick($wrapper);
    });

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

    // Função para manipular o clique no input de checkbox e atualizar o estilo
    function handleCheckboxClick($wrapper) {
        $wrapper.find(".checkbox-mark").css("display", "block");
        $wrapper.find("input[type=checkbox]").css("display", "none");
    }

    // Função para resetar campo inválido quando um campo recebe foco
    $('input[name=firstName],input[name=lastName],input[name=email],textarea[name=message-area]').focus(function(){
        resetInvalidField($(this));
    });

    // Esconder mensagem de erro quando um rádio é selecionado
    $('input[name=radio-query-type]').click(function(){
        $(".form-type-container p").hide();
    });

    // Esconder mensagem de erro quando um checkbox é selecionado
    $('input[name=checkbox]').click(function(){
        $(".form-chekbox p").hide();
    });

    // Função para lidar com o clique no botão de submit
    $('form').submit(function(event){
        // Evitar o envio padrão do formulário
        event.preventDefault();

        var firstName = $('input[name=firstName]').val();
        var lastName = $('input[name=lastName]').val();
        var email = $('input[name=email]').val();
        var message = $('textarea[name=message-area]').val();
        var query_type = $('input[name=radio-query-type]:checked').val();
        var checkbox = $('input[name=checkbox]:checked').val();

        // Variáveis de validação
        var isValid = true;

        // Verificação de First Name
        if (firstName === '') {
            applyFieldInvalid($('input[name=firstName]'));
            $('p.error-first-name').show();
            isValid = false;
        } else if (!/^[A-Za-z]+$/.test(firstName)) {
            applyFieldInvalid($('input[name=firstName]'));
            $('p.invalid-first-name').show();
            isValid = false;
        }

        // Verificação de Last Name
        if (lastName === '') {
            applyFieldInvalid($('input[name=lastName]'));
            $('p.error-last-name').show();
            isValid = false;
        } else if (!/^[A-Za-z]+$/.test(lastName)) {
            applyFieldInvalid($('input[name=lastName]'));
            $('p.invalid-last-name').show();
            isValid = false;
        }

        // Verificação de Email
        if (email === '') {
            applyFieldInvalid($('input[name=email]'));
            $('p.error-email').show();
            isValid = false;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
            applyFieldInvalid($('input[name=email]'));
            $('p.invalid-email').show();
            isValid = false;
        }

        // Verificação de Query Type
        if (query_type === undefined) {
            applyFieldInvalid($('.query-type-wraper'));
            $('p.error-query-type').show();
            isValid = false;
        }

        // Verificação de Mensagem
        if (message === '') {
            applyFieldInvalid($('textarea[name=message-area]'));
            $('p.error-message').show();
            isValid = false;
        }

        // Verificação de Checkbox
        if (checkbox === undefined) {
            $('p.error-checkbox').show();
            isValid = false;
        }

        // Se o formulário for válido, ele pode ser enviado
        if (isValid) {
            $('.message-success').show();
            // Resetar a largura da barra de progresso
            $('.progress-bar .progress').css('width', '0');
            // Iniciar a animação da barra de progresso
            setTimeout(function() {
                $('.progress-bar .progress').css('width', '100%');
            }, 0);

            // Esconder a mensagem de sucesso após 3 segundos e resetar o formulário
            setTimeout(function() {
                $('.message-success').hide();
                $('form')[0].reset();
                restartInputsCheckBox();
            }, 3000);
        }
    });

    // Função para aplicar estilo de campo inválido
    function applyFieldInvalid(el){
        el.css('background-color', '#ffe8e6');
        el.css('border', '1px solid #c8918b');
    }

    // Função para resetar estilo de campo inválido
    function resetInvalidField(el){
        el.css('border', '1px solid var(--Medium--Grey)');
        el.css('background-color', 'var(--white)');
        el.val('');
        $(el).parent().find('p').hide();
    }

    // Função para resetar os estilos dos inputs de rádio e checkbox
    function restartInputsCheckBox() {
        $(".query-type-wraper").css({
            'border': '1px solid var(--Medium--Grey)',
            'background-color': 'var(--white)'
        });
        $(".radio-mark").css("display", "none");
        $("input[type=radio]").css("display", "block");
        $(".checkbox-mark").css("display", "none");
        $("input[type=checkbox]").css("display", "block");
    }
    
});