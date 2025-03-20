
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AuthForm from '@/components/AuthForm';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const handleLogin = (data: any) => {
    console.log('Login data:', data);
    // Here you would typically handle authentication
    // For demo purposes, let's show a toast notification
    toast({
      title: 'Login Successful',
      description: 'Welcome back! Redirecting to dashboard...',
    });

    // Redirect to dashboard (would typically happen after successful auth)
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-40"></div>
      </div>
      
      <div className="pt-32 pb-20 px-6 flex items-center justify-center relative z-10">
        <div className="w-full max-w-md">
          <AuthForm type="login" onSubmit={handleLogin} />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
