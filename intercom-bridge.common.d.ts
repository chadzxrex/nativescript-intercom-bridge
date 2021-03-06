export declare class IntercomBridge {
    static init(apiKey: string, appId: string): void;
    static registerIdentifiedUser(options: {
        userId?: string | number;
        email?: string;
    }): void;
    static registerUnidentifiedUser(): void;
    /**
    *
    * **Deprecate** [Intercom reset] in favour of [Intercom logout]
    * https://github.com/intercom/intercom-ios/blob/master/CHANGELOG.md#410-2017-10-06
    * https://github.com/intercom/intercom-android/blob/master/CHANGELOG.md#version-410
    * 
    * @static
    * @memberof IntercomBridge
    */
    static reset(): void;
    static logout(): void;
    static setUserHash(hmac: string): void;
    /**
     *
     * Update user's information after registering, the naming rule of key of the customAttributes is 'custom_key'.
     * @static
     * @param {({
     *         name?: string,
     *         languageOverride?: string,
     *         customAttributes?: {
     *             kyc_level?: string
     *             [key: string]: string | number;
     *         }
     *     })} attributes
     * @memberof IntercomBridge
     */
    static updateUser(attributes: {
        name?: string,
        languageOverride?: string,
        customAttributes?: {
            kyc_level?: string
            [key: string]: string | number;
        }
    }): void;
    static logEvent(eventName: string, metaData?: any): void;
    static displayMessenger(): void;
    static displayMessageComposer(initialMessage?: string): void;
    /**
    *
    * **Deprecate** Should use displayMessenger instead.
    * 
    * To be noticed, displayConversationsList is still the only method to open the convensation list, directly. And it still can be used for now.
    * 
    * https://github.com/intercom/intercom-ios/blob/master/CHANGELOG.md#510
    * https://github.com/intercom/intercom-android/blob/master/CHANGELOG.md#version-510
    * 
    * @static
    * @memberof IntercomBridge
    */
    static displayConversationsList(): void;
    static unreadConversationCount(): any;
    static setLauncherVisibility(visible: boolean): void;
    static setInAppMessageVisibility(visible: boolean): void;
    static hideMessenger(): void;
    static enableLogging(): void;
    static setDeviceToken(token: string): void;    
    /**
    * Android only intercom push notification option object
    *
    * @static
    * @returns {*}
    * @memberof IntercomBridge
    */
    static intercomPushClient: any;
}
