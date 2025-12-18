import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { AuthLayout } from '@templates';
import { Input, AuthForm, Paragraph } from '@components';
import { useAuthPending } from '@hooks';

const LoginPage = () => {
  const { pending, error, setError, start, stop } = useAuthPending();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = { email: '', password: '' };

    if (!email) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email';

    if (!password) nextErrors.password = 'Password is required';
    else if (password.length < 8) nextErrors.password = 'Minimum 8 characters';

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      return;
    }

    start();

    try {
      await new Promise((r) => setTimeout(r, 1500));
    } catch {
      setError('Invalid email or password');
    } finally {
      stop();
    }
  };

  return (
    <AuthLayout
      title="Sign In"
      subtitle="Log in with your account"
      footer={
        <div className="space-y-2 text-sm w-full">
          <div className="flex gap-4 w-full justify-center">
            <Paragraph variant="H" className="text-gray-500">
              Don't have an account?
            </Paragraph>
            <Link to="/signup" className="underline font-medium">
              Sign Up
            </Link>
          </div>
          <div className="flex justify-center gap-2">
            {/* <Link to="/reset-password" className="underline">
              Forgot password?
            </Link>
            <Paragraph variant="H" className="text-gray-400">
              •
            </Paragraph> */}
            <Link to="/verify-email" className="underline">
              Verify your email address
            </Link>
          </div>
        </div>
      }
    >
      <AuthForm onSubmit={handleSubmit} pending={pending} error={error} submitText="Sign In">
        <Input
          placeholder="Email address"
          value={email}
          onChange={(v) => {
            setEmail(v);
            setErrors((e) => ({ ...e, email: '' }));
          }}
          disabled={pending}
          error={errors.email}
        />

        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(v) => {
              setPassword(v);
              setErrors((e) => ({ ...e, password: '' }));
            }}
            disabled={pending}
            error={errors.password}
            inputClassName="pr-12"
          />

          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute top-7 -translate-y-1/2 right-4 text-gray-500 hover:text-black"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </AuthForm>
    </AuthLayout>
  );
};

export default LoginPage;
