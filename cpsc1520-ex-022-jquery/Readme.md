# CPSC1520 Javascript
![](img/jquery.png)

## Up And Running With Jquery
### Embed In Page
Use a CDN content devlivery network you trust and create a link to the jquery version you wish to use
[Google Hosted Libraries](https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js)
##### Self Hosted
```html
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

### Self Hosted
If you want to make sure that you always have jquery available then you can download it from your favourite CDN or off the JQuery site.
1. [Google Hosted Libraries](https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js)
1. [Jquery Site](https://jquery.com/) click download button and the version you want

When I self host JQuery I like to place the library in a folder called lib. It is always a good practice to add your script at the end of the HTML document before the closing body tag and infront of any other script that rely on the JQuery library.

##### Self Hosted
```html
 <script src="js/lib/jquery.js"></script>
```


## Setting Up A Jquery App
In plain javascript we would use an event listener on the window object and listen for the load or DOMContent loaded event. Thus creating an application scope. To do this with jQuery you would use the following method
```jquery
$( document ).ready(function() {
  console.log( 'ready to buld!' );
});
```


## DOM Selection
In plain javascript we would use an event listener on the window object and listen for the load or DOMContent loaded event. Thus creating an application scope. To do this with jQuery you would use the following method
 
```jquery
$( document ).ready(function() {
  $(li)
});
```

## Attributes
When you want to set or get DOM attributes you can use the following methods
for a full list of attributes see the [jQuery Documentation](https://api.jquery.com/category/attributes/)
1. .text();
1. .html();
1. .append();
1. .prepend();
1. .get()
1. .addClass()

## CSS
When your working with css and jquery there are a lot of useful methods you can see a full listing of the CSS methods on the [jQuery Site](https://api.jquery.com/category/attributes/)