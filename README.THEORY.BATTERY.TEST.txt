Warren Lobb
ON, Canada
Readme thesis for crossing battery testing app
live railway crossing simulation for voltage and current testing
UI readme instructions located in separate fie

A DC Testing Standard for the Wild West of Power and the limitations of practical DC expectations :

_________________________________________________________________________________________________________________________________________

Why It Matters:

DC systems are under-regulated, misunderstood, and often misdiagnosed. Failures aren’t theoretical—they’re explosive, corrosive, and expensive.

What This Readme Delivers:
- A 12-month load test schedule with real resistance calculations
- Monthly connection integrity checks
- Ground fault detection with megohmmeter thresholds
- Visual inspection rules that actually prevent disaster
- Anecdotal field notes that engineers can learn from, not just read

Who It’s For:
Solar designers, field techs, battery integrators, and anyone tired of guessing whether their bank is about to go thermal.


In the world of battery testing we often expect the lower voltage to be less stressful compared to testing 240VAC services.
We take for granted that a chemical reaction is taking place right near our knees that is representing a near maximum short output  
between the two nodes positive and negative to reach the load.  The wires to the load and the load combines do represent resistance
that lowers output along the line but unlike AC services the internal resistance between the source of the circuit is
seeing a lowering resistance value inside the battery housing than the actual load, as if the AC transformer was right beside your knees.

“A failed battery bank doesn’t just underperform—it swells, it leaks, and it drags down the power factor like a wounded transformer bleeding voltage at your knees. It’s not fair to call it an overheating transformer, but the comparison isn’t far off: both can erupt violently, one from electrical overload, the other from chemical breakdown. The battery’s internal resistance collapses inward, like a slow-motion avalanche, until what was once a stable DC source becomes a reactive, explosive hazard. It’s like standing beside a 7200V pole pig that’s about to pop—except this one’s wrapped in acid and quietly cooking itself from the inside.”
So we MUST always service batteries in fear of :

electrical explosions caused from poor ventilation gas build up
chemical leakage on top of battery shorting between positive and negative terminals
faltering internal resistance of batteries with poor storage principles ex: on concrete 
battery banks that have failed single batteries and destroy other working batteries
swelling of battery housing due to age  
loosening of nut under nut connections which create variance in charger output
charging that is too fast or too slow and creating heating issues
switching from charging to loading too much and creating heating issues
allowing batteries to freeze and unthaw 
grounded battery banks that have faulted grounding on normally ungrounded loads 

These are only some of the conditions that make a deteriorating bomb beside your knees.
We work hard before and after our load test to verify one critical part of the for our battery science.  
The batteries are not too hot.
The batteries are not swollen.
and batteries are not going to leak.

Field Note: The Silent Boom
"Battery showed minor leakage. Next day, swelling. Third day, the cabinet door was bent outward and blackened from a spark explosion. No one was present. Battery sat in carbon, still trying to deliver current like a ghost battery. It was a short-term safety hazard that nearly became a long-term tragedy."


If we can follow those 3 rules than all of the other ones become technical respects of battery science like loading and line connection testing.

_________________________________________________________________________________________________________________________________________

Power off testing : 


We must remember our 'power off' load testing is the fulcrum of our battery science.  
We respect a 12month schedule for load and line resistance tests.  Battery connection tests should be done on a 1month basis.

Here is a general step procedure for power off load testing :

Isolate and note safety risks to power off of loads.  Do not hurt anyone.


1) With power on :

2) Measure in series with the Amps output of the positive terminal, of the battery bank ( preferably with a test strap and nut on positive output of battery ) 

   during maximum expected load for 30 mins.   This value will be called yourAmps.

3) Calculation :

   Your battery bank load setting will be calculated as the following :

   Resistance of load bank ( in ohms )  = Battery voltage ( in volts ) / yourAmps ( in amps ) 

   Allow battery or bank to settle without excessive load and become charged for 15 mins.

Why we use designed loads not maximum battery draw:
A load that is too small may require upscaling that uses an amp hour calculations to test manufacture goals and not system design goals.
Often using manufacturer goals to test batteries and not system designs, strains batteries beyond normal test expectations 
and may shorten lifespan of battery or bank.
Regular maximum load measurements in amps can be used to test 'design maximums' and not 'statistical sheet tolerances', 
which too often fail early and force replacements not needed yet.


1) Turn power off :

2) Measure your battery or bank voltage and note as charged read.  

3) Disconnect your battery normal load ( with test nut opening preferably ).  Be aware of safety considerations of power off.

4) Set you battery bank to your calculated value in ohms from above.

5)  Connect the test load to positive and negative of now isolated battery or bank.

    Allow for discharge of battery or bank with test load connected for 30 mins.

