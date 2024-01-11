function checkAvailability() {
    var selectedBlock = document.getElementById("block").value;
    var hoursRequired = parseInt(document.getElementById("hours").value);

    // Replace the below data with actual classroom availability data
    var classrooms = {
        "A": { "available": 5 },
        "B": { "available": 3 },
        "C": { "available": 7 }
    };

    var resultElement = document.getElementById("result");

    if (classrooms[selectedBlock]) {
        var availableClassrooms = classrooms[selectedBlock].available;

        if (availableClassrooms >= hoursRequired) {
            resultElement.innerHTML = "Classroom is available for the required hours.";
            resultElement.style.color = "green";
        } else {
            resultElement.innerHTML = "Classroom is not available for the required hours.";
            resultElement.style.color = "red";
        }
    } else {
        resultElement.innerHTML = "Invalid block selected.";
        resultElement.style.color = "red";
    }
}