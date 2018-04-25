<?php
require_once 'modelo/conexion.php';
require_once 'modelo/carrera.php';

$idCarrera = $_GET['idCarrera'];

$bd = new BaseDatos();

$bd->abrir_conexion();
$result = $bd->dbquery("call sp_obtenerCarreras(".$idCarrera.");");
$carreraX = new carrera();

while($res = mysql_fetch_array($result, MYSQL_ASSOC))	
{
    $carreraX->nombreCarrera = $res['nombreCarrera'];
    $carreraX->nomP1 = $res['nomP1'];
    $carreraX->criP1 = $res['criP1'];
    $carreraX->posP1 = $res['posP1'];

    $carreraX->nomP2 = $res['nomP2'];
    $carreraX->criP2 = $res['criP2'];
    $carreraX->posP2 = $res['posP2'];
    
    $carreraX->nomP3 = $res['nomP3'];
    $carreraX->criP3 = $res['criP3'];
    $carreraX->posP3 = $res['posP3'];
    
    $carreraX->nomP4 = $res['nomP4'];
    $carreraX->criP4 = $res['criP4'];
    $carreraX->posP4 = $res['posP4'];
    
    
}

$bd->cerrar_conexion(true, $result);

header('Content-Type: application/json');
$carreraJ = 
    [
        'nombreCarrera' => $carreraX->nombreCarrera,
        'nomP1' => $carreraX->nomP1,
        'criP1' => $carreraX->criP1,
        'posP1' => $carreraX->posP1,
        'nomP2' => $carreraX->nomP2,
        'criP2' => $carreraX->criP2,
        'posP2' => $carreraX->posP2,
        'nomP3' => $carreraX->nomP3,
        'criP3' => $carreraX->criP3,
        'posP3' => $carreraX->posP3,
        'nomP4' => $carreraX->nomP4,
        'criP4' => $carreraX->criP4,
        'posP4' => $carreraX->posP4
    ];
//Paciente info
$info = json_encode($carreraJ);

print_r($info);