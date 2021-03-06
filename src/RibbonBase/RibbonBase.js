'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Block from './Block';

export default class RibbonBase extends React.Component {

  render() {
    let blocks = this.props.blocks;
    let currentblock = this.props.currentblock;
    return (
      <div className='ontology-ribbon__strip'> {
        blocks.map((slimitem) => {
          let active = (currentblock !== undefined &&
                        slimitem.class_id === currentblock.class_id);
          return (
            <Block
              config={this.props.config}
              isActive={active}
              key={slimitem.class_id}
              onClick={() => this.props.onSlimSelect(slimitem)}
              onMouseEnter={() => this.props.onSlimEnter(slimitem)}
              onMouseLeave={() => this.props.onSlimLeave(slimitem)}
              showSeparatorLabel={this.props.showSeparatorLabels}
              showSeparatorLabelPrefix={this.props.showSeparatorLabelPrefixes}
              showTitle={this.props.showBlockTitles}
              slimitem={slimitem}
            />
          );
        }) }
      </div>
    );
  }
}

RibbonBase.propTypes = {
  blocks: PropTypes.array.isRequired,
  config: PropTypes.object,
  currentblock: PropTypes.object,
  onSlimEnter: PropTypes.func,
  onSlimLeave: PropTypes.func,
  onSlimSelect: PropTypes.func.isRequired,
  showBlockTitles: PropTypes.bool,
  showSeparatorLabelPrefixes: PropTypes.bool,
  showSeparatorLabels: PropTypes.bool,
};

RibbonBase.defaultProps = {
  showBlockTitles: true,
  showSeparatorLabelPrefixes: true,
  showSeparatorLabels: true,
};
