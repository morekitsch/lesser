import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <Container style={styles.containerStyle}>
        <Content>
          <Card>
            <CardItem>
              <Text>{children}</Text>
            </CardItem>
            <CardItem>
              <Button onPress={onAccept}>Yes</Button>
              <Button onPress={onDecline}>No</Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
containerStyle: {
  backgroundColor: 'rgba(0,0,0,0.75)',
  position: 'relative',
  flex: 1,
  justifyContent: 'center'
}
});

export { Confirm };
