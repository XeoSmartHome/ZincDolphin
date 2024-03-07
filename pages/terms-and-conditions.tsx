import {FC} from "react";
import Box from "@mui/material/Box";

const TermsAndConditionsPage: FC = () => {
	return (
		<Box display={'flex'} justifyContent={'center'}>
			<Box paddingY={'5rem'} width={'50%'} minWidth={'30rem'}>
				<h1>
					Terms and Conditions of Use for XeoSmartHome
				</h1>

				<h2>
					Effective Date: 7 March 2024
				</h2>

				<p>
					Welcome to XeoSmartHome ("XeoSmartHome", "we", "us", or "our"). These Terms and Conditions of Use
					("Terms") govern your use of our website located at https://xeosmarthome.com (the "Website") and our
					mobile application named XeoApp (the "App"), collectively referred to as the "Platform". By
					accessing or
					using the Platform, you agree to be bound by these Terms.
				</p>

				<h3>
					1. Account Registration
				</h3>

				<p>
					a. Account Creation: In order to access certain features of the Platform, you may be required to
					create
					an
					account. During the registration process, you agree to provide accurate, current, and complete
					information.
					You are solely responsible for maintaining the confidentiality of your account credentials and for
					all
					activities that occur under your account.
				</p>

				<p>
					b. Personal Information: By creating an account, you consent to the collection and processing of
					your
					personal information, including but not limited to your name, email address, phone number, and
					password,
					in
					accordance with our Privacy Policy.
				</p>

				<h3>
					2. Collection and Use of Personal Information
				</h3>

				<p>
					a. Purpose: We collect and process personal information for the purpose of providing our services,
					improving
					user experience, and complying with legal obligations.
				</p>

				<p>
					b. Firebase Crashlytics: We may utilize Firebase Crashlytics for performance monitoring and crash
					reporting.
					By using the Platform, you consent to the use of Firebase Crashlytics as described in our Privacy
					Policy.
				</p>

				<h3>
					3. Login with Google
				</h3>

				<p>
					a. Integration: Users may have the option to log in to the Platform using their Google account. By
					choosing
					to log in with Google, you agree to comply with Google's terms of service and privacy policy.
				</p>

				<h3>
					4. Mobile App Permissions
				</h3>

				<p>
					a. Camera Access: The XeoApp requires access to your device's camera to scan QR codes of IoT devices
					for
					setup purposes. This access is necessary for the proper functioning of the App and to facilitate the
					setup
					process.
				</p>

				<p>
					b. Fine Location Permission: The App requires access to your device's fine location permission to
					connect to
					IoT devices via Bluetooth during the setup process. This access is essential for establishing a
					connection
					with compatible devices and ensuring smooth operation.
				</p>

				<h3>
					5. Intellectual Property
				</h3>

				<p>
					a. Ownership: The content, features, and functionality of the Platform are owned by XeoSmartHome and
					are
					protected by copyright, trademark, and other intellectual property laws. You may not modify,
					reproduce,
					distribute, or create derivative works based on the Platform without our prior written consent.
				</p>

				<h3>
					6. Limitation of Liability
				</h3>

				<p>
					a. Disclaimer: To the fullest extent permitted by law, XeoSmartHome shall not be liable for any
					indirect,
					incidental, special, consequential, or punitive damages arising out of or in connection with your
					use of
					the
					Platform.
				</p>

				<h3>
					7. Modifications to Terms
				</h3>

				<p>
					a. Updates: XeoSmartHome reserves the right to modify these Terms at any time without prior notice.
					We
					will
					notify you of any changes by posting the updated Terms on the Website or through the App. Your
					continued
					use
					of the Platform after the posting of the updated Terms constitutes your acceptance of the changes.
				</p>

				<h3>
					8. Governing Law
				</h3>

				<p>
					a. Jurisdiction: These Terms shall be governed by and construed in accordance with the laws of
					Romania,
					without regard to its conflict of law provisions.
				</p>

				<h3>
					9. Contact Us
				</h3>

				<p>
					a. Inquiries: If you have any questions or concerns about these Terms, please contact us at [insert
					contact
					email].
				</p>

				<h4>
					By using the Platform, you acknowledge that you have read, understood, and agree to be bound by
					these
					Terms.
					If you do not agree to these Terms, you may not access or use the Platform.
				</h4>
			</Box>
		</Box>
	)
}

export default TermsAndConditionsPage;
