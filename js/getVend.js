/*
  @recebe dados do vendedor
  Código Protheus 
  Unidade de Faturamento
*/

$(document).ready(function(){
    
    /* Recebe dados do vendedor via código */ 
    $('#afvUser').blur(function(){  
      
       var codigoUsuario = $('#afvUser').val();
       var cnpj = $('#cnpj').val();

       //tratar se valor é diferente de 0 antes
        if(codigoUsuario.length == 0 && cnpj.length == 0){
            $('#afvUser').focus();    
        } else {

        $.ajax({
            type: 'POST',
            url: './controller/get_vendedor.php', 
            //data: $(this).serialize()
            data: {afvUser: codigoUsuario}
        })
        .done(function(data){ 

                getCondPgto() // retorna condições de pagamento
                var obj = JSON.parse(data);      
                //console.log(obj.nome);          
                if(data != 'null'){
                    $('#userlogin').text('Bem-Vindo ' + obj.nome);
                    $('#codigoSobel').val(obj.codvend);
                    $('#unidfat').val(obj.unidfat);

                    //Desbloquear campos do formulário
                    $('#cnpj').prop('readonly', false);
                    $('#inscricao').prop('readonly', false);
                    $('#razaosocial').prop('readonly', false);
                    $('#fantasia').prop('readonly', false);
                    $('#contato').prop('readonly', false);
                    $('#email').prop('readonly', false);
                    $('#dddfone').prop('readonly', false);
                    $('#telefone').prop('readonly', false);
                    $('#dddcel').prop('readonly', false);
                    $('#cel').prop('readonly', false);                              
                    $('#limitecred').prop('readonly', false);    
                    $('#cepfat').prop('readonly', false);
                    $('#enderecofat').prop('readonly', false);
                    $('#numerofat').prop('readonly', false);
                    $('#complefat').prop('readonly', false);
                    $('#estadofat').prop('readonly', false);
                    $('#cidadefat').prop('readonly', false);
                    $('#bairrofat').prop('readonly', false);
                    // falta acerta número de telefone faturamento
                    $('#cepent').prop('readonly', false);
                    $('#enderecoent').prop('readonly', false);
                    $('#numeroent').prop('readonly', false);
                    $('#compleent').prop('readonly', false);
                    $('#estadoent').prop('readonly', false);
                    $('#cidadeent').prop('readonly', false);
                    $('#bairroent').prop('readonly', false);
                    $('#cidadefat').prop('readonly', false);
                    $('#bairrofat').prop('readonly', false);
                    // falta acerta número de telefone Entrega
                    $('#respReceb').prop('readonly', false);
                    $('#valDesc').prop('readonly', false);
                    $('#numAjudantes').prop('readonly', false);

                    $('#cepcob').prop('readonly', false);
                    $('#enderecocob').prop('readonly', false);
                    $('#numerocob').prop('readonly', false);
                    $('#complecob').prop('readonly', false);
                    $('#estadocob').prop('readonly', false);
                    $('#cidadecob').prop('readonly', false);
                    $('#bairrocob').prop('readonly', false);
                    $('#cidadecob').prop('readonly', false);
                    $('#bairrocob').prop('readonly', false);
                    
                    $("#condpgto").prop('disabled', false);
                    $("#formapgto").prop('disabled', false);
                    $('#redeCliente').prop('disabled', false);
                    $('#AssocCliente').prop('disabled', false);
                    $('#obs1').prop('disabled', false);
                    $('#obs2').prop('disabled', false);
                    $('#obs3').prop('disabled', false);
                    $('#obs4').prop('disabled', false);
                    $('#tipoFrete').prop('disabled', false);
                    $('#tipoCarga').prop('disabled', false);
                    $('#tipoCarro').prop('disabled', false);
                    $('#entrega_agenda').prop('disabled', false);
                    $('#CobTaxDesc').prop('disabled', false);

                    $('#dddfonefat').prop('readonly', false);
                    $('#telefonefat').prop('readonly', false);
                    $('#dddfonecob').prop('readonly', false);
                    $('#telefonecob').prop('readonly', false);
                    $('#dddfoneent').prop('readonly', false);
                    $('#telefoneent').prop('readonly', false);
                    $('#btnCpFat').prop('disabled', false);


                    $('#cnpj').focus().val($('#cnpj').val());
                
                    return false;    

                } else {
                    
                    $('#Modal').modal('show');
                    $("#erro").replaceWith("<h4>Usuário AFV não encontrado!</h4>");                                                
                    $('#afvUser').val("");    
                    $('#afvUser').focus();                 
                }                           
        })
      }//endIf
    });
        
});


/** 
 * Function retorna condições de pagamento
 **/
function getCondPgto(){
    $.getJSON('./controller/get_condpgto.php?operation=condpgto', function (dados){ 
        if (dados.length > 0){    
            var option = '';
            $.each(dados, function(i, obj){
                option += '<option value="' + obj.CODIGO + '">' + obj.DESCRICAO + '</option>';
            })   
            $('#condpgto').html(option).show();
         }else{
             Reset();            
         }
    })
}
