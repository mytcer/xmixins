![XMixins](./images/icon.png)

# XMixins ![xmixins version](https://badge.fury.io/bo/xmixins.png)

XMixins is a super CSS mixin library, it has five features: 

1. Compatible major CSS preprocessor (LESS, SASS and Stylus) .

2. Provide the same mixin for different CSS preprocessor .

3. Full compliance with CSS3 specification (CSS3 mixins) .

4. Compatible with many terminals (desktop, tablet and mobile) .

5. Installation is very easy (compared to Compass) .

<br />

### 1. Usage

(1) install: `bower install xmixins`
    
    // After installed, can generate the following files in the current directory
    bower_components
        -- xmixins
            -- index.less
            -- index.scss
            -- index.styl
                
(2) import xmixins to your style file

	@import "bower_components/xmixins/index";

<br>

### 2. Example

Add linear gradient to the target element: 

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

### 3. Doc for mixins

* [doc for less](./doc/less.md)
* [doc for sass](./doc/sass.md)
* [doc for stylus](./doc/styl.md)

<br />

### 4. Released mixins

**(1) CSS3**

| mixin name | IE | Chrome | Safari | Firefox | Opera | IOS | Android |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|x-appearance | X | √ | √ | √ | √ | √ | ? |
|x-animation | 10+ | √ | √ | √ | √ | √ | ? |
|x-background-clip | 9+ | √ | √ | √ | √ | √ | ? |
|x-background-origin | 9+ | √ | √ | √ | √ | √ | ? |
|x-background-size | 9+ | √ | √ | √ | √ | √ | ? |
|x-backface-visibility | 10+ | √ | √ | √ | √ | X | ? |
|x-border-radius | 9+ | √ | √ | √ | √ | √ | ? |
|x-box-shadow | 9+ | √ | √ | √ | √ | √ | ? |
|x-box-sizing | 9+ | √ | √ | √ | √ | √ | ? |
|x-text-overflow | 6+ | √ | √ | √ | √ | √ | ? |
|x-min-height | 6+ | √ | √ | √ | √ | √ | ? |
|x-opacity | 6+ | √ | √ | √ | √ | √ | ? |
|x-inline-block | 6+ | √ | √ | √ | √ | √ | ? |
|x-font-face | 6+ | √ | √ | √ | √ | √ | ? |
|x-linear-gradient | 6+ | √ | √ | √ | √ | √ | ? |
|x-radial-gradient | 10+ | √ | √ | √ | √ | √ | ? |
|x-transform | 9+ | √ | √ | √ | √ | √ | ? |
|x-transform-origin | 9+ | √ | √ | √ | √ | √ | ? |
|x-transform-style | X | √ | √ | √ | √ | √ | ? |
|x-transition | 10+ | √ | √ | √ | √ | √ | ? |
|x-hyphens | 6+ | √ | √ | √ | √ | √ | ? |
|x-perspective | 10+ | √ | √ | √ | √ | √ | ? |
|x-perspective-origin | 10+ | √ | √ | √ | √ | √ | ? |
|x-user-select | 10+ | √ | √ | √ | √ | √ | ? |


**(2) Utilities**

| mixin name | IE | Chrome | Safari | Firefox | Opera | IOS | Android |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|x-background-retina | 6+ | √ | √ | √ | √ | √ | ? |
|x-border-triangle | 6+ | √ | √ | √ | √ | √ | ? |
|x-clearfix | 6+ | √ | √ | √ | √ | √ | ? |
|x-grayscale | 6~9 | √ | √ | √ | √ | √ | ? |
|x-placeholder | 10+ | √ | √ | √ | √ | √ | ? |

