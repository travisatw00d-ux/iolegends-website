@echo off
setlocal enabledelayedexpansion

:: Check for .env file with CLOUDFLARE_API_TOKEN
if exist ".env" (
    for /f "tokens=1,* delims==" %%a in (.env) do (
        if "%%a"=="CLOUDFLARE_API_TOKEN" set "CLOUDFLARE_API_TOKEN=%%b"
    )
)

if "%CLOUDFLARE_API_TOKEN%"=="" (
    echo No CLOUDFLARE_API_TOKEN found in .env file.
    echo.
    echo Create a .env file in this directory with:
    echo   CLOUDFLARE_API_TOKEN=your_token_here
    echo.
    echo Get a token at: https://dash.cloudflare.com/profile/api-tokens
    pause
    exit /b 1
)

echo Building Next.js...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b %errorlevel%
)

echo Deploying to Cloudflare Workers...
npx wrangler deploy
if %errorlevel% neq 0 (
    echo Deploy failed!
    pause
    exit /b %errorlevel%
)

echo Done!
pause
