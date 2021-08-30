import React from 'react';
import classes from './users.module.scss'


const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
            id: 1,
            photoUrl: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/b5bd34054bc849159d949d50021d8926.png',
            followed: false,
            fullName: 'Vladyslav',
            status: 'I am a boss',
            location: {city: 'Lviv', country: 'Ukraine'}
        },
            {
                id: 2,
                photoUrl: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/b5bd34054bc849159d949d50021d8926.png',
                followed: false,
                fullName: 'Alexander',
                status: 'I am a boss too',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/b5bd34054bc849159d949d50021d8926.png',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ]);
    }
    return (
        <div className={`${classes.users} ${classes.users__container}`}>
            {
                props.users
                    .map(u => <div key={u.id} className={`${classes.user} ${classes.user__container}`}>
                    <div className={classes.user__main}>
                        <div className={classes.user__avatar}>
                            <img src={u.photoUrl} alt=""/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { props.unFollow(u.id) } } className={classes.user__btn}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) } } className={classes.user__btn}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={classes.user__info}>
                        <div className={classes.user__name}>
                            {u.fullName}
                        </div>
                        <div className={classes.user__location}>
                            {u.location.country}, {u.location.city}
                        </div>
                        <div className={classes.user__status}>
                            {u.status}
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;