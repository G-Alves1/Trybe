from parsel import Selector
import requests
from pymongo import MongoClient


# Exercício 1
URL_1 = 'https://httpbin.org/encoding/utf8'

response_1 = requests.get(URL_1)

print(response_1.text)
print()


# Exercício 2
URL_2 = 'https://api.github.com/users'

response_2 = requests.get(URL_2)

for user in response_2.json():
    print(user['login'], user['url'])
print()


# Exercício 3
URL_3 = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'

response_3 = requests.get(
    URL_3,
    headers={"User-agent": "Chrome", "Accept": "text/html"},
)

assert 'bot detected' not in response_3.text
print()


# Exercício 4
URL_4 = 'http://books.toscrape.com/catalogue/'
response_4 = requests.get(URL_4 + 'the-grand-design_405/index.html')
selector = Selector(text=response_4.text)

title = selector.css('h1::text').get()

price = selector.css('.product_main > .price_color::text').re(r'\d+\.\d{2}')

description = selector.css('#product_description ~ p::text').get()
suffix = '...more'
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_4 + selector.css('#product_gallery img::attr(src)').get()

print(title, price, description, cover, sep=',')
print()


# Exercício 5
URL_5 = 'http://books.toscrape.com/catalogue/'
response_4 = requests.get(URL_5 + 'the-grand-design_405/index.html')
selector = Selector(text=response_4.text)

title = selector.css('h1::text').get()

price = selector.css('.product_main > .price_color::text').re(r'\d+\.\d{2}')

description = selector.css('#product_description ~ p::text').get()
suffix = '...more'
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_5 + selector.css('#product_gallery img::attr(src)').get()

availability = selector.css('.product_main .availability::text').re_first(r'\d')

print(title, price, description, cover, availability, sep=',')
print()


# Exercício 6
input_category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": input_category}):
        print(book["title"])
print()


# Exercício 7
with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    for category in db.books.aggregate(pipelines):
        print(category["_id"], category["count"], sep=": ")
print()


# Exercício 8
URL_8 = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response_8 = requests.get(URL_8)
selector = Selector(response_8.text)
flags_url = selector.css(".gallerybox .image img::attr(src)").getall()
for img_url in flags_url:
    file_name = img_url.split("/")[-1]
    image_content = requests.get("https:" + img_url).content
    with open("./exercise8/" + file_name, "wb") as file:
        file.write(image_content)
print()


# Exercício 9
has_next = True
page = 1
counter = 0
while has_next:
    response_9 = requests.get(f"http://quotes.toscrape.com/api/quotes?page={page}")
    json_content = response_9.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
print(counter)
print()