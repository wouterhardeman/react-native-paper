/* @flow */
/* eslint-disable react/no-unused-prop-types */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ReactNative from 'react-native/Libraries/Renderer/shims/ReactNative';
import { PortalContext } from './PortalHost';

type Props = {
  /**
   * Content of the `Portal`.
   */
  children: React.Node,
};

/**
 * Portal allows to render a component at a different place in the parent tree.
 */
export default function Portal({ children }: Props) {
  return (
    <PortalContext.Consumer>
      {root =>
        /* $FlowFixMe */
        ReactNative.createPortal(
          <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
            {children}
          </View>,
          root
        )
      }
    </PortalContext.Consumer>
  );
}
