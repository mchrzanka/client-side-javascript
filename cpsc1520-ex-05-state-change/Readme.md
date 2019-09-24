# CPSC1520 Javascript


## Changing State Using if then else conditions

One of the most fundamental structures in any UI operation is changing one visual element between visual states. For example, click a button and a window opens click the same button the window closes.

In this example we will practice the skill of changing state to turn visual elements in the dom on and off. To accomplish this we use the same logical programming structure.

#### Use Case

Imagine we have a website that has a video embedded on the page. The default state for the video is that it isn't playing. We have provided the end user of the site with a button that our UI developer has created for us that should signify to the end user that by clicking the button the video they want to view will start playing.

So we create a variable that is representative of the state of the video and give it a good semantic name to help out other Javascript developers that might have to work with our code. In this case false means the video isn't playing. This is a state variable.

```javascript
   // isPlaying represents the state of play of the video
   let isPlaying = false;
```

Next we need to find a way of toggling between the two states true and false so that when the button is clicked then end user can start and stop the video. 

The start and stop video action will would be written in Javascript code but for the sake of example were just going to use a console log statement. 

We are going to use a conditional  if then else statement to help with the branching logic.

```javascript
   // isPlaying represents the state of play of the video
   let isPlaying = false;


   if(isPlaying === false){
      //turn on the video
      console.log("turn the video on")
      isPlaying=true;
   }else{
       //turn of the video
      console.log("turn the video off")
      isPlaying=false;

   }
```

To use this structure as a toggle to perform an on off state change you:
+ create a state variable to represent the initial state
+ create an if then else conditional statement.
+ in the true block perform the action you want and switch the state variable to the opposite value. 
+ in the false block perform the opposite action and change the state variable.

In our video example were just logging out to the console the action we would like to perform. In reality this would be the Javascript you would write.

In this example your going to practice this skill of using a state variable along with a conditional statement.

## Exercise
Use a state logic to turn the password field from type equal to password to type equal to text. Once you have accomplished this then switch the image icon to reflect that the password is shown or hidden. 

```html
    <div class="card-control">
        <img id="icon" src="img/show.svg" alt="credit card icon" />
        <input
            id="user-password"
            type="password"
            placeholder="enter password"
        />
    </div>
```

 
 

