import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

export default function FacialExpression() {
    const videoRef = useRef();

    const loadModels = async () => {
        const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };
    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })  //get permission
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => console.error("Error accessing webcam: ", err));
    };

    async function detectMood() {
        const detections = await faceapi
            .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions();

        if (!detections || detections.length === 0) {
            console.log("No faces detected");
            return;
        }

        const mood = detections[0].expressions.asSortedArray()[0].expression;

        console.log(mood);
    };

    useEffect(() => {

        loadModels().then(startVideo);

    }, []);

    return (
        <div className="h-2/6 w-full flex justify-center gap-8 items-center">
            <video
                ref={videoRef}
                autoPlay
                muted
                className="w-75 h-55 object-cover rounded-4xl border border-[#2e2e2e] "
            />
            <button onClick={detectMood} className="px-4 py-2 bg-[#4a4a4a] text-white rounded-lg hover:bg-[#6a6a6a] transition duration-300 cursor-pointer active:scale-95">
                Detect Mood
            </button>
        </div>
    );
}
