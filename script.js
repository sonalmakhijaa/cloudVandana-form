function openPopup() {
    document.getElementById("Popup").style.display = "block";
}

function closePopup() {
    document.getElementById("Popup").style.display = "none";
}
function resetForm() {
    var form = document.getElementById("surveyForm");
    form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("surveyForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Check if all required fields are filled
        if (validateForm()) {
            openPopup();
        }
    });

    function validateForm() {
        var inputs = form.querySelectorAll("input[required], select[required]");
        var isValid = true;

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value.trim()) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }
});



// (rest of your JavaScript code)


