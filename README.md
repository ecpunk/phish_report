# Phish Report - Gmail Add-on

## Table of Contents
1. [Overview](#overview)
2. [Contents](#contents)
3. [Installation and Usage](#installation-and-usage)
   - [For Individual Gmail Accounts](#for-individual-gmail-accounts)
   - [For Google Workspace (G Suite) Organizations](#for-google-workspace-g-suite-organizations)
4. [Monitoring Reported Messages in an Organization](#monitoring-reported-messages-in-an-organization)
5. [Contributions](#contributions)
6. [License](#license)

## Overview
This Gmail Add-on enhances Gmail's functionality by enabling users to report suspicious emails as phishing or spam. It integrates a custom interface in Gmail, allowing users to report emails directly to a predefined address and organize their inbox by categorizing reported emails.

## Contents
- `script.js`: The Google Apps Script file containing the logic for the Gmail add-on.
- `manifest.json`: The manifest file for the add-on, specifying configurations, permissions, and triggers.

## Installation and Usage

### For Individual Gmail Accounts (must be completed for Workspace accounts also)
1. **Open Google Apps Script**:
   - Go to [Google Apps Script](https://script.google.com) and click `New Project`.

2. **Copy and Paste the Script**:
   - Open `script.js` from this repository.
   - Copy and paste the content into the script editor.

3. **Add the Manifest File**:
   - In Google Apps Script, click `View` > `Show manifest file` (`appsscript.json`).
   - Open `manifest.json` from this repository.
   - Replace the content in `appsscript.json` with the copied content.

4. **Deploy as Web App**:
   - Click on `Deploy` > `New deployment`.
   - Choose `Web app`, fill in the details, and deploy.
   - Authorize the script with your Google account.

5. **Use the Add-on**:
   - The add-on will be available in your Gmail.
   - Use the buttons to report emails as phishing or spam.

### For Google Workspace (G Suite) Organizations
Before deploying the add-on to a Google Workspace, ensure that the Google Apps Script portion is fully developed, tested, and functioning as intended.

1. **Publish the Add-on**:
   - [Create and link a Cloud Project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) in [Google Cloud Console](https://console.cloud.google.com/).
   - [Link this project to your Apps Script project](https://developers.google.com/apps-script/guides/cloud-platform-projects).
   - [Publish the add-on](https://developers.google.com/workspace/marketplace/how-to-publish), choosing to publish for your domain only.

2. **Deploy Domain-Wide in Google Workspace**:
   - As an admin, go to the [Google Workspace Admin console](https://admin.google.com/).
   - Navigate to `Apps` > `Google Workspace Marketplace apps`.
   - Add the app from the Marketplace to your domain.

3. **Manage Settings**:
   - Configure who in your domain has access and whether the add-on is enabled or disabled by default.

4. **Notify Users**:
   - Inform users in your organization about the add-on and its usage.

## Monitoring Reported Messages in an Organization
Organizations wishing to monitor messages reported through this add-on can configure Mimecast content examination policies to capture these reported messages. By setting up a policy that looks for specific terms such as "Spam Reported" or "Phishing Reported," administrators can track and manage reported emails. Further actions, such as notifying an administrator or other tailored responses, can be configured within Mimecast as needed.

## Contributions
We welcome contributions to this project. Please submit pull requests or issues for new features, bug fixes, or suggestions.

## License
[MIT License](LICENSE)
