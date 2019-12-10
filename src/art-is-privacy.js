//require("art-is-privacy.css");
(function(){  //closure
    console.log(window.artIsPrivacySettings);
    document.write("Je débute avec Webpack !");
    

})();


/*

    return function(cnf)
    {
        var settings = cnf || {
            cssurl : '//privacy.art-is-code.net/css/art-is-privacy.min.css'
        
        };

        var head = document.getElementsByTagName('HEAD')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = settings.cssurl;  
  
        // Append link element to HTML head 
        head.appendChild(link);  
        
    }//end constructor
    
*/
//alert('hello');
/*
artIsPrivacy.prototype.init = function(cnf){
    this.cnf = cnf || {
        _cssurl : '//privacy.art-is-code.net/css/art-is-privacy.min.css'
    };
    this._css();
}


*/
/*
artIsPrivacy.prototype.css
// Get HTML head element 
        
*/
/*
    
document.querySelectorAll('.aic-share').forEach(function (sharebt) {
        //console.log(sharebt.dataset.srv);

        sharebt.onclick = function() {
            //console.log('Click just happened');
         switch(sharebt.dataset.srv){
            //facebook
            case 'facebook':
                 var page = 'https://www.facebook.com/sharer.php?u='+encodeURI(window.location.href);
            break;

            //twitter
            case 'twitter':
                //var page = 'https://www.facebook.com/sharer.php?u='+window.location.href;
                var page = 'https://twitter.com/intent/tweet?text='+encodeURI(document.title)+'&url='+encodeURI(window.location.href);
            break;

            //linkedin
            case 'linkedin':
                var page = 'https://www.linkedin.com/sharing/share-offsite/?url='+encodeURI(window.location.href);
            break;

            //pinterest
            case 'pinterest':
                var page = 'https://www.pinterest.fr/login/?next=/pin/create/bookmarklet/?url='+encodeURI(window.location.href)+'&color=#a8bf8f&h=237&w=237&description='+encodeURI(document.title);
            break;

            //mail
            case 'mail':
                var page = artIsShareURL+'/mail?url='+encodeURI(window.location.href)+'&subject='+encodeURI(document.title);
            break;

            //print
            case 'print':
                window.print();
                return;
            break;

            default:
                return;
            break;
        
         }
        artIsShare.Popup(page,"aic-share",600,400);

    };

});

*/


///csss
/*
var cssAICID = 'artisshareCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssAICID))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssAICID;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = artIsShareURL+'dist/art-is-share.min.css';
    link.media = 'all';
    head.appendChild(link);
}
*/


