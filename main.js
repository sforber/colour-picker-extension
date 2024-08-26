const pasteArea = document.getElementById("pasteArea");
const imgArea = document.getElementById("imgArea");
const result = document.getElementById("result");

pasteArea.addEventListener("paste", (event) => {
    event.preventDefault();
    let pastedItems = (event.clipboardData || window.clipboardData);
    let pastedItem = pastedItems.items[0];
    if (pastedItem.type.indexOf("image") !== -1) {
        const blob = pastedItem.getAsFile();
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            imgArea.src = this.result
        })
        reader.readAsDataURL(blob)
    }
})

const eyeDropper = new EyeDropper()
const pickerButton = document.getElementById("openPicker");

pickerButton.addEventListener('click', function () {
    eyeDropper.open()
    .then(res => {
        result.innerText = res.sRGBHex
        console.log(res.sRGBHex)
    })
    .catch(err => {
        console.log("Cancelled")
    })
})
