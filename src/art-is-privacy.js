var artIsPrivacyTranslation = require('./translation.json'); //with path

(function(){  //start closure

    
    //config
    console.log(window.artIsPrivacySettings);
    
    //define language
    var language = typeof(artIsPrivacyTranslation[window.artIsPrivacySettings.language])!="undefined" ? window.artIsPrivacySettings.language : 'fr';
    //define position [middle || bottom]
    var position = typeof(window.artIsPrivacySettings.position)!="undefined" && (window.artIsPrivacySettings.position=='middle'  || window.artIsPrivacySettings.position=='bottom') ? window.artIsPrivacySettings.position : 'middle';


    // --------
    // Affichage du layer d'infos
    // --------
    function AIPrivacy_showInfos(){
       
        var inflayer = document.createElement('div');
        inflayer.setAttribute("id", "AIPrivacy");
        inflayer.setAttribute("class", "display_"+position);
        document.body.appendChild(inflayer);

        //wrapper Layer infos
        var inflayer_wrapper = document.createElement('div');
        inflayer_wrapper.setAttribute("id", "AIPrivacy_wrapper");
        document.getElementById("AIPrivacy").appendChild(inflayer_wrapper); 


        ///contenu du layer d'infos
        var inflayerContent = '';
        //inflayerContent += ;
        inflayerContent += artIsPrivacyTranslation[language].title.replace(/{name}/, window.artIsPrivacySettings.name); 
        inflayerContent += artIsPrivacyTranslation[language].body.replace(/{name}/, window.artIsPrivacySettings.name).replace(/{privacyPolicyURL}/, window.artIsPrivacySettings.privacyPolicyURL);
        
        inflayerContent += '<div class="aip_buttons">';
        inflayerContent += artIsPrivacyTranslation[language].linktraceurs;
        inflayerContent += artIsPrivacyTranslation[language].acceptall;
        inflayerContent += '</div>';

        document.getElementById("AIPrivacy_wrapper").innerHTML = inflayerContent;

    }

    // --------
    // Remove layer d'infos
    // --------
    function AIPrivacy_hideInfos(){
        document.getElementById("AIPrivacy").remove();
    }

    //todo - affichage conditionelle sur timer
    AIPrivacy_showInfos();

    var BtAcceptAll = document.getElementById('AIPrivacy').getElementsByClassName( 'aip_acceptall' )[0];
    BtAcceptAll.onclick = function() { 
        AIPrivacy_hideInfos();
        //alert("moot!"); 
    }; 
    



})();//end closure



