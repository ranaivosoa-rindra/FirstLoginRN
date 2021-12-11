import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View ,Keyboard} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Image } from 'react-native';
import facebook from './assets/circleFb.png';
import google from './assets/google.png';
import logo from './assets/usr.png';

export default function App() {
  return (
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
    >
    <View style={styles.container}>
      <LinearGradient colors={['#EE3232','#7A69AB']} style= {styles.smallCircle}>
      </LinearGradient>
      <LinearGradient colors={['#F31313','#5019F1']} style = {styles.bigCircle}>
      </LinearGradient>
      <View style = {styles.allContainer}>
        <View style = {styles.authenticationContainer}>
          <View style = {styles.logo}>
            {/* <Icon
              name = 'user-circle'
              type='font-awesome'
              size={96}
            /> */}
            <Image
              source={logo}
              style = {{width: 120,height: 120,}}
            />
          </View>
            <View style = {styles.inputsContainer}>
              <View style = {styles.singleInput}>
                <Text style = {styles.text}>First Name :</Text>
                <TextInput
                  style = {styles.insideInput}
                />
              </View>
                <View style = {styles.whiteLine}></View>
              <View style = {styles.singleInput}>
                <Text style = {styles.text}>Last Name :</Text>
                  <TextInput
                    style = {styles.insideInput}
                  />
              </View>
                <View style = {styles.whiteLine}></View>
              <View style = {styles.singleInput}>
                <Text style = {styles.text}>Email Address :</Text>
                  <TextInput
                    style = {styles.insideInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    autoCapitalize={'none'}
                  />
              </View>
                <View style = {styles.whiteLine}></View>
              <View style = {styles.singleInput}>
                <Text style = {styles.text}>Password :</Text>
                    <TextInput
                      style = {styles.insideInput}
                      secureTextEntry={true}
                    />
              </View>
                <View style = {styles.whiteLine}></View>
            </View>
          <View style = {styles.signUp}>
            <TouchableOpacity
              style = {styles.button}
            >
              <Text style = {styles.buttonText}>
                Sign up
              </Text>
            </TouchableOpacity>
            <View style = {styles.otherSignUp}>
              <Text style = {styles.signText}>
                Sign up with
              </Text>
              <View style = {styles.twoLogos}>
                <TouchableOpacity
                  onPress={() => console.log("Signing up with facebook")}
                >
                  <Image
                    source={facebook}
                    style = {styles.fbLogo}
                  />
                </TouchableOpacity>
                <View style = {{marginHorizontal: 3}}></View>
                <TouchableOpacity
                  onPress={() => console.log("Signing up with google")}
                >
                  <Image
                    source={google}
                    style = {styles.googleLogo}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>  
      {/* <View style = {styles.plusCircle}></View>   */}
        <LinearGradient
          colors={['#CB3F5B', '#5448C2']}
          style = {styles.plusCircle}
        >
          <View style = {styles.horizontalLine}></View>
          <View style = {styles.verticalLine}></View>
        </LinearGradient>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  smallCircle: {
    width: 1009,
    borderRadius: 1000,
    height: 1058,
    right: 100,
    top: -400,
    opacity: 1
  },
  bigCircle: {
    width: 1246,
    height: 1507,
    borderRadius: 1000,
    top: -1850,
    right: 120,
    opacity: 0.5
  },
  allContainer: {
    height: '80%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  authenticationContainer: {
    flexDirection: 'column',
    marginHorizontal: 50,
  },
  logo: {
    marginTop: 55,
    justifyContent: 'center',alignItems: 'center'
  },
  inputsContainer: {
    marginTop: 24,
    marginBottom: 14
  },
  singleInput: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 2
  },
  insideInput: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    marginBottom: 1
  },
  whiteLine: {
    width: '100%',
    height: 1,
    backgroundColor: "#fff",
    marginBottom: 35
  },
  signUp: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 9
  },
  buttonText: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    opacity: 0.5,
    fontSize: 14
  },
  otherSignUp: {
    flexDirection: 'column',
  },
  signText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10
  },
  twoLogos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fbLogo: {
    width: 27,
    height: 27
  },
  googleLogo: {
    width: 25,
    height: 25
  },
  plusCircle: {
    position: 'absolute',
    left: 33,
    top: 650,
    borderRadius: 1000,
    // backgroundColor: "#c0c",
    width: 87,
    height: 85,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    width: 50,
    height: 1,
    backgroundColor: "#fff",
    position: 'absolute',
    marginTop: 10
  },
  verticalLine: {
    width: 1,
    height: 50,
    backgroundColor: '#fff',
  }
});
