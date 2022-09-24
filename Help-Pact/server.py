from flask import Flask, render_template, redirect
import stripe
# This is your test secret API key.
stripe.api_key = 'sk_test_51Ll94ISAAg18wyqJX2nsGW6qrr5Lw7LooFrfLhJNZEdVwQ9htxTSE39JCyF7xPgH8ySL07BFXuz6ybOM9WbvpSMK005shgd3oM'

app = Flask(__name__)

YOUR_DOMAIN = 'http://localhost:5500'

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/')
def hello():
    return render_template('home/index.html')

@app.route('/login')
def login():
    return render_template('home/Login.html')

@app.route('/portal')
def portal():
    return render_template('portal/blog.html')

@app.route('/register')
def register():
    return render_template('home/registration.html')

@app.route('/socialworker')
def socialworker():
    return render_template('home/social_worker.html')

@app.route('/donate')
def donate():
    return render_template('donate/index.html')



@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': 'price_1Ll96sSAAg18wyqJWbNTBqBf',
                    'quantity': 1,
                },
            ],
            mode='subscription',
            success_url=YOUR_DOMAIN + '/success.html',
            cancel_url=YOUR_DOMAIN + '/cancel.html',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)


if __name__ == '__main__':
    app.run(port=5500,debug=True)