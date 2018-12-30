
from flask import Flask, render_template, jsonify

menu = [
      {'name':'Home', 'href':'#'},
      {'name':'About', 'href':'#'},
      {'name':'Forum', 'href':'#'},
      {'name':'Contact', 'href':'#'},
      {'name':'Log Out', 'href':'#'}
	]

docbag = {"title": "Flask/JS App", "menu": menu}

app = Flask(__name__)

@app.route ('/')
def home():
    return render_template("home.html", docbag=docbag)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

