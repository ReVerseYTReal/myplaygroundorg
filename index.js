// Catch uncaught JavaScript errors
window.addEventListener("error", (event) => {
    console.error("Caught error:", event.message);

    // Optional: check error type here
    // If you want to ignore certain errors, add conditions
    window.location.href = "/500.html";
});

// Catch unhandled promise rejections (e.g., fetch failures)
window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);

    // Only redirect if error is not 404
    if (event.reason?.status !== 404) {
        window.location.href = "/500.html";
    }
});
