var artIsPrivacyTranslation = require('./translation.json'); //with path

(function(){  //start closure

    
    //config
    console.log(window.artIsPrivacySettings);
    
    //define language
    var language = typeof(artIsPrivacyTranslation[window.artIsPrivacySettings.language])!="undefined" ? window.artIsPrivacySettings.language : 'fr';
    

    // --------
    // Affichage du layer d'infos
    // --------
    var inflayer = document.createElement('div');
    inflayer.setAttribute("id", "AIPrivacy");
    inflayer.setAttribute("class", "display_midlle");
    document.body.appendChild(inflayer);

    //wrapper Layer infos
    var inflayer_wrapper = document.createElement('div');
    inflayer_wrapper.setAttribute("id", "AIPrivacy_wrapper");
    document.getElementById("AIPrivacy").appendChild(inflayer_wrapper); 


    ///contenu du layer d'infos
    var inflayerContent = '';
    //inflayerContent += ;
    inflayerContent += artIsPrivacyTranslation[language].title.replace(/{name}/, window.artIsPrivacySettings.name); 

    document.getElementById("AIPrivacy_wrapper").innerHTML = inflayerContent;

    


})();//end closure



