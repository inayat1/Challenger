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

import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from "react-native-button";
import { AppStyles } from "../../styles/AppStyles";

interface HomeScreenProps {
    navigation: any
}

const HomeScreen: React.SFC<HomeScreenProps> = (props): ReactElement => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Say hello to your new app</Text>
          <Button
            containerStyle={styles.loginContainer}
            style={styles.loginText}
            onPress={() => props.navigation.navigate("Login")}
          >
            Log In
          </Button>
          <Button
            containerStyle={styles.signupContainer}
            style={styles.signupText}
            onPress={() => props.navigation.navigate("Signup")}
          >
            Sign Up
          </Button>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 150
    },
    logo: {
      width: 200,
      height: 200
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: "bold",
      color: AppStyles.color.tint,
      marginTop: 20,
      textAlign: "center",
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20
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
    signupContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.white,
      borderRadius: AppStyles.borderRadius.main,
      padding: 8,
      borderWidth: 1,
      borderColor: AppStyles.color.tint,
      marginTop: 15
    },
    signupText: {
      color: AppStyles.color.tint
    },
    spinner: {
      marginTop: 200
    }
  });

export default HomeScreen;
