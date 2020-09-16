const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Promt to select a Media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStreeam = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStreeam;
        videoElement.onloadedmetadata = () => videoElement.play();

    } catch (error) {
        console.log('whoops, error here', error)
    }
}

button.addEventListener('click', async() => {
    //Disable Button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});


//onLoad
selectMediaStream();