import { Menu } from "@mui/material"
import PropTypes from 'prop-types';

const FileMenu = ({anchorEl}) => {
  return (
    <Menu open anchorEl={anchorEl}>
        <div style={{
            width: "10rem",
        }}>
            aa
        </div>
    </Menu>
  )
}

FileMenu.propTypes = {
    anchorEl: PropTypes.bool.isRequired,
  };

export default FileMenu