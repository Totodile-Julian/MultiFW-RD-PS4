function testwebkit() {
    alert("THIS SITE IS A TEST FOR THE WEBKIT VULNERABILITY FOR THE PS4\nCLICK OK\nIF YOU DON'T SEE ANY 'API PATCHED' ERROR OR 'MEMORY ERROR' ALERT OR ANY ERROR ALERT THAT'S MEAN IT'S NOT PATCH");

    CheckAPI();
}

function CheckAPI() {
    try {
        API();
    }catch(e){
        var ge = e.message;
        if (ge == "The string did not match the expected pattern."){
            document.getElementById("API").innerHTML = "API not patch !\n";
        } else if (ge == "Illegal constructor.") {
            document.getElementById("API").innerHTML = "API not implement !\n";
        } else {
            document.getElementById("API").innerHTML = e.message;
        }
    }

}

function API() {
  alert("Press [R1] After This Message")
          frame = document.body.appendChild(document.createElement('iframe'));
          frame.contentWindow.focus();
          frame.contentDocument.addEventListener('keydown', () => {
          frame.remove();
          });
    let font = new FontFace("font1", 'url()', {});

    var fontFaceSet = new FontFaceSet([font]);

    font.family = "font2";

    document.getElementById("API").innerHTML = "API patched !\n";

    CheckWE();

}

function CheckWE() {
    let font = new FontFace("font1", '', {}, ConfirmWork());

    var fontFaceSet = new FontFaceSet([font]);

    font.family = "font2";
    

    NotWork();

}

function ConfirmWork() {
    //alert("Webkit Work !");
    document.getElementById("WE").innerHTML = "Webkit vulnerability work !\n";
    //go();
}

function NotWork() {
    //alert("Webkit Patched here !");
    document.getElementById("WE").innerHTML = "Webkit vulnerability not work !\n";
}

