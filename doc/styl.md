### x-animation

**1. usage**

	syntax：x-animation($value);

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
		x-animation(test 3s ease);
	}
<br>
### x-border-radius

**1. usage**

	syntax：x-border-radius($radius, $direction);

	params：

		* $direction --- all (default value) | top | left | bottom | left

**2. example**

	div {
		x-border-radius(3px);  // set all corners
	}

	div {
		x-border-radius(3px, top);  // set topleft and topright corners
	}

	div {
		x-border-radius(3px, right);  // set topright and bottomright corners
	}

	div {
		x-border-radius(3px, bottom);  // set bottomleft and bottomright corners
	}

	div {
		x-border-radius(3px, left);  // set topleft and bottomleft corners
	}
<br>
### x-border-triangle

**1. usage**

	syntax：x-border-triangle($borderWidth, $borderColor, $direction);

	params：

		* $borderWidth --- etc, 5px

		* $borderColor --- etc, #666

		* $direction --- top | right | bottom | left | topleft | topright | bottomleft | bottomright

**2. example**

	div {
		x-border-triangle(5px, #666, top);
	}
<br>
### x-box-shadow

**1. usage**

	syntax：x-box-shadow($params);

**2. example**

	div {
		x-box-shadow(5px 5px 3px #000);
	}
<br>
### x-box-sizing

**1. usage**

	syntax：x-box-sizing($model);

	params：

		* $model --- content-box | border-box | inherit

**2. example**

	div {
		x-box-sizing(border-box);
	}
<br>
### x-clearfix

**1. usage**

	syntax：x-clearfix();

**2. example**

	div {
		x-clearfix();
	}
<br>
### x-font-face

**1. usage**

	syntax：x-font-face($fontName, $fontUrl); // note：font url without a file extension

**2. example**

	x-font-face('iconfont', 'http://x.cdn.com/iconfont');	

	div {
		font-family: 'iconfont';
	}

<br>
### x-grayscale

**1. usage**

	syntax：x-grayscale();

**2. example**

	img {
		x-grayscale();  // colour image into a gray image
	}
<br>
### x-inline-block

**1. usage**

	syntax：x-inline-block();

**2. example**

	div {
		x-inline-block();
	}
<br>
### x-keyframes

**1. usage**

	syntax：x-keyframes($param);

	params：

**2. example**

	div {
		x-keyframes();
	}
<br>
### x-linear-gradient

**1. usage**

	syntax：x-linear-gradient($direction, $startColor, $endColor);

	params：

		* $direction --- to bottom | to right

**2. example**

	div {
		x-linear-gradient(to bottom, #000, #fff);
	}
<br>
### x-min-height

**1. usage**

	syntax：x-min-height($height);

**2. example**

	div {
		x-min-height(100px);
	}
<br>
### x-opacity

**1. usage**

	syntax：x-opacity($opacity);

**2. example**

	div {
		x-opacity(0.5);
	}
<br>
### x-text-overflow

**1. usage**

	syntax：x-text-overflow($cutway);

	params：

		* $cutway --- ellipsis | clip (default value)

**2. example**

	div {
		x-text-overflow(ellipsis);
	}
<br>
### x-transform

**1. usage**

	syntax：x-transform($value);

	params：

		* $value --- transform-functions | none（default value）

**2. example**

	div {
		x-transform(rotate(20deg));
	}

**3. source**

* [The available transform functions](http://www.w3school.com.cn/cssref/pr_transform.asp)

<br>
### x-transition

**1. usage**

	syntax：x-transition($value);

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
		x-transition(height 2s ease);
	}
	div:hover {
		height: 300px;
	}
