from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Coloque aqui a data de início do namoro
data_namoro = datetime(2017, 3, 23, 19, 30, 0)  # ano, mês, dia, hora, minuto, segundo

@app.route("/")
def index():
    agora = datetime.now()
    tempo = agora - data_namoro
    return render_template("index.html", tempo=tempo, data_namoro=data_namoro)

if __name__ == "__main__":
    app.run(debug=True)
