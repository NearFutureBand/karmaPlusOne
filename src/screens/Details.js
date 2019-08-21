import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { firstAction } from '../actions';

class DetailsScreen extends React.Component {
  constructor (props) {
    super(props);

    this.didFocusSubscription = null;
    this.didBlurSubscription = null;
  }

  componentDidMount = () => {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      this.handleFocus,
    );
    this.didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      this.handleBlur,
    )
  }

  componentWillUnmount = () => {
    this.didFocusSubscription.remove();
    this.didBlurSubscription.remove();
  }

  handleFocus = () => {
    console.log('details screen focused');
    this.props.firstAction();
  }

  handleBlur = () => {
    console.log('details screen blurred');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>Number is {this.props.number}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.data.number,
  };
}

const actions = {
  firstAction,
};

export default connect(mapStateToProps, actions)(DetailsScreen);
