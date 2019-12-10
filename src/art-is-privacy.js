var artIsPrivacyTranslation = require('./translation.json'); //with path

(function(){  //start closure

    
    //config
    console.log(window.artIsPrivacySettings);


    
    //define language
    var language = typeof(artIsPrivacyTranslation[window.artIsPrivacySettings.language])!="undefined" ? window.artIsPrivacySettings.language : 'fr';
    //define position [middle || bottom]
    var position = typeof(window.artIsPrivacySettings.position)!="undefined" && (window.artIsPrivacySettings.position=='middle'  || window.artIsPrivacySettings.position=='bottom') ? window.artIsPrivacySettings.position : 'middle';
    //defini la class du lien des settings
    var classLinkSettings = typeof(window.artIsPrivacySettings.classLinkSettings)!="undefined" && window.artIsPrivacySettings.classLinkSettings!='' ? window.artIsPrivacySettings.classLinkSettings  : 'aip_linkcookie';

    var dureeConsemntement = 0; //3 mois maximum (https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi)
    // --------
    // Inititalisation du layer 
    // --------
    var inflayer = document.createElement('div');
    inflayer.setAttribute("id", "AIPrivacy");
    inflayer.setAttribute("class", "display_"+position);
    document.body.appendChild(inflayer);

    //wrapper Layer infos
    var inflayer_wrapper = document.createElement('div');
    inflayer_wrapper.setAttribute("id", "AIPrivacy_wrapper");
    document.getElementById("AIPrivacy").appendChild(inflayer_wrapper); 

    // --------
    // Affichage du layer d'infos
    // --------
    function AIPrivacy_showInfos(){


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
        //create cookie 
        AIPrivacy_setCookieValue("AIP_acceptall",1);
        document.getElementById("AIPrivacy").setAttribute("class", "display_none");
    }

     // --------
    // Affichage layer traceurs
    // --------
    function AIPrivacy_showCookieSettings(){
        document.getElementById("AIPrivacy").setAttribute("class", "display_middle");
        //var AIP_DIV = document.getElementById("AIPrivacy").
        var inflayerContent = '';
        //inflayerContent += ;
        inflayerContent += artIsPrivacyTranslation[language].settings_title.replace(/{name}/, window.artIsPrivacySettings.name); 
        //inflayerContent += artIsPrivacyTranslation[language].body.replace(/{name}/, window.artIsPrivacySettings.name).replace(/{privacyPolicyURL}/, window.artIsPrivacySettings.privacyPolicyURL);  
        

        inflayerContent += '<div class="aip_vendors">';
        var vendors = window.artIsPrivacySettings.vendors;
        for(var i=0;i<vendors.length;i++) {
         inflayerContent += AIPrivacy_getVendor(vendors[i]);
        }
        inflayerContent +='<button id="aip_saveCookieSettings">'+artIsPrivacyTranslation[language].savesettings+'</button>';
        inflayerContent +='</div>';
        document.getElementById("AIPrivacy_wrapper").innerHTML = inflayerContent;
    }


    // --------
    // Get vendor option
    // --------
    function AIPrivacy_getVendor(vendor){
       var vendorinf = '';
       //console.log(vendor);
       switch(vendor){
            default: 

            break;

            case 'necessary':
                vendorinf += '<div class="aip_vendor_opt"><input type="checkbox" checked="" disabled="">';
                vendorinf +=  artIsPrivacyTranslation[language].vendor_necessary_title.replace(/{name}/, window.artIsPrivacySettings.name);
                vendorinf +=  artIsPrivacyTranslation[language].vendor_necessary_body.replace(/{name}/, window.artIsPrivacySettings.name); 
                vendorinf += ' </div>';
            break;


            case 'googleanalytics':
                var checked = AIPrivacy_getCookieValue('AIP_setting_'+vendor) == 1 ? "checked" : '';
                vendorinf += '<div class="aip_vendor_opt"><input type="checkbox" '+checked+' >';
                vendorinf +=  artIsPrivacyTranslation[language].vendor_googleanalytics_title.replace(/{name}/, window.artIsPrivacySettings.name);
                vendorinf +=  artIsPrivacyTranslation[language].vendor_googleanalytics_body.replace(/{name}/, window.artIsPrivacySettings.name); 
                vendorinf += ' </div>';
            break;

       }

       return vendorinf;
    }


    // Auto  déclanchement
    // --------
    // affichage conditionelle si consentement all ou pas
    var CookieAcceptAll = AIPrivacy_getCookieValue('AIP_acceptall');
    if(CookieAcceptAll!=1) {
        AIPrivacy_showInfos();
        //accept all options by default
        var vendors = window.artIsPrivacySettings.vendors;
        for(var i=0;i<vendors.length;i++) {
            AIPrivacy_setCookieValue("AIP_setting_"+vendors[i],1);
        }

    }else{
        document.getElementById("AIPrivacy").setAttribute("class", "display_none");
    }

    
    // --------
    // handlers
    // --------
    var BtAcceptAll = document.getElementById('AIPrivacy').getElementsByClassName( 'aip_acceptall' )[0];
    if(typeof(BtAcceptAll)!='undefined'){
        BtAcceptAll.onclick = function() { 
            AIPrivacy_hideInfos();
        };
    }


    var BtSettings = document.getElementById('AIPrivacy').getElementsByClassName( 'aip_linktraceurs' )[0];
    if(typeof(BtSettings)!='undefined'){
        BtSettings.onclick = function() { 
            AIPrivacy_showCookieSettings();
        }; 
    }

    //lien dans la page pour parametrer les cookie
    var LienSettings = document.getElementsByClassName( classLinkSettings )[0];
    if(typeof(LienSettings)!='undefined'){
        LienSettings.onclick = function() { 
            AIPrivacy_showCookieSettings();
        }; 
    }
    


    // ------
    // outils
    // ------
    function AIPrivacy_getCookieValue(name) {
        var b = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
    }

    function AIPrivacy_setCookieValue(name,value) {
        document.cookie = name+"="+value+";";
    }


})();//end closure



