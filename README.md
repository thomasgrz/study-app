# study-app 
This app is based off a studying method known as the Pomodoro Technique. 
See more about that studying technique and it's many benefits <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">here</a> 

HOW TO USE:
Step 1: 
Clone the repository.

Step 2:
Navigate to the tmp directory.

Step 3:
Launch a simple web server (python recommended)
For Python 2.x.x., while in the tmp directory, enter "python -m SimpleHTTPServer" to launch the application 

For Python 3.x.x., while in the tmp directory, entery "python3  -m http.server" to launch the application

Note: the timer is sped up to 10 milliseconds instead of 1 second to allow for easy editing and realization of any logic faults quickly.

Step 4:
If you don't care for the wiki article explaining the Pomodoro Techniqe, linked above, click the About button within the study-app and it will guide you through the process!

PRO TIP:
If you would like to simply demo the app (faster than real time) go to timer.js within the tmp directory and then change the INTERVAL_RATE variable to a more reasonable rate than one second like 1 millisecond!
