import {StyleSheet, View, Button, TextInput} from "react-native";
import React, {useState, ReactElement} from "react";
import makeApiRequest, { ApiRequestType, Method } from '../../api/ApiUtil';
import { Hostname, UrlPath } from '../../api/UrlConstants';


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
            <TextInput placeholder="Contact"
                       style={styles.textContainer}
                       onChangeText={contactInputHandler}
                       value={enteredContact}
                       maxLength={MAX_LENGTH}
                       keyboardType='numeric'
            />
            <View style={styles.buttonContainer}>
                <Button title="Login"
                        color='red'
                        disabled={disableButton}
                        onPress={onLogin}
                />
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    buttonContainer: {
        margin: 5,
        width: "80%",
    },
    textContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: '80%',
        textAlign: 'center'
    }
});
