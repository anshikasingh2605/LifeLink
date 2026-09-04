import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import Button from './Button';

function ErrorMessage({
  title = 'Unable to connect',
  message = 'Something went wrong while connecting to the server. Please try again.',
  onRetry
}) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center my-6 space-y-4">

      <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-red-600 flex items-center justify-center">
        <AlertCircle className="w-6 h-6" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">
          {title}
        </h3>

        <p className="text-xs text-gray-600 mt-1 max-w-md mx-auto">
          {message}
        </p>
      </div>

      {onRetry && (
        <div className="pt-2">

          <Button
            onClick={onRetry}
            variant="secondary"
            className="space-x-2 text-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </Button>

        </div>
      )}

    </div>
  );
}

export default ErrorMessage;