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

:: Pull in the latest build of each game that lives in its own project folder.
if exist "..\Nutfall\package.json" (
    echo Syncing Nutfall...
    call npm run sync:nutfall
    if !errorlevel! neq 0 goto syncfail
)
if exist "..\Scramble\package.json" (
    echo Syncing Scramble...
    call npm run sync:scramble
    if !errorlevel! neq 0 goto syncfail
)
if exist "..\Rampart\package.json" (
    echo Syncing Siege Break...
    call npm run sync:siegebreak
    if !errorlevel! neq 0 goto syncfail
)
if exist "..\Scramble\desktop\dist\version.txt" (
    echo Syncing Knot Quite There download...
    call npm run sync:knot
    if !errorlevel! neq 0 goto syncfail
)
goto synced
:syncfail
echo Game sync failed!
pause
exit /b 1
:synced

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
