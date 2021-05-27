window.translate = function() {
    return {
        dummyDefaultLanguage: '',
        currentLanguage: '',

        init: function() {
          window.onload = function() {
            new google.translate.TranslateElement({pageLanguage: 'es'}, 'google_translate_element');
          };
        },

        googleTranslateElementInit: function() {
          window.onload = function() {
            new google.translate.TranslateElement({pageLanguage: 'es'}, 'google_translate_element');
          };

        },

        setLanguage: function(lang) {
            let languageSelect = document.getElementsByClassName("goog-te-combo");
            if(languageSelect != null && languageSelect.length > 0) {
                languageSelect[0].value = lang;
                this.currentLanguage = lang;

                var event = document.createEvent("HTMLEvents");
                event.initEvent("change", false, true);
                languageSelect[0].dispatchEvent(event);

                setTimeout(function(){
                  if (languageSelect[0].value != lang) {
                    languageSelect[0].value = lang;
                    this.currentLanguage = lang;

                    var event = document.createEvent("HTMLEvents");
                    event.initEvent("change", false, true);
                    languageSelect[0].dispatchEvent(event);
                  }
                }, 300);
            }
        },

        changeLanguageStyle: function(){
            const langGovco = document.querySelectorAll('.lang-govco');
            const lang = this.getCurrentlanguage();

            for(var i = 0; i < langGovco.length; i++){
                if (lang == 'es') {
                    langGovco[i].classList.add('govco-icon-language-en-n');
                    langGovco[i].classList.remove('govco-icon-language-es-n');
                }else{
                    langGovco[i].classList.add('govco-icon-language-es-n');
                    langGovco[i].classList.remove('govco-icon-language-en-n');
                }
            }
        },

        addLanguageChangeListener: function(dummyItemId) {
            var _this = this;
            let dummyItem = document.getElementById(dummyItemId);
            this.dummyDefaultLanguage = dummyItem.innerHTML;

            dummyItem.addEventListener("DOMSubtreeModified", function () {
                var currentValue = document.getElementById("language-value-changed").innerHTML;

                if (currentValue && currentValue.indexOf(_this.dummyDefaultLanguage) < 0) {
                    _this.dummyDefaultLanguage = currentValue;
                    _this.changeLanguageStyle();
                }
            }, false);
        },

        getCurrentlanguage: function() {
            let cookiesList = document.cookie.split('; ');
            let cookies = {}, cookie;

            for (let i = cookiesList.length - 1; i >= 0; i--) {
                cookie = cookiesList[i].split('=');
                cookies[cookie[0]] = cookie[1];
            }

            if (cookies['googtrans'] != undefined) {
                const langSplit = cookies['googtrans'].split("/");
                return langSplit[langSplit.length - 1];
            }
            return '';
        },

        setlanguageCookie: function(lang) {
          let cookiesList = document.cookie.split('; ');

          for(let i = 0; i < cookiesList.length; i++) {
            if (cookiesList[i].indexOf('googtrans') != -1) {
              let value = cookiesList[i].split('=');
              value[value.length - 1] = '/auto/' + lang;
              cookiesList[i] = value.join('=');
            }
          }
          document.cookie = cookiesList.join('; ');
        }
    }
}();

window.translate.init();
