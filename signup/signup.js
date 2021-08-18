document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#Login")
    const createForm = document.querySelector("#CreateAccount")
    const forgotForm = document.querySelector("#forgotacc")

    document.querySelector("#linkCreateAccount").addEventListener("click",() => {
        loginForm.classList.add("form--hidden");
        createForm.classList.remove("form--hidden");
        forgotForm.classList.add("form--hidden");
    });
    
    document.querySelector("#linkLogin").addEventListener("click",() => {
        loginForm.classList.remove("form--hidden");
        createForm.classList.add("form--hidden");
        forgotForm.classList.add("form--hidden");
    });

    document.querySelector("#linkforgot").addEventListener("click",() => {
        forgotForm.classList.remove("form--hidden");
        createForm.classList.add("form--hidden");
        loginForm.classList.add("form--hidden");
    });
});