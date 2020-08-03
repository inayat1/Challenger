// import React, { Component } from 'react';
// import { Text, View, Button } from 'react-native';
// import * as Actions from '../../actions/Actions';
// import {bindActionCreators, Dispatch} from 'redux';
// import {connect, DispatchProp} from 'react-redux';
// import { InitialState } from '../../store/InitialState';

// const mapStateToProps = (state: InitialState) => {
//     return{
//         nameReducer : state.NameReducer
//     };
// }
// const mapDispatcherToProps = (dispatch: any) => {
//     return bindActionCreators(Actions, dispatch)
// }


// type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

// class Home extends Component<ReduxType>{
//   public render(): React.ReactNode{
//     return(
//       <View>
//           <Text>{this.props.nameReducer.name}</Text>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//       </View>
//     );
//   }

//   private _onPressButton = () => {
//       this.props.changeName('Nitish');
//   }
// }
// export default connect(mapStateToProps, mapDispatcherToProps)(Home);

import React, { Component, ReactNode, ReactElement } from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const image = { uri: "https://i.pinimg.com/originals/79/27/f9/7927f976b17065d627f94c0e125ac79c.jpg" };

interface HomeScreenProps {
    navigation: any
}

const HomeScreen: React.SFC<HomeScreenProps> = (props): ReactElement => {
    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>

                <View style={styles.buttonContainer}>
                    <Button title="Signup"
                            color='transparent'
                            onPress={() => props.navigation.navigate("Signup")}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Login" color='transparent' onPress={() => props.navigation.navigate("Login")}/>
                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    buttonContainer: {
        // flex: 1,
        margin: 5,
        minWidth: "90%",



    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});

export default HomeScreen;
