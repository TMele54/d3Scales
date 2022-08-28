from flask import render_template
from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/homer')
def homer():
    return render_template("_index.html")

@app.route('/bounce')
def bounce():
    return render_template("bounce.html")


@app.route('/smart')
def smart():
    return render_template("smart.html")


@app.route('/clock')
def clock():
    return render_template("clock.html")


if __name__ == '__main__':
    app.run(debug=True)