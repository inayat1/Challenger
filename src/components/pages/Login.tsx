import {StyleSheet, View, Text, TextInput} from "react-native";
import React, {useState, ReactElement} from "react";
import makeApiRequest, { ApiRequestType, Method } from '../../api/ApiUtil';
import { Hostname, UrlPath } from '../../api/UrlConstants';
import Button from "react-native-button";
import { AppStyles } from "../../styles/AppStyles";


// const mapDispatcherToProps = (dispatch: any) => {
//     return bindActionCreators(Actions, dispatch)
// }
// type ReduxType = ReturnType<typeof mapDispatcherToProps>;
// interface LoginProps {
//     navigation: any
// }
// interface LoginState {
//     enteredContact: string,
//     disableButton: boolean
// }
// class Login extends Component<LoginProps & ReduxType, LoginState>{
//     static readonly MAX_LENGTH = 10;
//     public render(): React.ReactNode {
//         return (
//             <View style={styles.container}>
//                 <TextInput placeholder="Contact"
//                     style={styles.textContainer}
//                     onChangeText={this._contactInputHandler}
//                     value={this.state.enteredContact}
//                     maxLength={Login.MAX_LENGTH}
//                     keyboardType='numeric'
//                 />
//                 <View style={styles.buttonContainer}>
//                     <Button title="Login"
//                         color='red'
//                         disabled={this.state.disableButton}
//                         onPress={this._onLogin}
//                     />
//                 </View>
//             </View>
//         );
//     }

//     private _onLogin = (): void => {
//         this.props.userRegister({
//             mobile: this.state.enteredContact
//         }).then((data) => {
//             this.props.navigation.navigate("Otp",{mobileNO: this.state.enteredContact});
//         })
        
//     };

//     private _contactInputHandler = (val: string): void => {
//         if (val.length > Login.MAX_LENGTH) {
//             this.setState({enteredContact: val.substring(0, Login.MAX_LENGTH)})
//             return;
//         }
//         this.setState({enteredContact: val, disableButton: val.length !== Login.MAX_LENGTH});
//     }
// }


interface LoginProps {
    navigation: any
}

const Login: React.SFC<LoginProps> = ({navigation}): ReactElement => {
    const MAX_LENGTH = 10;
    const [enteredContact, setEnteredContact] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [data, setData] = useState([]);
    const contactInputHandler = (enteredNumber: string): void => {
        if (enteredNumber.length > MAX_LENGTH) {
            setEnteredContact(enteredNumber.substring(0, MAX_LENGTH));
            return;
        }
        setEnteredContact(enteredNumber);
        setDisableButton(enteredNumber.length !== MAX_LENGTH);
    }
    const onLogin = () => {
        const data: ApiRequestType = {
            method: Method.POST,
            payload: {
                mobile: enteredContact
            },
            url: `${Hostname}${UrlPath}`
        }
        makeApiRequest(data).then(() => {
            navigation.navigate("Otp",{mobileNO:enteredContact});
        })
    };

    return (
        <View style={styles.container}>
          <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Contact"
              onChangeText={contactInputHandler}
              value={enteredContact}
              maxLength={MAX_LENGTH}
              keyboardType='numeric'
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <Button
            containerStyle={styles.loginContainer}
            style={styles.loginText}
            onPress={onLogin}
            disabled={disableButton}
          >
            Log in
          </Button>
        </View>
      );
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    or: {
      fontFamily: AppStyles.fontName.main,
      color: "black",
      marginTop: 40,
      marginBottom: 10
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: "bold",
      color: AppStyles.color.tint,
      marginTop: 20,
      marginBottom: 20
    },
    leftTitle: {
      alignSelf: "stretch",
      textAlign: "left",
      marginLeft: 20
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: "center",
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text
    },
    loginContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    loginText: {
      color: AppStyles.color.white
    },
    placeholder: {
      fontFamily: AppStyles.fontName.text,
      color: "red"
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main
    },
    body: {
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    },
    facebookContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.facebook,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    facebookText: {
      color: AppStyles.color.white
    }
  });