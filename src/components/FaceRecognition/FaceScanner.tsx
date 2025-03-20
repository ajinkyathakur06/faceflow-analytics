
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, User, X, CheckCheck } from 'lucide-react';
import FaceScannerAnimation from './FaceScannerAnimation';

const FaceScanner = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [isRecognized, setIsRecognized] = useState(false);
  const [userName, setUserName] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Cleanup function to stop camera when component unmounts
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    
    setIsCameraActive(false);
    setIsRecognizing(false);
    setIsRecognized(false);
    setUserName('');
  };

  const startRecognition = () => {
    setIsRecognizing(true);
    
    // Simulate face recognition process
    setTimeout(() => {
      setIsRecognizing(false);
      setIsRecognized(true);
      setUserName('John Doe');
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-md aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-6">
        {isCameraActive ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            
            {isRecognizing && <FaceScannerAnimation />}
            
            {isRecognized && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center animate-scale-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Recognition Successful</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-lg">{userName}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    Attendance marked successfully.
                  </p>
                  <Button onClick={stopCamera} className="mt-2">
                    Done
                  </Button>
                </div>
              </div>
            )}
            
            <div className="absolute top-4 right-4">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white"
                onClick={stopCamera}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Face Recognition</h3>
            <p className="text-gray-500 text-center mb-6">
              Position your face in the camera frame to mark your attendance.
            </p>
            <Button onClick={startCamera} className="w-full">
              Start Camera
            </Button>
          </div>
        )}
      </div>

      {isCameraActive && !isRecognizing && !isRecognized && (
        <Button 
          onClick={startRecognition} 
          className="bg-blue-600 hover:bg-blue-700"
        >
          Recognize Face
        </Button>
      )}
    </div>
  );
};

export default FaceScanner;
