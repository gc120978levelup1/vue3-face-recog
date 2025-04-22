<script setup lang="ts">
import { ref } from 'vue';
import * as faceapi from 'face-api.js';

// define the event handlers
// used as output
// example
const emit = defineEmits([
    'onTrainingDone',
    'onMatchFace',
]);

// define input ref variables
// example
const props = defineProps([
    'video',
    'canvas2',
])

// code starts here ////////////////////////////////////////////////////////////////////////////////

// refs
const faceDatabaseAPI = ref(null);
const displaySize = { width: props.canvas2.width, height: props.canvas2.height };

// for exposed function
const loadModels = () => {
  faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
  faceapi.nets.faceRecognitionNet.loadFromUri("/models");
  faceapi.nets.faceLandmark68Net.loadFromUri("/models");
};

// training time for database stored faces
// internal function
const getLabeledFaceDescriptions = (xtraining_data) => {
  const faces = xtraining_data;
  const labeledFaces = [];
  faces.map(async (face) => {
    const descriptions = [];
    face.images.map(async (image) => {
      const img = await faceapi.fetchImage(image); // image can be any image link URL even if residing in other server
      const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
      // console.log(URL,' xxxx ',detections); // checking of individual face database
      if (detections) descriptions.push(detections.descriptor);
    });
    let ret = new faceapi.LabeledFaceDescriptors(face.name, descriptions);
    labeledFaces.push(ret);
  });
  return labeledFaces;
};

// for exposed function with input xtraining_data
// emit onTrainingDone (labeledFaceDescriptors = xLabeledFaces)
const trainFaceMatching = (xtraining_data) => {
  //console.log("Loading models .... DONE!");
  //console.log("");

  //console.log("Start training .... ");
  // Start Training Face Detection from Faces stored in face database
  const labeledFaceDescriptors = getLabeledFaceDescriptions(xtraining_data);
  faceDatabaseAPI.value = new faceapi.FaceMatcher(labeledFaceDescriptors);

  //console.log(
  //  "Start initialize drawing canvas2 dimensions for facematching.... "
  //);
  //initialize drawing canvas2 dimensions for facematching
  //const canvas2 = faceapi.createCanvasFromMedia(video);
  //document.body.append(canvas2); // spawn a canvas2
  //faceapi.matchDimensions(canvas2, displaySize);
  //console.log(
    //"End initialize drawing canvas2 dimensions for facematching.... DONE"
  //);
  //console.log("");

  //console.log("I am now actively looking for faces..... :)");
  // Start of every 100ms interval

  // End of every 100ms interval
  //console.log("End of Program....");
  /////////////////////////////////////////////////////////////////////////////////////// emit onTrainingDone (labeledFaceDescriptors)
  emit("onTrainingDone", labeledFaceDescriptors);
}

// for exposed function with input xLabeledFace
const obtainFaceMatchingData = (xlabeledFaceDescriptors) => {
  //console.log("Loading models .... DONE!");
  //console.log("");

  //console.log("Start data .... ");
  const labeledFaceDescriptors = xlabeledFaceDescriptors;
  faceDatabaseAPI.value = new faceapi.FaceMatcher(labeledFaceDescriptors);

  //console.log(
    //"Start initialize drawing canvas2 dimensions for facematching.... "
  //);
  //initialize drawing canvas2 dimensions for facematching
  //const canvas2 = faceapi.createCanvasFromMedia(video);
  //document.body.append(canvas2); // spawn a canvas2
  //faceapi.matchDimensions(canvas2, displaySize);
  //console.log(
    //"End initialize drawing canvas2 dimensions for facematching.... DONE"
  //);
  //console.log("");

  //console.log("I am now actively looking for faces..... :)");
  // Start of every 100ms interval

  // End of every 100ms interval
  //console.log("End of Program....");
}

// for exposed function
// emit onMatchFace (face_label)
const startFaceMatching = () => {
  setInterval(async () => {
    // detect a face from the webcam //////
    const detections = await faceapi.detectAllFaces(props.video).withFaceLandmarks().withFaceDescriptors();

    // resize detected face to match canvas2 dimensions
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    props.canvas2.getContext("2d").clearRect(0, 0, props.canvas2.width, props.canvas2.height); // just clearing the screen/canvas2

    // for each face detected find a match from the stored face Database
    const recognizedFaces = resizedDetections.map((detectedFace) => {
      return faceDatabaseAPI.value.findBestMatch(detectedFace.descriptor);
    });

    // lets peek at the results // dere mubutang og emit/event handling
    if (recognizedFaces[0]) {
      console.log("Name ", recognizedFaces[0].label);
      console.log("Distance ", recognizedFaces[0].distance);
      ///////////////////////////////////////////////////////////////////////////////////////// emit onMatchFace
      emit('onMatchFace', recognizedFaces[0]);
    }

    // mark on screen the results
    recognizedFaces.forEach((recognizedFace, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: recognizedFace,
      });
      drawBox.draw(props.canvas2);
    });
  }, 100);
}

// code ends here ////////////////////////////////////////////////////////////////////////////////

// define functions that can be called from outside
// used as input
defineExpose({
    loadModels,
    trainFaceMatching,
    obtainFaceMatchingData,
    startFaceMatching,
});

</script>

<template>
    <div class="relative" v-show="false">
        Hello this is me!
    </div>
</template>