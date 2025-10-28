    10/3/2025
I needed to document this little project, for I want to possibly utilize this as a go to in case I need for professional improvement... To begin, I wanted to add a landing page as a means to house the links or act as a hub to the different tools in which I have either already built out, building out or planning on. This is a means to help me become more productive in my current employment, and as such, I am performing this in my own time to maintain rights to everything I produce. If the current employ would like to utilize any of my tools exclusively, then they must come to an agreement to my terms in both use and pricing. 

That being said, I'm starting with the landing page first, roughing it out until it is to my liking. I already have built out an estimating tool for run-time on the finish-line that I will import into this repo instead of separately. I think that would keep everything nice and tidy and easy to modify. 

This will need to focus on looking excellent on mobile-first, as is most of everything I attempt to do in such a manner. This is primarily because the targeted audiance will be my coworkers who will have more access to their cell/smart phones more readily accessible than a desktop. 

The boiler-plate for how the tools should be displayed on the landing page should look like this:
<div class="tool">
    <div class="toolHeader">
        <h2>Tool Name</h2>
    </div>
    <div class="toolDesc">
        <p>Tool Description</p>
    </div>
    <div class="toolLink">
        <button>
            <a href="#">Go To Tool</a>
        </button>
    </div>
</div>

I successfully integrated my old rollr web-app into this one, I need to include a back button that will close out the current window when clicked. I don't know if I can do that, but it needs a back button that actually leads back to the home page. Then, maybe some better styling for cohesion - possibly integrate the styling into 1 single style sheet. 


10/8/2025

Today I want to try to build up a basic todo app with localStorage for saved data. 

The basic todo app should be able to:
    - Create a task
    - Read the task
    - Update the task
    - Delete the task...
        or
    - Add task
    - Edit task
    - Delete task
    - Mark tasks as complete 

ul element empty
li elements will contain:
    - radio button to mark task as complete
    - span element to display task
    - edit and delete button 


10/12/2025

I am migrating all of the styles and refactoring some of the classes and id's. This should help with keeping styles separate and in 1 file, 1 call as opposed to multiples. 

The main tags for the finish line estimator are as of follows:
main
    .estContainer
        #user-input
            .user-input-field 
                label 
                #totalReadyRolls
                #seqStart
                #seqEnd
                #prodVelo
                #numOfGaps
            button
            
        #output
            #totalQtyContainer
                span
                #quantity

        #quantityRunTime
            span
            .runTime
                #prodHours
                .colon
                #prodMinutes
        
        #totalRunTime
            span
            .runTime
                #totalHours
                .colon
                #totalMinutes

        footer
            #copyrightLine
/main 



10/28/2025

I have a few new ideas to add:

Finishing estimator:
    -Add estimated completion time...and display.
    -User input # of rolls
    -Start/stop buttons
    -Display elapsed time
    -Calculates split time against 20 min est time. 
    -Result will change displayed completion time.

Add estimated completion time: 
    completion time = (Time as of submit clicked) + (total runtime)

Tool:
    -Suggested machine speed calculator...
        -total pieces for job / estimated run time. (2 user inputs)

