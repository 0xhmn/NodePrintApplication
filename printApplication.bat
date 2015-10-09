@echo off

setlocal
set appcmd=%systemroot%\system32\inetsrv\appcmd.exe
set www=%~dp0\
set index=%www%\index.htm
set siteName=Default Web Site
set path=nodeprint
set site="%siteName%/%path%"
set icacls=%systemdrive%\windows\system32\icacls.exe

echo Installation of PrintApplication for IIS 7
echo This script must be run with administrative privileges.

if not exist "%icacls%" (
	echo Installation failed. The icacls.exe not found at %icacls%. 
	exit /b -1
)

if not exist %appcmd% (
	echo Installation failed. The appcmd.exe IIS management tool was not found at %appcmd%. Make sure you have both IIS7 as well as IIS7 Management Tools installed.
	exit /b -1
)

if "%1" neq "/s" (
	echo This installer will perform the following tasks:
	echo * ensure that the IIS_IUSRS group has read and write rights to "%www%"
	echo * delete the %site% web application if it exists
	echo * add a new site %site% to IIS with physical path pointing to "%www%"
	echo Press ENTER to continue or Ctrl-C to terminate.
	pause 
)

echo Ensuring the %site% is removed if it exists...
%appcmd% delete app %site%
if %ERRORLEVEL% neq 0 if %ERRORLEVEL% neq 50 (
	echo Installation failed. Cannot ensure site %site% is removed
	exit /b -1
)
echo ...success

echo Creating IIS site %site% ...
echo path= %path%
echo path= %www%
%appcmd% add app /site.name:"%siteName%" /path:/%path% /physicalPath:"%www%"
if %ERRORLEVEL% neq 0 (
	echo Installation failed. Cannot create PrintApplication site %site% at physical path "%www%"
	exit /b -1
)
echo ...success

echo INSTALLATION SUCCESSFUL. Check out the PrintApplication at http://localhost/nodeprint/server
start "" http://localhost/nodeprint/server
endlocal