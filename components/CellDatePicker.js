import React from 'react';

import ActionSheet from './ActionSheet';
import DatePicker from './DatePicker';
import Cell from './Cell';

import {
  View
} from 'react-native';

class CellDatePicker extends React.Component {

  static defaultProps = {
    method: 'toString',
    mode: 'datetime'
  }

  static proptTypes = {
    onShow: React.PropTypes.func,
    onDateSelected: React.PropTypes.func.isRequired,
    method: React.PropTypes.any,
    mode: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  handleOnDateSelected = (date) => {
    this.setState({
      date
    }, () => {
      this.props.onDateSelected(date);
    });
  }

  handleDateOnPress = () => {
    this._datePicker.open();
  }

  render() {
    return (
      <View>
        <DatePicker
          ref={component => this._datePicker = component}
          mode={this.props.mode}
          onDateSelected={this.handleOnDateSelected}
        />

        <Cell
          value={this.props.method(this.state.date)}
          onPress={this.handleDateOnPress}
          {...this.props}
        />
      </View>
    );
  }
}

export default CellDatePicker;