Welcome to Complimenter!

Super rough project, but I was able to figure out how to use an API to do something.
In this case, I'm using the Twilio API to send text messages. Since I am using API calls to receive data, there is no local database that I'm using, all the data is pulled from the message log of my Twilio account. 

So filling out the form with all the fields (except keep my phone number in the "number to compliment" or it won't work as I am on a trial account) and click "send compliment" will send me a text in this format: 
{your name} says: {person to compliment} is {your compliment}. unless you put "You" in the "person to compliment," then it says:
You are {your compliment}

I could not figure out how to get the page to do the "react reload" where it doesn't do a FULL reload, I tried using useEffect() and useDispatch() in ListCompliments.js but the only thing I got it to do was constantly reload... so manual window.location.reload() it is!

