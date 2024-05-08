/*Nolan Mielke
NOL2146144
11/21/2023*/

/*Slideshow1 properties*/
$("#slideshow1 div:gt(0)").hide();
setInterval(function () { $("#slideshow1 div:first").fadeOut(3000).next().fadeIn(3000).end().appendTo("#slideshow1"); }, 6000);

/*Slideshow2 properties*/
$("#slideshow2 div:gt(0)").hide();
setInterval(function () { $("#slideshow2 div:first").fadeOut(3000).next().fadeIn(3000).end().appendTo("#slideshow2"); }, 6000);

/*On Click Event*/
/*Event reveals system for controller refurbishment with Nerka Media*/
    var collapsed = true;
button.addEventListener("click", function () {

    if (collapsed) {
        result.innerHTML = "<b>Controller shell : </b>When controller shell is useable, shell is hand cleaned then ran through a machine. If unusable, shell is replaced with alternative. Some shells can be dyed to give unique color to the controller. Dying is only applicable to premium tier controllers.<br><br><b>Cable :</b> Controller cables are repaired where necessary, but are guaranteed to be sleeved with 550 paracord to replace worn down insulation and prevent tangling cables. Some clients request extended cables, where cables are made from the ground up to be longer and newer.<br><br><b>Buttons :</b> Controller buttons are cleaned by hand then ran through a machine. If buttons are too worn down, or don't match the aesthetic for a premium controller, then buttons will be replaced.<br><br><b>Controller Membranes : </b>Membranes are cleaned by hand, then processed through a machine. If controller membranes are damaged, then they shall be replaced.<br><br><b>Analog stick box : </b>Stick boxes are replaced with tight OEM stick box where necessary. It is imperative that tight stickboxes are present since it is the main method of player character movement and camera interactions.<br><br><b>Analog stick potentiometers : </b>Potentiometers are replaced with ones which haven't been worn down to as bad of a degree. Analog stick potentiometers are crucial alongside the stickboxes, for if the stick box is loose, then player character or camera won't move as far. If the potentiometers are worn down, false inputs and stick drift are possible.<br><br><b>Controller Contacts : </b>Contacts are deep cleaned with isopropyl alcohol<br>Quality control test : A standard quality control test to ensure complete functionality is present before packing and shipping the device.<br><br><b>SPECIFICS FOR BLUETOOTH RGB LED PREMIUM CONTROLLERS</b><br><br>An LED strip is repurposed and routed throughout the internal pathways in the controller shell. The shell has modifications made via a dremel to enable the LEDs to be placed along specific hot spots within the controller. The LED strip is then soldered to a bluetooth controller, which allows the end user to pick and calibrate what colors they desire. In this scenario, buttons are replaced with clear ones to help the LEDs shine through. The bluetooth controller is soldered to the ground and five volt connections on the controller, meaning the LEDs are only active when the console is powered on.<br><br>Aside from the listed specifics above, these controllers will feature all of the quality standard notes, whether is be cleanliness, tests for functionality, and adding 550 paracord to the cable.";
        button.value = "Collapse";
        collapsed = false;
    }
    else if (!collapsed) {
        result.innerHTML = "";
        button.value = "Expand";
        collapsed = true;
    }
});

/*Form/Form Validation*/

var canSubmit = false;
function validateForm() {
    var valArray = [document.getElementById("fname"), document.getElementById("addr"), document.getElementById("city"), document.getElementById("state"), document.getElementById("zip")];

    for (var X = 0; X < valArray.length; X++) {
        if (valArray[X].value === "") { canSubmit = false; }
        else { canSubmit = true; }
    }
    
    button.disabled = !canSubmit;
}

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert(`Congratulations! Information has been submitted.`);
    myForm.reset();
    validateForm();
});