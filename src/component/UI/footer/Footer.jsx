import React from 'react'
import { connect } from 'react-redux';

function Footer({footer}) {
  return (
    <div></div>
  )
}

const mapStateToProps = (state) => {
  return {
    footer: state.dataText.dataJson.home.footer,
  };
};

export default connect(mapStateToProps)(Footer);