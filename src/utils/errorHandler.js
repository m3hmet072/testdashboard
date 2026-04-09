/**
 * Global error handler for known non-fatal errors
 * Suppresses Supabase BroadcastChannel initialization errors that don't affect functionality
 */

// Store original error handlers
const originalOnError = window.onerror;
const originalOnUnhandledRejection = window.onunhandledrejection;

/**
 * List of error patterns that are safe to suppress
 * These are non-fatal errors that don't affect app functionality
 */
const SUPPRESSIBLE_ERRORS = [
  /No Listener.*tabs:outgoing\.message\.ready/i,
  /BroadcastChannel.*not available/i,
  /Cannot read property.*BroadcastChannel/i,
];

/**
 * Check if an error should be suppressed
 */
const shouldSuppressError = (message) => {
  if (!message) return false;
  return SUPPRESSIBLE_ERRORS.some((pattern) => pattern.test(String(message)));
};

/**
 * Global error handler
 */
window.onerror = function (message, source, lineno, colno, error) {
  if (shouldSuppressError(message)) {
    console.debug(`[Suppressed non-fatal error]: ${message}`);
    return true; // Suppress the error
  }
  if (typeof originalOnError === "function") {
    return originalOnError.call(this, message, source, lineno, colno, error);
  }
  return false;
};

/**
 * Unhandled promise rejection handler
 */
window.onunhandledrejection = function (event) {
  const message = event.reason instanceof Error ? event.reason.message : String(event.reason);
  if (shouldSuppressError(message)) {
    console.debug(`[Suppressed non-fatal rejection]: ${message}`);
    event.preventDefault();
    return;
  }
  if (typeof originalOnUnhandledRejection === "function") {
    return originalOnUnhandledRejection.call(this, event);
  }
};

export { shouldSuppressError };
