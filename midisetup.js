function midisetup() {
  WebMidi.enable(function(err) { //check if WebMidi.js is enabled

    if (err) {
      console.log("WebMidi could not be enabled.", err);
    } else {
      console.log("WebMidi enabled!");
    }

    //name our visible MIDI input and output ports
    console.log("---");
    console.log("Inputs Ports: ");
    for (i = 0; i < WebMidi.inputs.length; i++) {
      console.log(i + ": " + WebMidi.inputs[i].name);
    }

    console.log("---");
    console.log("Output Ports: ");
    for (i = 0; i < WebMidi.outputs.length; i++) {
      console.log(i + ": " + WebMidi.outputs[i].name);
    }

    //Choose an input port
    inputSoftware = WebMidi.inputs[0];
  });
}

function midireceive() {
  WebMidi.enable(function(err) {
    inputSoftware.addListener('noteon', "all",
      function(e) {
        // console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ") " + e.note.number + ".");
        // midiOn = e.note.number;
        if (e.note.number == 49) {
          tab1 = tab1 + 1;  
        }
      
      if (e.note.number == 51) {
          tab2 = tab2 + 1;  
        }
      // console.log(tab1);
      });

    inputSoftware.addListener('noteoff', "all",
      function(e) {
        // console.log("Received 'noteoff' message (" + e.note.name + e.note.octave + ") " + e.note.number + ".");
        // midiOff = e.note.number;
      });

    // Print knob values
    inputSoftware.addListener('controlchange', "all",
      function(e) {
        // console.log("ch:" + e.controller.number + "  value:" + e.value);
        // midiNum = floor(map(e.value, 0, 137, 0, num));
        knobChannel = e.controller.number;
        knobValue = e.value;
        knobValue = floor(map(knobValue, 0, 127, 20, 100));

      });
  });
  // console.log (knobChannel, knobValue);
}