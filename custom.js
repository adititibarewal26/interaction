// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdGktdGliYXJld2FsIiwiYSI6ImNrb3I3cHRqdDBrZnQyeW5sMnQ0azV6bHIifQ.02TDyY6RrupHOdMXTzeHZA';

//Set the initial map view
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/aditi-tibarewal/cl2rkmatz000315oxg4ro6e4j', // style URL
  center: [77.0688997, 20.5272803], // starting position [lng, lat]
  zoom: 4, // starting zoom
  bearing: 0, //controls the left-right rotation of the map in degrees
  pitch: 0 //controls the up-down rotation of the map.
});

//This is all the stuff that runs on the first load of the map.
map.on('load', () => {
  //Hide all presentation layers
  //This demo uses three specific layers. I want to hide them initially so I can reveal them piece meal.
  
  //to reduce clutter, the steps for creating a legend, slider, and menu have all been turned into functions.
  createLegend()

});


//Event handler for the infobox. This checks where the mouse is when it moves. If it moves over an area where the layer it populates the info box.
map.on('mousemove', function(e) {

  //START INFOBOX CODE =======================================================

  //CONTEXT -----------------------------------------------------------------
  //The code below looks a bit overwhelming! Essentially, what we will be doing is telling the computer what information about what features we want to display. The code below produces the name of the author, the name of the story, the name of the location, and the count. It also adds a picture of the book cover.
  //Since, these values are going to change depending on where I scroll I want to get these pieces of information based on variables and not absolute values. I do this by looking at the Info variable I created earlier. Since, this variable contains all the values of the area my mouse is currently over, I can display whatever values I want. I access these values by saying   info[0].properties.author_name. That is, give me the current value of the author_name column. Whatever attributes are part of the layer can be accessed. So really, the only thing you are changing here is the value after the properties. to match with what you want to show.
  //You'll also notice that there are pieces in double quotes like "Name: ". This is constant and Name: will always show on a scroll over. You'll note that this text is connected with the variable info[0].properties.author_name through a plus sign ( + ). If computers want to add text together they need to concatenate.
  //If I write "Programming " + "is " + "fun.", the output will be Programming is fun. Thus if you want to change the labels of the text before the variable this is what you change.

  //For the images I did a simple workaround. I want to display the image of the text for each author, but I do not necessarily have each the title of each work as some are short stories. Instead, saved a picture of each author's work and saved it by their name (i.e. Sikdar, Sunanda.jpg). Thus, whenever an author's name comes up from the properties, it merely has to look for that image name to match.





function createLegend() {
  //LEGEND TEXT
  //the var layers array sets the text that will show up in the legend. you can enter any value here it is just text. Make sure that the legend values correspond to the ones you set in Mapbox.
  var layers = ['Hindu & Sikh', 'Muslim'];

  //LEGEND COLORS
  //Set the corresponding LEGEND colors using HEX the easiest way to do this is by setting your mapcolors in Mapbox using ColorBrewer (colorbrewer2.org). Then copy the exact same hex value to the array below. Remember that each label above should correspond to a color. If the number of items in layers does not match the number of values in colors you will get an error.


  var colors = ['#f17641', '#419b50'];

//run through each element in the legend array and create a new legend item.
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }
  //LEGEND CODE


}
