<?php
$request = explode('?', $_SERVER['REQUEST_URI']);
switch ($request[0]) {
	case '/':
	    include 'home.php';
	break;
  case '/cart':
    include 'home.php';
    break;
  case '/product':
	    include 'home.php';
  break;
  case '/products':
    include 'home.php';
  break;
	case '/collection':
	    include 'home.php';
	break;
	case '/coleccion':
	    include 'home.php';
	break;
  default:
	    include 'home.php';
	break;
}
