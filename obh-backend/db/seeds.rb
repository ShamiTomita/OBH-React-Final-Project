seed_urls = [
"https://www.omdbapi.com/?t=princess-mononoke&apikey=f1962a9",

"https://www.omdbapi.com/?t=my-neighbor-totoro&apikey=f1962a9",

"https://www.omdbapi.com/?t=porco-rosso&apikey=f1962a9",

"https://www.omdbapi.com/?t=lupin-iii&apikey=f1962a9",

"https://www.omdbapi.com/?t=moving-castle&apikey=f1962a9",

"https://www.omdbapi.com/?t=ponyo&apikey=f1962a9",

"https://www.omdbapi.com/?t=on-poppy-hill&apikey=f1962a9",

"https://www.omdbapi.com/?t=wind-rises&apikey=f1962a9",

"https://www.omdbapi.com/?t=kaguya&apikey=f1962a9",

"https://www.omdbapi.com/?t=spirited-away&apikey=f1962a9",

"https://www.omdbapi.com/?t=akira&apikey=f1962a9",

"https://www.omdbapi.com/?t=kingdom-of-dreams&apikey=f1962a9",

"https://www.omdbapi.com/?t=duck-amuck&apikey=f1962a9",

"https://www.omdbapi.com/?t=Opera-Doc&apikey=f1962a9",

"https://www.omdbapi.com/?t=rabbit-fire&apikey=f1962a9",

"https://www.omdbapi.com/?t=rabbit-seasoning&apikey=f1962a9",

"https://www.omdbapi.com/?t=feed-the-kitty&apikey=f1962a9",

"https://www.omdbapi.com/?t=tudor-monastery&apikey=f1962a9",

"https://www.omdbapi.com/?t=harlots-housewives&apikey=f1962a9",

"https://www.omdbapi.com/?t=hidden-killers&apikey=f1962a9"

]

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
