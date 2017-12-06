# Slider
Simple jQuery slideShow.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) :
```html
<script src="jQuery.min.js"></script>  
```
## How to Use
Reference the `slideShow()

**HTML**
```html
<div class="container-slider">
    <!-- Slider -->    
    <a id ='prev' class="prev-icon">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
    </a>
    <ul class="slider">
      <li class="active">
            <img src="image/img-1.jpg">
      </li>
      <li>
            <img src="image/img-2.jpg">
      </li>
      <li>
            <img src="image/img-3.jpg">
      </li>
      <li>
            <img src="image/img-4.jpg">
      </li>
    </ul>
    <a id ='next' class="next-icon">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </a>                    
    <!-- End Slider -->
</div>    
```

**jQuery**
```javascript
$(function() {  

    $('.slider').slideShow(3500); 
    
});
```  

## Browser Support
– Google Chrome  
– Safari ( Desktop & Mobile )  
– Internet Explorer ( 8, 9, 10+ )  
– Firefox  
– Opera ( Not Tested )  

## Release Notes
**jQuery.slideShow 1.0.1**   
– Initial Release   
  

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [ThemeForest](https://themeforest.net/user/m_alaa/portfolio?ref=M_Alaa) or find me on GitHub [@moahmed123](https://github.com/moahmed123).
