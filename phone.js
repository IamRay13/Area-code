// Map of area codes to states  
let areaCodes = {      
"201": "New Jersey",      
"202": "District of Columbia",   
"651": "St. Paul, Minnesota - STLukes",  
"320": "Hutchinson, Minnesota - STLukes",  
"763": "Coon Rapids, Minnesota - STLukes",  
"507": "Owatonna, Minnesota - STLukes",  
"612": "Minneapolis, Minnesota - STLukes",   
"844": "Mountain Grove, Missouri - Aerocare",  
"660": "Kirksville, Missouri - Aerocare",  
"816": "Kansas City, Missouri - Aerocare",  
"573": "Columbia, Missouri - Aerocare",  
"417": "Lebanon, Missouri - Aerocare",   
"573": "Jefferson City, Missouri - Aerocare",  
"660": "Marshall, Missouri - Aerocare",  "417": "Springfield, Missouri - Aerocare",  "314": "St. Louis, Missouri - Aerocare",  "606": "Ashland, Kentucky - STLukes",   "589": "Lexington, Kentucky - STLukes",  "502": "Lousville, Kentucky - STLukes",  "270": "Bowling Green, Kentucky - STLukes",  "606": "Somerset, Kentucky - STLukes",  "866": "Murray, Kentucky - STLukes",   "270": "Pad0ucah, Kentucky - STLukes",  "859": "Mount Sterling, Kentucky - STLukes",  "828": "Brevard, North Carolina - STLukes",  "336": "Greensboro, North Carolina - STLukes",  "910": "Dunn, North Carolina - STLukes",  "252": "New Bern, North Carolina - STLukes",  "919": "Cary, North Carolina - STLukes",  "336": "Lexington, North Carolina - STLukes",  "252": "Wilson, North Carolina - STLukes",   "704": "Charlotte, North Carolina - STLukes",   "814": "Erie, Pennsylvania - STLukes",  "800": "Danville, Pennsylvania - STLukes",  "717": "Harrisburg, Pennsylvania - STLukes",  "912": "Statesboro, Georgia - Aerocare",  "678": "Stockbridge, Georgia - Aerocare",  "770": "Marietta, Georgia - Aerocare",  "706": "Augusta, Georgia - Aerocare",  "470": "Loganville, Georgia - Aerocare",  "229": "Albany, Georgia - Aerocare",  "478": "Macon, Georgia - Aerocare",  "813": "Tampa, Florida - Aerocare",  "305": "Pembroke Pines, Florida - Aerocare",  "727": "Clearwater, Florida - Aerocare",  "941": "Bradenton, Florida - Aerocare",  "863": "Sebring, Florida - Aerocare",  "772": "Port St. Lucie, Florida - Aerocare",  "561": "Boynton Beach, Florida - Aerocare",  "239": "Fort Myers, Florida - Aerocare",  "904": "Jacksonville, Florida - Aerocare",  "321": "Melbourne, Florida - Aerocare",  "407": "Kissimmee, Florida - Aerocare",  "850": "Pensacola, Florida - Aerocare",  "352": "Ocala, Florida - Aerocare",  "239": "Fort Myers, Florida - Aerocare",  "813": "Lakeland, Florida - Aerocare",  "386": "Daytona Beach, Florida - Aerocare",  "718": "Brooklyn, New York - OHH",  "516": "Roslyn Heights, New York - OHH",  "877": "Sayreville, New Jersey - OHH",  "800": "Sayreville, New Jersey - OHH",  "914": "White Plains, New York - OHH",  "732": "Lakewood, New York - OHH",  "631": "Ronkonkoma, New York - OHH",  "860": "Fairfield, Connecticut - OHH",  "215": "Huntingdon Valley, Penssylvenia - OHH",  "610": "New york or Pennsylvania - OHH/STLukes",  "570": "Stroudsburg, Pennsylvania - OHH",  "845": "Highland, New York - OHH",  "856": "Cinnaminson, New Jersey - OHH",  "302": "New Castle, Delaware- STLukes",  "717": "East Petersburg, Pennsylvania - STLukes",  "410": "Havre de Grace, Middle River - STLukes",  "240": "Oakland, Middle River - STLukes",  "301": "Germandtown, Middle River - STLukes",  "203": "Waterbury, Connecticut - OHH",  "757": "Newport News, Virginia - STLukes",  "800": "Lorton, Virginia - STLukes",  "434": "South Hill, Virginia - STLukes",  "276": "Lebanon, Virginia - STLukes",  "540": "Waynesboro, Virginia - STLukes",  "804": "Richmond, Virginia - STLukes",  "301": "Fairfax, Virginia - STLukes",  "740": "Gallipolis, Ohio - Aerocare",  "330": "Akron, Ohio - Aerocare",  "513": "Blue Ash, Ohio - Aerocare",  "330": "Akron, Ohio - Aerocare",  "614": "Columbus, Ohio - Aerocare",  "888": "Northfield, Ohio - Aerocare",  "937": "Kettering, Ohio - Aerocare",  "501": "Searcy, Arkansas - Aerocare",  "479": "Springdale, Arkansas - Aerocare",  "870": "Jonesboro, Arkansas - Aerocare",  "501": "Benton, Arkansas - Aerocare",  "870": "Monticello, Arkansas - Aerocare",  "479": "Bentonville, Arkansas - Aerocare",  "866": "Russelville, Arkansas - Aerocare",  "903": "Sherman, Texas - STLukes",  "254": "Temple, Texas - STLukes",  "940": "Wichita Falls, Texas - STLukes",  "817": "Weatherford, Texas - STLukes",  "480": "Phoenix, Arizona - Aerocare",  "623": "Phoenix, Arizona - Aerocare",  "931": "Tullahoma, Tennessee - Aerocare",  "615": "Murfreesboro, Tennessee - Aerocare",  "505": "Allentown, Pennsylvania - STLukes",  "415": "San Francisco, California - STLukes",  "469": "Arlington, Texas - STLukes",  "214": "Arlington, Texas - STLukes",   "405": "Oklahoma City, Oklahoma - Aerocare",  "779": "Cibolo, Texas - STLukes",  "443": "Elkton, Middle Rider - STLukes",  "210": "San Antonio, Texas - STLukes",  "702": "Las Vegas Nevada - STLukes",   "650": "Tracy California - STLukes",  "510": "Fairfield, California - STLukes",  "209": "Linden, California - STLukes",  "559": "Fresno, California - STLukes",  "970": "Collins, Colorado - Aerocare",   "707": "Suisun City, California - STLukes",  "865": " Knoxville, Tennessee - Aerocare",  "815": "Union, Illinois - STLukes",  "708": "Chicago, Illinois - STLukes",  "224": "Lakemore, Illinois - STLukes",  "773": "Niles, Illinois - STLukes",  "312": "Niles, Illinois - STLukes",  "208": "Blackfoot, Idaho - STLukes",  "602": "Maricopa, Arizona - STLukes",   "402": "Albion, Nebraska - Aerocare",  "806": "Amarillo, Texas - STLukes",  "262": "Waukesha, New Berlin - Aerocare",  "713": "League City, Texas - STLukes",  "505": "New Mexico or Pennsylvania - STLukes",   "830": "Luling, Texas - STLukes",  "973": "South Orange, New Jersey - OHH",  "843": "North Charleston, South Carolina - Aerocare",  "681": "Charleston, West Virginia - Aerocare",  "267": "Commonwealth, Pennsylvania - STLukes",   "847": "Wilmette, Illinois - STLukes",  "719": "Colorado Springs, Colorado - Aerocare",  "607": "CODE",  "972": "Midlothian, Texas - STLukes",  "609": "Pleasantville, New Jersey - OHH",  "432": "New Braunfels, TX - STLukes",  "281": "Stafford, TX - STLukes",  "360": "Olympia, WA - STLukes",   "541": "Medford, OR - STLukes",  "928": "Phoenix, AZ - STLukes",  "423": "Abingdon, VA - STLukes",  "409": "Lufkin, TX - STLukes",  "484": "Phoenixville, PA - STLukes",   "206": "Kirkland, WA - STLukes",  "325": "San Angelo, TX - STLukes",  "832": "Houston, TX - STLukes",  "936": "Conroe, TX  - STLukes",  "812": "LOUISVILLE, KY - STLukes",   "908": "Bethlehem, PA - STLukes",  "803": "Camden, SC - STL/OHH",  "682": "Texas - STLukes",  "918": "JENNINGS, OKLAHOMA - Aerocare",  "636": "HILLSBORO, MISSOURI - Aerocare",   "440": "WESTERVILLE, OHIO - Aerocare",  "CODE": "CODE",  "CODE": "CODE",  "CODE": "CODE",  "CODE": "CODE",   "CODE": "CODE",  "CODE": "CODE",  "CODE": "CODE",  "CODE": "CODE",  "CODE": "CODE",          
// Add more area codes here  };    
document.getElementById('phone-form').addEventListener('submit', function(event) {      
event.preventDefault();      
let phone = document.getElementById('phone').value;      
let state = areaCodes[phone];      
if (state) {          
document.getElementById('result').textContent = 'The state is: ' + state;      
} else {
          document.getElementById('result').textContent = 'Area code not found.';      
}  
});