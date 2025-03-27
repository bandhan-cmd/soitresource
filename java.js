document.addEventListener("DOMContentLoaded", function () {
    let semesterSelect = document.getElementById("semesterSelect");
    
    semesterSelect.addEventListener("change", function () {
        let selectedValue = semesterSelect.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    });
});