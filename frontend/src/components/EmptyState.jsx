import React from 'react';
import { Droplet } from 'lucide-react';
import Button from './Button';

function EmptyState({
  title = 'No donors found',
  message = "We couldn't find a matching donor. Try another blood group or city.",
  icon: Icon = Droplet,
  actionText,
  onAction
}) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 p-12 text-center my-6 space-y-4">

      <div className="w-14 h-14 mx-auto rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
        <Icon className="w-7 h-7" />
      </div>

      <div className="space-y-1">

        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          {message}
        </p>

      </div>

      {onAction && actionText && (
        <div className="pt-2">

          <Button
            onClick={onAction}
            variant="secondary"
            className="text-xs"
          >
            {actionText}
          </Button>

        </div>
      )}

    </div>
  );
}

export default EmptyState;