const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault()
    const { email, password } = event.target.elements;
    if (!email.value || !password.value) {
        alert('All form fields must be filled in');
        return;
    }

    const info = {
        email: email.value.trim(),
        password: password.value.trim(),
    }

    console.log(info);

    event.target.reset();
}