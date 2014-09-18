### x-animation

**1. usage**

	syntax：.x-animation(@value);

	params：

		* @value --- the composition of the value：

			* animation-name  

			* animation-duration

			* animation-timing-function

			* animation-delay

			* animation-iteration-count

			* animation-direction

	note：the default value is "none 0 ease 0 1 normal"

**2. example**

	div {
		.x-animation(test 3s ease);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/a/animation/](http://css-tricks.com/almanac/properties/a/animation/)
<br>
### x-appearance

**1. usage**

	syntax：.x-appearance(@value);

	params：

		* @value --- The available value：http://css-tricks.com/almanac/properties/a/appearance/

**2. example**

	div {
		.x-appearance(button);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/a/appearance/](http://css-tricks.com/almanac/properties/a/appearance/)
<br>
### x-background-clip

**1. usage**

	syntax：.x-background-clip(@mode);

	params：

		* @mode --- border-box（default value） | padding-box | content-box

**2. example**

	div {
		.x-background-clip(content-box);
	}

**3. source**

* [http://www.w3school.com.cn/cssref/pr_background-clip.asp](http://www.w3school.com.cn/cssref/pr_background-clip.asp)

* [http://css-tricks.com/transparent-borders-with-background-clip/](http://css-tricks.com/transparent-borders-with-background-clip/)
<br>
### x-background-origin

**1. usage**

	syntax：.x-background-origin(@mode);

	params：

		* @mode --- border-box（default value） | padding-box | content-box

**2. example**

	div {
		.x-background-origin(content-box);
	}

**3. source**

* [http://www.w3school.com.cn/cssref/pr_background-origin.asp](http://www.w3school.com.cn/cssref/pr_background-origin.asp)
<br>
### x-background-retina

**1. usage**

	syntax：.x-background-retina(@img_1x, @img_2x, @width_1x, @height_1x);

	params：

		* @img_1x --- 1x background image url, <string>

		* @img_2x --- 2x background image url, <string>

		* @width_1x --- 1x background image width

		* @height_1x --- 1x background image height

**2. example**

	div {
		.x-background-retina("1x.png", "2x.png", 24px, 24px);
	}
<br>
### x-background-size

**1. usage**

	syntax：.x-background-size(@size);

	params：

		* @size --- auto（default value）| length | percentage | cover | contain

**2. example**

	div {
		.x-background-size(50% 50%);
	}

**3. source**

* [http://www.css3.info/preview/background-size/](http://www.css3.info/preview/background-size/)

* [http://www.w3school.com.cn/cssref/pr_background-size.asp](http://www.w3school.com.cn/cssref/pr_background-size.asp)
<br>
### x-border-radius

**1. usage**

	syntax：.x-border-radius(@radius, @direction);

	params：

		* @direction --- all (default value) | top | left | bottom | left

**2. example**

	div {
		.x-border-radius(3px);  // set all corners
	}

	div {
		.x-border-radius(3px, top);  // set topleft and topright corners
	}

	div {
		.x-border-radius(3px, right);  // set topright and bottomright corners
	}

	div {
		.x-border-radius(3px, bottom);  // set bottomleft and bottomright corners
	}

	div {
		.x-border-radius(3px, left);  // set topleft and bottomleft corners
	}

**3. source**

* [http://css-tricks.com/almanac/properties/b/border-radius/](http://css-tricks.com/almanac/properties/b/border-radius/)
<br>
### x-border-triangle

**1. usage**

	syntax：.x-border-triangle(@borderWidth, @borderColor, @direction);

	params：

		* @borderWidth --- etc, 5px

		* @borderColor --- etc, #666

		* @direction --- top | right | bottom | left | topleft | topright | bottomleft | bottomright

**2. example**

	div {
		.x-border-triangle(5px, #666, top);
	}

**3. source**

* [http://css-tricks.com/examples/ShapesOfCSS/](http://css-tricks.com/examples/ShapesOfCSS/)
<br>
### x-box-shadow

**1. usage**

	syntax：.x-box-shadow(@params);

**2. example**

	div {
		.x-box-shadow(5px 5px 3px #000);
	}

**3. source**

* [http://css-tricks.com/snippets/css/css-box-shadow/](http://css-tricks.com/snippets/css/css-box-shadow/)
<br>
### x-box-sizing

**1. usage**

	syntax：.x-box-sizing(@model);

	params：

		* @model --- content-box | border-box | inherit

**2. example**

	div {
		.x-box-sizing(border-box);
	}

**3. source**

* [http://css-tricks.com/box-sizing/](http://css-tricks.com/box-sizing/)
<br>
### x-clearfix

**1. usage**

	syntax：.x-clearfix();

**2. example**

	div {
		.x-clearfix();
	}

**3. source**

* [http://css-tricks.com/snippets/css/clear-fix/](http://css-tricks.com/snippets/css/clear-fix/)
<br>
### x-font-face

**1. usage**

	syntax：.x-font-face(@fontName, @fontUrl); // note：font url without a file extension

**2. example**

	.x-font-face('iconfont', 'http://x.cdn.com/iconfont');	

	div {
		font-family: 'iconfont';
	}

**3. source**

* [http://css-tricks.com/snippets/css/using-font-face/](http://css-tricks.com/snippets/css/using-font-face/)

<br>
### x-grayscale

**1. usage**

	syntax：.x-grayscale();

**2. example**

	img {
		.x-grayscale();  // colour image into a gray image
	}

**3. source**

* [http://css-tricks.com/snippets/css/forcing-grayscale-printing/](http://css-tricks.com/snippets/css/forcing-grayscale-printing/)
<br>
### x-hyphens

**1. usage**

	syntax：.x-hyphens(@mode);

	params：

		* @mode --- none | manual | auto（default value）

**2. example**

	div {
		.x-hyphens();
	}

**3. source**

* [http://css-tricks.com/almanac/properties/h/hyphenate/](http://css-tricks.com/almanac/properties/h/hyphenate/)
<br>
### x-inline-block

**1. usage**

	syntax：.x-inline-block();

**2. example**

	div {
		.x-inline-block();
	}

**3. source**

* [http://css-tricks.com/snippets/css/cross-browser-inline-block/](http://css-tricks.com/snippets/css/cross-browser-inline-block/)
<br>
### x-linear-gradient

**1. usage**

	syntax：.x-linear-gradient(@direction, @startColor, @endColor);

	params：

		* @direction --- to bottom | to right

**2. example**

	div {
		.x-linear-gradient(to bottom, #000, #fff);
	}

**3. source**

* [http://css-tricks.com/css3-gradients/](http://css-tricks.com/css3-gradients/)
<br>
### x-min-height

**1. usage**

	syntax：.x-min-height(@height);

**2. example**

	div {
		.x-min-height(100px);
	}

**3. source**

* [http://css-tricks.com/snippets/css/cross-browser-min-height/#comment-100802](http://css-tricks.com/snippets/css/cross-browser-min-height/#comment-100802)
<br>
### x-opacity

**1. usage**

	syntax：.x-opacity(@opacity);

**2. example**

	div {
		.x-opacity(0.5);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/o/opacity/](http://css-tricks.com/almanac/properties/o/opacity/)
<br>
### x-placeholder

**1. usage**

	syntax：.x-placeholder(@color);

	params：

		* @color --- The placeholder text's color

**2. example**

	input {
		.x-placeholder(red);
	}

**3. source**

* [http://css-tricks.com/almanac/selectors/p/placeholder/](http://css-tricks.com/almanac/selectors/p/placeholder/)

* [https://github.com/twbs/bootstrap/pull/11526](https://github.com/twbs/bootstrap/pull/11526)
<br>
### x-text-overflow

**1. usage**

	syntax：.x-text-overflow(@cutway);

	params：

		* @cutway --- ellipsis | clip (default value)

**2. example**

	div {
		.x-text-overflow(ellipsis);
	}

**3. source**

* [http://css-tricks.com/almanac/properties/t/text-overflow/](http://css-tricks.com/almanac/properties/t/text-overflow/)
<br>
### x-transform

**1. usage**

	syntax：.x-transform(@value);

	params：

		* @value --- transform-functions | none（default value）

**2. example**

	div {
		.x-transform(rotate(20deg));
	}

**3. source**

* [The available transform functions](http://www.w3school.com.cn/cssref/pr_transform.asp)

<br>
### x-transition

**1. usage**

	syntax：.x-transition(@value);

	params：

		* @value --- the composition of the value：

			* transition-property

			* transition-duration

			* transition-timing-function

			* transition-delay

	note：the default value is "all 0 ease 0"

**2. example**

	div {
		height: 100px;
		.x-transition(height 2s ease);
	}
	div:hover {
		height: 300px;
	}

**3. source**

* [http://css-tricks.com/almanac/properties/t/transition/](http://css-tricks.com/almanac/properties/t/transition/)

<br>
### x-user-select

**1. usage**

	syntax：.x-user-select(@mode);

	params：

		* @mode --- none | text（default value）

	note：

		* @mode has other values（such as "all", "element"）, but has compatibility problems.

**2. example**

	div {
		.x-user-select();
	}

**3. source**

* [http://css-tricks.com/almanac/properties/u/user-select/](http://css-tricks.com/almanac/properties/u/user-select/)

* [https://developer.mozilla.org/en-US/docs/Web/CSS/user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)

* [http://www.w3.org/TR/2000/WD-css3-userint-20000216#user-select](http://www.w3.org/TR/2000/WD-css3-userint-20000216#user-select)