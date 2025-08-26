Battery Crossing Test – README
Version 1-3 and 4
Warren Lobb
ON, Canada


What It Is:

This script simulates a voltage and current test across a battery-powered crossing system. 

It models how electrical leads interact with terminals under different gate conditions, helping users visualize how voltage and amperage behave depending on lead placement and nut position.

How to use it:

1) Download all files in repo folder
2) Open Bash 
3) cd C:\\your selected path from download of folder
4) start index.html
5) Browser should pop up with UI ready to select measure volts or measure amps


Core Features:

1. Nut Toggle
- Simulates opening or closing the test nut.
- Affects voltage availability at POS2 and POS3 terminals.
- Changes the crossing status between “Normal” and “Gate Down.”

2. Lead Clipping
- Users clip a red lead to one of three positive terminals (POS1, POS2, POS3).
- In voltage mode, the black lead auto-clips to NEG1.
- In amps mode, the black lead must be manually clipped to a terminal.

3. Voltage Measurement
- Voltage is shown based on red lead position and nut state:
- POS1 always gives 12V.
- POS2 and POS3 only give 12V when the nut is closed.
- Otherwise, voltage reads 0V.

4. Amperage Measurement
- Amps are calculated based on whether the nut is open and both leads are clipped:
- Nut open + valid lead config = 5.0A
- Nut closed = 0.0A
- Invalid config = “--”

5. Crossing Status Display
- Updates dynamically based on nut state and test mode.
- Shows realistic gate behavior like “UP METER IN” or “Gate Down.”

 Interface Elements
- goldNutBtn: Toggles nut open/closed
- clipRedBtn: Clips red lead to selected terminal
- clipBlackBtn: Clips black lead (amps mode only)
- measureVoltsBtn: Activates voltage test mode
- measureAmpsBtn: Activates amps test mode
- testSwitchBtn: Simulates a crossing test trigger



