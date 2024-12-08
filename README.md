<div align="center">
    
  # Eleven Labs Voices
  
  <img src="https://api.dicebear.com/9.x/icons/svg?seed=Midnight&backgroundColor[]&icon=lightbulb" height="100" alt="avatar" />
  
  [Overview](#🎯-overview) •
  [Features](#✨-features) •
  [Getting Started](#🚀-getting-started) •

  
  </div>
  
  ---
  
  ## 🎯 Overview
  
Developed for The Scott-Morgan Foundation
by Eric Kern at Lincoln Consulting LLC
support at info@scottmorganfoundation.org

These scripts were developed to provide a text to voice button within Grid 3 that would use an individuals Eleven Labs voice.
    


  
  ## ✨ Features
  
  - **Personalize you Voice**: Use your Eleven Labs voice within Grid 3.
  
  ## 🚀 Getting Started
  
  To get a local copy up and running, follow these steps:
  
  ### Prerequisites
  
  Ensure you have the following installed:
  
  - Node.js
  - npm (Node Package Manager)
  - elevenlabs-js
  - git
  - MPV (https://mpv.io) and ffmpeg (https://ffmpeg.org) 
  
  ### Installation
  
  1. Clone the repository:
  
     ```bash
     git clone https://github.com/ericrkern/elevenlabsvoices
     cd elevenlabsvoices
     ```
  
  2. Install dependencies:
  
     ```bash
     npm install elevenlabs
     ```
  
  3. Download the MPV or ffmpeg code
     ```bash
     copy the 'ffplay.exe' file into the elevenlabsvoices directory
     ```
  
  4. Create a new button in Grid 3
     ```bash
     Open Grid 3 keyboard app
     From the menu select 'edit grid'
     Select an empty grid space and select 'create cell'
     Add command 'copy to clipboard'
     Add command 'start program'; select 'Windows Power Shell'
     Add Arguments '& "path to voice.ps1"'
     Select 'finish editing'
     ```
  
  ### Configuring your voice
  
  Edit the elevenlabsvoices.js file and replace the eleven labs API key and voice ID with your
  own
