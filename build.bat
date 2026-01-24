@echo off
echo Building MMGroup site for production...
echo.

set ASTRO_TELEMETRY_DISABLED=1
node node_modules/astro/astro.js build

echo.
echo Build complete! Files are in dist/ folder
echo.
pause
