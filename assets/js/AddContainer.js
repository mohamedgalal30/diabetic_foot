import React from 'react'
import InfoTab from './InfoTab'
import HistoryTab from './HistoryTab'

class AddContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            tab: 'info'
        }
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(type) {
        this.setState({ tab: type })
    }

    render() {
        let Tab;
        switch (this.state.tab) {
            case 'info':
                Tab = InfoTab;
                break;
            case 'history':
                Tab = HistoryTab;
                break;
            case 3:
                Tab = Tab3;
                break;
            default:
                Tab = InfoTab
        }

        return (
            <div style={{ backgroundColor: "red" }}>
                <ul className="tabs z-depth-1 ">
                    <li className={"tab col s4 " + ((this.state.tab == "info")? "active": "")} id="t1">
                        <a onClick={this.changeTab.bind(this, 'info')} title="Personal Information">P-Info</a>
                    </li>
                    <li className={"tab col s4 " + ((this.state.tab == "history")? "active": "")} id="t2">
                        <a onClick={this.changeTab.bind(this, 'history')} title="History">History</a>
                    </li>
                    <li className={"tab col s4 " + ((this.state.tab == "info")? "active": "")} id="t3">
                        <a onClick={this.changeTab.bind(this, 'info')}>Tab</a>
                    </li>
                </ul>

                <Tab />
            </div >
        )
    }
}


export default AddContainer;