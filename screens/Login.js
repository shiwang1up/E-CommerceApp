import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '702508659964-94ud967o37s06qt6d1siiiukiov33n2j.apps.googleusercontent.com',
  offlineAccess: true,
});

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    const handleGoogleSignIn = async () => {
      try {
        // First, make sure user is signed out
        await GoogleSignin.signOut();

        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

        // Get user ID token
        const userInfo = await GoogleSignin.signIn();
        console.log('Success:', userInfo);
        navigation.navigate('Main');
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('User cancelled the login flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('Sign in is in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('Play services not available');
        } else {
          console.log('Error:', error.code, error.message);
          console.error('Full error object:', error);
        }
      }
    };

//  async function onGoogleButtonPress() {
//    try {
//      // Check if your device supports Google Play
//      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//      // Get the users ID token
//      const signInResult = await GoogleSignin.signIn();
//
//      // Try the new style of google-sign in result, from v13+ of that module
//      const idToken = signInResult.data?.idToken;
//      if (!idToken) {
//        // if you are using older versions of google-signin, try old style result
//        const idToken = signInResult.idToken;
//      }
//      if (!idToken) {
//        throw new Error('No ID token found');
//      }
//
//      // Create a Google credential with the token
//      const googleCredential = auth.GoogleAuthProvider.credential(
//        signInResult.data.token,
//      );
//
//      // Sign-in the user with the credential
//      auth().signInWithCredential(googleCredential);
//      navigation.navigate('Main');
//      console.log('Signin Successful!!!');
//    } catch (err) {
//      console.log(err);
//    }
//  }

const handleLogin = async () => {
  // First navigate to the Main stack
  navigation.navigate('Main', { screen: 'Dash' });
};
    // try {
    //   console.log('Attempting to log in with email:', email);
    //   console.log('Attempting to log in with password:', password);

    //   const response = await fetch(
    //     'https://electronic-ecommerce.onrender.com/api/customerLogin',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         Email: email,
    //         Password: password,
    //       }),
    //     },
    //   );

    //   console.log('Response status:', response.status); // Log the response status

    //   if (!response.ok) {
    //     const errorText = await response.text();
    //     console.error('Error response from server:', errorText);
    //     alert(
    //       'Login failed. Please check your credentials or try again later.',
    //     );
    //     return;
    //   }

    //   const data = await response.json();
    //   console.log('Response data:', data); // Log the data received from the server

    //   if (data.status === 'SUCCESS') {
    //     alert(data.message);
    //     navigation.navigate('Main');
    //   } else {
    //     alert(data.message || 'Login failed');
    //   }
    // } catch (error) {
    //   console.error('Error logging in:', error);
    //   alert('An error occurred. Please try again later.');
    // }
  // };
  return (
    <SafeAreaView showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={styles.imagebackground}
        source={{uri: 'https://encycolorpedia.com/3758f9.png'}}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={'arrow-left-bold-box-outline'}
            size={20}
            color="#fff"
            style={{paddingLeft: 25, paddingTop: 35}}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.bannertxt}>ELECTRONICS HERE TO SHOP</Text>
        </View>
      </ImageBackground>
      <View style={styles.logincontainer}>
        <View>
          <Text style={styles.logintxt1}>Login</Text>
          <MaterialCommunityIcons
            name={'dots-grid'}
            size={30}
            color={'#ccc'}
            style={styles.topdots}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginbtn}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginBottom: 25, color: '#666'}}>
          Connect with
        </Text>
        <View style={styles.socialmedia}>
          <TouchableOpacity
            // onPress={handleGoogleSignIn}
            style={styles.socialLoginView1}>
            <Icon
              name="facebook-f"
              size={20}
              color={'#fff'}
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}
            />
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Twitter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={handleGoogleSignIn}
            style={styles.socialLoginView2}>
            <Icon
              name="twitter"
              size={20}
              color={'#fff'}
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}
            />
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Twitter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
//            onPress={onGoogleButtonPress}
onPress={handleGoogleSignIn}
            style={styles.socialLoginView3}>
            <Icon
              name="google"
              size={20}
              color={'#fff'}
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}
            />
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Google
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              color: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 120,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', margin: 12}}>
          <Text style={{fontSize: 14}}>Not a Member yet?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'blue', fontSize: 14}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <MaterialCommunityIcons name={'dots-grid'} size={30} color={'#ccc'} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imagebackground: {
    height: Dimensions.get('window').height / 2.5,
  },
  bannertxt: {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 55,
    fontSize: 20,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    color: '#ffffff',
  },
  logincontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    position: 'relative',
    top: -20,
    zIndex: 100,
  },
  logintxt1: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#637381',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  topdots: {
    position: 'absolute',
    left: 325,
  },
  loginbtn: {
    backgroundColor: '#3758F9',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  socialLoginView1: {
    backgroundColor: '#4064AC',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  socialLoginView2: {
    backgroundColor: '#1C9CEA',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  socialLoginView3: {
    backgroundColor: '#D64937',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  socialmedia: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 18,
  },
});
