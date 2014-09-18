### **x-animation**

> Description：css3 animation

**1. usage**

	syntax：@include x-animation($value);

	params：

		* $value --- the composition of the value：

			* animation-name  

			* animation-duration

			* animation-timing-function

			* animation-delay

			* animation-iteration-count

			* animation-direction

	note：the default value is "none 0 ease 0 1 normal"

**2. example**

	div {
		@include x-animation(test 3s ease);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/a/animation/](http://css-tricks.com/almanac/properties/a/animation/)


<br>

### **x-appearance**

> Description：css3 appearance

**1. usage**

	syntax：@include x-appearance($value);

	params：

		* $value --- The available value：http://css-tricks.com/almanac/properties/a/appearance/

**2. example**

	div {
		@include x-appearance(button);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/a/appearance/](http://css-tricks.com/almanac/properties/a/appearance/)


<br>

### **x-background-clip**

> Description：css3 background-clip

**1. usage**

	syntax：@include x-background-clip($mode);

	params：

		* $mode --- border-box（default value） | padding-box | content-box

**2. example**

	div {
		@include x-background-clip(content-box);
	}

**3. source**

* [http://www.w3school.com.cn/cssref/pr_background-clip.asp](http://www.w3school.com.cn/cssref/pr_background-clip.asp)
* [http://css-tricks.com/transparent-borders-with-background-clip/](http://css-tricks.com/transparent-borders-with-background-clip/)


<br>

### **x-background-origin**

> Description：css3 background-origin

**1. usage**

	syntax：@include x-background-origin($mode);

	params：

		* $mode --- border-box（default value） | padding-box | content-box

**2. example**

	div {
		@include x-background-origin(content-box);
	}

**3. source**

* [http://www.w3school.com.cn/cssref/pr_background-origin.asp](http://www.w3school.com.cn/cssref/pr_background-origin.asp)


<br>

### **x-background-retina**

> Description：background image support retina screen .

**1. usage**

	syntax：@include x-background-retina($img_1x, $img_2x, $width_1x, $height_1x);

	params：

		* $img_1x --- 1x background image url, <string>

		* $img_2x --- 2x background image url, <string>

		* $width_1x --- 1x background image width

		* $height_1x --- 1x background image height

**2. example**

	div {
		@include x-background-retina("1x.png", "2x.png", 24px, 24px);
	}
	

<br>

### **x-background-size**

> Description：css3 background-size

**1. usage**

	syntax：@include x-background-size($size);

	params：

		* $size --- auto（default value）| length | percentage | cover | contain

**2. example**

	div {
		@include x-background-size(50% 50%);
	}

**3. source**

* [http://www.css3.info/preview/background-size/](http://www.css3.info/preview/background-size/)
* [http://www.w3school.com.cn/cssref/pr_background-size.asp](http://www.w3school.com.cn/cssref/pr_background-size.asp)


<br>

### **x-border-radius**

> Description：css3 border-radius

**1. usage**

	syntax：@include x-border-radius($radius, $direction);

	params：

		* $direction --- all (default value) | top | left | bottom | left

**2. example**

	div {
		@include x-border-radius(3px);  // set all corners
	}

	div {
		@include x-border-radius(3px, top);  // set topleft and topright corners
	}

	div {
		@include x-border-radius(3px, right);  // set topright and bottomright corners
	}

	div {
		@include x-border-radius(3px, bottom);  // set bottomleft and bottomright corners
	}

	div {
		@include x-border-radius(3px, left);  // set topleft and bottomleft corners
	}

**3. source**

* [http://css-tricks.com/almanac/properties/b/border-radius/](http://css-tricks.com/almanac/properties/b/border-radius/)


<br>

### **x-border-triangle**

> Description：border triangle

**1. usage**

	syntax：@include x-border-triangle($borderWidth, $borderColor, $direction);

	params：

		* $borderWidth --- etc, 5px

		* $borderColor --- etc, #666

		* $direction --- top | right | bottom | left | topleft | topright | bottomleft | bottomright

**2. example**

	div {
		@include x-border-triangle(5px, #666, top);
	}

**3. source**

* [http://css-tricks.com/examples/ShapesOfCSS/](http://css-tricks.com/examples/ShapesOfCSS/)


<br>

### **x-box-shadow**

> Description：css3 box-shadow

**1. usage**

	syntax：@include x-box-shadow($params);

**2. example**

	div {
		@include x-box-shadow(5px 5px 3px #000);
	}

**3. source**

* [http://css-tricks.com/snippets/css/css-box-shadow/](http://css-tricks.com/snippets/css/css-box-shadow/)


<br>

### **x-box-sizing**

> Description：css3 box-sizing

**1. usage**

	syntax：@include x-box-sizing($model);

	params：

		* $model --- content-box | border-box | inherit

**2. example**

	div {
		@include x-box-sizing(border-box);
	}

**3. source**

* [http://css-tricks.com/box-sizing/](http://css-tricks.com/box-sizing/)


<br>

### **x-clearfix**

> Description：clear float

**1. usage**

	syntax：@include x-clearfix();

**2. example**

	div {
		@include x-clearfix();
	}

**3. source**

* [http://css-tricks.com/snippets/css/clear-fix/](http://css-tricks.com/snippets/css/clear-fix/)


<br>

### **x-font-face**

> Description：css3 @font-face

**1. usage**

	syntax：@include x-font-face($fontName, $fontUrl); // note：font url without a file extension

**2. example**

	@include x-font-face('iconfont', 'http://x.cdn.com/iconfont');	

	div {
		font-family: 'iconfont';
	}

**3. source**

* [http://css-tricks.com/snippets/css/using-font-face/](http://css-tricks.com/snippets/css/using-font-face/)



<br>

### **x-grayscale**

> Description：turn colour image into gray .

**1. usage**

	syntax：@include x-grayscale();

**2. example**

	img {
		@include x-grayscale();  // colour image into a gray image
	}

**3. source**

* [http://css-tricks.com/snippets/css/forcing-grayscale-printing/](http://css-tricks.com/snippets/css/forcing-grayscale-printing/)


<br>

### **x-hyphens**

> Description：css3 hyphens

**1. usage**

	syntax：@include x-hyphens($mode);

	params：

		* $mode --- none | manual | auto（default value）

**2. example**

	div {
		@include x-hyphens();
	}

**3. source**

* [http://css-tricks.com/almanac/properties/h/hyphenate/](http://css-tricks.com/almanac/properties/h/hyphenate/)


<br>

### **x-inline-block**

> Description：inline-block

**1. usage**

	syntax：@include x-inline-block();

**2. example**

	div {
		@include x-inline-block();
	}

**3. source**

* [http://css-tricks.com/snippets/css/cross-browser-inline-block/](http://css-tricks.com/snippets/css/cross-browser-inline-block/)


<br>

### **x-linear-gradient**

> Description：css3 linear-gradient

**1. usage**

	syntax：@include x-linear-gradient($direction, $startColor, $endColor);

	params：

		* $direction --- to bottom | to right

**2. example**

	div {
		@include x-linear-gradient(to bottom, #000, #fff);
	}

**3. source**

* [http://css-tricks.com/css3-gradients/](http://css-tricks.com/css3-gradients/)


<br>

### **x-min-height**

> Description：min-height

**1. usage**

	syntax：@include x-min-height($height);

**2. example**

	div {
		@include x-min-height(100px);
	}

**3. source**

* [http://css-tricks.com/snippets/css/cross-browser-min-height/#comment-100802](http://css-tricks.com/snippets/css/cross-browser-min-height/#comment-100802)


<br>

### **x-opacity**

> Description：opacity

**1. usage**

	syntax：@include x-opacity($opacity);

**2. example**

	div {
		@include x-opacity(0.5);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/o/opacity/](http://css-tricks.com/almanac/properties/o/opacity/)


<br>

### **x-placeholder**

> Description：set placeholder text color .

**1. usage**

	syntax：@include x-placeholder($color);

	params：

		* $color --- The placeholder text's color

**2. example**

	input {
		@include x-placeholder(red);
	}

**3. source**

* [http://css-tricks.com/almanac/selectors/p/placeholder/](http://css-tricks.com/almanac/selectors/p/placeholder/)
* [https://github.com/twbs/bootstrap/pull/11526](https://github.com/twbs/bootstrap/pull/11526)


<br>

### **x-text-overflow**

> Description：text-overflow

**1. usage**

	syntax：@include x-text-overflow($cutway);

	params：

		* $cutway --- ellipsis | clip (default value)

**2. example**

	div {
		@include x-text-overflow(ellipsis);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/t/text-overflow/](http://css-tricks.com/almanac/properties/t/text-overflow/)


<br>

### **x-transform**

> Description：css3 transform

**1. usage**

	syntax：@include x-transform($value);

	params：

		* $value --- transform-functions | none（default value）

**2. example**

	div {
		@include x-transform(rotate(20deg));
	}

**3. source**

* [The available transform functions](http://www.w3school.com.cn/cssref/pr_transform.asp)



<br>

### **x-transition**

> Description：css3 transition

**1. usage**

	syntax：@include x-transition($value);

	params：

		* $value --- the composition of the value：

			* transition-property

			* transition-duration

			* transition-timing-function

			* transition-delay

	note：the default value is "all 0 ease 0"

**2. example**

	div {
		height: 100px;
		@include x-transition(height 2s ease);
	}
	div:hover {
		height: 300px;
	}

**3. source**

* [http://css-tricks.com/almanac/properties/t/transition/](http://css-tricks.com/almanac/properties/t/transition/)



<br>

### **x-user-select**

> Description：css3 user-select

**1. usage**

	syntax：@include x-user-select($mode);

	params：

		* $mode --- none | text（default value）| toggle | element | elements | all | inherit

	note：

		* In addition to “none" and "text", other value has compatibility problems.

**2. example**

	div {
		@include x-user-select();
	}

**3. source**

* [http://css-tricks.com/almanac/properties/u/user-select/](http://css-tricks.com/almanac/properties/u/user-select/)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
* [http://www.w3.org/TR/2000/WD-css3-userint-20000216#user-select](http://www.w3.org/TR/2000/WD-css3-userint-20000216#user-select)
