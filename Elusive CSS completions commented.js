/*
 * Comments are technically disallowed in JSON, even if Sublime doesn't care,
 * so I keep things neat and organized in this separate JavaScript file
 * instead.
 */
{
	"scope": "source.css, source.sass, source.scss, source.less",
	"completions":
	[
		// For a complete copy->paste to a .sublime-completions file, these
		// regexes clean up the code. Don't include the quotes.
		// 1. Remove all comments: (/\*(?>(?:(?>[^*]+)|\*(?!/))*)\*/|//.+) to ''
		// 2. Remove extra line breaks and indentation: \s+\n to \n
		// 3. Remove alignment spaces: ', +' to ', '

		/*
		 * - In multi-choice snippets like background-attachment, the first choice
		 *   is in most cases the initial/standard value for that property.
		 * - Seemingly duplicate snippets with an added 'l' are single -L-ine
		 *   versions. See for example box-sizing.
		 */

		/*=====================================================================*\
		      =background & color
		\*=====================================================================*/

		{ "trigger": "c",   "contents": "color: ${1:#333};$0" },
		{ "trigger": "bg",  "contents": "background: ${1:#fff};$0" },
		{ "trigger": "bgu", "contents": "background: url('$1');$0" },
		{ "trigger": "bgt", "contents": "background: transparent;$0" },
		{ "trigger": "bgc", "contents": "background-color: ${1:#fff};$0" },
		{ "trigger": "bct", "contents": "background-color: transparent;$0" },
		{ "trigger": "bgp", "contents": "background-position: ${1:X Y};$0" },
		{ "trigger": "bi|bgi",  "contents": "background-image: url('$1');$0" },
		{ "trigger": "bin|bgin", "contents": "background-image: none;$0" },

		/* ---------- Repeat ---------- */
		{ "trigger": "brp", "contents": "background-repeat: ${1:[r]epeat/[re]peat-x/[rep]eat-y/[n]o-repeat}${1/(r$)|(re$)|(rep$)|(n$)|.*/?1:epeat:?2:peat-x:?3:eat-y:?4:o-repeat/i};$0" },
		{ "trigger": "brr", "contents": "background-repeat: repeat;$0" },
		{ "trigger": "brx", "contents": "background-repeat: repeat-x;$0" },
		{ "trigger": "bry", "contents": "background-repeat: repeat-y;$0" },
		{ "trigger": "brn", "contents": "background-repeat: no-repeat;$0" },

		/* ---------- Attachment ---------- */
		{ "trigger": "ba",  "contents": "background-attachment: ${1:[s]croll/[f]ixed}${1/(s$)|(f$)|.*/?1:croll:?2:ixed/i};$0" },
		{ "trigger": "baf", "contents": "background-attachment: fixed;$0" },
		{ "trigger": "bas", "contents": "background-attachment: scroll;$0" },



		/*=====================================================================*\
		      =border & outline
		\*=====================================================================*/

		{ "trigger": "ou", "contents": "outline: ${1:1px solid ${2:red}};$0" },
		{ "trigger": "b",  "contents": "border: ${1:1px solid ${2:#333}};$0" },
		{ "trigger": "bt", "contents": "border-top: ${1:1px solid ${2:#333}};$0" },
		{ "trigger": "bl", "contents": "border-left: ${1:1px solid ${2:#333}};$0" },
		{ "trigger": "br", "contents": "border-right: ${1:1px solid ${2:#333}};$0" },
		{ "trigger": "bb", "contents": "border-bottom: ${1:1px solid ${2:#333}};$0" },

		/* ---------- 0 width ---------- */
		{ "trigger": "o0",  "contents": "outline: 0;$0" },
		{ "trigger": "b0",  "contents": "border: 0;$0" },
		{ "trigger": "bt0", "contents": "border-top: 0;$0" },
		{ "trigger": "bl0", "contents": "border-left: 0;$0" },
		{ "trigger": "br0", "contents": "border-right: 0;$0" },
		{ "trigger": "bb0", "contents": "border-bottom: 0;$0" },

		/* ---------- border-width ---------- */
		{ "trigger": "bw",  "contents": "border-width: ${1:1px};$0" },
		{ "trigger": "btw", "contents": "border-top-width: ${1:1px};$0" },
		{ "trigger": "blw", "contents": "border-left-width: ${1:1px};$0" },
		{ "trigger": "brw", "contents": "border-right-width: ${1:1px};$0" },
		{ "trigger": "bbw", "contents": "border-bottom-width: ${1:1px};$0" },

		/* ---------- border-style ---------- */
		{ "trigger": "bs",  "contents": "border-style: ${1:solid};$0" },
		{ "trigger": "bts", "contents": "border-top-style: ${1:solid};$0" },
		{ "trigger": "bls", "contents": "border-left-style: ${1:solid};$0" },
		{ "trigger": "brs", "contents": "border-right-style: ${1:solid};$0" },
		{ "trigger": "bbs", "contents": "border-bottom-style: ${1:solid};$0" },

		/* ---------- border-color ---------- */
		{ "trigger": "bc",  "contents": "border-color: ${1:#333};$0" },
		{ "trigger": "btc", "contents": "border-top-color: ${1:#333};$0" },
		{ "trigger": "blc", "contents": "border-left-color: ${1:#333};$0" },
		{ "trigger": "brc", "contents": "border-right-color: ${1:#333};$0" },
		{ "trigger": "bbc", "contents": "border-bottom-color: ${1:#333};$0" },



		/*=====================================================================*\
		      =Box model
		\*=====================================================================*/

		/* ---------- width ---------- */
		{ "trigger": "w",   "contents": "width: ${1:100%};$0" },
		{ "trigger": "wa",  "contents": "width: auto;$0" },
		{ "trigger": "miw", "contents": "min-width: ${1:0};$0" },
		{ "trigger": "maw", "contents": "max-width: ${1:none};$0" },

		/* ---------- height ---------- */
		{ "trigger": "h",   "contents": "height: ${1:100px};$0" },
		{ "trigger": "ha",  "contents": "height: auto;$0" },
		{ "trigger": "mih", "contents": "min-height: ${1:0};$0" },
		{ "trigger": "mah", "contents": "max-height: ${1:none};$0" },

		/* ---------- margin ---------- */
		{ "trigger": "m",  "contents": "margin: ${1:1.5em};$0" },
		{ "trigger": "mt", "contents": "margin-top: ${1:1.5em};$0" },
		{ "trigger": "ml", "contents": "margin-left: ${1:1.5em};$0" },
		{ "trigger": "mr", "contents": "margin-right: ${1:1.5em};$0" },
		{ "trigger": "mb", "contents": "margin-bottom: ${1:1.5em};$0" },
		{ "trigger": "mc", "contents": "margin: 0 auto;$0" },

		/* ---------- margin 0 width ---------- */
		{ "trigger": "m0",  "contents": "margin: 0;$0" },
		{ "trigger": "mt0", "contents": "margin-top: 0;$0" },
		{ "trigger": "ml0", "contents": "margin-left: 0;$0" },
		{ "trigger": "mr0", "contents": "margin-right: 0;$0" },
		{ "trigger": "mb0", "contents": "margin-bottom: 0;$0" },

		/* ---------- padding ---------- */
		{ "trigger": "p",  "contents": "padding: ${1:1.5em};$0" },
		{ "trigger": "pt", "contents": "padding-top: ${1:1.5em};$0" },
		{ "trigger": "pl", "contents": "padding-left: ${1:1.5em};$0" },
		{ "trigger": "pr", "contents": "padding-right: ${1:1.5em};$0" },
		{ "trigger": "pb", "contents": "padding-bottom: ${1:1.5em};$0" },

		/* ---------- padding 0 width ---------- */
		{ "trigger": "p0",  "contents": "padding: 0;$0" },
		{ "trigger": "pt0", "contents": "padding-top: 0;$0" },
		{ "trigger": "pl0", "contents": "padding-left: 0;$0" },
		{ "trigger": "pr0", "contents": "padding-right: 0;$0" },
		{ "trigger": "pb0", "contents": "padding-bottom: 0;$0" },



		/*=====================================================================*\
		      =display, visibility & overflow
		\*=====================================================================*/

		{ "trigger": "d",   "contents": "display: ${1:[i]nline/[in]line-block/[b]lock/[n]one/[t]able-cell/[ta]ble}${1/(i$)|(in$)|(b$)|(n$)|(t$)|(ta$)|(l$)|.*/?1:nline:?2:line-block:?3:lock:?4:one:?5:able-cell:?6:ble?7:ist-item/i};$0" },
		{ "trigger": "db",  "contents": "display: block;$0" },
		{ "trigger": "di",  "contents": "display: inline;$0" },
		{ "trigger": "dn",  "contents": "display: none;$0" },
		{ "trigger": "dib", "contents": "display: inline-block;$0" },

		/* ---------- Table types ---------- */
		{ "trigger": "dt",  "contents": "display: table;$0" },
		{ "trigger": "dtr", "contents": "display: table-row;$0" },
		{ "trigger": "dtc", "contents": "display: table-cell;$0" },
		{ "trigger": "dtt", "contents": "display: ${1:table/inline-table/table-row-group/table-header-group/table-footer-group/table-row/table-column-group/table-column/table-cell/table-caption};$0" },

		/* ---------- visibility ---------- */
		{ "trigger": "v",  "contents": "visibility: ${1:[v]isible/[h]idden/[c]ollapse}${1/(v$)|(vi$)|(h$)|(hi$)|(c$)|(co$)|.*/?1:isible:?2:sible:?3:idden:?4:dden:?5:ollapse:?6:llapse/i};$0" },
		{ "trigger": "vh", "contents": "visibility: hidden;$0" },
		{ "trigger": "vv", "contents": "visibility: visible;$0" },
		{ "trigger": "vc", "contents": "visibility: collapse;$0" },
		
		/* ---------- overflow ---------- */
		{ "trigger": "o",  "contents": "overflow: ${1:[v]isible/[a]uto/[h]idden/[s]croll}${1/(v$)|(a$)|(h$)|(s$)|.*/?1:isible:?2:uto:?3:idden:?4:croll/i};$0" },
		{ "trigger": "oa", "contents": "overflow: auto;$0" },
		{ "trigger": "oh", "contents": "overflow: hidden;$0" },
		{ "trigger": "os", "contents": "overflow: scroll;$0" },
		{ "trigger": "ov", "contents": "overflow: visible;$0" },



		/*=====================================================================*\
		      =float
		\*=====================================================================*/

		{ "trigger": "float",  "contents": "float: ${1:[n]one/[l]eft/[r]ight}${1/(n$)|(l$)|(r$)|.*/?1:one:?2:eft:?3:ight/i};$0" },
		{ "trigger": "fr", "contents": "float: right;$0" },
		{ "trigger": "fl", "contents": "float: left;$0" },
		{ "trigger": "fn", "contents": "float: none;$0" },

		/* ---------- clear ---------- */
		{ "trigger": "clear", "contents": "clear: ${1:[n]one/[l]eft/[r]ight/[b]oth}${1/(n$)|(l$)|(r$)|(b$)|.*/?1:one:?2:eft:?3:ight:?4:oth/i};$0" },
		{ "trigger": "cr", "contents": "clear: right;$0" },
		{ "trigger": "cl", "contents": "clear: left;$0" },
		{ "trigger": "cb", "contents": "clear: both;$0" },
		{ "trigger": "cn", "contents": "clear: none;$0" },



		/*=====================================================================*\
		      =position
		\*=====================================================================*/

		{ "trigger": "po",  "contents": "position: ${1:[s]tatic/[r]elative/[a]bsolute/[f]ixed}${1/(s$)|(st$)|(r$)|(re$)|(a$)|(ab$)|(f$)|(fi$)|.*/?1:tatic:?2:atic:?3:elative:?4:lative:?5:bsolute:?6:solute:?7:ixed:?8:xed/i};$0" },
		{ "trigger": "por", "contents": "position: relative;$0" },
		{ "trigger": "poa", "contents": "position: absolute;$0" },
		{ "trigger": "pos", "contents": "position: static;$0" },
		{ "trigger": "pof", "contents": "position: fixed;$0" },

		/* ---------- Location ---------- */
		{ "trigger": "t",  "contents": "top: ${1:X/[a]uto}${1/(a$)|(au$)|.*/?1:uto:?2:to/i};$0" },
		{ "trigger": "l",  "contents": "left: ${1:X/[a]uto}${1/(a$)|(au$)|.*/?1:uto:?2:to/i};$0" },
		{ "trigger": "r",  "contents": "right: ${1:X/[a]uto}${1/(a$)|(au$)|.*/?1:uto:?2:to/i};$0" },
		{ "trigger": "bo", "contents": "bottom: ${1:X/[a]uto}${1/(a$)|(au$)|.*/?1:uto:?2:to/i};$0" },
		{ "trigger": "z",  "contents": "z-index: ${1:99};$0" },
		{ "trigger": "zo", "contents": "zoom: 1;$0" },



		/*=====================================================================*\
		      =font
		\*=====================================================================*/

		{ "trigger": "fo",  "contents": "font: ${1:italic small-caps bold 1em/1.5 sans-serif};$0" },
		{ "trigger": "ff",  "contents": "font-family: ${1:[A]rial/[V]erdana/[C]ambria/[Co]nsolas}${1/(a$)|(v$)|(c$)|(co$)|.*/?1:rial, Helvetica, sans-serif:?2:erdana, Arial, Helvetica, sans-serif:?3:ambria, Georgia, serif:?4:nsolas, monospace/i};$0" },
		{ "trigger": "ffa", "contents": "font-family:$1 ${2:Arial, Helvetica, sans-serif};$0" },
		{ "trigger": "ffc", "contents": "font-family:$1 ${2:Cambria, Georgia, serif};$0" },
		{ "trigger": "fs",  "contents": "font-size: ${1:0.875em};$0" },
		{ "trigger": "lh",  "contents": "line-height: ${1:1.5};$0" },
		{ "trigger": "wsp", "contents": "word-spacing: ${1:1px};$0" },
		{ "trigger": "lsp", "contents": "letter-spacing: ${1:1px};$0" },

		/* ---------- font-style ---------- */
		{ "trigger": "fst", "contents": "font-style: ${1:[n]ormal/[i]talic/[o]blique}${1/(n$)|(no$)|(i$)|(it$)|(o$)|(ob$)|.*/?1:ormal:?2:rmal:?3:talic:?4:alic:?5:blique:?6:lique/i};$0" },
		{ "trigger": "fsi", "contents": "font-style: italic;$0" },
		{ "trigger": "fso", "contents": "font-style: oblique;$0" },
		{ "trigger": "fsn", "contents": "font-style: normal;$0" },

		/* ---------- font-variant ---------- */
		{ "trigger": "fv",  "contents": "font-variant: ${1:[s]mall-caps/[n]ormal}${1/(s$)|(sm$)|(n$)|(no$)|.*/?1:mall-caps:?2:all-caps:?3:ormal:?4:rmal/i};$0" },
		{ "trigger": "fvs", "contents": "font-variant: small-caps;$0" },
		{ "trigger": "fvn", "contents": "font-variant: normal;$0" },

		/* ---------- font-weight ---------- */
		{ "trigger": "fw",  "contents": "font-weight: ${1:[n]ormal/[b]old}${1/(n$)|(no$)|(b$)|(bo$)|.*/?1:ormal:?2:rmal:?3:old:?4:ld/i};$0" },
		{ "trigger": "fwb", "contents": "font-weight: bold;$0" },
		{ "trigger": "fwn", "contents": "font-weight: normal;$0" },



		/*=====================================================================*\
		      =Text
		\*=====================================================================*/

		{ "trigger": "ti",  "contents": "text-indent: ${1:-3500px};$0" },

		/* ---------- text-decoration ---------- */
		{ "trigger": "td",  "contents": "text-decoration: ${1:[n]one/[u]nderline/[o]verline}${1/(n$)|(u$)|(o$)|.*/?1:one:?2:nderline:?3:verline/i};$0" },
		{ "trigger": "tdn", "contents": "text-decoration: none;$0" },
		{ "trigger": "tdo", "contents": "text-decoration: overline;$0" },
		{ "trigger": "tdu", "contents": "text-decoration: underline;$0" },
		{ "trigger": "tdl", "contents": "text-decoration: line-through;$0" },

		/* ---------- text-align ---------- */
		{ "trigger": "ta",  "contents": "text-align: ${1:[l]eft/[c]enter/[r]ight/[j]ustify}${1/(l$)|(c$)|(r$)|(j$)|.*/?1:eft:?2:enter:?3:ight:?4:ustify/i};$0" },
		{ "trigger": "tal", "contents": "text-align: left;$0" },
		{ "trigger": "tar", "contents": "text-align: right;$0" },
		{ "trigger": "tac", "contents": "text-align: center;$0" },
		{ "trigger": "taj", "contents": "text-align: justify;$0" },

		/* ---------- text-transform ---------- */
		{ "trigger": "tt",  "contents": "text-transform: ${1:[n]one/[u]ppercase/[l]owercase/[c]apitalize}${1/(n$)|(u$)|(l$)|(c$)|.*/?1:one:?2:ppercase:?3:owercase:?4:aptalize/i};$0" },
		{ "trigger": "ttn", "contents": "text-transform: none;$0" },
		{ "trigger": "ttu", "contents": "text-transform: uppercase;$0" },
		{ "trigger": "ttl", "contents": "text-transform: lowercase;$0" },
		{ "trigger": "ttc", "contents": "text-transform: captalize;$0" },

		/* ---------- Misc. ---------- */
		{ "trigger": "ww",  "contents": "word-wrap: ${1:[n]ormal/[b]reak-word}${1/(n$)|(no$)|(b$)|(br$)|.*/?1:ormal:?2:rmal:?3:reak-word:?4:eak-word/i};$0" },
		{ "trigger": "wwn", "contents": "word-wrap: normal;$0" },
		{ "trigger": "wwb", "contents": "word-wrap: break-word;$0" },

		{ "trigger": "ws",  "contents": "white-space: ${1:normal/nowrap/pre/pre-line/pre-wrap};$0" },

		{ "trigger": "dir", "contents": "direction: ${1:[l]tr|[r]tl}${1/(l$)|(r$)|.*/?1:tr:?2:tl/i};$0" },



		/*=====================================================================*\
		      =list-style
		\*=====================================================================*/

		{ "trigger": "lsn",  "contents": "list-style: none;$0" },
		{ "trigger": "lstn", "contents": "list-style-type: none;$0" },
		{ "trigger": "lsi",  "contents": "list-style-image: url('$1');$0" },
		{ "trigger": "lspo",  "contents": "list-style-position: ${1:[o]utside/[i]nside}${1/(o$)|(i$)|.*/?1:utside:?2:nside/i};$0" },

		{ "trigger": "ls",  "contents": "list-style: ${1:[n]one/[d]isc/[c]ircle/[s]quare/[de]cimal}${1/(n$)|(d$)|(c$)|(s$)|(de$)|.*/?1:one:?2:isc:?3:ircle:?4:quare:?5:cimal/i} ${2:[i]nside/[o]utside}${2/(i$)|(o$)|.*/?1:nside:?2:utside/i} ${3:url('$4')};$0" },
		{ "trigger": "lst", "contents": "list-style-type: ${1:none/disc/circle/square/decimal/lower-alpha/upper-alpha/lower-roman/upper-roman};$0" },



		/*=====================================================================*\
		      =Tables
		\*=====================================================================*/

		{ "trigger": "bspa", "contents": "border-spacing: ${1:1px};$0" },

		/* ---------- border-collapse ---------- */
		{ "trigger": "bco", "contents": "border-collapse: ${1:[s]eparate/[c]ollapse}${1/(s$)|(se$)|(c$)|(co$)|.*/?1:eparate:?2:parate:?3:ollapse:?4:llapse/i};$0" },
		{ "trigger": "bcc", "contents": "border-collapse: collapse;$0" },
		{ "trigger": "bcs", "contents": "border-collapse: separate;$0" },

		/* ---------- caption-side ---------- */
		{ "trigger": "cs",  "contents": "caption-side: ${1:[t]op/[b]ottom}${1/(t$)|(to$)|(b$)|(bo$)|.*/?1:op:?2:p:?3:ottom:?4:ttom/i};$0" },
		{ "trigger": "cst", "contents": "caption-side: top;$0" },
		{ "trigger": "csb", "contents": "caption-side: bottom;$0" },

		/* ---------- Empty cells ---------- */
		{ "trigger": "es",  "contents": "empty-cells: ${1:[s]how/[h]ide}${1/(s$)|(sh$)|(h$)|(hi$)|.*/?1:how:?2:ow:?3:ide:?4:de/i};$0" },
		{ "trigger": "esh", "contents": "empty-cells: hide;$0" },
		{ "trigger": "ess", "contents": "empty-cells: show;$0" },



		/*=====================================================================*\
		      =Misc.
		\*=====================================================================*/

		{ "trigger": "co",  "contents": "content: '$1';$0" },
		{ "trigger": "cli", "contents": "clip: ${1:auto/rect(0 0 0 0)};$0" },

		/* ---------- vertical-align ---------- */
		{ "trigger": "va",   "contents": "vertical-align: ${1:[b]seline/[t]op/[bo]ttom/[m]iddle/[te]xt-bottom/[tex]t-top/[s]ub/[su]per}${1/(b$)|(t$)|(bo$)|(m$)|(te$)|(tex$)|(s$)|(su$)|.*/?1:seline:?2:op:?3:ttom:?4:iddle:?5:xt-bottom:?6:t-top:?7:ub:?8:per/i};$0" },
		{ "trigger": "vat",  "contents": "vertical-align: top;$0" },
		{ "trigger": "vas",  "contents": "vertical-align: sub;$0" },
		{ "trigger": "vasu", "contents": "vertical-align: super;$0" },
		{ "trigger": "vabo", "contents": "vertical-align: bottom;$0" },
		{ "trigger": "vam",  "contents": "vertical-align: middle;$0" },
		{ "trigger": "vab",  "contents": "vertical-align: baseline;$0" },
		{ "trigger": "vatt", "contents": "vertical-align: text-top;$0" },
		{ "trigger": "vatb", "contents": "vertical-align: text-bottom;$0" },

		/* ---------- cursor ---------- */
		{ "trigger": "cu",  "contents": "cursor: ${1:[d]efault/[a]uto/[p]ointer/[c]rosshair/[m]ove/[n]ot-allowed/[w]ait/[h]elp/[t]ext/*-resize}${1/(d$)|(a$)|(p$)|(c$)|(m$)|(n$)|(w$)|(h$)|(t$)|.*/?1:efault:?2:uto:?3:ointer:?4:rosshair:?5:ove:?6:ot-allowed:?7:ait:?8:elp:?9:ext/i};$0" },
		{ "trigger": "cua", "contents": "cursor: auto;$0" },
		{ "trigger": "cuh", "contents": "cursor: help;$0" },
		{ "trigger": "cuw", "contents": "cursor: wait;$0" },
		{ "trigger": "cum", "contents": "cursor: move;$0" },
		{ "trigger": "cut", "contents": "cursor: text;$0" },
		{ "trigger": "cup", "contents": "cursor: pointer;$0" },
		{ "trigger": "cud", "contents": "cursor: default;$0" },
		{ "trigger": "cuc", "contents": "cursor: crosshair;$0" },
		{ "trigger": "cuu", "contents": "cursor: url('$1');$0" },
		{ "trigger": "cun", "contents": "cursor: not-allowed;$0" },



		/*=====================================================================*\
		      =Non-property
		\*=====================================================================*/

		/* ---------- Words ---------- */
		{ "trigger": "i",    "contents": "!important$0" },
		{ "trigger": "tra",  "contents": "transparent$0" },
		{ "trigger": "rx",   "contents": "repeat-x$0" },
		{ "trigger": "ry",   "contents": "repeat-y$0" },
		{ "trigger": "nr",   "contents": "no-repeat$0" },
		{ "trigger": "ho",   "contents": "hover$0" },
		{ "trigger": "foc",  "contents": "focus$0" },
		{ "trigger": "vis",  "contents": "visited$0" },
		{ "trigger": "be",   "contents": "before$0" },
		{ "trigger": "af",   "contents": "after$0" },
		
		/* ---------- Pseudo ---------- */
		{ "trigger": "lc",   "contents": "last-child$0" },
		{ "trigger": "fc",   "contents": "first-child$0" },
		{ "trigger": "nth",  "contents": "nth-child(${1:3n+1})$0" },

		{ "trigger": "livi", "contents": "${1:el}:link, ${1:el}:visited {$0}" },
		{ "trigger": "hofo", "contents": "${1:el}:hover, ${1:el}:focus {$0}" },

		{ "trigger": "bef",  "contents": "before {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\t$0\n}" },
		{ "trigger": "aft",  "contents": "after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\t$0\n}" },

		/* ---------- @ rules ---------- */
		{ "trigger": "imp",   "contents": "@import url('$1');$0" },
		{ "trigger": "memin", "contents": "@media screen and (min-width: ${1:320px}) {$0}" },
		{ "trigger": "memax", "contents": "@media screen and (max-width: ${1:1200px}) {$0}" },

		/* ---------- Input selectors ---------- */
		{ "trigger": "ibut", "contents": "input[type=\"button\"]$0" },
		{ "trigger": "iema", "contents": "input[type=\"email\"]$0" },
		{ "trigger": "ipas", "contents": "input[type=\"password\"]$0" },
		{ "trigger": "ires", "contents": "input[type=\"reset\"]$0" },
		{ "trigger": "isea", "contents": "input[type=\"search\"]$0" },
		{ "trigger": "isub", "contents": "input[type=\"submit\"]$0" },
		{ "trigger": "itel", "contents": "input[type=\"tel\"]$0" },
		{ "trigger": "itex", "contents": "input[type=\"text\"]$0" },
		{ "trigger": "iurl", "contents": "input[type=\"url\"]$0" },

		{ "trigger": "ibuttons", "contents": "button,\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"]$0" },
		{ "trigger": "ibuttonsl", "contents": "button, input[type=\"button\"], input[type=\"submit\"], input[type=\"reset\"]$0" },
		{ "trigger": "itexts", "contents": "input[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"search\"],\ninput[type=\"password\"]$0" },
		{ "trigger": "itextsl", "contents": "input[type=\"text\"], input[type=\"email\"], input[type=\"tel\"], input[type=\"url\"], input[type=\"search\"], input[type=\"password\"]$0" },

		/* ---------- Attribute selectors ---------- */
		/* Helper */
		{ "trigger": "att",  "contents": "${1:[attr=\"equals\"]/[attr*=\"contains\"]/[attr^=\"begins with\"]/[attr(dollar)=\"ends with\"]/[attr~=\"value is space separated\"]/[attr|=\"value-is-dash-separated\"]}$0" },

		{ "trigger": "atte",  "contents": "${1:attr}=\"${2:equals}\"$0" },
		{ "trigger": "attc",  "contents": "${1:attr}*=\"${2:contains}\"$0" },
		{ "trigger": "atten", "contents": "${1:attr}^=\"${2:ends with}\"$0" },
		{ "trigger": "attb",  "contents": "${1:attr}${2:(dollar)}=\"${3:begins with}\"$0" },
		{ "trigger": "attd",  "contents": "${1:attr}~=\"${2:value-is-dash-separated}\"$0" },
		{ "trigger": "atts",  "contents": "${1:attr}|=\"${2:value is space separated}\"$0" },



		/*=====================================================================*\
		      =CSS3
		\*=====================================================================*/

		/*
		 * - Only transform and transform-origin require -ms prefix
		 * - Some of the -webkit prefixes are kept due to Android, not Chrome or
		 *   Safari
		 * - For Firefox 3.6 support, some properties require -moz prefix:
		 *     box-shadow
		 *     border-radius
		 *     background-size
		 */
		
		{ "trigger": "op",   "contents": "opacity: ${1:0.5};$0" },
		{ "trigger": "bra",  "contents": "border-radius: ${1:5px};$0" },
		{ "trigger": "rgb",  "contents": "rgb(${1:70,130,220})$0" },
		{ "trigger": "rgba", "contents": "rgba(${1:70,130,220,0.8})$0" },
		{ "trigger": "hsl",  "contents": "hsl(${1:350,40%,90%})$0" },
		{ "trigger": "hsla", "contents": "hsla(${1:350,40%,90%,0.8})$0" },

		/* ---------- background ---------- */
		{ "trigger": "bgcl", "contents": "background-clip: ${1:[b]order-box/[p]adding-box/[c]ontent-box}${1/(b$)|(p$)|(c$)|.*/?1:order-box:?2:adding-box:?3:ontent-box/i};$0" },

		{ "trigger": "bgo",  "contents": "background-origin: ${1:[p]adding-box/[c]ontent-box/[b]order-box}${1/(p$)|(c$)|(b$)|.*/?1:adding-box:?2:ontent-box:?3:order-box/i};$0" },
		
		/* Keep in mind: https://developer.mozilla.org/en-US/docs/CSS/background-size#Notes */
		{ "trigger": "bgs",  "contents": "background-size: ${1:[c]over/[co]ntain/[a]uto/width (auto)/width height}${1/(c$)|(co$)|(a$)|.*/?1:over:?2:ntain:?3:uto/i};$0" },

		/*---------- Selection ----------*/
		{ "trigger": "sel", "contents": "::-moz-selection {background: ${1:#222}; color: ${2:#fff}; text-shadow: none;}\n     ::selection {background: ${1:#222}; color: ${2:#fff}; text-shadow: none;}$0" },

		/* ---------- box-shadow ---------- */
		{ "trigger": "bsh", "contents": "-webkit-box-shadow: ${1:${2:inset X Y blur spread} rgba(0,0,0,0.5)};\n        box-shadow: ${1:${2:inset X Y blur spread} rgba(0,0,0,0.5)};$0" },
		{ "trigger": "bshl", "contents": "-webkit-box-shadow: ${1:${2:inset X Y blur spread} rgba(0,0,0,0.5)}; box-shadow: ${1:${2:inset X Y blur spread} rgba(0,0,0,0.5)};$0" },

		/* ---------- box-sizing ---------- */
		{ "trigger": "bsz", "contents": "-webkit-box-sizing: ${1:[c]ontent-box/[p]adding-box/[b]order-box}${1/(c$)|(p$)|(b$)|.*/?1:ontent-box:?2:adding-box:?3:order-box/i};\n   -moz-box-sizing: ${1:[c]ontent-box/[p]adding-box/[b]order-box}${1/(c$)|(p$)|(b$)|.*/?1:ontent-box:?2:adding-box:?3:order-box/i};\n        box-sizing: ${1:[c]ontent-box/[p]adding-box/[b]order-box}${1/(c$)|(p$)|(b$)|.*/?1:ontent-box:?2:adding-box:?3:order-box/i};$0" },

		/* content-box */
		{ "trigger": "bsc", "contents": "-webkit-box-sizing: content-box;\n   -moz-box-sizing: content-box;\n        box-sizing: content-box;$0" },
		{ "trigger": "bscl", "contents": "-webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box;$0" },

		/* padding-box */
		{ "trigger": "bsp", "contents": "-webkit-box-sizing: padding-box;\n   -moz-box-sizing: padding-box;\n        box-sizing: padding-box;$0" },
		{ "trigger": "bspl", "contents": "-webkit-box-sizing: padding-box; -moz-box-sizing: padding-box; box-sizing: padding-box;$0" },

		/* border-box */
		{ "trigger": "bsb", "contents": "-webkit-box-sizing: border-box;\n   -moz-box-sizing: border-box;\n        box-sizing: border-box;$0" },
		{ "trigger": "bsbl", "contents": "-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;$0" },

		/* ---------- Text ---------- */
		{ "trigger": "ts",  "contents": "text-shadow: ${1:X Y blur} ${2:rgba(0,0,0,0.${3:8})};$0" },
		{ "trigger": "tsn", "contents": "text-shadow: none;$0" },

		{ "trigger": "to",  "contents": "text-overflow: ${1:[c]lip/[e]llipsis/'string'}${1/(c$)|(e$)|.*/?1:lip:?2:llipsis/i};$0" },

		/* ---------- transition ---------- */
		{ "trigger": "trs", "contents": "-webkit-transition: ${1:all} $2s ${3:ease/linear/ease-in/ease-out/ease-in-out};\n   -moz-transition: ${1:all} $2s ${3:ease/linear/ease-in/ease-out/ease-in-out};\n     -o-transition: ${1:all} $2s ${3:ease/linear/ease-in/ease-out/ease-in-out};\n        transition: ${1:all} $2s ${3:ease/linear/ease-in/ease-out/ease-in-out};" },

		/* ---------- transform ---------- */
		{ "trigger": "trf", "contents": "-webkit-transform: ${1:rotate(deg)/scale(1.2, 1.3)/scaleX(1.2)/scaleY(1.2)/skew(deg)/skewX(deg)/skewY(deg)/translate(5px)/translateX(5px)/translateY(5px)};\n   -moz-transform: ${1:rotate(deg)/scale(1.2, 1.3)/scaleX(1.2)/scaleY(1.2)/skew(deg)/skewX(deg)/skewY(deg)/translate(5px)/translateX(5px)/translateY(5px)};\n    -ms-transform: ${1:rotate(deg)/scale(1.2, 1.3)/scaleX(1.2)/scaleY(1.2)/skew(deg)/skewX(deg)/skewY(deg)/translate(5px)/translateX(5px)/translateY(5px)};\n     -o-transform: ${1:rotate(deg)/scale(1.2, 1.3)/scaleX(1.2)/scaleY(1.2)/skew(deg)/skewX(deg)/skewY(deg)/translate(5px)/translateX(5px)/translateY(5px)};\n        transform: ${1:rotate(deg)/scale(1.2, 1.3)/scaleX(1.2)/scaleY(1.2)/skew(deg)/skewX(deg)/skewY(deg)/translate(5px)/translateX(5px)/translateY(5px)};$0" },

		{ "trigger": "trfo", "contents": "-webkit-transform-origin: ${1:X Y};\n   -moz-transform-origin: ${1:X Y};\n    -ms-transform-origin: ${1:X Y};\n     -o-transform-origin: ${1:X Y};\n        transform-origin: ${1:X Y};$0" },

		/* ---------- columns ---------- */
		{ "trigger": "cols", "contents": "-webkit-column-count: ${1:2};\n   -moz-column-count: ${1:2};\n        column-count: ${1:2};\n-webkit-column-gap: ${2:1em};\n   -moz-column-gap: ${2:1em};\n        column-gap: ${2:1em};$0" },

		/* ---------- linear-gradient ---------- */
		{ "trigger": "gral", "contents": "background: ${1:#222};\nbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%, ${1:#222}), color-stop(100%, ${2:#444}));\nbackground: -webkit-linear-gradient(top, ${1:#222} 0%, ${2:#444} 100%);\nbackground:    -moz-linear-gradient(top, ${1:#222} 0%, ${2:#444} 100%);\nbackground:      -o-linear-gradient(top, ${1:#222} 0%, ${2:#444} 100%);\nbackground:   linear-gradient(to bottom, ${1:#222} 0%, ${2:#444} 100%);$00" }
	]
}
