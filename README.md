# yqni13 clone (Heavens Edge)
$\texttt{\color{teal}{v1.1.1}}$

## Screenshot navigation options

<img src="./assets/readme_img/presentation_fullsize.jpg" alt="bottom home component">

### Technology 

<div style="display:flex; align-items:center;">
    <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E44D26?style=flat&logo=html5&logoColor=white">
    <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-2965f1?style=flat&logo=css3&logoColor=white">
    <img alt="Javascript" src="https://img.shields.io/badge/-JavaScript-F0DB4F?style=flat&logo=javascript&logoColor=white">
    <img alt="Google Fonts" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FGoogle-Fonts-Logo.png&f=1&nofb=1&ipt=570b1eadbf10850285149faa90b47496e415ec5daf70efb973248c194025a6a5&ipo=images" style="height:auto; width:5%">Google Fonts
    <img alt="Google Fonts" src="./assets/img/leaflet_logo.png" style="height:auto;padding:0 10px; width:10%">
</div>

<br>
Official <a href="https://semver.org/">Semantic Versioning Specifications (SemVer)</a> applied to project versioning.

### <a href="https://yqni13.github.io/WEB_HeavensEdge_clone/index.html">TRY LIVE DEMO</a>

<br>

## MOTIVATION:

To experiment with wallpapers, parallax effects, shaped images, sliders responsive design I decided to clone/redesign a webpage for the greek suite & villa <a href="https://heavensedge.gr">Heavens Edge</a> (original).
<br><br>


## HOW TO:

The webpage uses a svg-file to shape displayed images. To do so, the "mask-" properties are necessary to use which is forbidden to use in a browser when loaded by "file://" instead of "http://" thanks to CORS. Therefore, this project needs to be run by server which I personally do by apache server thanks to <a href="https://www.apachefriends.org/index.html">XAMPP</a>. To do this, copy project folder into xampp>htdocs, start xampp control panel, run apache server and navigate in browser to "localhost/foldername/index.html".
<br><br>


## SPECIALTIES:

### 1. Images shaped by form of svg via mask- properties
<div>
    <img src="./assets/readme_img/img_inside_svg.jpg">
</div>
<br>

### 2. Image slideshow to change automatically or can be navigated by dots with timer reset
<div>
    <img src="./assets/img/carousel.gif">
</div>
<br>

### 3. responsive design $\textsf{\color{red}smartphone}$ | $\textsf{\color{lime}tablet}$ & manual image slideshow
<div align="center">
    <img height="400px" style="margin-right:15px;border-style:solid;border-color:red;border-width:1px" src="./assets/readme_img/responsive_smartphone_compare.jpg">
    <img height="400px"style="border-style:solid;border-color:lime;border-width:1px" src="./assets/readme_img/responsive_tablet_compare.jpg">
</div>
<br>

### 4. Leaflet maps imported to display location of hotel
<div align="center">
    <img height="500px" src="./assets/readme_img/leaflet_location.jpg" alt="leaflet map location component">
</div>
<br>

## Updates

[list of all updates](docs/update_protocol.md)
### $\textsf{{\color{pink}{last}} update\ 1.1.0\ >>\ {\color{pink}1.1.1}}$

- $\textsf{\color{red}Bugfix:}$ In desktop-mode (width > 1024px), the "x" to close the gallery slider will change opacity while being hovered. [Before: The "x" button did not change the opacity while being hovered.]

<br>

### Aimed objectives for next $\textsf{\color{green}minor}$ update:
<dl>
    <dd>- scroll hint animation</dd>
    <dd>- error handling for images failing to load</dd>
    <dd>- form submit logic</dd>
    <dd>- additional full page resolution option in gallery slider</dd>
</dl>

### Aimed objectives for next $\textsf{\color{cyan}major}$ update:
<dl>
    <dd>- additional component [newsletter]</dd>
    <dd>- additional component [reviews]</dd>
    <dd>- parallax effect</dd>
    <dd>- responsive design > 1440px width</dd>
</dl>
