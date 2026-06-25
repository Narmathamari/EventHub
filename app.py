from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "change-this-secret"

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        full_name = request.form.get("fullName")
        email = request.form.get("emailAddress")
        phone = request.form.get("phoneNumber")
        organization = request.form.get("organization")
        department = request.form.get("department")
        registration_id = request.form.get("registrationId")

        flash("Registration submitted successfully!", "success")
        return redirect(url_for("index"))

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
