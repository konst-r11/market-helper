import { Component } from "react";

export default class DataCard extends Component {
    render() {
        let cn = "card " + (this.props.success ? "border-left-success" : "border-left-warning") + " shadow h-100 py-2"
        return (
            <div className="col-xl-3 col-md-6 mb-4">
                <div className={cn}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    {this.props.topic}
                                </div>

                                <div className="h5 mb-0 font-weight-bold text-gray-800"> 
                                {this.props.answer}
                                </div>
                            </div>

                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}