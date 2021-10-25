import React from "react";
import { CHeaderNav, CHeaderNavItem, CHeaderNavLink } from "@coreui/react";
import { connect } from "react-redux";


const TheHeaderLoggedUser = (props) => {
  const { user } = props
  console.log(props)
  return (
    <CHeaderNav className="d-md-down-none mr-auto">
      <CHeaderNavItem className="px-3">
        <CHeaderNavLink>Welcome &nbsp; <b> {user.name.toUpperCase()}</b></CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
  );
};
const mapStatetoProps = (state) => {
  const { user } = state.authentication
  console.log(user)
  return { user }
}

export default connect(mapStatetoProps)(TheHeaderLoggedUser);
