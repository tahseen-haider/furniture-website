import { AlertCircle } from 'lucide-react';
import { BWButton, Divider } from '@components';

const AuthForm = ({ onSubmit, pending, error, submitText, children }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}

      <Divider className="pt-4" />

      {error && (
        <div className="flex items-center gap-2 rounded-md border border-red-500 bg-red-50 px-4 py-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      <BWButton
        buttonType="submit"
        disabled={pending}
        text={pending ? 'Please wait...' : submitText}
        className="text-base! w-full rounded-sm py-2 disabled:opacity-50"
      />
    </form>
  );
};

export default AuthForm;
