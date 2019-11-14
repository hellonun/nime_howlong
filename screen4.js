function screen4() {
  background(0);
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp(0);
    osc.start();
    osc.amp(0.2, 0.1);
}