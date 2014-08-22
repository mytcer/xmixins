### x-border-radius

**1. usage**

	syntax：@include x-border-radius($radius, $direction);

	param：

		* $direction --- all (default value), top, left, bottom, left

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
<br>
### x-border-triangle

**1. usage**

	syntax：@include x-border-triangle($borderWidth, $borderColor, $direction);

	param：

		* $borderWidth --- etc, 5px

		* $borderColor --- etc, #666

		* $direction --- top, right, bottom, left, topleft, topright, bottomleft, bottomright

**2. example**

	div {
		@include x-border-triangle(5px, #666, top);
	}
<br>
### x-box-shadow

**1. usage**

	syntax：@include x-box-shadow($params);

**2. example**

	div {
		@include x-box-shadow(5px 5px 3px #000);
	}
<br>
### x-box-sizing

**1. usage**

	syntax：@include x-box-sizing($model);

**2. example**

	div {
		@include x-box-sizing(border-box);
	}
<br>
### x-clearfix

**1. usage**

	syntax：@include x-clearfix();

**2. example**

	div {
		@include x-clearfix();
	}
<br>
### x-font-face

**1. usage**

	syntax：@include x-font-face($fontName, $fontUrl); // note：font url without a file extension

**2. example**

	@include x-font-face('iconfont', 'http://x.cdn.com/iconfont');	

	div {
		font-family: 'iconfont';
	}

<br>
### x-inline-block

**1. usage**

	syntax：@include x-inline-block();

**2. example**

	div {
		@include x-inline-block();
	}
<br>
### x-linear-gradient

**1. usage**

	syntax：@include x-linear-gradient($direction, $startColor, $endColor);

	param：

		* $direction --- to bottom || to right

**2. example**

	div {
		@include x-linear-gradient(to bottom, #000, #fff);
	}
<br>
### x-min-height

**1. usage**

	syntax：@include x-min-height($height);

**2. example**

	div {
		@include x-min-height(100px);
	}
<br>
### x-opacity

**1. usage**

	syntax：@include x-opacity($opacity);

**2. example**

	div {
		@include x-opacity(0.5);
	}
<br>
### x-text-overflow

**1. usage**

	syntax：@include x-text-overflow($cutway);

	param：

		* $cutway --- ellipsis || clip (default value)

**2. example**

	div {
		@include x-text-overflow(ellipsis);
	}