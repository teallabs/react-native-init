# React Native Init
:tada::fire: A React-Native starter kit with React-Navigation + Code Push + Onesignal + Sentry + Google Signin :tada::fire:
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
	$ git clone https://github.com/teallabs/react-native-init
	$ cd react-starter-init && npm install
	```
2.  ## Project Name & Bundle Id change

	We recommend you renaming your *project-name* & *bundle-id*, as this would be essential for your whole project configuration. Following steps will help you rename your project :

	* Install [react-native-rename](https://github.com/junedomingo/react-native-rename)
		```
		npm install react-native-rename -g
		```
	* For renaming app :
		```
		react-native-rename <newName>
		```
	* For changing bundle id :
		```
		// For Android
		react-native-rename <newName> -b <bundleIdentifier>
		//For iOS 
		Open project in Xcode, Go to General tab and change Bundle Identifier
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

		Configure Firebase project for both android and iOS app individually.
		First we will start with setting up firebase for android app.


		1.  **Android**
		You will be needing  _Bundle Identifier_ from _build.gradle_ in next step.
		
		```
		ProjectName
		|_ android
		|_ _ app
		|_ _ _ build.gradle
		```
		![build.gradle](https://image.ibb.co/hk8Nz7/Bundle_Id_Android.png)
		
		Enter bundle id from build.gradle to add firebase to android app. Register App and skip rest of the steps.
		![firebase android](https://image.ibb.co/cdYY6n/Android_Fire.png)

		You need to generate SHA-1 and add the generated fingerprint to your firebase config for android app.
		```
		Run following commands in project-name > android > app

		// For Debug
		keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android
		// For Release
		keytool -list -v -keystore my-release-key.keystore -alias my-key-alias -storepass [storepass] -keypass [keypass]
		```



		
		Go to Firebase > Project Settings ![enter SHA](https://image.ibb.co/hY3t6n/Screen_Shot_2018_04_18_at_1_10_11_PM.png)

			

		After adding both SHA-1 fingerprint of Debug and Release download _google-services.json_ file and replace it with your *android/app/google-services.json file.*

		2.  **iOS**

		Add new iOS app in your Firebase project and follow instructions.<br/>  Download and open the *GoogleService-Info.plist* file.

		Open Xcode and switch to Info tab. You need to give _url types_ which we will get from *GoogleService-Info.plist* file. 

			
		Get Bundle Id and Reverse Client Id from *GoogleService-Info.plist* file. Enter respective fields in Xcode.

		![bundleid](https://image.ibb.co/i2dm97/Bundle_IDReverser.png)

		Navigate to *App.js* file and change *iosClientId* in *hasPlayServices*<br/>

		

		![hasplayServices](https://image.ibb.co/e2BChS/ClientID.png)

		

		For more configuration in Google Signin, follow instructions from [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin) .
	2.  ## OneSignal
		[OneSignal](https://onesignal.com/) provides a simple interface to push notifications and email.
		* Create an account [here](https://onesignal.com/)
		* Add a new app

		First we will configure for android app,
		1. **Android**
		Open your [firebase project](https://console.firebase.google.com) and switch to Cloud Messaging tab and copy Google Server API Key, Google Project Number for configuring android app.
			![cloud messaging](https://image.ibb.co/i3HPwn/One_Signal_Android.png)


			Now switch to code editor and make changes as suggested below.

			```
			// Navigate here

			ProjectName
			|_ android
			|_ _ app
			|_ _ _ build.gradle
			```

			![onesignal app id](https://image.ibb.co/bFQG97/One_Singal_Code_Android.png)

			2. **iOS**

				For iOS, you will be prompted to give .p12 file. Read from [here].(https://support.magplus.com/hc/en-us/articles/203808748-iOS-Creating-a-Distribution-Certificate-and-p12-File) how to get .p12 file
				When you are done with configuring iOS project 
			* Now open *AppDelegate.m* in code editor and change *oneSignalAppId* with the one you get on creating a new app on Onesignal platform.
				```
				ProjectName
				|_ ios
				|_ _ ProjectName
				|_ _ _ AppDelegate.m
				```

				
			
				![oneSignalAppId](https://image.ibb.co/hjDYNS/IOSOne_Signal.png)
	3.  ## Sentry
		[Sentry](https://sentry.io/) provides open source error tracking that shows you every crash in your stack as it happens, with the details needed to prioritize, identify, reproduce, and fix each issue.

		* Create your account [here](https://sentry.io/signup) / Login [here](https://sentry.io/auth/login/)
		* Add a new project
		* Once you are done creating project open *sentry.properties* file from both android and iOS folder.
		* You have to change Organization name, Project name and auth token.
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

		

		![onesignal](https://image.ibb.co/n1qUwn/Screen_Shot_2018_04_18_at_2_57_37_PM.png)

		Migrate [here](https://sentry.io/api) to get _auth.token_ :point_up:

		Now open *index.js* and change *ADD_SENTRY_CLIENT_KEY* from DSN 

		![sentry DSN](https://image.ibb.co/cRym97/Sentry_DSN.png)

	4.  ## Code Push

		[CodePush](https://github.com/Microsoft/react-native-code-push) is a cloud service that enables React Native developers to deploy mobile app updates instantly to their user's devices. Following steps will help in configuring CodePush for project.
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
			If your app targets both iOS and Android, we highly recommend creating separate apps with CodePush. One for each platform.

			```
			// For Android
			> code-push app add <App-Name-Android> android react-native

			// For iOS
			> code-push app add <App-Name-Ios> ios react-native
			```
			**For Android**

			```
			> code-push deployment ls <App-Name-Android> --displayKeys
			```
			Copy both Debug and Release key in *build.gradle* in 
			```
			ProjectName
			|_android
			|_ _ app
			|_ _ _ build.gradle
			```
			![codepush android](https://image.ibb.co/g83Ewn/Android_Code_Push.png)

			**For iOS**
			```
			> code-push deployment ls <App-Name-Ios> --displayKeys
			```

			![codepush-ios](https://preview.ibb.co/fH1EU7/Code_Push_Ios_1.png)
			Note : Change CODEPUSH_KEYs with keys we get from above command.
			

# :clapper: Start project 
You are now all set to start your project !	
```
// For iOS
> react-native run-ios

// For Android
> react-native run-android
```

# :office: Build your app :office:
When your app is ready to ship, you need to individially build _.apk_ and _.ipa_ file for android and iOS respectively.

For **Android**,

```
cd android && ./gradlew assembleRelease
```
The final apk would be generated in 
```
ProjectName
|_android
|_ _ app
|_ _ _ build
|_ _ _ _ outputs
|_ _ _ _ _ apk
|_ _ _ _ _ _ app-release.apk 
```
For **iOS**,
It's a long process to build *.ipa* file for App Store. We will be adding a detailed procedure for this in [wiki](https://github.com/teallabs/react-native-init/wiki) shortly. Meanwhile, you can follow this awesome [blog](https://medium.com/react-native-development/deploying-a-react-native-app-for-ios-pt-1-a79dfd15acb8).
## :poop: Troubleshooting :poop:

If you have any problem, search for the issues in this repository. If you don't find anything, you can raise an issue [here](https://github.com/Teal-labs-developer/react-starter-init/issues).

  

## References

*  [Generating keystores](https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores)

*  [React-Native-Google-Signin](https://github.com/devfd/react-native-google-signin)
*  [CodePush](http://microsoft.github.io/code-push/docs/cli.html)
*  [Checklist for deploying app](https://medium.com/the-react-native-log/checklist-to-deploy-react-native-to-production-47157f8f85ed)