6) Disconnect the test load after 30 mins and measure power off voltage of the battery or bank, and compare against charged read.

   If the battery voltage is around manufacturer failure levels then your battery or bank needs replacement.

   If the battery is say more than 10% below charged read, you are very close to designer avalanche or fail point of the battery.

   It may operate normally for now but as we reach 10.5v on a 12v battery with no charger we are near the designer fail point.
   Current output will eventually lower too much and devices will not operate normally.
   The internal resistance of the battery has been compromised and overheating from charging or shut down is near.


So this test gives us a normal load with power off and tests internal resistance of the battery with keeping in mind 
failure levels of lower bounds range.  
It is very effective beyond a visual inspection.
We issue this test on a 12 month schedule and expect a line resistance and ground tests to be completed alongside it.

_________________________________________________________________________________________________________________________________________

Why Line resistance test :


Our line resistance test is not as dangerous or risky as load testing and visual inspection, but
is it very critical to proper operation.
We are looking for:

1)  Connections to battery banks that are partially opens on single wire lines
    ex: rusty splice or cut buried wire
    fault : load goes on and off , battery and charger works too hard

2)  Connections to battery banks that are partially short to different wires in a cable or separated wires touching
    ex: a cable that has been cut and buried and two wires in the cable are cut and touching each other in the dirt
    fault : load goes brown and dies out slow, battery gets hot from excessive load

Why Ground test :

3)  Connections to battery banks that are partial shorts to something people can touch like ground or steel
    ex: a cable that run alongside a shed that has a bare connection touching the steel shed
    fault : Someone leans on shed and get full current on them

Danger remains in destroying load if load not disconnected during megohmmeter tests.

_________________________________________________________________________________________________________________________________________

Line resistance testing / wire to wire :


Use a wire megohmmeter to test for open between wires 
A reading of over 10Mohm represents a very high and ideal reading.

Single wires and cables:

1) Open battery or bank side of connection to the load.

2) Disconnect lightning arrestors or line equalizers, if you have them.

3) Disconnect the loads.  

4) Clip meter on each wire and test wire against other wire until out of pairs to test.

   This means often just a single positive against a single negative in many setups.

   For cables this means many wires will be tested against each other within the same cable.

   A lowered or failed reading of even 100kohms would indicate a short exists between the two wires and they need to be replaced
   or individually checked.  The wires are failing.

   If a cable fails then the entire cable needs replacing or you may try spare wires in cable.

_________________________________________________________________________________________________________________________________________

Testing to ground :


Grounding is done for safety reasons ( outside of communication or radio banks ).

When a battery bank is grounded the circuit will attempt to open a circuit breaker when enough of a short exists
between your battery and purposely grounded parts like shed sidings or floors you stand on,
opening line for current helps prevent shocks or explosions.

So when you have a broken wire from your positive battery line accidently rubbing against a shed siding or pipe,
the circuit opens and protects people from being shocked for touching a siding or a pipe.

It is perfectly fine for battery banks to not be grounded - by design.
Those banks requires special higher frequency testing that protect ground currents inside the 12 month inspection.
Communications for phones and railways are examples of normally un-grounded battery banks.

A grounded battery bank ( like a radio bank ) can still have a broken underground wire that is energizing dirt.

A un-grounded battery bank ( like running a fridge ) can still have a broken underground wire that is energizing dirt. 

The idea being that current through a live broken faulted conductor could be sent 

through another conducting material and						( ex : shed siding gets energized by broken conductor) 
when something touches that siding  						( ex : human touches shed get energized by DC battery bank)
they become energized and get shocked, if they themselves are grounded. 	( ex:  touching water leaking from an energized sink and getting shocked )
                             
If another power source were to touch the siding we may see explosion or sparks.

_________________________________________________________________________________________________________________________________________

Testing ground with open battery and open loads on line wires :


1) This ideally done on dry days, extreme wet days can give ghost ground faults, even in electrically open cables.

   Ghost grounds also occur when connected to loads such as motors, that accumulate carbon buildup on coil that accidently touches frame of grounded motor.
   
   We search for fault grounds on wires with : loads disconnected and wires open or isolated; in most cases.

2) Open the connection to the battery or bank.

3) Open the connection to the loads.  

4) Disconnect lightning arrestors or line equalizers, if you have them.

5) Apply the one lead of megohmmeter to a known grounded part, a ground rod or grounded floor.

   This can be confirmed by checking its physical location in the earth or with a grounded system against any polarity on the battery, seeing voltage to ground.

