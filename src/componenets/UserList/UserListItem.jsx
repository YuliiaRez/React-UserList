import React from 'react';



function UserListItem(props) {
    const {
        user: { srcImg, id, firstName, lastName, age, isSelected, },
        onClickHandler,
        deleteUser,
    } = props;

    const liStyle = { backgroundColor: '#CCCCCC' };
    const imgStyle = { height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' };
    const userStyle = {
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        lineHeight: '2em',
        fontFamily: "Montserrat",
        flexWrap: 'wrap',
        width: '400px',
        color: '#1d3557',
        borderColor: '#a9d6e5',
        borderWidth: '3px',
        margin: '5px',
    }
    /*const buttonStyle = {
        marginLeft: 'auto',
        marginRight: '10px',
        height: '40px',
    }*/

    return (
        <>
            <li style={isSelected ? liStyle : null} >
                <div style={userStyle} onClick={onClickHandler} >
                    <img style={imgStyle} src={srcImg} alt='user' />
                    <span>{id}</span>
                    <span>Name :{firstName}      {lastName}<br></br>{age} years old'</span>
                </div>
                <button onClick={deleteUser}>Del</button>
            </li>
        </>
    );

}
export default UserListItem;