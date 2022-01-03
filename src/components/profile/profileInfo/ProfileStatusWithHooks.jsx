import React, {useEffect, useState} from 'react';
import styles from "../profile.module.scss";

const ProfileStatusWithHooks  = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => setStatus(e.currentTarget.value);

    return (
        <div className={styles.data__status}>
            {
                !editMode &&
                <div>
                    <div onDoubleClick={activateEditMode}>{props.status || "------"}</div>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true}  onBlur={deactivateEditMode}
                    value={status}/>
                </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;