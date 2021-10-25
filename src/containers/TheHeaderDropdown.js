import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { connect } from 'react-redux';
import { userActions } from 'src/_actions';
import { useHistory } from 'react-router-dom';
const TheHeaderDropdown = (props) => {
  const { user ,dispatch } = props;
  let history = useHistory();
  const handleClick = () => {
    dispatch(userActions.logout())
    history.push('/login')
  }
  
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'/avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@test.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        
        
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />{user.email}
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          {user.phone_no}
        </CDropdownItem>
      
        <CDropdownItem divider />
        <CDropdownItem onClick={handleClick}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
const mapStatetoProps = (state) => {
  const { user } = state.authentication
  return { user }
}
export default connect(mapStatetoProps)(TheHeaderDropdown)
