# React Native Init
:fire: :tada: A React-Native starter kit with Google Signin + Onesignal + Sentry + Code Push + React-Navigation + Redux :tada: :fire:

  

## Includes
*  [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native)
*  [React Navigation](https://reactnavigation.org/)
*  [Redux](https://github.com/reactjs/redux)
*  [Code Push](https://github.com/Microsoft/react-native-code-push)
*  [Sentry](https://github.com/getsentry/react-native-sentry)
*  [OneSignal](https://github.com/geektimecoil/react-native-onesignal)
*  [Google SignIn](https://github.com/devfd/react-native-google-signin)
## Requirements
* Globally installed [Node](https://nodejs.org/) 7.x or better
*  [Xcode](https://developer.apple.com/xcode/) for iOS Development
*  [Android SDK](https://developer.android.com/sdk/) for Android development
*  [React-Native-CLI](https://facebook.github.io/react-native/docs/getting-started.html)

	```
	> npm install -g react-native-cli
	```
# Get Started
1.  ## :arrow_down: Installation
	Fire command prompt and run following commands :
	```
	$ git clone https://github.com/Teal-labs-developer/react-starter-init.git
	$ cd react-starter-init && npm install
	```
2.  ## :clipboard: Documentation :clipboard:
	To get this project running with all dependencies, follow steps given below :

	1. ## Google Signin
		We are using [react-native-google-signin](https://github.com/devfd/react-native-google-signin) for Google Signin. For user authentication and push notification we will be using [Firebase](https://firebase.google.com/). First we setup our firebase app for both platforms.

		* Create a new [account](https://firebase.google.com/) / Log in to your [account](https://firebase.google.com/)
		* Create a new project with required information

		### Generate Release/Debug keystores

		Fire up console in your project folder and run following command :

		```

		// For Debug
		keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

		// For Release
		keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

		```

		> Move the .keystore file generated to android/app folder.

		Your *gradle.properties* file in *android / app* should have following settings. The _store and key password_ should be same as what you entered while creating Release keystore file.  

		```
		MYAPP_RELEASE_STORE_PASSWORD= /* Password of release keystore */
		MYAPP_RELEASE_KEY_PASSWORD= /* Enter password here*/
		```

		Configure Firebase project for both android and iOS app individually. You will get _Bundle Identifier_ from _build.gradle_
		
		```
		ProjectName
		|_ android
		|_ _ app
		|_ _ _ build.gradle
		|_ _ _ gradle.properties
		```
		![build.gradle](https://image.ibb.co/mQtBbn/carbon_2.png)

		Follow steps according to platform :

		1. **Android**
		You need to generate SHA1 and add the generated fingerprint to your firebase config for android app.
			```
			// For Debug
			keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android
			// For Release
			keytool -list -v -keystore [keystore path] -alias my-key-alias -storepass [storepass] -keypass [keypass]
			```

			Go to Firebase > Project Settings ![enter SHA1](https://image.ibb.co/hY3t6n/Screen_Shot_2018_04_18_at_1_10_11_PM.png)

			

			After adding both SHA fingerprint of Debug and Release download _google-services.json_ file and replace it with your *android/app/google-services.json file.*

		2.  **iOS**

			Add new iOS app in your Firebase project and follow instructions. Download the *GoogleService-Info.plist*.

			Open Xcode and switch to Info tab. You need to give _url types_ which we will get from *.plist* file _reverse client id_ field.

			![info tab](https://preview.ibb.co/iVtDp7/Screen_Shot_2018_04_18_at_1_34_39_PM.png)

			Get Bundle Id and Reverse Client Id from .plist file.

			![bundleid](https://preview.ibb.co/bGfUwn/Screen_Shot_2018_04_18_at_1_42_25_PM.png)

			Navigate to *App.js* file and change *iosClientId * in *hasPlayServices*

		
		

			![hasplayServices](https://image.ibb.co/ckqb97/Screen_Shot_2018_04_18_at_1_46_29_PM.png)

		

			For more configuration in Google Signin, follow instructions from [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin) .
	2.  ## OneSignal
		[OneSignal](https://onesignal.com/) provides a simple interface to push notifications and email.
		* Create an account [here](https://onesignal.com/)
		* Add a new app and configure individually for both platforms
		1. **Android**
		Open your [firebase project](https://console.firebase.google.com) and switch to Cloud Messaging tab and copy required fields for configuring android app
			* Google Server API Key: ```/* insert Server key */```
			* Google Project Number: ```/* insert Sender Id here */```
			![cloud messaging](https://image.ibb.co/dsKHhS/firebase1.png)

			You need to replace * ADD_ONE_SIGNAL_APP_ID, ADD_FIREBASE_SENDER_ID*. You will get *ADD_ONE_SIGNAL_APP_ID* from App settings of OneSignal Project.

			And *ADD_FIREBASE_SENDER_ID* will be Sender Id from Firebase Project as given in picture above.

			```
			// Navigate here

			ProjectName
			|_ android
			|_ _ app
			|_ _ _ build.gradle
			```

			![onesignal app id](https://image.ibb.co/no8M97/Screen_Shot_2018_04_18_at_2_36_35_PM.png)

			2. **iOS**

			For iOS, you will be prompted to give .p12 file. Read from [here](https://support.magplus.com/hc/en-us/articles/203808748-iOS-Creating-a-Distribution-Certificate-and-p12-File) how to get .p12 file

			* Now open *AppDelegate.m* in *project-name/ios/project-name* folder and change

				*oneSignalAppId* with the one you get on creating a new app on Onesignal platform.
			
				![oneSignalAppId](https://image.ibb.co/hYziNS/Screen_Shot_2018_04_18_at_2_50_13_PM.png)
	3.  ## Sentry
		[Sentry](https://sentry.io/) provides open source error tracking that shows you every crash in your stack as it happens, with the details needed to prioritize, identify, reproduce, and fix each issue.

		* Create your account [here](https://sentry.io/signup) / Login [here](https://sentry.io/auth/login/)
		* Add a new project
		* Once you are done creating project go to *sentry.properties* file in both android and iOS folder
			```
			// Navigate here

			ProjectName
			|_ android
			|_ _ app
			|_ _ _ sentry.properties
			|
			|_ _ ios
			|_ _ _ sentry.properties
			```

		Note : Your *sentry.properties* file should look like this

		

		![onesignal](https://image.ibb.co/n1qUwn/Screen_Shot_2018_04_18_at_2_57_37_PM.png)

		Migrate [here](https://sentry.io/api) to get _auth.token_ :point_up:

		Now open *index.js* and change *ADD_SENTRY_CLIENT_KEY* from DSN 

		![](https://image.ibb.co/fFrmbn/Screen_Shot_2018_04_18_at_3_02_40_PM.png)

	4.  ## Code Push

		CodePush is a cloud service that enables React Native developers to deploy mobile app updates instantly to their user's devices. Following steps will help in configuring CodePush for project.
		1. Install CodePush CLI
			``` 
			npm install -g code-push-cli
			```
		2. Create/Login a CodePush account
			``` 
			// Register
			> code-push register
			// Login if registered already
			> code-push login
			```
		3. Register your app
			``` 
			> code-push app add <appName> <os> <platform>
			```
			If your app targets both iOS and Android, we highly recommend creating separate apps with CodePush. One for each platform.

			```
			// For Android
			> code-push app add <App-Name-Android> android react-native

			// For iOS
			> code-push app add <App-Name-Ios> ios react-native
			```
		4. Run following command, individually for both platforms
			```
			> code-push deployment ls <appName> --displayKeys
			```
			Note : Change CODEPUSH_KEYs with keys we get from above command.
			![codepush-xcode](https://image.ibb.co/nfi7XS/Screen_Shot_2018_04_18_at_4_12_39_PM.png)

			

# Start 
  

## :poop: Troubleshooting :poop:

If you have any problem, search for the issues in this repository. If you don't find anything, you can raise an issue [here](https://github.com/Teal-labs-developer/react-starter-init/issues).

  

## References

*  [Generating keystores](https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores)

*  [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin)
*  [CodePush](http://microsoft.github.io/code-push/docs/cli.html)