import React, {PropTypes} from 'react'

const style = {
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    backgroundRepeat: 'no-repeat'
}

const Avatar = ({altText, imageUrl}) => {
    return (
            <div style={{...style
            ,backgroundImage: 'url(' + imageUrl + ')'}}
            alt={altText}>
            </div>
    )
};

Avatar.propTypes = {
    altText: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default Avatar
