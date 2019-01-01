
from flask import Flask, render_template, jsonify

links = [
    {'name':'Home', 'href':'/home'},
    {'name':'About', 'href':'/about'},
    {'name':'Forum', 'href':'#'},
    {'name':'Contact', 'href':'#'},
    {'name':'Log Out', 'href':'#'}
]

colors = {
    'foreground': '#6495ED',
    'background': '#000040',
    'button_foreground': '#6495ED',
    'button_background': '#000040',
    'button_border': '#000040',
    'selbtn_foreground': 'tomato',
    'selbtn_background': '#000040',
    'selbtn_border': '#000040',
    'hvrbtn_foreground': '#6495ED',
    'hvrbtn_background': '#000040',
    'hvrbtn_border': 'tomato'
}

misc = {'selected': 'Home'}

header = {"links":links, "colors": colors, "misc": misc}

title = "Flask/JS App"

head = {
    'title': title
}

app = Flask(__name__)

@app.route('/')
@app.route ('/home')
def home():
    header['misc']['selected'] = 'Home';
    return render_template("home.html", head=head, header=header)

@app.route ('/about')
def about():
    header['misc']['selected'] = 'About';
    return render_template("about.html", head=head, header=header)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

