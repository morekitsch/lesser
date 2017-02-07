import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import {
  Container, Header, Left, Body, Title,
  Content, Footer, FooterTab, Button, Icon
 } from 'native-base';
import { drawerToggleAction } from './actions';

class Main extends Component {

  state = {
    duration: 'Map',
   };

   watchID = (null: ?number);

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyBwGcT-ywvlaUIwzGgq0Gd1mY66_Ks0VPU',
      authDomain: 'lesser-1484343368436.firebaseapp.com',
      databaseURL: 'https://lesser-1484343368436.firebaseio.com',
      storageBucket: 'lesser-1484343368436.appspot.com',
      messagingSenderId: '108455635976'
    };

    firebase.initializeApp(config);

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;

        this.setState({
          position: {
            latitude,
            longitude,
          },
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  componentWillUnmount = () => {
     navigator.geolocation.clearWatch(this.watchID);
  }

  async getTravelTime() {
    try {
      const response = await fetch('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592');
      const responseJson = await response.json();
      console.log(`## ${responseJson.rows[0].elements[0].duration.text}`);
      this.setState({ duration: `Map - ${responseJson.rows[0].elements[0].duration.text}` });
    } catch (error) {
      console.error(error);
    }
  }


  render() {
    const { duration, region, position } = this.state;
    const { width, height } = Dimensions.get('window');

    return (
      <Container>
        <Header>
            <Left>
              <Button
              transparent
              onPress={
                () => this.props.drawerToggleAction(!this.props.drawerOpened)}
              >
                <Icon name="ios-menu" />
              </Button>
            </Left>
            <Body>
              <Title>
                #{duration}
              </Title>
            </Body>
        </Header>
        <Content scrollEnabled={false}>
          <View style={{ width, height }}>
              <MapView
                style={styles.map}
                region={region}
                showsUserLocation
                followsUserLocation
                showsCompass
              >
              {position && (
              <MapView.Circle
                center={position}
                radius={300}
                strokeColor={'transparent'}
                fillColor={'rgba(112,185,213,0.30)'}
              />
            )}
            </MapView>
          </View>
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent onPress={this.getTravelTime.bind(this)}>
              <Icon name="map" />
            </Button>
            <Button transparent>
              <Icon name="map" />
            </Button>
            <Button transparent>
              <Icon name="map" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject,
  },
  drawer: {
     shadowColor: '#000000',
     shadowOpacity: 0.8,
     shadowRadius: 3
    }
});

const mapStateToProps = ({ UI }) => {
  const { drawerOpened } = UI;
  return { drawerOpened };
};

export default connect(mapStateToProps, {
  drawerToggleAction })(Main);
