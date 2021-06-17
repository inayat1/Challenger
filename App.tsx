// import React from 'react';
// import {Text} from 'react-native';
// import { Provider } from 'react-redux';
// import store from './src/store';
// import HomeScreen from './src/components/pages/home';
// import Login from './src/components/pages/Login';
// import Signup from './src/components/pages/Signup';
// import Otp from './src/components/pages/Otp';
// import {NavigationContainer} from "@react-navigation/native";
// import {createStackNavigator} from "@react-navigation/stack";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="Home" component={HomeScreen}/>
//                 <Stack.Screen name="Login" component={Login}/>
//                 <Stack.Screen name="Signup" component={Signup}/>
//                 <Stack.Screen name="Otp" component={Otp}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//       </Provider>
//   );
// };

import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, PermissionsAndroid } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
const imageWidth = Dimensions.get('window').width/3;
const imageHeight = 150;
export default class App extends Component {
    constructor(props){
    super(props);
    this.state = {
        data:[],
    };
}
componentDidMount(){
    this.getPhotos(); // It will get images when component will be mounted and it will run only once.
}

async requestExternalStoreageRead() {
    try {
        const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                  {
                       'title': 'Cool App ...',
                       'message': 'App needs access to external storage'
                   }
        );

        return granted == PermissionsAndroid.RESULTS.GRANTED
    } 
    catch (err) {
        //Handle this error
        return false;
    }
}

getPhotos = async () => {
    // CameraRoll.getPhotos(
    //     {
    //     first: 15, // to get only first storage
    //     assetType: 'Photos', // to get only photos
    //     })
    //     .then(r => {
    //     var photos = r.edges.map((asset) => {
    //     return {...asset.node.image};
    //     });
    //     this.setState({ data:photos})
    // });

    if (await this.requestExternalStoreageRead()){
        console.log('called');
        CameraRoll.getPhotos({
            first: 15,
            assetType: 'Videos',
            include: ["imageSize"]
        })
        .then((r) => {
            console.log(r.edges[0]);
            var photos = r.edges.map((asset) => {
                return {...asset.node.image};
                });
            // console.log(photos[0]);
            //  this.setState({ photos: r.edges, summary: `Number of photos found ${r.edges.length}` })
            this.setState({data: photos});
            // this.generateFrames(photos.uri, photos.playableDuration);
        })
        .catch((error) => {
            console.log(error.message);
            // this.setState({errorMsg: error.message});
        });
    }
}
generateFrames = (uri, duration) => {
    const thumb = `-i ${uri} -vf fps=${10/duration},scale=90:-1 -preset veryfast ${uri}_thumb_%01d.jpg`;
    RNFFmpeg.execute(thumb).then(_ => {
        console.log(`${uri}_thumb_`);
        this.setState({
            thumbnail: `${uri}_thumb_`
        })
    });
}
renderItem = ({item}) => {
    return (
        <View style={{padding:5}}>
            <Image style={{height:imageHeight, width:imageWidth - 10}} source={{uri:item.uri}}/>
        </View>
    )
}

render() {
    return (
        <View
            style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <Text>Images</Text>
            <FlatList
            data={this.state.data}
            numColumns={3}
            renderItem={this.renderItem}
            />
            {this.state.thumbnail ? 
                <Image style={{height:imageHeight, width:imageWidth - 10}} source={{uri:`${this.state.thumbnail}1`}}/>
                : null
            }
        </View>
        )
    }
}
