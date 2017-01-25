/*
  Mulang 1.0
  Multi Language Template Plugin
  By Robert@mondido.com

  Requires JQuery to work.
 */
(function ( $ ) {

  $.fn.mulang = function( options ) {

    //these are the defaults, gets overridden by options
    options = $.extend({
      fallback: 'en'
    }, options);

    var do_log = function(str){
      window.console && console.log(str);
    }

    if(!options.lang){ //if there is no lang in options, grab from the browser
      options.lang = navigator.languages && navigator.languages[0] || //Chrome, FF
                     navigator.language || //IE 11 + Opera, Safari, Edge
                     navigator.userLanguage; //IE older than 11

      do_log('mulang is grabbing '+options.lang+' from browser');
      if(options.ignore_locale){ //should we ignore locale and use ex. en for en-US
        options.lang = options.lang.split('-')[0];
        do_log('mulang is ignoring locale and using '+options.lang);
      }
    }else{
      do_log('mulang is grabbing '+options.lang+' from options');
    }

    //do we have text data?
    if(window.__mulang == undefined){
      do_log('mulang languages file not loaded');
      return false;
    }

    //if language not found, check for other prefered languages in Chrome, FF 32+
    if(!__mulang[options.lang] && navigator.languages){
      loop: for(let lang of navigator.languages){
        do_log('mulang checking locale '+lang+' from browser');
        //should we ignore country locale and use ex. en for en-US
        if(options.ignore_locale){
          lang = lang.split('-')[0];
          do_log('ignoring country locale, looking for '+lang+' in mulang language file');
        }
        for(let supportedlang in __mulang) {
          if(supportedlang == lang) {
            do_log('mulang found suitable language '+lang);
            options.lang = supportedlang;
            break loop; // breakes the loop for, supported language found
          }
        }
        do_log(lang+' is not found in mulang language file');
      }
    }

    if(!__mulang[options.lang]){
      do_log('prefered languages are not found in mulang language file');
      do_log('user prefer language: '+options.lang);
      if(options.fallback){
        do_log('mulang is trying fallback language '+options.fallback);
        options.lang = options.fallback;
        if(!__mulang[options.lang]){
          do_log(options.lang+' is not found in mulang language file');
          return false;
        }
      }
    }

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
      return /.*<.*>.*/.test(str);
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
      if($(this).attr('mulang') == undefined){
        return true; //no language settings
      }
      var mulang_tag = $(this).attr('mulang');
      for(let lang_key of mulang_tag.split(';')) {
        var attr = 'text';
        //find array
        var param_arr = null;
        if(lang_key.indexOf('[') > -1){
          param_arr = find_ph(lang_key);
          lang_key = lang_key.split('[')[0];
        }

        //find attr value
        if(lang_key.indexOf(':') > -1){
          attr = lang_key.split(':')[1];
          lang_key = lang_key.split(':')[0];
        }
        var txt = __mulang[options.lang][lang_key];
        if(txt == undefined){
          txt = $(this).attr('mulang');
        }
        if(param_arr != null){
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
      }
    });

    return options.lang;
  }
}( jQuery ));