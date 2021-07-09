import React from 'react';
import ButtonDel from '../ButtonDel';



function UserListItem(props) {
    const {
        user: { srcImg, id, firstName, lastName, age, isSelected },
        onClickHandler,
    } = props;

    const liStyle = { backGroundColor: '#CCCCC' };

    return (
        <li style={isSelected ? liStyle : null} onClick={onClickHandler}>
            <img src={srcImg} />
            <span>'{id}{firstName}{lastName}''{age}'</span>
            <ButtonDel />
        </li>
    );

}
export default UserListItem;