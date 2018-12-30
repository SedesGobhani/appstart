# Source: http://flask.pocoo.org/docs/1.0/patterns/packages/
# What I learned:
# - Flask variables in javascript must be in quotes.
# - 
# - 

from flask import Flask, render_template

app = Flask(__name__)

@app.route ('/')
def home():
    docbag = {"title": "Flask/JS App"}
    return render_template("home.html", docbag=docbag)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

