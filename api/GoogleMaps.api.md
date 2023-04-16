Doc: https://developers.google.com/maps/documentation/javascript/overview#Dynamic
Dashboard: https://console.cloud.google.com/home/dashboard?project=bionic-flux-358320
APIs & Services: https://console.cloud.google.com/apis/credentials?project=bionic-flux-358320
required_parameters: https://developers.google.com/maps/documentation/javascript/url-params#required_parameters
Restrict Key: https://developers.google.com/maps/api-security-best-practices#restricting-api-keys
API_KEY: AIzaSyDmD0xn_sSkx6QC-WMXgrn9IMTwrt9r5lU
Maps API guidelines: https://console.developers.google.com/cloud-resource-manager?pli=1

1. Maps API (add your map):
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
1. Address <> Lat/Long - google geocode api:
https://developers.google.com/maps/documentation/geocoding/start
Go to Google Developer Console, and enable the Geocoding API before using it
Weather API guidelines
http://openweathermap.org/
REGISTER, GET API KEY, and get started here
Sample url (API key is needed)
NOTE – take notice of the temperature units
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${W_KEY}`

The following example URL has placeholders for all possible parameters:
`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY
&callback=FUNCTION_NAME
&v=VERSION
&libraries="LIBRARIES"
&language="LANGUAGE"
&region="REGION"
&solution_channel="SOLUTION_IDENTIFIER"
&auth_referrer_policy="AUTH_REFERRER_POLICY"`

The URL in the following example script tag loads the Maps JavaScript API:
<script async
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>