from flask import Flask, render_template, request
app=Flask(__name__)

@app.route('/')
def root():
    markers=[
        {
        "lat":"19.0959684","lon":"72.8400115","popup":"Nanavati Hospital"
        },{
            "lat":"19.055591399999997","lon":"72.827140952389","popup":"Holy Family Hospital"
        },{
            "lat":"19.0750197","lon":"72.8356392","popup":"Ramakrishna Mission Hospital"
        },{
            "lat":"19.1366428","lon":"72.8364225","popup":"Rg Stone Urology and Laparoscopy Hospital"
        },{
            "lat":"19.213646","lon":"72.8670365","popup":"Shree Sai Hospital"
        }
    ]
    return render_template('index.html',markers=markers )

if __name__ == '__main__':
    app.run(host="localhost", port=8080, debug=True)
