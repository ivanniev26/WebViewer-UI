import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Icon from 'components/Icon';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
  static propTypes = {
    onClickItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    currentSelectionKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  onClickDropdownItem = (e, { key }) => {
    const { onClickItem } = this.props;

    e.stopPropagation();

    onClickItem(key);
    this.setState({
      isOpen: false,
    });
  }

  renderDropdownItems = () => {
    const { items, currentSelectionKey } = this.props;
    const dropdownItems = items.filter(({ key }) => key !== currentSelectionKey);

    return dropdownItems.map(({ key, translationKey }) =>
      <div key={key} className="dropdown-item" onClick={e => this.onClickDropdownItem(e, { key, translationKey })}>
        {this.props.t(translationKey)}
      </div>,
    );
  }

  render() {
    const {
      isOpen,
      // currentSelection,
    } = this.state;

    const {
      items,
      currentSelectionKey,
    } = this.props;

    const selectedItem = items.find(({ key }) => key === currentSelectionKey);

    return (
      <div className="Dropdown" data-element="dropdown" onClick={this.toggleDropdown}>
        <div className="picked-option">
          {selectedItem && this.props.t(selectedItem.translationKey)}
          <Icon className="down-arrow" glyph="icon-chevron-down" />
        </div>
        <div className={`dropdown-items ${isOpen ? 'show' : 'hide'}`}>
          {this.renderDropdownItems()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Dropdown));
