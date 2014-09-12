![XMixins](./images/icon.png)

# XMixins ![xmixins version](https://badge.fury.io/bo/xmixins.png)

> Introduction：XMixins is a css mixin library, which compatible with LESS, SASS and Stylus at the same time. It can provide the same mixin for different CSS preprocessor, and follow the CSS3 specification, ensure consistency and fairness of the use!

<br />

### 1. Usage

(1) install: `bower install xmixins`
    
    // After installed, can generate the following files in the current directory
    bower_components
        -- xmixins
            -- index.less
            -- index.scss
            -- index.styl
                
(2) import xmixins to your style file（example：add linear gradient to the target element）
    
	@import "bower_components/xmixins/index";

	// for less
	div {
    	.x-linear-gradient(to bottom, #fff, #666);
	}

	// for sass
	div {
    	@include x-linear-gradient(to bottom, #fff, #666);
	}

	// for stylus
	div {
    	x-linear-gradient(to bottom, #fff, #666);
	}

<br />

### 2. Doc for mixins

* [doc for less](./doc/less.md)
* [doc for sass](./doc/sass.md)
* [doc for stylus](./doc/styl.md)

<br />

### 3. Released mixins

**(1) standard**

| mixin name | description | IE | Chrome | Safari | Firefox | Opera | IOS 7.1.2
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|x-border-radius | border-radius | 9+ | √ | √ | √ | √ | √ |
|x-box-shadow | box-shadow | 9+ | √ | √ | √ | √ | √ |
|x-box-sizing | box-sizing |9+ | √ | √ | √ | √ | √ |
|x-text-overflow | text-overflow | 6+ | √ | √ | √ | √ | √ |
|x-min-height | min-height | 6+ | √ | √ | √ | √ | √ |
|x-opacity | opacity | 6+ | √ | √ | √ | √ | √ |
|x-inline-block | inline-block | 6+ | √ | √ | √ | √ | √ |
|x-font-face | font-face | 6+ | √ | √ | √ | √ | √ |
|x-linear-gradient | linear-gradient | 6+ | √ | √ | √ | √ | √ |
|x-transform | transform | 9+ | √ | √ | √ | √ | √ |
|x-transition | transition | 10+ | √ | √ | √ | √ | √ |
|x-animation | animation | 10+ | √ | √ | √ | √ | √ |

**(2) non-standard**

| mixin name | description | IE | Chrome | Safari | Firefox | Opera | IOS 7.1.2
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|x-clearfix | clear float | 6+ | √ | √ | √ | √ | √ |
|x-border-triangle | border triangle | 6+ | √ | √ | √ | √ | √ |
|x-grayscale | turn colour image into gray image | 6~9 | √ | √ | √ | √ | √ |
|x-background-retina | background image support retina | 6+ | √ | √ | √ | √ | √ |
