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

    return render_template("home.html")

@app.route("/cancel-registration", methods=["GET", "POST"])
def cancel_registration():
    if request.method == "POST":
        registration_id = request.form.get("registrationId")
        confirmed = request.form.get("confirmCancelCheckbox")
        if registration_id and confirmed:
            flash(f"Registration {registration_id} has been cancelled successfully.", "success")
            return redirect(url_for("cancel_registration"))
        flash("Please provide the registration ID and confirm cancellation.", "danger")
        return redirect(url_for("cancel_registration"))

    return render_template("cancel_registration.html")

@app.route("/registrants")
def registrants():
    return render_template("registrants.html")

if __name__ == "__main__":
    app.run(debug=True)
