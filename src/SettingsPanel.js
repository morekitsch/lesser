import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, View } from 'react-native';
import {
  Container, Header, Title, Content, Text,
  Item, Form, Button, Icon, Spinner, Left, Body
 } from 'native-base';
 import ExtendedLoginForm from './components/ExtendedLoginForm';
 import { emailChanged, passwordChanged, loginUser, logOutUser } from './actions';

class SettingsPanel extends Component {

  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPassWordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onLogOutPress() {
    this.props.logOutUser();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    if (!this.props.user) {
      return (
        <View>
          <ExtendedLoginForm />
          <Button
            onPress={this.onLoginPress.bind(this)}
            style={styles.submitButton}
          >
              <Text>Sign Up!</Text>
          </Button>
        </View>
      );
    } else {
      return (
        <View>
        <Button
          onPress={this.onLogOutPress.bind(this)}
          style={styles.submitButton}
        >
            <Text>Log out</Text>
        </Button>
          <Text>Logged in as: {this.props.user.email}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Icon name="settings" style={{ color: '#FFFFFF' }} />
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
        <Content>
          <Form>
              <Item>
                <Icon name="car" style={{ color: '#0A69FE' }} />
                <Text>Driver Mode: </Text>
                <Switch
                  onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
                  style={styles.adminSwitch}
                  value={this.state.falseSwitchIsOn}
                />
              </Item>
            </Form>

            {this.renderButton()}

        </Content>
      </Container>
    );
  }
}

const styles = {
  headerStyle: {
     backgroundColor: '#32cd32',
   },
   submitButton: {
     alignSelf: 'center',
     marginTop: 20,
     marginBottom: 20
  },
  adminSwitch: {
    marginBottom: 10,
    flex: 1
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;
  return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, logOutUser })(SettingsPanel);
