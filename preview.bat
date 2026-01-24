@echo off
echo Building and previewing MMGroup site...
echo.

set ASTRO_TELEMETRY_DISABLED=1
node node_modules/astro/astro.js build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Starting preview server on http://localhost:4321
    echo Press Ctrl+C to stop
    echo.
    node node_modules/astro/astro.js preview
) else (
    echo.
    echo Build failed!
    pause
)
