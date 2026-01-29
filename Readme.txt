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

11/14/2025

Today, I want to convert the completion time from the 24hr formatting to AM/PM formatting, and add the date of which it will be completed. I think this will clear up any confusion that may occur from not having the date readily available, especially if the job exceeds multiple shifts and days of run time. 

11/16/2025

I am wanting to figure out a better estimation tool to figure out the number of potential rolls, could help with figuring out how large a job will be and a better calculation for roll changes. I also will try and come up with an error percentage for smaller/incomplete rolls from press. starting out I feel as if 10% would be a good start and eventually will adjust for accuracy. 


12/31/25 - 1/1/26

Happy New Year, I'm adding another section into this project, where I am wanting to add a stopwatch section. Going into the new year, I'm going to refactor the entire job and try to streamline the tools added. I want to be able to have the user input the estimated runtime (not including setup), and the piece count to give the user the baseline estimated running speed as a target to hit. I'm hoping to add in a way to compare the actual running speed to the estimated and display as a percentage. 

I also want to add a stopwatch component for roll changes and gap run-outs. The user will press start when beginning a roll change or gap run-out, and stop the timer once completed. The over-all tool will take this time and apply it (decrement or increment) to the current estimated time. This may be a bit lofty, but I also want to have a comparison estimated/actual and display a percentage result. I think this may help in the operation, planning and estimations for the finish line. Everything that I think of this project I am and will include without edit. I think it is important to see my thought process and how I break down / create projects.

Flow:
    -user obtains and reads job ticket
    -user input piece count and estimated run time (not including setup time) **I need to verify if roll changes is setup or run time **
        -This will give an estimated speed to meet that initial estimation. **I want to display this as an actual vs. estimated...in %**
    -user input number of rolls, gaps, speed, etc. 
    -program to display estimated run time, roll change time, gap run out time, estimated completion time. 
    -need to have a section that will have a button to time roll changes and gap runout and adjust the respectable time variables and update the completion times. 

I ultimately need to figure out how to serialize or save this information, then can add a field where user will input the job number, and on the back-end be able to have actual metrics in real time. 


1/29/2026
Welcome to the new year! So I'm adding a second version of this tool that will hopefully be a lighter-weight, more streamline variation. I tried to slim down the tools and use only 1 js file, but that isn't the best idea due to me wanting to utilize forms on different pages. This lead me to not being able to fully utilize global variables. This one, I plan on laying everything out on 1 html page, 1 js file. I want to be able to hide all of the inputs when submitted and only display the metrics that matter. I also want to add a section to the displayed metrics that have an estimated v. actual in percent, estimated time to run at given user-input velocity v. estimated run time, completion date, calculate the total number of shifts to completion, and display how many rolls estimated v actual to be able to run per shift.

I'm still going by the estimations of 20 min per roll change and 5 min per gap runout. 

Time to get started, I have to research if having multiple forms with submit buttons can be a thing. 

I also want to add an export option to csv...I feel that could have some pros...we'll see. 