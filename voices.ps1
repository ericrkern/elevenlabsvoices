# Ensure clipboard content is available
$clipboardContent = Get-Clipboard

if (-not $clipboardContent) {
    Write-Host "Clipboard is empty. Please copy some text to the clipboard and try again." -ForegroundColor Red
    exit 1
}

# Set the local path to ffplay
$Env:PATH += "C:\Program Files\nodejs\;C:\Users\ericr\Documents\work\smf_projects\elevenlabsvoices\"

# Run the javascript
& "C:\Program Files\nodejs\node.exe" "C:\Users\ericr\Documents\work\smf_projects\elevenlabsvoices\elevenlabsvoices.js" $clipboardContent

#Read-Host -Prompt "Press enter to close"