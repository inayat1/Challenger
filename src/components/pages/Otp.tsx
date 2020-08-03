import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import React, {useState, useEffect, ReactElement} from "react";
import makeApiRequest, { ApiRequestType, Method } from '../../api/ApiUtil';
import { Hostname, UrlPath } from '../../api/UrlConstants';

interface OtpProps {
    navigation: any
}

const Otp: React.SFC<OtpProps> = ({navigation}): ReactElement => {

    const [enteredOtp, setOtp] = useState('');

    const contactInputHandler= (enteredOtp: string)=>{
        setOtp(enteredOtp);

    }
    const onOtp = () => {
        const data: ApiRequestType = {
            method: Method.POST,
            payload: {
                mobile: enteredOtp
            },
            url: `${Hostname}${UrlPath}`
        }
        makeApiRequest(data).then((resp) => {
            console.log(resp);
        });
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Otp"
                       style={styles.textContainer}
                       onChangeText={contactInputHandler}
                       value={enteredOtp}
                       maxLength={4}
                       keyboardType='numeric'
            />
            <View style={styles.buttonContainer}>
                <Button title="Submit"
                        color='red'
                        onPress={onOtp}

                />
            </View>
        </View>
        );

}


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

export default Otp;