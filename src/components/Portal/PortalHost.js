/* @flow */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import PortalManager from './PortalManager';
import createReactContext from 'create-react-context';

type Props = {
  children: React.Node,
  style?: any,
};

type State = {
  root: any,
};

export const PortalContext = createReactContext(null);

/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalHost extends React.Component<Props, State> {
  state = {
    root: null,
  };

  _handleUpdateRootTag = root => this.setState({ root });

  render() {
    return (
      <View
        pointerEvents="box-none"
        {...this.props}
        style={[styles.container, this.props.style]}
      >
        {this.state.root ? (
          <PortalContext.Provider value={this.state.root}>
            {this.props.children}
          </PortalContext.Provider>
        ) : null}
        <PortalManager onUpdateRootTag={this._handleUpdateRootTag} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
