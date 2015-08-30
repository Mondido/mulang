# mulang
jQuery plugin for handling multi language UI

## Introduction
This plugin is designed to load a language JSON asset which is beeing used to replace content in HTML elements.
Benefits are:
- *Small*, the size and load time leaves very little footprint.   
- *Cross Origin*, the JSON is padded and can be linked/loaded as a normal `<script>` tag.   
- *Auto language*, either specify language or let the browser set it.   

## Add it
```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="lib/mulang-1.0.js"></script>
<script type="text/javascript" src="lang/languages.js"></script>
```

## Init
initialize the library like this:
```
$( document ).ready(function() {
    $('a').mulang(options); // find all a tags to work with
}
```

Options handle language, fallback language, locale, and browser detection.
If "lang" is not set, we'll get the accept language of the browser.
```
var options = {
    lang:'sv', //what language to use
    fallback:'en', //if lang is not found in file, fall back to this
    ignore_locale:true //when grabbing the language from the browser (en-US) ignore the locale (US) 
}
```

## HTML
The syntax to allow text to be replaces in HTML is:
```
<a href="#" mulang="card_holder">text to be replaced</a>
```
To replace a certain attribute (in this case, the value attribute:
```
<input mulang="card_number:value" />
```
To apply placeholders:
```
<a href="#" mulang="pay_headline['<b>10</b>','USD']">text to be replaced</a>
```
The placeholder string use the {0} syntax:
```
pay_headline:'Pay amount {0} {1}'
```

## JSON language data:
```
window.__mulang = {
  en: {
    pay_headline:'Pay amount {0} {1}',
    intro:'Intro',
    card_holder:'Card holder name',
    card_number:'Card number',
    card_type:'Card type',
    cvc:'CVV code',
    expiry:'Expiry date',
    pay_button:'Finish payment',
    safe_text:'Pay safely with 256 bit SSL encryption. No card numbers will be stored.'
  },
  sv: {
    pay_headline:'Betala belopp {0} {1}',
    intro:'Fyll i din betalinformation så kommer prenumerationen att komma igång!',
    card_holder:'Korthavarens namn',
    card_number:'Kortnummer',
    card_type:'Korttyp',
    cvc:'CVV-kod (kontrollsiffror):',
    expiry:'Gilltighetstid:',
    pay_button:'Betala',
    safe_text:'Betala säkert med 256 bitars SSL kryptering. Inga kortupgifter kommer att sparas.'
  }
}
```
