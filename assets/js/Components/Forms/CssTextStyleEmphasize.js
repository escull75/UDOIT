import React from 'react'
import { View } from '@instructure/ui-view'

export default class CssTextStyleEmphasize extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        {this.constructor.name}
      </View>
    );
  }
}