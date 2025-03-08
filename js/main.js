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
        result.innerHTML = "<b>Controller shell : </b>When controller shell is useable, shell is hand cleaned then ran through a machine. If unusable, shell is replaced then an alternative is sourced. Shells which are unusable to Nerka Media will be donated or refurbishment efforts will be attempted.<br><br><b>Cable :</b> Controller cables are repaired where necessary. Cables with damaged insulation are stripped and repaired with 550 paracord sleeving. Some clients request extended cables, where cables are made from the ground up to be longer and newer. In cases where customers request newer cables, older cables will be utilized in other projects or refurbished to a higher standard of quality.<br><br><b>Buttons :</b> Controller buttons are cleaned by hand then ran through a machine. If buttons are too worn down, then buttons will be replaced.<br><br><b>Controller Membranes : </b>Membranes are cleaned by hand, then processed through a machine. If controller membranes are damaged, then they shall be replaced.<br><br><b>Analog stick box : </b>Stick boxes are replaced with tight OEM stick box where necessary. It is imperative that tight stickboxes are present since it is the main method of player character movement and camera interactions.<br><br><b>Analog stick potentiometers : </b>Potentiometers are replaced where necessary. Analog stick potentiometers are crucial alongside the stickboxes, for if the stick box is loose, then player character or camera won't move as far. If the potentiometers are worn down, false inputs and stick drift are possible.<br><br><b>Controller Contacts : </b>Contacts are deep cleaned with isopropyl alcohol<br>Quality control test : A standard quality control test to ensure complete functionality is present before packing and shipping the device.";
        button.value = "Collapse";
        collapsed = false;
    }
    else if (!collapsed) {
        result.innerHTML = "";
        button.value = "Expand";
        collapsed = true;
    }
});
