import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Header, Button, Text } from 'react-native-elements';

import { rem, vh } from '../settings/styles';
import Day from './Day';


class StoryScreen extends React.Component {

  renderDay = ({item}) => {
    return (
      <Day day={item} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
          <FlatList
            data={this.props.days}
            keyExtractor={day => day.timestamp + ''}
            renderItem={this.renderDay}
            style={styles.flatList}
          />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    padding: rem(10),
  }
}

const mapStateToProps = (state) => {
  return {
    days: Object.values(state.history.days).reverse(),
  }
};

export default connect(mapStateToProps)(StoryScreen);
