# Using Google Maps API
Google Maps API allows you to embed maps into your website, and customize them according to your needs.
You can also add markers, overlays, and other features to your maps.
In this tutorial, we will walk you through the steps to create a Google Maps API key and embed a map on your website.


[Doc](https://developers.google.com/maps/documentation/javascript/overview#Dynamic)| 
[Dashboard](https://console.cloud.google.com/home/dashboard?project=bionic-flux-358320)| 
[APIs & Services](https://console.cloud.google.com/apis/credentials?project=bionic-flux-358320)| 
[required_parameters](https://developers.google.com/maps/documentation/javascript/url-params#required_parameters)| 
[Restrict Key](https://developers.google.com/maps/api-security-best-practices#restricting-api-keys)| 
[Maps API guidelines](https://console.developers.google.com/cloud-resource-manager?pli=1)

## Prerequisites
- A Google account
- Basic understanding of HTML and JavaScript

## Step 1: Create a Google Maps API key

01. Go to the [Google Cloud Console](https://console.cloud.google.com/).
02. Create a new project by clicking on the Select a project dropdown menu and clicking New Project. Enter a name for your project and click Create.
03. Once your project is created, click on the Enable APIs and Services button.
04. Search for Maps JavaScript API and click on it.
05. Click on the Enable button.
06. Click on the Create credentials button.
07. Select API key from the dropdown menu.
08. Copy the API key that is generated.


## Step 2: Embed the map on your website
```html
<!-- Add this code to your HTML file -->
<!DOCTYPE html>
<html>
  <head>
    <title>Google Maps API Example</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script>
      function initMap() {
        var myLatLng = {lat: 37.7749, lng: -122.4194};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'San Francisco, CA'
        });
      }
    </script>
  </head>
  <body onload="initMap()">
    <div id="map" style="height: 500px"></div>
  </body>
</html>

```
