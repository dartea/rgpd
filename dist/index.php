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
   <div>
   <h2>Installation : </h2>
   Ajouter ce code avant la fermature du "body":


<pre style="background-color:#dcd6d6; max-width:900px;padding:20px;">
   <?php
   $code = "<script type=\"text/javascript\">
    window.artIsPrivacySettings = {
        name : 'Art is privacy',
        language : 'fr', //fr ou en 
        privacyPolicyURL : 'http://www....',
        position: 'middle',//middle ou bottom
        vendors:['necessary','googleanalytics','matomo','addthis','sharethis','disqus','facebook'], 
        /* Activer les services utilisés
         'necessary': cookie du site pour compte utilisateurs/ embed vidéos ou autre
         'googleanalytics': stats
         'matomo' : stats
          'addthis': partage
          'sharethis': partage
          'disqus' :commentaire
          facebook : facebook pixel et autre...
         */
        classLinkSettings : 'aip_linkcookie',//class du lien pour ouvrire les parametres des cookies
        trads : {'fr':{'title':'un test'},'en':{}}   // voir fichier de traduction call:  console.log(artIsPrivacyTranslation);
    };
  </script>
  <script src=\"art-is-privacy.min.js\" defer></script>";
  echo htmlentities($code);
   ?>
 </pre>

 verifier la presence du cookie  pour ajouter les js des sevices (ganalytics etc ...):
 <pre style="background-color:#dcd6d6; max-width:900px;padding:20px;">
if(!isset($_COOKIE['AIP_setting_googleanalytics']) || $_COOKIE['AIP_setting_googleanalytics']==1):
 ...  //ici le code js de ganalytics ou autre
endif


 </pre>
 </div>

<h3>Services acceptés</h3>
    <!-- detect si le service est accepté -->
    <?php if(!isset($_COOKIE['AIP_setting_googleanalytics']) || $_COOKIE['AIP_setting_googleanalytics']==1 ): ?>
        <div>Google analytics activé</div>
    <?php endif; ?>

      <?php if(!isset($_COOKIE['AIP_setting_matomo']) || $_COOKIE['AIP_setting_matomo']==1 ): ?>
        <div>Matomo activé</div>
    <?php endif; ?>

       <?php if(!isset($_COOKIE['AIP_setting_addthis']) || $_COOKIE['AIP_setting_addthis']==1 ): ?>
       <div> Addthis activé</div>
    <?php endif; ?>

     <?php if(!isset($_COOKIE['AIP_setting_sharethis']) || $_COOKIE['AIP_setting_sharethis']==1 ): ?>
        <div>Sharethis activé</div>
    <?php endif; ?>

    <?php if(!isset($_COOKIE['AIP_setting_disqus']) || $_COOKIE['AIP_setting_disqus']==1 ): ?>
        <div>Disqus activé</div>
    <?php endif; ?>

    <?php if(!isset($_COOKIE['AIP_setting_facebook']) || $_COOKIE['AIP_setting_facebook']==1 ): ?>
        <div>Facebook activé</div>
    <?php endif; ?>

   <?php //var_dump($_COOKIE["AIP_acceptall"]); ?>
   <script type="text/javascript">
    window.artIsPrivacySettings = {
        name : 'Art is privacy',
        language : 'fr',
        privacyPolicyURL : 'http://www....',
        position: 'middle',//middle ou bottom
        vendors:['necessary','googleanalytics','matomo','addthis','sharethis','disqus','facebook'], 
        /*
         'necessary': cookie du site pour compte utilisateurs/ embed vidéos ou autre
         'googleanalytics': stats
         'matomo' : stats
          'addthis': partage
          'sharethis': partage
          'disqus' :commentaire
          facebook : facebook pixel et autre...
         */
        classLinkSettings : 'aip_linkcookie', //class du lien pour ouvrire les parametres des cookies
        trads : {'fr':{'title':'un test'}}   
    };
  </script>
  <script src="/art-is-privacy.min.js" defer></script>

  </body>
</html>