<?php

if(isset($_GET['operation']) && $_GET['operation'] == 'condpgto')
{               
    
    /*
    define('DB_HOST'        , "DESKTOP-0DD5KKR\SQLSERVER");
    define('DB_USER'        , "sa");
    define('DB_PASSWORD'    , "adeade4522");
    define('DB_NAME'        , "P12");
    define('DB_DRIVER'      , "sqlsrv");        
    */
    define('DB_HOST'        , "192.168.0.4");
    define('DB_USER'        , "sa");
    define('DB_PASSWORD'    , "S0b3l2036");
    define('DB_NAME'        , "Protheus_Teste12");
    define('DB_DRIVER'      , "sqlsrv");
    
    require_once "../Class/Conexao.php";
   
    try
    {
   
        $Conexao    = Conexao::getConnection();

        $sql  = "SELECT E4_CODIGO AS CODIGO, ";
        $sql .= "E4_DESCRI AS DESCRICAO ";
        $sql .= "FROM SE4010 WHERE E4_TIPO = '1' ";
        $sql .= "AND E4_CODIGO <> '093' ";
        $sql .= "AND D_E_L_E_T_ = '' " ;

        $query       = $Conexao->query($sql);
        $condPgtos   = $query->fetchAll(PDO::FETCH_ASSOC); //Pulo do gato
        
        echo json_encode($condPgtos, JSON_UNESCAPED_UNICODE);
   
    }
    catch(Exception $e)
    {
        echo json_encode($e->getMessage(), JSON_UNESCAPED_UNICODE);        
        exit;
    }  
}   
    
?>