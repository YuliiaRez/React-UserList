import React, { Component } from 'react';
import UserListItem from './UserListItem';


const dbUsers = [
    {
        id: 1,
        firstName: 'Test1',
        lastName: 'Testovich1',
        age: 38,
        srcImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbvfnvF6G3VbAr45TE92i0yqZuKRdxbaTxQ&usqp=CAU',
    },
    {
        id: 2,
        firstName: 'Test2',
        lastName: 'Testovich2',
        age: 38,

        srcImg: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 3,
        firstName: 'Test3',
        lastName: 'Testovich3',
        age: 38,

        srcImg: `https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,

    },
    {
        id: 4,
        firstName: 'Test4',
        lastName: 'Testovich4',
        age: 38,

        srcImg: 'https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    },
];

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: dbUsers.map(u => ({
                ...u,
                isSelected: false
            }))
        };
    }
    mapUser = (user, index) => {
        const { users } = this.state;
        const onClickHandler = () => {
            const newUsers = [...users];
            newUsers[index].isSelected = !newUsers[index].isSelected;
            this.setState({ users: newUsers });
        };

        return (
            <UserListItem key={user.id} user={user} onClickHandler={onClickHandler} />
        );
    };

    render() {
        const { users } = this.state;
        return (
            <ul>{users.map(this.mapUser)}</ul>
        );
    }
}

export default UserList;