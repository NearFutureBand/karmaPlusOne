import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import { Button, Text } from 'react-native-elements';
import { rem, vh } from '../settings/styles';

class Day extends React.Component {
  state = {
    showMore: false,
  }

  render () {
    const { day } = this.props;

    return (
      <View style={styles.dayWrapper}>

        <View style={styles.textHolder}>
          <MaterialIcon name='ios-checkmark' style={styles.icon}/>

          <View style={styles.dayContentWrapper}>
            <Text h6 style={styles.timestamp}>{moment(day.timestamp).format("DD MMM YYYY")}</Text>
            <Text h4>{day.posts[0].category}</Text>
            <Text style={styles.text}>
              {day.posts[0].text}
            </Text>
            { this.state.showMore &&
              day.posts.map((post, i) => {
                if (i > 0) {
                  return (
                    <Text
                      style={styles.text}
                      key={post.timestamp}
                    >{post.text}</Text>
                  )
                }
              })
            }
          </View>
        </View>

        <View style={styles.buttonHolder}>
          {
            day.posts.length > 1 && (
              <Button
                onPress={() => this.setState(state => ({showMore: !state.showMore}))}
                buttonStyle={styles.buttonAddMore}
                icon={{
                  name: this.state.showMore ? 'expand-less' : 'expand-more',
                  size: 30,
                  color: 'black'
                }}
              />
            )
          }
        </View>
      </View>
    );
  }
}



const styles = {
  dayWrapper: {
    flex: 1,
    paddingHorizontal: rem(10),
    paddingVertical: rem(15),
    alignItems: 'center',
    marginVertical: rem(5),
    borderRadius: rem(20),
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,.4)',
  },
  textHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: rem(10),
  },
  dayContentWrapper: {
    flex: 1,
  },
  icon: {
    fontSize: rem(50),
    marginRight: rem(30),
    marginLeft: rem(10),
  },
  buttonHolder: {
    flex: 1,
    width: '100%',
  },
  buttonAddMore: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  text: {
    marginVertical: rem(5),
    fontSize: rem(20),
  },
  timestamp: {
    color: 'gray',
  }
}

export default Day;
