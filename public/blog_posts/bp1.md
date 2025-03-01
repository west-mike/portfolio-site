
The core functionality of my ongoing project, [Audiolyze](/projects/[p1]) is annotating a visual time-based representation of an audio file. Rather than just having a basic timeline with annotations at certain time intervals, I decided it would be visually appealing for the user to see and interact with a waveform visualization of the audio, similar to the [Soundcloud](https://www.soundcloud.com) player. I did some research and found the great project [Wavesurfer](https://wavesurfer.xyz/), as well as [svelte-audio-waveform](https://github.com/Catsvilles/svelte-audio-waveform), but I realized that due to the amount of manipulation I need to do to the waveform, it's probably best if I build my own. I found [this tutorial by Matthew Ström](https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/) on visualizing a waveform with vanilla JS incredibly helpful and a great starting point. You can find my code [here](https://github.com/west-mike/svelte-playground/tree/master/src/routes/waveform-visualizer). Lastly, this code is not perfect, this is just a rough starting point, but I learned a ton from doing this and wanted to share.

<br>


## Dev Environment and Project Structure  

<br>

I built this in my Svelte playground, which is just a simple Svelte 5 project with TailwindCSS and TypeScript. The +page.svelte file for the waveform-visualizer route contains all of the code I used in a single file. If you're confused by any of that or have no idea where to start, I recommend [checking out these docs](https://svelte.dev/docs/kit/creating-a-project).

<br>

## Reading in an Audio File

<br>  

In order to analyse audio, we need to convert the file into something the browser can understand. Fortunately, the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) provides all of the necessary tooling for us, built into the browser and available almost everywhere. The API, for our purposes, functions as an interconnected graph of audio modules that can do a variety of things like provide current playback time and info, play the song through output, and even generate audio. This is all controlled via an [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) interface, which serves to manage and link all of our modules together. Besides basic playback, we also need to get frequency information, which is available via the [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) class. The first bit of code we'll need is initializing our audio context, and then creating an analyser node and linking it to the graph. **NOTE:** I will be wrapping most of the initialization code in Svelte's `onMount` function since the context setup and audio decoding needs to happen as soon as the page is loaded.
```typescript
<script lang="ts">
let audioContext: AudioContext;
let analyserNode: AnalyserNode | null = null;
onMount(async () => {
    // initialize audio context
    audioContext = new AudioContext();
    // create analyser node
    // this will stick around and we will use it to link to destination for audio
    analyserNode = audioContext.createAnalyser();
    analyserNode.connect(audioContext.destination);
});
</script>
```
Now we need to actually read in a file, I'll be using a song I made for a project on AI-assisted music generation called Netkick, but you can change the file path to whatever you desire. To get the file, I just used `fetch`, hence why our `onMount `function needs to be `async`, so it can wait for `fetch` to finish. Once fetch has returned, we need to read in the file data, and store it into an `ArrayBuffer` so we can pass it into the decoding stage. The decoding stage is handled by our audio context object via `audioContext.decodeAudioData(ArrayBuffer)`, and this creates an `AudioBuffer` interface for us, which stores the asset in memory, allowing us to pass it into other modules and nodes within our context to perform operations.
```typescript
// fetch the file from static dir 
const file_fetch_resp = await fetch('netkick.wav');
if (!file_fetch_resp.ok) {
    throw new Error(`HTTP error! status: ${file_fetch_resp.status}`);
}
// read the file into an array buffer
const file_array_buffer = await file_fetch_resp.arrayBuffer();
// decode the audio data from the array buffer
audioBuffer = await audioContext.decodeAudioData(file_array_buffer);
// set duration
duration = audioBuffer.duration;
```

<br>

## Handling Playback
Now that our onMount function has run and our AudioContext is initialized with our audio read into an AudioBuffer object, we can do many things, including playing, pausing, and restarting our audio. Play/Pause functionality revolves around the creation of [AudioBufferSourceNodes](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode) which are basically single-fire modules that read in an audio buffer and connect to an output node, in this case our analyser node. Every time we restart playback, we need to create a new source node. While playing, our AudioContext graph would look something like this PlaybackNode(audio buffer) -> AnalyserNode -> speaker output.
```typescript
function handlePause() {
    if (!audioPlaybackNode) return;
    // store the current time so we can resume playback
    currentTime = audioContext.currentTime;
    // stop playing
    audioPlaybackNode?.stop();
}
function handlePlay() {
    // create a new node for playback and assign the audioBuffer to it
    audioPlaybackNode = audioContext.createBufferSource();
    audioPlaybackNode.buffer = audioBuffer;
    // connect to the audioContext graph
    audioPlaybackNode.connect(analyserNode);
    // if currentTime > 0, it's used as offset
    audioPlaybackNode.start(0, currentTime);
}
function handleStop() {
    if (!audioPlaybackNode) return;
    // set to 0 so next playback will start at beginning
    currentTime = 0;
    audioPlaybackNode?.stop();
}
```
We can assign these functions to some buttons to easily control playback
```html
<button class="bg-green-400" onclick={handlePlay}>Play</button>
<button class="bg-sky-400" onclick={handlePause}>Pause </button>
<button class="bg-red-400" onclick={handleStop}>Stop </button>
```

