Elusive CSS
===========

### A CSS package for Sublime Text 2

Elusive CSS is a package based on minimaldesign's [TextMate CSS Bundle](https://github.com/minimaldesign/mCSS.tmbundle).

> "*The basic idea behind this CSS bundle is to access everything through tab triggers. You can access every CSS property by typing its initials.*" [More](http://minimaldesign.net/downloads/tools/textmate-css-bundle)

This package uses slightly different tab triggers based on personal preference. Also included are some snippets for common tasks, for instance (| = cursor):

	1. hofo*tab*
	2. |:hover, |:focus {}
	3. Write selector, *tab*
	4. selector:hover, selector:focus {|}

and if you're using pseudo elements a lot:

	1. selector:bef*tab*
	2. selector:before {
		content: '';
		display: block;
		position: absolute;
		|
	}

A lot of bleeding edge CSS3 is not yet implemented, due to limited use in production.

In addition to the snippets, the language definition file is slightly modified to include...

+ CSS3 properties
+ A new scope for vendor prefixes:
	+ support.type.vendor-property-name.css (i.e. -moz-transition)
	+ support.type.vendor-property-value.css (i.e. -moz-linear-gradient)
	+ entity.other.attribute-name.vendor-pseudo.css (i.e. ::-moz-focus-inner)
+ Some misc. details like semi-common font names (Palatino, Consolas etc.)

...for use in [color schemes](https://github.com/elusiveunit/Peachy-Afternoon).

Installation
------------

Just extract to your packages folder (in Sublime Text, `Preferences > Browse Packages...`).

To use as the default, go to `View > Syntax > Open all with current extention as... > Elusive CSS`. For me, this only worked unil the next restart though, so I added the default CSS to ignored_packages in the settings file:

	"ignored_packages":
		[
			"Vintage",
			"CSS"
		],