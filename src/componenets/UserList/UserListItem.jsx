import React from 'react';



function UserListItem(props) {
    const {
        user: { srcImg, firstName, lastName, age, isSelected, },
        onClickHandler,
        deleteUser,
    } = props;

    const liStyle = {
        backgroundColor: '#2d6a4f', color: '#ffffff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '5px', maxWidth: '600px',
    };
    const liStyle1 = {
        backgroundColor: '#64dfdf', color: '#1d3557', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '5px', maxWidth: '600px',
    };

    const imgStyle = { height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' };
    const userStyle = {
        lineHeight: '2em',
        fontFamily: "Montserrat",
        flexWrap: 'wrap',
        borderColor: '#a9d6e5',
        borderWidth: '3px',
    }
    const buttonStyle = {
        marginLeft: 'auto',
        marginRight: '10px',
        height: '40px',
        width: '30%'
    }

    return (
        <>
            <li style={isSelected ? liStyle : liStyle1} >
                <div style={userStyle} onClick={onClickHandler} >
                    <img style={imgStyle} src={srcImg} alt='user' />
                    <span>Name :{firstName} {lastName}. Age:   {age} years old</span>
                </div>
                <button style={buttonStyle} onClick={deleteUser}>Del</button>
            </li>
        </>
    );

}
export default UserListItem;