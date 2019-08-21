import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input, ListItem, Header, Avatar, Text} from 'react-native-elements';
import { rem, vh } from '../settings/styles';
import { selectorGetLevel } from '../reducers/profileReducer';


class ProfileScreen extends React.Component {

  render() {
    const list = [
      {
          title: `Now your status is: ${this.props.level.name}`,
          icon: 'mood'
      },
      {
          title: `${this.props.goodThings} good things done`,
          icon: 'done-all'
      },
      {
          title: `Next status will be available in ${this.props.level.maxKarma + 1 - this.props.profile.karma} points `,
          icon: 'arrow-forward'
      },
  ];

    return (
      <View style={styles.container}>
        <Header
          //centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <View style={styles.page}>
          <Avatar
            rounded
            size="xlarge"
            title="PB"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            source={{
              uri: this.props.level.avatar
            }}
          />
          <Text
            h2
            style={styles.mainLabel}
          >
              Your karma is:
          </Text>
          <Text
            h1
            style={styles.karmaLabel}
          >
            {this.props.profile.karma} points
          </Text>
          <Text
            h2
            style={styles.mainLabel}
          >
            {this.props.level.description}
          </Text>
        </View>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              titleStyle={styles.list}
            />
          ))
        }
      </View>
    );
  }
}

const styles = {
    container: {
        flex: 1,
    },
    page: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: rem(10),
    },
    mainLabel: {
        textAlign: 'center',
    },
    karmaLabel: {
        textAlign: 'center',
        color: '#3D6DCC',
    },
    list: {
        alignText: 'center',
        color: '#51565b',
    }
}

const mapStateToProps = (state) => {
  const days = Object.values(state.history.days);
  let goodThings = 0;
  days.forEach(day => {
    goodThings += day.posts.length;
  });
  return {
    profile: state.profile,
    goodThings: goodThings + 10,
    level: selectorGetLevel(state)
  };
}

export default connect(mapStateToProps)(
  ProfileScreen
);
