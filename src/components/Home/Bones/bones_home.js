import Expo, { Font } from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import { connect } from 'react-redux'
import {dummyLogin} from '../../../reducers/auth'

import {
  registerCustomIconType,
  Text,
  Button,
  Icon,
  SocialIcon,
  Card,
  List,
  ListItem
} from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';
import fontelloConfig from '../../assets/fontello/config.json';


class Bones extends Component {
  render() {
    const { navigation, auth, login } = this.props;
    // console.log('auth', auth)
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="skull" size={62} type="material-community" />
          <Text style={styles.heading}>Welcome To</Text>
          <Text style={styles.heading}>CrossBones</Text>
        </View>
        {!auth ? <View /> :
          <List>
            <ListItem
              roundAvatar
              avatar={{ uri: auth.results[0].picture.thumbnail }}
              key={'randomuser'}
              onPress={e => console.log(e)}
              title={auth.results[0].name.first + auth.results[0].name.last}
              subtitle={auth.results[0].email}
            />
          </List>
        }
        <Card
          containerStyle={{ marginTop: 15, marginBottom: 15 }}
          title="SOCIAL BUTTONS"
        >
          <TouchableOpacity onPress={login}><SocialIcon button type="medium" /></TouchableOpacity>
          <SocialIcon button type="twitch" />
          <SocialIcon
            title="Sign In With Facebook"
            button
            fontWeight="400"
            type="facebook"
          />
          <SocialIcon title="Some Twitter Message" button type="twitter" />
          <SocialIcon
            light
            button
            title="Some Instagram Message"
            type="instagram"
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black,
      },
    }),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(dummyLogin())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Bones)
// export default Bones;
