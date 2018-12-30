
from flask import Flask, render_template, jsonify

menu = [
      {'name':'Home', 'href':'#'},
      {'name':'About', 'href':'#'},
      {'name':'Forum', 'href':'#'},
      {'name':'Contact', 'href':'#'},
      {'name':'Log Out', 'href':'#'}
	]

title = "Flask/JS App"

app = Flask(__name__)

@app.route ('/')
def home():
    return render_template("home.html", title=title, menu=menu)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

