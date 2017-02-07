import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Item, Input, Icon, Text } from 'native-base';
import { emailChanged, passwordChanged } from '../actions';

class ExtendedLoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPassWordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
            <Form>
              <Item>
                    <Icon name="md-happy" style={{ color: '#0A69FE' }} />
                      <Input placeholder="First Name" />
              </Item>

              <Item>
                      <Icon name="person" style={{ color: '#0A69FE' }} />
                      <Input
                        placeholder="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                      />
              </Item>
              <Item>
                      <Icon name="unlock" style={{ color: '#0A69FE' }} />
                      <Input
                        placeholder="Password"
                        onChangeText={this.onPassWordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                      />
              </Item>
              <Item>
                      <Icon name="call" style={{ color: '#0A69FE' }} />
                      <Input placeholder="Phone" keyboardType="numeric" />
              </Item>
              <Item last>
                      <Icon name="home" style={{ color: '#0A69FE' }} />
                      <Input placeholder="Address" />
              </Item>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </Form>
    );
  }
}

const styles = {
   errorTextStyle: {
     fontSize: 20,
     alignSelf: 'center',
     color: 'red'
   }
 };

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;
  return { email, password, error };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged })(ExtendedLoginForm);
