/*eslint-disable*/
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';



export class task extends Component {

    constructor() {
        super();
        this.state = {
            displayBasic:false,
            position: 'center'
        };

        this.onClick = this.onClick.bind(this);
        // this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="Assign" icon="pi pi-check" onClick={() => this.onHide(name)} />
                <Button label="Cancel" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-secondary" />
            </div>
        );
    }

    render() {
        return (
            <div className="dialog-demo">

                <h3>Task Assigner</h3>
                <Button label="Genrate Task" icon="pi pi-external-link" color="primary" onClick={() => this.onClick('displayBasic')} />
                <Dialog header="Task Assigner" visible={this.state.displayBasic} style={{ width: '50vw' }} onHide={() => this.onHide('displayBasic')} 
                    footer={this.renderFooter('displayBasic')}>
                     <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col">
                    <h3>Task Assign To:</h3>
                        <InputText id="assignto" type="text"/>
                    </div>
                    <div className="p-field p-col-12">
                        <h3>Task Details:</h3>
                        <InputTextarea id="taskdetails" type="text" rows="4" />
                    </div>
                    <div className="p-col-12 p-md-4">
                        <h3>Range Selection</h3>
                        <Calendar value={this.state.dates2} onChange={(e) => this.setState({ dates2: e.value })} selectionMode="range" readOnlyInput={true} />
                    </div>
                </div>
                </Dialog>
            </div>
        )
    }
}

export default task;

