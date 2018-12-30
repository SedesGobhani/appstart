
from flask import Flask, render_template

app = Flask(__name__)

@app.route ('/')
def home():
    docbag = {"title": "Flask/JS App"}
    return render_template("home.html", docbag=docbag)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

