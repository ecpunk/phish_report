Phish Report - Google Apps Script
Overview
This repository contains a Google Apps Script and its corresponding manifest file designed to enhance Gmail's functionality by allowing users to report suspicious emails as phishing or spam. The script adds a custom interface in Gmail, enabling users to report emails directly to a predefined address, and organize their inbox by moving reported emails to appropriate folders.

Contents
script.js: The main Google Apps Script file containing the logic for the Gmail add-on.
manifest.json: The manifest file specifying configuration, permissions, and triggers for the Google Apps Script.
Installation
To use these files, follow these steps:

Setting Up the Script in Google Apps Script
Open Google Apps Script:

Navigate to Google Apps Script.
Click on New Project.
Copy the Script:

Open script.js from this repository.
Copy the contents of the file.
Paste the contents into the script editor in Google Apps Script.
Save the Script:

Name your project, for example, PhishReport.
Click the floppy disk icon or File > Save.
Adding the Manifest File
Open the Manifest Editor:

In Google Apps Script, click on View > Show manifest file.
This will open the appsscript.json file.
Replace with Custom Manifest:

Open manifest.json from this repository.
Copy the contents and replace the content in appsscript.json with it.
Save Your Changes:

Click the floppy disk icon or File > Save.
Usage
After setting up the script and manifest file in Google Apps Script, the add-on will be available in your Gmail. Here's how to use it:

Open Gmail:

Go to your Gmail account where you want to use the add-on.
Using the Add-on:

The add-on should appear in the Gmail interface.
When viewing an email, you can use the provided buttons to report the email as phishing or spam.
Reporting will automatically send an email to a predefined address and move the reported email to the appropriate folder.
Contributions
Contributions to this project are welcome. Please create a pull request or issue in this repository for any features, bug fixes, or suggestions.

License
MIT License