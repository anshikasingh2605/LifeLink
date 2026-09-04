import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { HelpCircle } from 'lucide-react';

function NotFound() {
  return (
    <div className="py-16 text-center space-y-4 max-w-md mx-auto">

      <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
        <HelpCircle className="w-8 h-8" />
      </div>

      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
        404
      </h1>

      <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
        Page not found.
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="pt-4">
        <Link to="/">
          <Button
            variant="primary"
            className="text-xs px-6 py-2.5"
          >
            Go Home
          </Button>
        </Link>
      </div>

    </div>
  );
}

export default NotFound;