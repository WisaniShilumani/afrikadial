# afrikadial
A jquery plugin that appends a drop down list with African country codes and sets the value of the input field as per country choice

<h3>Using the plugin</h3>

1. Add the script to your before the </ head> tag of your html
"< script  src="afrikadial.js" type="text/javascript"></ script>"

2. Add the following script before the closing </ body> tag
< script> afrikalist($element); </ script> 
Where $element is any container you wish to append the Afrikadial input to

Notes: <br/>
a) The script will create 2 custom elements. The first is the input field with the flag. The second is a fixed popup that appears upon clicking the input field. <br/>
b) The fixed popup has a z-index of 999.<br/>
c) The html id tags "cc" and "cc-flag" are reserved.<br/>
d) The countries are grouped by regions instead of alphabetically. Should you require alphabetic ordering, rearrange the dialObj in the js.
