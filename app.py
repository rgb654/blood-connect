from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('sign_up_0.html')

@app.route('/signup/1')
def signup1():
    return render_template('sign_up_1.html')

@app.route('/signup/2')
def signup2():
    return render_template('sign_up_2.html')

@app.route('/signup/3')
def signup3():
    return render_template('sign_up_3.html')

@app.route('/signup/4')
def signup4():
    return render_template('sign_up_4.html')

@app.route('/events')
def eventlist():
    return render_template('eventlist.html')

@app.route('/donate')
def donate():
    return render_template('donate.html')

@app.route('/gateway')
def payment():
    return render_template('payQR.html')

if __name__ == '__main__':
    app.run(debug=True)