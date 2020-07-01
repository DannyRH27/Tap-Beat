View the [live site](https://tapbeat.herokuapp.com).

# TapBeat
DannyDash is an sound and animation project. Hit any key to get started!
<br/>
It was implemented using the following technologies:

+ **Frontend**: Javascript, Paper.js
+ **Backend**: Node.js, Express.js
+ **Others**: Howler.js

## Demo
<img src="https://dannydash-seeds.s3-us-west-1.amazonaws.com/ReadMe/Tappy.gif" width="1000">

## Code
```
<script type="text/paperscript" canvas="myCanvas">

  var canvas = document.getElementById("myCanvas");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.onresize = function(){ location.reload(); }

  if(window.innerWidth < 425) {prompt("Some mobile users may be unable to use this app \n sorry :\(")}

  var text = new PointText(new Point(canvas.width/2, canvas.height/2));
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = '4vw';
  text.content = 'Press some keys on your keyboard to get Funky!';

  var keyData = {
        q: {
            sound: new Howl({
              src: ['../sounds/bubbles.mp3']
            }),
            color: '#1abc9c'
        },
        w: {
            sound: new Howl({
              src: ['../sounds/clay.mp3']
            }),
            color: '#2ecc71'
        },
        e: {
            sound: new Howl({
              src: ['../sounds/confetti.mp3']
            }),
            color: '#3498db'
        },
        r: {
            sound: new Howl({
              src: ['../sounds/corona.mp3']
            }),
            color: '#9b59b6'
        },
            t: {
            sound: new Howl({
              src: ['../sounds/dotted-spiral.mp3']
            }),
            color: '#34495e'
        },
        y: {
            sound: new Howl({
              src: ['../sounds/flash-1.mp3']
            }),
            color: '#16a085'
        },
        u: {
            sound: new Howl({
              src: ['../sounds/flash-2.mp3']
            }),
            color: '#27ae60'
        },
        i: {
            sound: new Howl({
              src: ['../sounds/flash-3.mp3']
            }),
            color: '#2980b9'
        },
        o: {
            sound: new Howl({
                src: ['../sounds/glimmer.mp3']
            }),
            color: '#8e44ad'
        },
        p: {
            sound: new Howl({
              src: ['../sounds/moon.mp3']
            }),
            color: '#2c3e50'
        },
        a: {
            sound: new Howl({
              src: ['../sounds/pinwheel.mp3']
            }),
            color: '#f1c40f'
        },
        s: {
            sound: new Howl({
              src: ['../sounds/piston-1.mp3']
            }),
            color: '#e67e22'
        },
            d: {
            sound: new Howl({
              src: ['../sounds/piston-2.mp3']
            }),
            color: '#e74c3c'
        },
        f: {
            sound: new Howl({
              src: ['../sounds/prism-1.mp3']
            }),
            color: '#95a5a6'
        },
        g: {
            sound: new Howl({
              src: ['../sounds/prism-2.mp3']
            }),
            color: '#f39c12'
        },
        h: {
            sound: new Howl({
              src: ['../sounds/prism-3.mp3']
            }),
            color: '#d35400'
        },
        j: {
            sound: new Howl({
              src: ['../sounds/splits.mp3']
            }),
            color: '#1abc9c'
        },
        k: {
            sound: new Howl({
              src: ['../sounds/squiggle.mp3']
            }),
            color: '#2ecc71'
        },
        l: {
            sound: new Howl({
              src: ['../sounds/strike.mp3']
            }),
            color: '#3498db'
        },
        z: {
            sound: new Howl({
              src: ['../sounds/suspension.mp3']
            }),
            color: '#9b59b6'
        },
        x: {
            sound: new Howl({
              src: ['../sounds/timer.mp3']
            }),
            color: '#34495e'
        },
        c: {
            sound: new Howl({
              src: ['../sounds/ufo.mp3']
            }),
            color: '#16a085'
        },
        v: {
            sound: new Howl({
              src: ['../sounds/veil.mp3']
            }),
            color: '#27ae60'
        },
        b: {
            sound: new Howl({
              src: ['../sounds/wipe.mp3']
            }),
            color: '#2980b9'
        },
        n: {
            sound: new Howl({
                src: ['../sounds/zig-zag.mp3']
            }),
            color: '#8e44ad'
        },
        m: {
            sound: new Howl({
              src: ['../sounds/moon.mp3']
            }),
            color: '#2c3e50'
        }
    }


    var circles = [];

    function onKeyDown(event) {
        if(keyData[event.key]) {
          var maxPoint = new Point(view.size.width, view.size.height);
            var randomPoint = Point.random();
            var point = maxPoint * randomPoint;
            var newCircle = new Path.Circle(new Point(point), 500);
            newCircle.fillColor = keyData[event.key].color;
            keyData[event.key].sound.play();
            circles.push(newCircle);
            text.content = " ";
        }
    }

    function onFrame(event){
        for(var i=0; i < circles.length; i++){
            circles[i].fillColor.hue += 1;
            circles[i].scale(.9);
            if(circles[i].area < 1){
                circles[i].remove();

                circles.splice(i, 1);

                console.log(circles);
            }
        }
    }
</script>
```

## Contact
+ Danny Huang: 
[Github](https://github.com/DannyRH27) 
[LinkedIn](https://www.linkedin.com/in/dannyrhuang/)