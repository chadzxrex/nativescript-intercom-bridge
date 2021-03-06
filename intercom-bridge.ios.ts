declare var Intercom: any;
declare var ICMUserAttributes: any;

export class IntercomBridge {
  static init(apiKey: string, appId: string) {
    Intercom.setApiKeyForAppId(apiKey, appId);
  }

  static registerIdentifiedUser(options: {userId?: string|number, email?: string}) {
    if (typeof options.userId == 'number') {
      options.userId = String(options.userId);
    }

    if (options.userId && options.email && options.userId.length > 0 && options.email.length > 0) {
      Intercom.registerUserWithUserIdEmail(options.userId, options.email);
    } else if (options.userId && options.userId.length > 0) {
      Intercom.registerUserWithUserId(options.userId);
    } else if (options.email && options.email.length > 0) {
      Intercom.registerUserWithEmail(options.email);
    } else {
      console.log('[Intercom-NativeScript] ERROR - No user registered. You must supply an email, a userId or both');
    }
  }

  static registerUnidentifiedUser() {
    Intercom.registerUnidentifiedUser();
  }
  
  static reset() {
    Intercom.reset();
  }

  static logout() {
    Intercom.logout();
  }

  static setUserHash(hmac: string) {
    Intercom.setUserHash(hmac);
  }

  static updateUser(attributes: any) {
    const userInformation = new ICMUserAttributes();
    
    Object.keys(attributes).forEach(key => {
      const value = attributes[key];
      userInformation[key] = value;
    });
      
    Intercom.updateUser(userInformation);
  }

  static logEvent(eventName:string, metaData?: any) {
    if (!!metaData) {
      Intercom.logEventWithNameMetaData(eventName, metaData);
    } else {
      Intercom.logEventWithName(eventName);
    }
  }

  static displayMessenger() {
    Intercom.presentMessenger();
  }

  static displayMessageComposer(initialMessage?: string) {
    if(!!initialMessage) {
      Intercom.presentMessageComposer(initialMessage);
    } else {
      Intercom.presentMessageComposer();
    }
  }

  static displayConversationsList() {
    Intercom.presentConversationList();
  }

  static unreadConversationCount() {
    return Intercom.unreadConversationCount();
  }

  static setLauncherVisibility(visible: boolean) {
    Intercom.setLauncherVisible(visible);
  }

  static setInAppMessageVisibility(visible: boolean) {
    Intercom.setInAppMessagesVisible(visible);
  }

  static hideMessenger() {
    Intercom.hideMessenger();
  }

  static enableLogging() {
    Intercom.enableLogging();
  }

  static setDeviceToken(token: string) {
    Intercom.setDeviceToken(token);
  }
}
