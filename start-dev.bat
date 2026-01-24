@echo off
echo Starting MMGroup development server...
echo.
echo IMPORTANT: Dev server will start on http://localhost:4321
echo Press Ctrl+C to stop the server
echo.

set ASTRO_TELEMETRY_DISABLED=1
node node_modules/astro/astro.js dev
