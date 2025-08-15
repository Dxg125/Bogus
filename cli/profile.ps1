# customized CLI 
# just alias n'stuff
function adb-devices {adb devices;}
New-Alias Handy adb-devices;
# ll = dir 
function ll-dir {dir;}
New-Alias ll ll-dir;
# .. = cd ..
function go-back {cd ..;}
New-Alias .. go-back;


if ($false) {
	# Only do the startup once per day!
	$Today            = Get-Date -Format "yyyy-MM-dd";
	$CheckFile        = (Get-Location).Path + "\check-profile-today.txt";
	$CheckFileContent = Get-Content $CheckFile -ErrorAction SilentlyContinue;
	# if today has not been checked
	if ($CheckFileContent -ne $Today) {
	 # Update file contents with today
	 $Today | Out-File -FilePath $CheckFile;
	 # On StartUp get Node / NPM etc Version(s)
	 $NodeVersion     = node -v;
	 $NPMVersion      = npm -v;
	 $YarnVersion     = yarn -v;
	 $PHPVersion      = (((php -v) -Split "\(")[0] -Split " ")[1];
	 $ElectronVersion = electron -v;
	 $ApacheVersion   = (httpd -v).split('/')[1].split('\(')[0].trim();
	 # Write Versions
	 Write-Host "
	 Electron $ElectronVersion
	 Node      $NodeVersion
	 NPM       v$NPMVersion
	 Yarn      v$YarnVersion
	 PHP       v$PHPVersion
	 Apache    v$ApacheVersion
	 ";
	 # Check for Globally Outdated Packages
	 $OutDated = npm outdated -g;
	 if ($OutDated) {
		  Write-Host "There are Packages to Update";
		  npm outdated -g;
	 }
	 # PWSH Self Update
	 # F:\Dokumente\PowerShell\update.ps1 -Daily
	}
}


# On Startup check for devices
adb devices;

# enable electron logging to console
set ELECTRON_ENABLE_LOGGING=true 