<br>

## Drawing a Waveform
I'll explain how to draw a waveform in two ways, first with random peak heights, and then with the actual audio frequencies. The first method is how I learned to use the HTML `<canvas>` component to render the waveform. A canvas is exactly what it sounds like, a place for us to render draw commands using turtle graphics (anyone else remember Scratch??). In order to point Svelte towards which canvas tag to modify when we reference it, we need to store a canvas object and then bind the canvas tag to it.
```typescript
let canvas: HTMLCanvasElement;
<canvas bind:this={canvas}></canvas>
```
Much like we control audio through the audio context, we control the canvas via it's context element. Using the context, we can set properties such as color (strokeStyle) and width, and then give it a path assignment which is basically a series of draw commands. For drawing a random waveform, it's super easy, the turtle (it's invisible) should go up and down a random height, and then move a pre-determined number of steps in the x-direction and repeat the process. The step interval is how dense we want our waveform to be and later on, how many audio samples we need to calculate and store. For the random waveform I just used 250
```typescript
function drawBasicWaveform() {
    // if no canvas object or context, return to escape errors
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // set dimension variables
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    // style settings
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    // this variable controls what x coordinate to draw the vertical line at
    let curX: number = 0;
    // let's draw 250 lines of variable heights
    for (let i = 1; i < 251; i++) {
        // get random height
        const y = (Math.random() * canvasHeight) / 2;
        // move to next x coordinate, height/2 is middle of canvas
        ctx.moveTo(curX, canvasHeight / 2);
        // draw up
        ctx.lineTo(curX, y);
        // reset to middle
        ctx.moveTo(curX, canvasHeight / 2);
        // draw down
        ctx.lineTo(curX, canvasHeight - y);
        // update for next x
        curX = (canvasWidth / 250) * i;
        // render the line
        ctx.stroke();
    }
}
// simple example of how to include this
<button onclick={drawBasicWaveform}>Draw Random Waveform</button>
<canvas bind:this={canvas} class="waveform-canvas bg-gray-200"></canvas>
```
Now all we have to do to draw the actual audio data is slightly modify this code. Audio is stored in several different channels, but stepping through a multi-dimensional array would signficantly increase our time complexity and wouldn't add any functional benefit, so we need to reduce our audioBuffer into one dimension. I just accessed the 1st channel, which should have all the data we need, via `audioBuffer.getChannelData(0)`. Next, we need to decide the density of our waveform, or how roughly we want to approximate the actual shape. We can't map every amplitude in our channel data, as that would result in 1000s of lines and not only wouldn't be very parsable visually, but would take the rest of our mortal lifetimes to render in the browser. By defining a bucket size, we can group our data and approximate the amplitude by taking every *b*-th frequency, where b is the step interval defined by `Math.floor(data.length / bucketSize)`. Finally, the last major step is to map amplitude to height, which we can do by multiplying it by the height of our canvas, dividing everything by 2 since we want to draw the top or bottom half only. Below is the code for rendering the waveform of our audio file.
```typescript
function drawAudioFileWaveForm() {
    // return if no audio or canvas
    if (!canvas || !audioBuffer) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const bucketSize = 250;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // just use 0th channel
    const data = audioBuffer.getChannelData(0);
    // step is the x-direction step, e.g. how many samples to skip in between
    const step = Math.floor(data.length / bucketSize);
    // style
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();

    let curX = 0;
    for (let i = 0; i < bucketSize; i++) {
        // get index to access data array from
        const idx = i * step;
        // amplitude at the index
        const amplitude = data[idx];
        // y offset is the amplitude scaled to the canvas height
        const yOffset = ((amplitude + 1) / 2) * (canvasHeight / 2);
        // draw the line
        ctx.moveTo(curX, canvasHeight / 2);
        ctx.lineTo(curX, canvasHeight / 2 - yOffset);
        ctx.moveTo(curX, canvasHeight / 2);
        ctx.lineTo(curX, canvasHeight / 2 + yOffset);
        // move x proportionally to ensure even spacing between lines/take up entire canvas
        curX = (canvasWidth / bucketSize) * (i + 1);
        ctx.stroke();
    }
}
```

<br>

## Conclusion
I hope you found this writeup helpful, or at least interesting. I implemented a lot of other features as well, but for brevity's sake I'll save those for future blog posts and link them down below once they're posted. Stay tuned for the pre-alpha of Audiolyze!