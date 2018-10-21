# Readme

### Before running

1. Clone the repo and then cd to the folder
2. Run ```npm install ```
3. To start run ```react-native run-ios ```

### The App
* Once the app starts you should see a list of all the Star Wars characters available from the [graphQL Star Wars API](https://api.graphcms.com/simple/v1/swapi).

* Touching the name will display the selected character detailed information (homeworld, spaceships and films it has appeared on)
* The star icon will set that character as a favorite.
* Use the searchbar to start typing a name and the list will be filtered based on the input

### Notes
* When the character selected does not have a homeworld and/or starship a text written in [yoda speech] (http://www.yodaspeak.co.uk/index.php) is displayed
* If the error ':CFBundleIdentifier does not exist' appears please run ``` rm -rf ios/build/ ``` and run it again
* This app has been tested on the iOS simulator 