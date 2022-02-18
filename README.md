# Color-Picker

This has been a really fun project. It relies on thecolorapi.com for all of the data, and is my first solo project that utilizes an API. 

There were three big challenges with this project. <br/>
**1. Setting up the fetch call**<br/>
   Initially, I tried to use a template string as the url. This would have worked but I was accidently passing in a # with the hexcode and it was throwing the whole thing
  into an error. So instead, I built out a createUrl function that made the url for me. This is where I found out about the #, and eventually got it working.
  In a refactor, I got it to work with a template string which felt like a huge win because that was my initial idea.
  
**2. Click to Copy**<br/>
  Click to copy was a ton of fun to implement and figure out. I really enjoyed the research process and was so thankful to take it piece by piece until it worked.<br/>
**3. Copied to clipboard modal**<br/>
  This was fun to figure out. I began with an alert and didn't like that functionality so I looked at how coolors.co implemented it and built mine in a similar way. This was my first time building a modal and I really like the animation.
  
All in all this was a great project and I'm very happy with how it turned out. I learned so much in making it and am looking forward to the continued learning that 
will come next time I get to work with an API.
