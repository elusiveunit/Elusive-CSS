Elusive CSS
===========

### A CSS package for Sublime Text 2

Elusive CSS is a package based on minimaldesign's [TextMate CSS Bundle](https://github.com/minimaldesign/mCSS.tmbundle).

> "*The basic idea behind this CSS bundle is to access everything through tab triggers. You can access every CSS property by typing its initials.*" [More](http://minimaldesign.net/downloads/tools/textmate-css-bundle)

This package uses slightly different tab triggers based on personal preference. A lot of bleeding edge CSS3 is not yet implemented, due to limited use in production.

In addition to the snippets, the language definition file is slightly modified to include...

+ CSS3 properties
+ A new scope for vendor prefixes:
	+ support.type.vendor-property-name.css (i.e. -moz-transition)
	+ support.type.vendor-property-value.css (i.e. -moz-linear-gradient)
	+ entity.other.attribute-name.vendor-pseudo.css (i.e. ::-moz-focus-inner)
+ Some misc. details like semi-common font names (Palatino, Consolas etc.)

...for use in color schemes.

Installation
------------

Just extract to your packages folder (in Sublime Text, `Preferences > Browse Packages...`).

To use as the default, go to `View > Syntax > Open all with current extention as... > Elusive CSS`. For me, this only worked unil the next restart though, so I added the default CSS to ignored_packages in the settings file:

	"ignored_packages":
		[
			"Vintage",
			"CSS"
		],