# mulang
jQuery plugin for handling multi language UI

## Introduction
This plugin is designed to load a language JSON asset which is beeing used to replace content in HTML elements.
Benefits are:
- *Small*, the size and load time leaves very little footprint.   
- *Cross Origin*, the JSON is padded and can be linked/loaded as a normal `<script>` tag.   
- *Auto language*, either specify language or let the browser set it.   

## Init
Initialize the library like this:
```
$( document ).ready(function() {
    $('a').mulang(options); // find all a tags to work with
}
```

Options handle language, fallback language, locale, and browser detection
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
<a href="#" mulang="headline['<b>10</b>','USD']">text to be replaced</a>
```
The placeholder string use the {0} syntax:
```
headline:'Pay amount {0} {1}'
```
