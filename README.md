# travel-gallery
first parallax effect webpage


## HOW TO:

To enable all window-shaped images of components, you need to run project over http:// instead of file://. To display an image, cut by the form of an svg, the "mask-" properties are used which are protected by CORS. Therefore, displaying in the browser without running a server is not possible (throws error in console and element is invisible in browser). Run apache server (I do this by XAMPP), move project folder to reachable folder (for XAMPP it is "C:\xampp\htdocs"), start server and run "localhost/{foldername}/{filename}.html" for the url.


## SPECIALTIES:

- image carousel (control by dots; clearTimeout to reset settimeout)
- image slideshow [automatic] (sliding controlled by settimeout)
- image slideshow [manual] (customized slider shows up-scaled image from gallery and updates picture via previous/next buttons)
- parallax effect with fixed full screen wallpapers
- images shaped by form of svg
- leaflet maps imported to display location of hotel when component is navigated to