/* @flow */

import * as React from 'react';
import { View, StyleSheet, findNodeHandle } from 'react-native';

type Props = {
  onUpdateRootTag: (root: any) => mixed,
};

/**
 * Portal manager handles the root tag for the portal prevents unnecessary re-renders.
 */
export default class PortalManager extends React.PureComponent<Props> {
  render() {
    return (
      <View
        ref={c => this.props.onUpdateRootTag(findNodeHandle(c))}
        pointerEvents="box-none"
        style={StyleSheet.absoluteFill}
        collapsable={false}
      />
    );
  }
}
