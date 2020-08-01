import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as Actions from '../../actions/Actions';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, DispatchProp} from 'react-redux';
import { InitialState } from '../../store/InitialState';

const mapStateToProps = (state: InitialState) => {
    return{
        nameReducer : state.NameReducer
    };
}
const mapDispatcherToProps = (dispatch: any) => {
    return bindActionCreators(Actions, dispatch)
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class Home extends Component<ReduxType>{
  public render(): React.ReactNode{
    return(
      <View>
          <Text>{this.props.nameReducer.name}</Text>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
      </View>
    );
  }

  private _onPressButton = () => {
      this.props.changeName('Nitish');
  }
}
export default connect(mapStateToProps, mapDispatcherToProps)(Home);
