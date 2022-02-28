$(document).ready(function(){
    $.ajax({ url: "http://localhost:3000/jogadores",
        context: document.body,
        success: function(data){
           const tbody = $("#tabela").find("tbody")
           data.forEach(element => {
                tbody.append($("<tr>")
                .append($("<td>").attr("id", "nome"+element.numero).text(element.nome))
                .append($("<td>").attr("id", "numero"+element.numero).text(element.numero))
                .append($("<td>").attr("id", "posicao"+element.numero).text(element.posicao))
                .append($("<td>")
                .append($("<button>").text("editar").addClass("button red").val(element.numero).click(function(){
                    $(this).click(function(){
                        document.getElementById('pop2').classList.add('active');
                        $('#form-hidden2').val($(this).val())
                        $('#form-nome2').val($('#tabela').find('#nome'+$(this).val()).text())
                        $('#form-numero2').val($('#tabela').find('#numero'+$(this).val()).text())
                        $('#form-posicao2').val($('#tabela').find('#posicao'+$(this).val()).text())
                    });
                }))
                .append($("<button>").text("excluir").addClass("button black").val(element.numero).click(function(){
                    $(this).click(function(){
                        document.getElementById('pop3').classList.add('active');
                        $('#form-hidden3').val($(this).val())
                    });
                }))))
           });
        }
    });

    $("#save-form").click(function(){
        var nomeform = $("#form-nome").val();
        var numeroform = $("#form-numero").val();
        var posicaoform = $("#form-posicao").val();
        var dataform = {
            nome: nomeform,
            numero: numeroform,
            posicao: posicaoform
        }


        $.ajax({
            url:"http://localhost:3000/jogadores/create",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            timeout: 30000,
            data: JSON.stringify(dataform),

            success: function(){
                window.location.reload();
            },
            error: function(error){
              alert("deu erro");
            }
        });
    });


    $("#editar-form").click(function(){
        var nomeform = $("#form-nome2").val();
        var numeroform = $("#form-numero2").val();
        var posicaoform = $("#form-posicao2").val();
        var persist = $('#form-hidden2').val();

        var dataform = {
            nome: nomeform,
            numero: numeroform,
            posicao: posicaoform,
            persist: persist,
        }

        $.ajax({
            url:"http://localhost:3000/update",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            timeout: 30000,
            data: JSON.stringify(dataform),

            success: function(){
                window.location.reload();
            },
            error: function(error){
              alert("deu erro");
            }
        });
    });

    $("#delete-form").click(function(){
        var persist = $('#form-hidden3').val();

        var dataform = {
            persist: persist,
        }

        console.log(dataform);

        $.ajax({
            url:"http://localhost:3000/delete",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            timeout: 30000,
            data: JSON.stringify(dataform),

            success: function(){
               window.location.reload();
            },
            error: function(error){
              alert("deu erro");
            }
        });
    });

});

