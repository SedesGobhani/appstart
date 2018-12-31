
from flask import Flask, render_template, jsonify

links = [
    {'name':'Home', 'href':'#'},
    {'name':'About', 'href':'#'},
    {'name':'Forum', 'href':'#'},
    {'name':'Contact', 'href':'#'},
    {'name':'Log Out', 'href':'#'}
]

colors = {
    'background': '#000040',
    'foreground': '#6495ED',
    'button_background': '#000040',
    'button_foreground': '#6495ED',
    'button_border': '#6495ED',
    'selbtn_background': '#000040',
    'selbtn_foreground': 'tomato',
    'selbtn_border': 'tomato',
    'hvrbtn_background': '#000040',
    'hvrbtn_foreground': 'tomato',
    'hvrbtn_border': '#6495ED'
}

header = {"links":links, "colors": colors}


title = "Flask/JS App"

head = {
    'title': title
}


app = Flask(__name__)

@app.route ('/')
def home():
    return render_template("home.html", head=head, header=header)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

