import React from 'react';
import classes from './profileStatus.scss'

class ProfileStatus extends React.Component{


    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
           editMode: true,
        });
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });

        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

   render() {
       return (
           <div>
               {
                   !this.state.editMode &&
                   <div>
                       <div onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</div>
                   </div>
               }
               {
                   this.state.editMode &&
                   <div>
                       <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                              value={this.state.status}/>
                   </div>
               }

           </div>
       );
   }
}

export default ProfileStatus;