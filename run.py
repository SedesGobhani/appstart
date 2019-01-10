
from flask import Flask, render_template, redirect, jsonify

links = [
    {'name':'Home', 'href':'/home'},
    {'name':'About', 'href':'/about'},
    {'name':'Forum', 'href':'#'},
    {'name':'Contact', 'href':'#'},
    {'name':'Log Out', 'href':'#'}
];

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
};

header = {"links":links, "colors": colors, "selIndex":0};

title = "Flask/JS App";
head = {'title': title};

app = Flask(__name__);

@app.route('/')
def index():
    return redirect('/home');

@app.route ('/home')
def home():
    header['selIndex'] = 0;
    return render_template("home.html", head=head, header=header)

@app.route ('/about')
def about():
    header['selIndex'] = 1;
    return render_template("about.html", head=head, header=header)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

