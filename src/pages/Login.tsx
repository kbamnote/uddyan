import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const GOOGLE_CLIENT_ID = '24659698234-i306g9ap504nbv5rh2tnuinoqu2tm1ku.apps.googleusercontent.com';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { login, register, googleLogin, error, user } = useAuth();
  const navigate = useNavigate();
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false,
  });
  const [localError, setLocalError] = useState('');

  // If user is already logged in, redirect them
  useEffect(() => {
    if (user && !isSubmitted) {
      navigate('/');
    }
  }, [user, navigate, isSubmitted]);

  // Google Sign-In callback
  const handleGoogleCallback = useCallback(async (response: { credential: string }) => {
    if (response.credential) {
      const success = await googleLogin(response.credential);
      if (success) {
        setIsSubmitted(true);
      }
    }
  }, [googleLogin]);

  // Load Google Identity Services SDK and render button
  useEffect(() => {
    if (isSubmitted || user) return;

    const initializeGoogle = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleCallback,
        });

        if (googleButtonRef.current) {
          googleButtonRef.current.innerHTML = '';
          window.google.accounts.id.renderButton(googleButtonRef.current, {
            theme: 'outline',
            size: 'large',
            width: '100%',
            text: isLogin ? 'signin_with' : 'signup_with',
            shape: 'rectangular',
          });
        }
      }
    };

    // Check if the script is already loaded
    if (window.google?.accounts?.id) {
      initializeGoogle();
      return;
    }

    // Load the script
    const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogle;
      document.head.appendChild(script);
    } else {
      // Script exists but hasn't loaded yet — wait for it
      existingScript.addEventListener('load', initializeGoogle);
    }
  }, [isSubmitted, user, isLogin, handleGoogleCallback]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    
    let success = false;
    if (isLogin) {
      success = await login(formData.email, formData.password);
    } else {
      success = await register(formData.name, formData.email, formData.password);
    }

    if (success) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/images/hero-bg.jpg"
          alt="Plants"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5a7c5a]/80 to-[#5a7c5a]/40" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-white text-center">
            <h1 className="font-serif text-5xl mb-6">Welcome to Uddyan</h1>
            <p className="text-xl text-white/90 max-w-md">
              Join our community of plant lovers and discover the joy of effortless plant care.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {isSubmitted ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-serif text-3xl text-gray-900 mb-4">
                {isLogin ? 'Welcome Back!' : 'Account Created!'}
              </h2>
              <p className="text-gray-600 mb-8">
                {isLogin
                  ? 'You have successfully logged in. Redirecting to your account...'
                  : 'Your account has been created successfully. Welcome to the Uddyan family!'}
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors"
              >
                Continue to Home <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex mb-8 border-b">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 pb-4 text-center font-medium transition-colors ${isLogin
                      ? 'text-[#5a7c5a] border-b-2 border-[#5a7c5a]'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 pb-4 text-center font-medium transition-colors ${!isLogin
                      ? 'text-[#5a7c5a] border-b-2 border-[#5a7c5a]'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  Create Account
                </button>
              </div>

              <h2 className="font-serif text-3xl text-gray-900 mb-2">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-gray-600 mb-8">
                {isLogin
                  ? 'Welcome back! Please enter your details.'
                  : 'Join our community of plant lovers today.'}
              </p>

              {(error || localError) && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md text-sm">
                  {error || localError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                      className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 mt-0.5 accent-[#5a7c5a]"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/" className="text-[#5a7c5a] hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/" className="text-[#5a7c5a] hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 accent-[#5a7c5a]" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <Link to="/" className="text-sm text-[#5a7c5a] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-[#5a7c5a] text-white font-medium rounded-lg hover:bg-[#4a6a4a] transition-colors"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Google Sign-In */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div ref={googleButtonRef} id="google-signin-button" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
