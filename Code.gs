// @ts-nocheck
function getContextualAddOn(e) {
    try {    
      // Activate temporary Gmail add-on scopes, in this case to allow
      // message metadata and content to be read.
      GmailApp.setCurrentMessageAccessToken(e.messageMetadata.accessToken);
      var message = GmailApp.getMessageById(e.messageMetadata.messageId);
      
      var reportActionP = CardService.newAction().setFunctionName("handleSendEmailPhish").setParameters({
        notifyText: "Thank you for reporting this email!",
        rawContent: message.getRawContent(),
        body: message.getPlainBody(),
        from: message.getFrom(),
      });
  
      var reportActionS = CardService.newAction().setFunctionName("handleSendEmailSpam").setParameters({
        notifyText: "Thank you for reporting this email!",
        rawContent: message.getRawContent(),
        body: message.getPlainBody(),
        from: message.getFrom(),
      });
  
  
      var textHeader = CardService.newTextParagraph()
      .setText("<b>Report a message to Mimecast</b>");
      
      var textParagraph = CardService.newTextParagraph()
      .setText("Please report suspicious emails to Mimecast.");
          
      var textButtonP = CardService.newTextButton()
      .setText("Report Phishing")
      .setBackgroundColor("#01003E")
      .setOnClickAction(reportActionP)
  
      var textButtonS = CardService.newTextButton()
      .setText("Report Spam")
      .setBackgroundColor("#01003E")
      .setOnClickAction(reportActionS)
   
      var card = CardService.newCardBuilder()
      .addSection(CardService.newCardSection().addWidget(textHeader))
      .addSection(CardService.newCardSection().addWidget(textParagraph))
      .addSection(CardService.newCardSection().addWidget(textButtonP))
      .addSection(CardService.newCardSection().addWidget(textButtonS))
      .build();
      
      return [card];
    } catch(err) {
      console.log(err);
      return []
    }
  }
  


function handleSendEmailPhish(e) {
    try {
    GmailApp.sendEmail("phishing@mimecast.org", "Phishing Reported", "", {
        attachments: [
            Utilities.newBlob(e.parameters.rawContent, "UTF-8", "phish_original.eml")
        ]
    })
    var messageId = e.messageMetadata.messageId;
    var message = GmailApp.getMessageById(messageId);
    var thread = GmailApp.getMessageById(messageId).getThread();
    GmailApp.moveMessageToTrash(message);
    ;
    
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
                        .setText(e.parameters.notifyText)
                        .setType(CardService.NotificationType.INFO))
    .build();
    } catch (err) {
    console.log(err);
    }
}


function handleSendEmailSpam(e) {
    try {
    GmailApp.sendEmail("spam@mimecast.org", "Spam Reported", "", {
        attachments: [
            Utilities.newBlob(e.parameters.rawContent, "UTF-8", "spam_original.eml")
        ]
    })
    var messageId = e.messageMetadata.messageId;
    var message = GmailApp.getMessageById(messageId);
    var thread = GmailApp.getMessageById(messageId).getThread();
    GmailApp.moveThreadToSpam(thread);
    ;
    
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
                        .setText(e.parameters.notifyText)
                        .setType(CardService.NotificationType.INFO))
    .build();
    } catch (err) {
    console.log(err);
    }
}