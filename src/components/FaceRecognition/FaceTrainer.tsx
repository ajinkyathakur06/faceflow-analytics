
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, User, Save, X, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface CapturedPhoto {
  id: number;
  dataUrl: string;
}

const FaceTrainer = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [personName, setPersonName] = useState('');
  const [capturedPhotos, setCapturedPhotos] = useState<CapturedPhoto[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Create canvas element
    if (!canvasRef.current) {
      const canvas = document.createElement('canvas');
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
      canvasRef.current = canvas;
    }

    // Cleanup function to stop camera when component unmounts
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (canvasRef.current && document.body.contains(canvasRef.current)) {
        document.body.removeChild(canvasRef.current);
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 },
        audio: false,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast.error('Failed to access camera. Please make sure you have given camera permissions.');
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
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the current video frame to the canvas
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert canvas to data URL
    const dataUrl = canvas.toDataURL('image/jpeg');
    
    // Add to captured photos
    setCapturedPhotos(prev => [
      ...prev, 
      { id: Date.now(), dataUrl }
    ]);

    toast.success('Photo captured successfully!');
  };

  const deletePhoto = (id: number) => {
    setCapturedPhotos(prev => prev.filter(photo => photo.id !== id));
  };

  const clearAllPhotos = () => {
    setCapturedPhotos([]);
  };

  const trainFaceModel = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please capture at least 3 photos for better recognition');
      return;
    }

    if (!personName.trim()) {
      toast.error('Please enter a name for this person');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Here we would normally send the photos to a backend for training
      // This is a mock implementation - in a real app, you'd send the photos to your backend
      console.log(`Training model for ${personName} with ${capturedPhotos.length} photos`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(`Successfully trained model for ${personName}!`);
      
      // Reset form after successful training
      setPersonName('');
      setCapturedPhotos([]);
    } catch (error) {
      console.error('Error training model:', error);
      toast.error('Failed to train the model. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="person-name">Person Name</Label>
        <Input
          id="person-name"
          placeholder="Enter name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="relative w-full max-w-md aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shadow-md">
        {isCameraActive ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            
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

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button 
                onClick={capturePhoto}
                className="rounded-full w-14 h-14 flex items-center justify-center"
                size="icon"
              >
                <Camera className="w-6 h-6" />
              </Button>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Capture Photos</h3>
            <p className="text-gray-500 text-center mb-6">
              Capture multiple photos to train the face recognition model
            </p>
            <Button onClick={startCamera} className="w-full max-w-xs">
              Start Camera
            </Button>
          </div>
        )}
      </div>

      {capturedPhotos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Captured Photos</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllPhotos}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              Clear All
            </Button>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {capturedPhotos.map((photo) => (
              <div key={photo.id} className="relative group">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={photo.dataUrl} 
                    alt="Captured face" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button 
                  onClick={() => deletePhoto(photo.id)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {capturedPhotos.length > 0 && (
        <div className="pt-4">
          <Button 
            onClick={trainFaceModel} 
            className="w-full max-w-md"
            disabled={isProcessing || !personName.trim() || capturedPhotos.length === 0}
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Training...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Train Face Recognition Model
              </>
            )}
          </Button>
          <p className="text-xs text-gray-500 mt-2 text-center max-w-md">
            This will train the face recognition model to recognize this person. 
            Capture at least 3 photos for better results.
          </p>
        </div>
      )}
    </div>
  );
};

export default FaceTrainer;
