import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  // Global error handler
  window.addEventListener('error', (event) => {
    console.error("Global Error Caught:", event.error);
    renderError(event.error?.message || "Unknown global error");
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error("Unhandled Rejection:", event.reason);
    renderError(event.reason?.message || "Unhandled promise rejection");
  });

  // Safety Timeout: Increase to 8 seconds for production cold starts
  const safetyTimeout = setTimeout(() => {
    if (rootElement.innerText === "Initializing...") {
       console.warn("App initialization timed out.");
       // Only render error if it's truly stuck, usually Vite app mounts faster than this
       renderError("Application timed out during startup. Check console for details.");
    }
  }, 8000);

  function renderError(msg: string) {
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="height: 100vh; display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif; text-align: center; flex-direction: column; padding: 20px;">
            <h2 style="font-size: 24px; margin-bottom: 16px; color: #ef4444;">Startup Error</h2>
            <p style="color: #9ca3af; max-width: 500px;">${msg}</p>
            <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; border: none; border-radius: 4px; color: white; cursor: pointer;">Retry</button>
        </div>
      `;
    }
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // Clear timeout if render call succeeds (though actual paint is async, this means JS didn't crash immediately)
    clearTimeout(safetyTimeout);
  } catch (error: any) {
    console.error("Failed to mount React application:", error);
    renderError(error.message);
  }
}