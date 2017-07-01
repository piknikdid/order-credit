import urllib.request
from bs4 import BeatifulSoup

def get_html(url):
    response = urllib.request.urllopen(url)
    return response.read()

def gate_page(html):
    soup = BeatifulSoup(html)
    page = suop.find('div',)
