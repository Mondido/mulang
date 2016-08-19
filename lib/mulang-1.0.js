/*
    Mulang 1.2
    Multi Language Template Plugin
    By Robert@mondido.com

    Requires JQuery to work.
   */
  (function ( $ ) {

      var methods = {
          init : function(options) {

          },
          getCountry : function(data) {
          /*
          Get estimated country from metadata and/or locale string
          returns for example: se,us,unknown
          */
              var filter = [
              {r: '(usa|united states|en_US)',c: 'us', l: 'en'},
              {r: '(austria|Ã¶sterreich|de_AT)',c: 'at', l: 'de'},
              {r: '(belgium|belgiÃ«|nl_BE)',c: 'be', l: 'nl'},
              {r: '(belgium|belgique|fr_BE)',c: 'be', l: 'fr'},
              {r: '(bulgaria|Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ|bg_BG)',c: 'bg', l: 'en'},
              {r: '(croatia|hrvatska|hr_HR)',c: 'hr', l: 'en'},
              {r: '(czech republic|ÄeskÃ¡ republika|cs_CZ)',c: 'cz', l: 'en'},
              {r: '(cyprus|kÏÏ€ÏÎ¿Ï‚|el_CY)',c: 'cy', l: 'en'},
              {r: '(denmark|danmark|da_DK)',c: 'dk', l: 'da'},
              {r: '(estonia|eesti|et_EE)',c: 'ee', l: 'en'},
              {r: '(finland|suomi|fi_FI)',c: 'fi', l: 'fi'},
              {r: '(finland|finland|sv_FI)',c: 'fi', l: 'sv'},
              {r: '(france|france|fr_FR)',c: 'fr', l: 'fr'},
              {r: '(germany|deutschland|de_DE)',c: 'de', l: 'de'},
              {r: '(greece|eÎ»Î»Î¬Î´Î±|el_GR)',c: 'gr', l: 'en'},
              {r: '(hungary|magyarorszÃ¡g|hu_HU)',c: 'hu', l: 'en'},
              {r: '(ireland|ireland|en_IE)',c: 'ie', l: 'en'},
              {r: '(italy|italia|it_IT)',c: 'it', l: 'en'},
              {r: '(latvia|latvija|lv_LV)',c: 'lv', l: 'en'},
              {r: '(lithuania|lietuva|lt_LT)',c: 'lt', l: 'en'},
              {r: '(luxembourg|luxembourg|fr_LU)',c: 'lu', l: 'fr'},
              {r: '(luxembourg|luxemburg|de_LU)',c: 'lu', l: 'de'},
              {r: '(malta|malta|mt_MT)',c: 'mt', l: 'en'},
              {r: '(netherlands|nederland|nl_NL)',c: 'nl', l: 'nl'},
              {r: '(norway|norge|no_NO)',c: 'no', l: 'en'},
              {r: '(poland|polska|pl_PL)',c: 'pl', l: 'en'},
              {r: '(portugal|portugal|pt_PT)',c: 'pt', l: 'en'},
              {r: '(romania|romÃ¢nia|ro_RO)',c: 'ro', l: 'en'},
              {r: '(slovakia|slovensko|sk_SK)',c: 'sk', l: 'en'},
              {r: '(slovenia|slovenija|sl_SI)',c: 'si', l: 'en'},
              {r: '(spain|espaÃ±a|es_ES)',c: 'es', l: 'es'},
              {r: '(united kingdom|uk|en_GB)',c: 'gb', l: 'en'},
              {r: '(sweden|sverige|se_SE)',c: 'se', l: 'sv'}
              ];
              var score = [];
              $(filter).each(function(){
                  var regex = new RegExp(this.r,'gi');
                  var res = data.match(regex);
                  if(res){
                      score.splice(res.length, 0, this);
                  }
              });
              if(score.length > 0){
                  return score[score.length-1];
              }else{
                  return null;
              }
          }
      };


    $.fn.mulang = function( options ) {

      if ( methods[options] ) {
          return methods[ options ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      }

      if(!options){
        options = {};
      }
      if(!options.fallback){
        options.fallback = 'en';
      }
      var do_log = function(str){
        if(window.console){
          console.log(str);
        }
      };

      if(!options.lang){ //if there is no lang in options, grab from the browser
        options.lang = window.navigator.userLanguage || window.navigator.language;
        langFromData = $.fn.mulang('getCountry',options.data +' '+options.lang.replace('-','_'));
        if(langFromData){
            options.lang = langFromData.l;
        }
        do_log('mulang is grabbing '+options.lang+' from browser and metadata');
        if(options.ignore_locale){ //should we ignore locale and use ex. en for en-US
          options.lang = options.lang.substr(0,options.lang.indexOf('-'));
          do_log('mulang is ignoring locale and using '+options.lang);
        }
      }else{
        do_log('mulang is grabbing '+options.lang+' from options');
      }
      //do we have text data?
      if(window.__mulang === undefined){
        do_log('mulang languages file not loaded');
        return false;
      }
      if(!__mulang[options.lang]){
        do_log(options.lang+' is not found in mulang language file');
        if(options.fallback){
          do_log('mulang is trying fallback language '+options.fallback);
          options.lang = options.fallback;
          if(!__mulang[options.lang]){
            do_log(options.lang+' is not found in mulang language file');
            return false;
          }
        }
      }

      window.__mulang.current = options.lang;

      //find placeholder array
      var find_ph = function(str){
        var re = /.*(\[.*]).*/;
        var m;
        if ((m = re.exec(str)) !== null) {
          if (m.index === re.lastIndex) {
            re.lastIndex++;
          }
          return m[1];
        }
        return null;
      };

      //check if string contains html
      var contains_html = function(str){
        var re = /.*<.*>.*/;
        var m;
        if ((m = re.exec(str)) !== null) {
          return true;
        }
        return false;
      };

      //replace placeholders for array values
      var parse_ph = function(str,arr_str){
        var arr = eval(arr_str);
        if( Object.prototype.toString.call(arr) != '[object Array]' ) {
          do_log('placeholder parameters for is not an Array ('+arr_str+')');
        }
        for(var i = 0;i< arr.length;i++){
          str = str.replace('{'+i+'}', arr[i]);
        }
        return str;
      };

      //loop all elements
      this.each(function(){
        var found_attr = false;
        var attr_name = 'mulang'; //old name

        if($(this).attr(attr_name) !== undefined){
          found_attr = true;
        }

        if(!found_attr){
          attr_name = 'data-mulang';
          if($(this).attr(attr_name) === undefined){
            return true; //no language settings
          }
        }

        var lang_key = $(this).attr(attr_name);
        var attr = 'text';
        //find array
        var param_arr = null;
        if(lang_key.indexOf('[') > -1){
          param_arr = find_ph(lang_key);
          lang_key = lang_key.substr(0,lang_key.indexOf('['));
        }

        //find attr value
        if(lang_key.indexOf(':') > -1){
          attr = lang_key.substr(lang_key.indexOf(':')+1);
          lang_key = lang_key.substr(0,lang_key.indexOf(':'));
        }
        var txt = __mulang[options.lang][lang_key];
        if(txt === undefined){
          txt = $(this).attr(attr_name);
        }
        if(param_arr !== null){
          txt = parse_ph(txt,param_arr);
        }
        if(attr=='text'){
          if(contains_html(txt)){
            $(this).html(txt);
          }else{
            $(this).text(txt);
          }
        }else{
          $(this).attr(attr,txt);

        }
      });
    };

  }( jQuery ));


  function initMulang(lang){
      var options = {ignore_locale:true};
      if(lang){
          options.lang = lang
      }
      $('.mulang').mulang(options);
  }

  function createLangSwitch(obj){
      var ul = $('<ul class="langswitch"></ul>');
      var cssAttr = '';
      $(window.__mulang.languages).each(function(){
          if(window.__mulang.current === this.code ){
              cssAttr = 'active';
          }else{
              cssAttr = '';
          }
          var a = $('<a href="#" data-langcode="'+this.code+'">'+this.name+'</a>');
          a.addClass(cssAttr);
          var li = $('<li></li>');
          li.append(a);
          $(ul).append(li);
      });
      $(obj).append(ul);
      $(obj).find('a').on('click',function(e){
          e.preventDefault;
          $('.langswitch .active').removeClass('active');
          $('.mulang').mulang({lang: $(this).attr('data-langcode')});
          $(this).addClass('active');
      });
  }

  $('.mulang').mulang({data: mondidoSettings.metadata});
  createLangSwitch($('#languages'));

  if(document.location.href.indexOf('declined') > -1 || document.location.href.indexOf('fail') > -1) {
      alert($('#try-again').text().replace(/\s+/, ""));
  }

  /* mondido lib 1.2*/