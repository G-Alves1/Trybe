import requests
from bs4 import BeautifulSoup

html = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")

URL = "https://pt.wikipedia.org"
html = requests.get(f"{URL}/wiki/Rock_in_Rio")

page = html.text
bs_page = BeautifulSoup(page, "html.parser")


def create_url(url: str, urn: str) -> str:
    """Creates an URL from a URN and a URI

    Parameters
    ----------
    url : str
        Universal Resource Locator
    urn : str
        Universal Resource Name

    Returns
    -------
    str
        Universal Resource Identifier (URL)
    """

    url = url[:-1] if url[-1] == "/" else url
    urn = urn[1:] if urn[0] == "/" else urn
    return f"{url}/{urn}"


def transform_wiki_links(link: str) -> str:
    return link if link[:4] == "http" else create_url(URL, link)


links = [
    transform_wiki_links(anchor["href"])
    for anchor in bs_page.findAll("a")
    if anchor.get("href") is not None
]

for link in links:
    print(link)
