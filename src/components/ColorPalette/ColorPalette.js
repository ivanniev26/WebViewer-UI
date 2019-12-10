import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from 'components/Icon';

import getBrightness from 'helpers/getBrightness';

import './ColorPalette.scss';

class ColorPalette extends React.PureComponent {
  static propTypes = {
    property: PropTypes.string.isRequired,
    color: PropTypes.object.isRequired,
    onStyleChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.palette = [
      ['#F1A099', '#FFC67B', '#FFE6A2', '#80E5B1', '#92E8E8', '#A6A1E6', '#E2A1E6'],
      ['#E44234', '#FF8D00', '#FFCD45', '#00CC63', '#25D2D1', '#4E7DE9', '#C544CE'],
      ['#88271F', '#B54800', '#F69A00', '#007A3B', '#167E7D', '#2E4B8B', '#76287B'],
      ['#FFFFFF', '#CDCDCD', '#9C9C9C', '#696969', '#373737', '#000000'],
    ];
  }

  setColor = e => {
    const { property, onStyleChange } = this.props;
    const bg = e.target.style.backgroundColor; // rgb(r, g, b);
    const rgba = bg ? bg.slice(bg.indexOf('(') + 1, -1).split(',') : [0, 0, 0, 0];
    const color = new window.Annotations.Color(rgba[0], rgba[1], rgba[2], rgba[3]);
    onStyleChange(property, color);
  }

  renderCheckMark = bg => {
    const { color } = this.props;
    const isColorPicked = color.toHexString() === bg;

    if (!isColorPicked) {
      return null;
    }

    return <Icon className={`check-mark ${getBrightness(color)}`} glyph="ic_check_black_24px" />;
  }

  render() {
    const { property, color } = this.props;

    const allowTransparent = !(property === 'TextColor' || property === 'StrokeColor');

    console.log(color.toHexString());

    return (
      <div className="ColorPalette" data-element="colorPalette">
        {allowTransparent &&
          <div className="cell-outer">
            <div
              className={classNames({
                cell: true,
                transparent: true,
                active: color.toHexString() === null,
              })}
              onClick={this.setColor}
            >
              <svg width="100%" height="100%">
                <line x1="15%" y1="85%" x2="85%" y2="15%" strokeWidth="2" stroke="#d0021b" strokeLinecap="round" />
              </svg>
            </div>
          </div>}
        {this.palette.map((row, i) =>
          row.map((bg, j) =>
            <div key={`${i}${j}`} className="cell-outer">
              <div
                className={classNames({
                  cell: true,
                  active: color.toHexString() === bg,
                })}
                style={{ backgroundColor: bg }}
                onClick={this.setColor}
              />
            </div>,
          ),
        )}
      </div>
    );
  }
}

export default ColorPalette;
