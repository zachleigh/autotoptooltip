# AutoTopTooltip   
  
##### Automatically change the position of [Tooltip.js](https://github.com/HubSpot/tooltip) tooltips based on window width.

### Quick Guide
  - [Install](#install)
  - [Usage](#usage)

## Install
First install tooltip.js. See [here](https://github.com/HubSpot/tooltip) for info.    
Download the autotoptooltip min.js file or install through npm:
```
npm install autotoptooltip --save
```

## Usage
When creating tooltips, set the data-tooltip-position to 'top auto'.
```html
<a data-tooltip="content" data-tooltip-position="top auto">Text</a>
```
   
Include the min.js file in your js somewhere.    
    
New up a AutoTopTooltip.js instance passing it an object of screen-width/pixel-limit key/value pairs.
```js
new AutoTopTooltip({425: 80, 800: 220, 1200: 400});
```
The passed screen-width/pixel-limit values mean that at the defined **screen-width**, tooltips that occur in **pixel-limit** pixels or less from the screen edge will have their position changed. For example, in the above instance, if the screen-width is less than 425 pixels, tooltips that occur 80 pixels or less away from the screen edge will have their position changed to either 'top left' or 'top right'. All other tooltips will have positions set to 'top center'.   
    
A default limit can be sent as the second parameter to the constructor.
```js
new AutoTopTooltip({425: 70, 800: 180, 1000: 300}, 600);
```
If not passed, this value will default to 500px.