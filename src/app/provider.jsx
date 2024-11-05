import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { MainErrorFallback } from '@/components/errors/main';
import Spinner from '@/components/ui/spinner/spinner';
import { AnimatePresence } from "framer-motion";

export const AppProvider = ({ children }) => {
    return (
      <React.Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
          <HelmetProvider>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
          </HelmetProvider>
        </ErrorBoundary>
      </React.Suspense>
    );
  };