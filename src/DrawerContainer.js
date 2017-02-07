import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import { drawerToggleAction } from './actions';
import Main from './Main';
import SettingsPanel from './SettingsPanel';

class DrawerContainer extends Component {

  render() {
    return (
        <Drawer
          open={this.props.drawerOpened}
          type="displace"
          content={<SettingsPanel title="Settings" />}
          tapToClose
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          style={styles.drawer}
          onClose={() => this.props.drawerToggleAction(false)}
          tweenHandler={(ratio) => ({
            main: { opacity: (2 - ratio) / 2 }
          })}
        >
            <Main />
        </Drawer>
    );
  }
}

const styles = {
  drawer: {
     shadowColor: '#000000',
     shadowOpacity: 0.8,
     shadowRadius: 3
   },
   main: {
     paddingLeft: 3
   }
};

const mapStateToProps = ({ UI }) => {
  const { drawerOpened } = UI;
  return { drawerOpened };
};

export default connect(mapStateToProps, {
  drawerToggleAction })(DrawerContainer);
