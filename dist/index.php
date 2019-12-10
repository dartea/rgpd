<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    
    <title>Art is privacy</title>
  </head>
  <body>
    <h1>Art is privacy</h1>

    <a href="#" class="aip_linkcookie" >Paramétrer les cookies</a>
   

    <?php if($_COOKIE['AIP_setting_googleanalytics']==1 || !$_COOKIE['AIP_setting_googleanalytics']): ?>
        //ici le code Google analytics
    <?php endif; ?>

   <?php //var_dump($_COOKIE["AIP_acceptall"]); ?>
   <script type="text/javascript">
    window.artIsPrivacySettings = {
        name : 'Art is privacy',
        logoUrl : '',
        language : 'fr',
        privacyPolicyURL : 'http://www.dartea.com',
        position: 'bottom',
        vendors:['necessary','googleanalytics','matomo','addthis','disqus','facebook','twitter','instagram'],
        classLinkSettings : 'aip_linkcookie',
        theme : {}  
    };
  </script>
  <script src="/art-is-privacy.min.js" ></script>

  </body>
</html>