6) Now test between each wire that has been opened, with the other lead of the megohmmeter .

   Again a failure of around 100kohms would mean you have a cable that is touching earth ground or your grounded floor or your shed siding
   as examples.

   Even though we may not care if the bank is grounded as risk is low ( it is running a fridge ) , 
   it is still telling you that you have a fault buried in the ground or above that needs noting.

   You just opened up the cable or wires, you have no connection to your battery bank or load, you should not see ground or user interfaces with potential.

   A reading of above 10Mohms would indicate normal operation and no faults on opened up wires / cables.

_________________________________________________________________________________________________________________________________________


Options:

Megohmmeter reading of < 100kohms wire to wire:

Search for break or cut in the wire visually or find it with meter work.
If you cannot find the fault with a meter or visually you may:  
1) Come back in 30-120 days and re test for degraded < 100kohm reading.  Note and discuss fail state potential. 
2) Replace wire or cable entirely with new one.

Megohmmeter reading of < 100kohms to ground:

Meter work :
You may re connect load and measure amps from ground to each positive and negative output on the battery or bank.

1) Re-connect battery outputs but have load remain unconnected and disconnect any ground connection on battery side

2) Measure in amps with 1 lead on ground and 1 lead on positive and then 1 lead on negative output posts of the battery or bank.

3) If you result with a current measurement to ground with your wires and/or cables connected but loads open and battery bank ground not connected,
   you have a faulted condition.  Any reading around 1A is dangerous keeping in mind <1A can still kill.
 
4) You may reconnect load but keep in mind you are operating under faulted or hazardous conditions on you line.  Regular inspection recommended. 

5) You may also replace the line wire or cable with a new one.


_________________________________________________________________________________________________________________________________________

Constant current charging and when it would better:

Constant voltage chargers being easily replaceable are all the rave.  The problem with them is when you have several connected to one service.
Constant voltage chargers will slam the service with variable loads that are often outside of intended ranges of panel operation.
They will ramp up current to the maximum of the charger output and leave it there until battery floats back into levels that trigger trickle charge circuits.
So if you have several connected and several battery banks they will:

- Ramp up your service charges with higher current demands.
- Ramp up AC power line currents on the charger supplies
- Services not designed for several constant voltage chargers can shift AC service phase enough power provider may occur extra charges 
- Smart reader systems with floating billing rates may account for phase correction applied on service by power operators.
- In systems with constant voltage charging, adding extra loads with more constant voltage chargers and new batteries creates higher peak usage
  Than using constant current charging systems

Constant current charging systems although more inspection may be needed offer:

- When set to user's consistent needs creates a fluid discharge in use and re charge when not in use scenario, which the battery prefers
- When multiple battery chargers are connected peak draw is lower as higher load draw hits the batteries not just the charger
- Adding extra chargers often does not create needs outside of service panel designs when using constant current

So when you are able to understand the users current draw from the battery and set the constant current output of the charger to not overcome
normal loads, you are in a scenario where phase shift of AC service is lower, peak draw and energy through cabling and systems is much lower, 
less dangerous too work on and batteries reach a healthy lifecycle of charge and discharge, giving users a more accurate live reading of battery status.
Constant voltage chargers will often fail or power off and battery banks will be all the sudden tested to fail right away, as often the constant voltage charger;
charges so fast it does alot for the work for the battery, giving the false indication that you have reserve power on a battery system.


_________________________________________________________________________________________________________________________________________

 Why DC Doesn’t Trip —It Waits


"Unlike AC systems, DC doesn’t rely on breakers to protect users. It relies on the technician’s vigilance. 
A battery bank under stress won’t trip —it will swell, leak, and eventually rupture. 
The absence of a fault in loads doesn’t mean automatic safety. 
It means silence. 
And silence in DC is the most dangerous signal of all."

_________________________________________________________________________________________________________________________________________


Smart Electricity and Ghosts of the Future Past:

As we move toward smarter grids and intelligent energy systems, battery banks are no longer passive storage—they're active participants in load balancing, demand response, and predictive maintenance. But smart doesn’t mean safe by default.

1) Smart chargers can still overheat a compromised cell if internal resistance isn’t monitored.
2) IoT sensors might detect swelling, but they can’t replace the intuition of a tech who’s seen a battery hiss before it pops.
3) Remote diagnostics are powerful—but only if paired with field-tested protocols like the ones laid out in this standard.
The future of DC isn’t just digital—it’s hybrid. It’s the fusion of smart tech with legacy knowledge. And this document? It’s the bridge.


The DC Frontier

 Power Probe ECT3000 ( post modern short finder ) 
This tool uses a transmitter-receiver system to inject a signal into an isolated circuit. It can quickly detect whether the circuit is open or shorted to ground—without needing to tear apart panels or trace wires manually.
1) Works on 6–48V DC systems
2) Ideal for automotive, battery banks, and field diagnostics
3) Gives directional feedback to locate faults precisely









































