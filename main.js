const eyeDropper = new EyeDropper();
const pickerButton = document.getElementById("openPicker");
const resultTable = document.getElementById("resultTable");
const savedColours = [];
const maxColours = 6;

pickerButton.addEventListener('click', function () {
    eyeDropper.open()
        .then(res => {
            savedColours.unshift(res.sRGBHex);

            if (savedColours.length > maxColours) { 
                resultTable.deleteRow(maxColours - 1)
                savedColours.length = maxColours;
            };

            let colour = savedColours[0];
            var row = resultTable.insertRow(0);
            var cell = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            cell.innerHTML = `<div style=\"height: 44px; width: 44px; background-color: ${colour}\"></div>`
            cell1.innerText = colour
            cell2.innerHTML = "<button class=\"copyButton\" onclick=copyToClipboard()><i class=\"fa-regular fa-copy\" style=\"color: #2d2d2d;\"></i></button>"
            console.log(colour)
                
           
            console.log(savedColours)
        })
        .catch(err => {
            console.log("Cancelled");
        })
})

function copyToClipboard() {
    navigator.clipboard.writeText(result.innerText.toUpperCase());
}