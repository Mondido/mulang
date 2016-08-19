/*
  Mulang 1.0
  Multi Language Template Plugin
  By Robert@mondido.com

  Requires JQuery to work.
 */
(function ( $ ) {

  $.fn.mulang = function( options ) {

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
    }

    if(!options.lang){ //if there is no lang in options, grab from the browser
      options.lang = window.navigator.userLanguage || window.navigator.language;
      do_log('mulang is grabbing '+options.lang+' from browser');
      if(options.ignore_locale){ //should we ignore locale and use ex. en for en-US
        options.lang = options.lang.substr(0,options.lang.indexOf('-'));
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
      if($(this).attr('mulang') == undefined){
        return true; //no language settings
      }
      var lang_key = $(this).attr('mulang');
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
      if(txt == undefined){
        txt = $(this).attr('mulang')
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
    });
  }
}( jQuery ));