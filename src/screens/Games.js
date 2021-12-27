import React from 'react';
import { Input, Header, Avatar, Text} from 'react-native-elements';
import { View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { rem, vh } from '../settings/styles';
import StoryScreen from "./History";
import {ScrollView} from "react-navigation";


class GamesScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header
                    //centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                />
                <View style={styles.page}>
                    <Card
                        title='PUZZLE'
                        containerStyle={{borderRadius: 20}}
                        image={require('../images/pic2.jpg')}>
                        <Text style={{marginBottom: 10}}>
                             Try to assemble the whole picture from small pieces 🧩🖼
                        </Text>
                        <Button
                            icon={<Icon name='widgets' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='     PLAY NOW FOR FREE'
                            titleStyle={{fontSize: rem(15)}}/>
                    </Card>
                    <Card
                        title='MATCH PENCILS'
                        containerStyle={{borderRadius: 20}}
                        image={require('../images/pic11.jpg')}>
                        <Text style={{marginBottom: 10}}>
                            Try to match all pencils by the color 🖌🖍✏️
                        </Text>
                        <Button
                            icon={<Icon name='widgets' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='     BUY FOR 10 KARMAS'
                            titleStyle={{fontSize: rem(15)}}
                        />
                    </Card>
                    <Card
                        title="CHILLSTEP MIX"
                        containerStyle={{borderRadius: 20}}
                        image={require('../images/dog.jpg')}>
                        <Text style={{marginBottom: 10}}>
                           Listen the best chill music playlist 🎷🎼🎧
                        </Text>
                        <Button
                            icon={<Icon name='widgets' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='BUY FOR 20 KARMAS'
                            titleStyle={{fontSize: rem(15)}}
                        />
                    </Card>
                    <Card
                        title='CLEAN YOUR CLOSET'
                        containerStyle={{borderRadius: 20}}
                        image={require('../images/mam.jpg')}>
                        <Text style={{marginBottom: 10}}>
                            Put on the shelves all the things scattered on the floor 👗👙👠👒
                        </Text>
                        <Button
                            icon={<Icon name='widgets' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='BUY FOR 30 KARMAS'
                            titleStyle={{fontSize: rem(15)}}
                        />
                    </Card>

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

export default GamesScreen;
