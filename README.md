<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap La Firma Code Beta</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/demo.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/snippets.css" rel="stylesheet">
    <link href="css/screen-small.css" rel="stylesheet">
    <link href="css/screen-extra-small.css" rel="stylesheet">
    <link href="css/devices-320-480.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="img/logo.png" height="100%"></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CSS <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#css">Hojas de estilo</a></li>
                <li><a href="#snippets">Snippets</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Scripts <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#scripts">Listado de scripts</a></li>
                <li><a href="#main-js">Main.js</a></li>
                <li><a href="#validacion">Validación</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <div class="container">
      <h1>Boostrap La Firma Code Beta</h1>
      <h3>Este Boostrap tiene funciones adicionales, como validación de formularios (incluido RUT), snippets especiales y más cosas que se detallan en este documento. Las referencias para este framework se pueden encontrar en el <a href="http://getbootstrap.com/" target="_blank">sitio oficial de Boostrap</a></h3> 
      <a href="beta-0.1.zip" download="bootstrap-lafirmacode-beta-0.1.zip"><button class="btn btn-lg btn-primary">Descargar</button></a>

      <section id="css"><h2>CSS</h2>
        <h4>En el directorio <strong>/css</strong> existen hojas de estilo creadas para una mejor organización del código que se detallan a continuación:</h4>
        <div class="bs-example">
          <ul>
            <li>
              <h4>/css/style.css</h4>
              <p>Este archivo contiene el CSS general. Escribir en el todo el estilo del sitio</p>    
            </li>
            <li>
              <h4>/css/demo.css</h4>
              <p>Este archivo contiene el CSS extra para este demo</p>    
            </li>
            <li>
              <h4>/css/snippets.css</h4>
              <p>Este archivo contiene snippets y helpers CSS.</p>
              <a href="#snippets"><button class="btn btn-primary">Ver detalle</button></a>   
            </li>
            <li>
              <h4>/css/screen-small.css</h4>
              <p>Este archivo contiene el CSS para pantallas menores a 991px (al igual que boostrap bajo esta medida se ejecuta el primer query para pantallas pequeñas)</p>
            </li>
            <li>
              <h4>/css/screen-extra-small.css</h4>
              <p>Este archivo contiene el CSS para pantallas menores a 768px (segundo query para pantallas más pequeñas)</p>    
            </li>
            <li>
              <h4>/css/devices-320-480.css</h4>
              <p>Este archivo contiene el CSS para pantallas menores a 480px y 320px, generalmente dispositivos más antiguos con pantallas de 4.3"</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="snippets">
        <h2>Snippets</h2>
        <h4>La hoja de estilos '/css/snippets.css' contiene clases que facilitan el diseño web.</h4>
        <div class="bs-example">
          <ul>
            <li>
              <h4>.bg-cover</h4>
              <p>Esta clase aplica <strong>background-size:cover;</strong></p>
            </li>
            <li>
              <h4>.bg-contain</h4>
              <p>Esta clase aplica <strong>background-size:contain;</strong></p>
            </li>
            <li>
              <h4>Bullets de lista personalizados</h4>
              <p>Para crear una lista con bullets personalizados se debe agregar la clase <strong>.li-custom</strong> al tag <strong>&lt;ul></strong></p>
              <div class="code">
                &lt;ul class="li-custom star1"><br>
                <span class="margin"></span>&lt;li>Listado con bullet de estrella&lt;/li><br>
                <span class="margin"></span>&lt;li>Otro elemento&lt;/li><br>
                &lt;/ul>
                <div class="result">
                  <ul class="li-custom star1">
                    <li>Listado con bullet de estrella</li>
                    <li>Otro elemento</li>
                  </ul>                  
                </div>
              </div>
              <h4>Listado de bullets</h4>
              <ul class="bullet-list clearfix">
                <li>
                  <span>★</span>
                  <p>li-custom star1</p>
                </li>
                <li>
                  <span>✭</span>
                  <p>li-custom star2</p>
                </li>
                <li>
                  <span>☆</span>
                  <p>li-custom star3</p>
                </li>
                <li>
                  <span>✯</span>
                  <p>li-custom star4</p>
                </li>
                <li>
                  <span>✶</span>
                  <p>li-custom star5</p>
                </li>
                <li>
                  <span>✪</span>
                  <p>li-custom star-round</p>
                </li>
                <li>
                  <span>✓</span>
                  <p>li-custom check</p>
                </li>
                <li>
                  <span>#</span>
                  <p>li-custom hash</p>
                </li>
                <li>
                  <span>✕</span>
                  <p>li-custom error</p>
                </li>
                <li>
                  <span>☐</span>
                  <p>li-custom box</p>
                </li>
                <li>
                  <span>☑</span>
                  <p>li-custom check-box</p>
                </li>
                <li>
                  <span>☒</span>
                  <p>li-custom error-box</p>
                </li>
                <li>
                  <span>✚</span>
                  <p>li-custom plus</p>
                </li>
                <li>
                  <span>☞</span>
                  <p>li-custom hand</p>
                </li>
                <li>
                  <span>♦</span>
                  <p>li-custom diamond</p>
                </li>
                <li>
                  <span>♥</span>
                  <p>li-custom heart</p>
                </li>
                <li>
                  <span>♢</span>
                  <p>li-custom diamond-outline</p>
                </li>
                <li>
                  <span>♡</span>
                  <p>li-custom heart-outline</p>
                </li>
                <li>
                  <span>►</span>
                  <p>li-custom triangle-big</p>
                </li>
                <li>
                  <span>‣</span>
                  <p>li-custom triangle-small</p>
                </li>
                <li>
                  <span>➔</span>
                  <p>li-custom arrow1</p>
                </li>
                <li>
                  <span>➞</span>
                  <p>li-custom arrow2</p>
                </li>
                <li>
                  <span>➾</span>
                  <p>li-custom arrow3</p>
                </li>
                <li>
                  <span>➤</span>
                  <p>li-custom arrow5</p>
                </li>
              </ul>
            </li>
          </ul>          
        </div>
      </section>

      <section id="scripts">
       <h2>Scripts</h2>
        <h4>Se incluyen en esta versión los siguientes scripts:</h4>
        <div class="bs-example">
          <ul>
            <li>
              <h4>/js/main.js</h4>
              <p>Script general del framework. Contiene algunas funciones precargadas.</p>
              <a href="#main-js"><button class="btn btn-primary">Ver detalle</button></a>   
            </li>
            <li>
              <h4>/js/validator.js</h4>
              <p>Script para validación de los formularios nativos de Bootstrap.</p>
              <a href="#validacion"><button class="btn btn-primary">Ver detalle</button></a>   
            </li>
            <li>
              <h4>/js/jquery.Rut.js</h4>
              <p>Script para validación y formateo de RUT.</p>
              <a href="#validacion"><button class="btn btn-primary">Ver detalle</button></a>   
            </li>
          </ul>
        </div>       
      </section>

      <section id="main-js">
        <h2>main.js</h2>
        <h4>Detalle del script</h4>
        <div class="bs-example">
          <ul>
            <li>
              <h4>$(document).ready()</h4>
              <p>Lanza la función cuando el documento está listo</p>
            </li>
            <li>
              <h4>$(window).load()</h4>
              <p>Lanza la función luego de cargar todas las fuentes</p>
            </li>
            <li>
              <h4>$(window).resize()</h4>
              <p>Lanza la functión cuando la ventana es redimensionada</p>
            </li>
          </ul>
        </div>        
      </section>


      <section id="validacion">
        <h2>Validación</h2>
        <h4>Se incluyen dos scripts para validar formularios, incluido RUT</h4>
        <div class="bs-example">
          <ul>
            <li>
              <h4>/js/validator.js <small>v0.9.0</small></h4>
              <p>Plugin para validar campos de Boostrap. Para validar simplemente añadir a la etiqueta <strong>&lt;form&gt;</strong> el id 'formulario'.</p>
              <div class="code">
                &lt;form id="formulario"&gt;&lt;/form&gt;            
              </div>
            </li>
            <li>
              <h4>/js/jquery.Rut.js <small>v0.5</small></h4>
              <p>Plugin para validar y formatear RUT. Para validar un rut simplemente añadir a la etiqueta <strong>&lt;input&gt;</strong> el id 'rut'.</p>
              <div class="code">
                &lt;input id="rut"&gt;&lt;/input&gt;
              </div>
              <p>Al dar error se creará un alert que mostrará 'Rut incorrecto'. Esto se puede modificar desde el archivo <strong>/js/main.js</strong></p>
            </li>
          </ul>
        </div>        
      </section>

    </div>

    <footer>
      <p>Bootstrap La Firma Code Beta 0.1 &copy;2016</p>
    </footer>

    <!-- Modales -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/validator.js"></script>
    <script src="js/jquery.Rut.js"></script>
    <script src="js/main.js"></script>

    <!-- Analytics -->
    <script type="text/javascript">
      var _gaq = _gaq || [];

      _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
      _gaq.push(['_addDevId', 'i9k95']); // Google Analyticator App ID with Google
      _gaq.push(['_trackPageview']);

      (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
  </body>
</html>
