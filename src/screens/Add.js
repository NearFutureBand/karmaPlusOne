import React from 'react';
import { View, Picker, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { withInAppNotification } from 'react-native-in-app-notification';
import { Input, Button, Header, Text } from 'react-native-elements';
import { rem, vh } from '../settings/styles';
import { changeText, newPost, changeCategory } from '../actions';
import { selectorGetLevel } from '../reducers/profileReducer';
import { selectorCategories } from '../reducers/postReducer';
import IOSPicker from 'react-native-ios-picker';
import RNPickerSelect from 'react-native-picker-select';

class AddScreen extends React.Component {

  componentDidUpdate = (prevProps) => {
    if (prevProps.level.name !== this.props.level.name) {
      this.props.showNotification({
        title: `Congratulations`,
        message: 'You have a new level!',
      });
    }
  }

  handleChange = (text) => {
    this.props.changeText(text);
  }

  handlePost = () => {
    this.props.newPost(this.props.text, this.props.category);
    this.props.showNotification({
      title: `Great!`,
      message: 'A new good thing is written down!',
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          //centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <View style={styles.page}>
          <Text
            h2
            style={styles.mainLabel}
          >
            What good happened to you today? 🙃
          </Text>
          <View style={{justifyContent:'center', flex: 1}}>
          {
            Platform.OS === 'ios' && (
              <IOSPicker
                mode={'modal'}
                data={this.props.categories}
                selectedValue={this.props.categories[0]}
                onValueChange={d => this.props.changeCategory(d)}
              />
            )
          }
          
          </View>
          <Input
            onChangeText={this.handleChange}
            value={this.props.text}
            placeholder='Write your deed here 👈😌'
            multiline={true}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputTextStyle}
          />
          <View style={styles.buttons}>
            <Button
              onPress={this.handlePost}
              title='Post'
              buttonStyle={styles.button}
              containerStyle={styles.buttonWrapper}
            />
          </View>
        </View>
      </ScrollView>
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
    marginBottom: rem(50),
    marginTop: rem(20),
  },
  inputContainer: {
    padding: rem(10),
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,.5)',
    borderRadius: rem(20),
    marginVertical: rem(20),
    fontSize: rem(40),
  },
  inputTextStyle: {
    fontSize: rem(25),
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonWrapperLeft: {
    flex: 1,
    paddingRight: rem(5),
  },
  buttonWrapper: {
    flex: 1,
  },
  button: {
    padding: rem(10),
    borderRadius: rem(10),
  },
  pickerStyle:{
    height: 150,
    width: "80%",
    color: '#344953',
    justifyContent: 'center',
  }
};

const mapStateToProps = (state) => {
  return {
    text: state.post.text,
    level: selectorGetLevel(state),
    categories: selectorCategories,
    category: state.post.category,
  }
};

const actions = {
  changeText,
  newPost,
  changeCategory
};

export default connect(mapStateToProps, actions)(withInAppNotification(AddScreen));
