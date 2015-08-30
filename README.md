# mulang
jQuery plugin for handling multi language UI

## Introduction
This plugin is designed to load a language JSON asset which is beeing used to replace content in HTML elements.
Benefits are:
- *Small* the size and load time leaves very little footprint.   
- *Cross Origin* the JSON is padded and can be linked/loaded as a normal `<script>` tag.   
- *Auto language* either specify language or let the browser set it.   

## Init
Initialize the library like this:
```
$( document ).ready(function() {
    $('a').mulang(options);
}
```
