seeds = [
"https://www.omdbapi.com/?t=Opera-Doc&apikey=f1962a9",

"https://www.omdbapi.com/?t=rabbit-fire&apikey=f1962a9",

"https://www.omdbapi.com/?t=rabbit-seasoning&apikey=f1962a9",

"https://www.omdbapi.com/?t=feed-the-kitty&apikey=f1962a9",

"https://www.omdbapi.com/?t=tudor-monastery&apikey=f1962a9",

"https://www.omdbapi.com/?t=harlots-housewives&apikey=f1962a9",
"https://www.omdbapi.com/?t=pokemon&apikey=f1962a9",
"https://www.omdbapi.com/?t=Am%C3%A9lie&apikey=f1962a9",
"https://www.omdbapi.com/?t=duke-of-burgundy&apikey=f1962a9",
"https://www.omdbapi.com/?t=green-knight&apikey=f1962a9",
"https://www.omdbapi.com/?t=miss-pettigrew&apikey=f1962a9",
"https://omdbapi.com/?t=veep&apikey=f1962a9",
"https://omdbapi.com/?t=new-adventures-of-old&apikey=f1962a9",
"https://omdbapi.com/?t=web-therapy&apikey=f1962a9",
"https://omdbapi.com/?t=tsars&apikey=f1962a9",
"https://omdbapi.com/?t=tampopo&apikey=f1962a9",
"https://omdbapi.com/?t=heat-of-the-sun&apikey=f1962a9",
"https://omdbapi.com/?t=Ascension&y=2021&apikey=f1962a9",
"https://omdbapi.com/?t=moonrise-kingdom&apikey=f1962a9",
"https://omdbapi.com/?t=fantastic-mr&apikey=f1962a9",
"https://omdbapi.com/?t=Bacurau&apikey=f1962a9",
"https://omdbapi.com/?t=antoinette&y=2006&apikey=f1962a9",
"https://omdbapi.com/?t=plantagenets&apikey=f1962a9",
"https://omdbapi.com/?t=six-wives-with-lucy&apikey=f1962a9"
]
seed_urls = seeds.shuffle

def get_content(seed_urls)
  seed_urls.each do |url|
    response = RestClient.get(url)
    new_content = JSON.parse(response)
      Content.create(
        title: new_content["Title"],
        year: new_content["Year"],
        released: new_content["Released"],
        runtime: new_content["Runtime"],
        genre: new_content["Genre"],
        director: new_content["Director"],
        writer: new_content["Writer"],
        actors: new_content["Actors"],
        plot: new_content["Plot"],
        language: new_content["Language"],
        country: new_content["Country"],
        poster: new_content["Poster"],
        imdbRating: new_content["imdbRating"],
        content_type: new_content["Type"]
      )
  end
end

get_content(seed_urls)
