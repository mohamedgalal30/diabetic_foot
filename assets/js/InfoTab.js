import React from 'react';

export default function InfoTab() {
    return (
        <div className="col s12  carousel-item " id="tab1">
            <div className="container">

                <div className="row">
                    <div className="input-field col s8">
                        <label htmlFor="nameP" className=" white-text">Patient Name</label>
                        <input type="text" id="nameP" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="ageP" className=" white-text">Patient Age</label>
                        <input type="number" id="ageP" required />
                    </div>
                    <div className="col s8">
                        <div className="row">
                            <p className="col s4">
                                <input id="male" type="radio" name="gender" value="male" />
                                <label htmlFor="male">Male</label>
                            </p>
                            <p className="col s4">
                                <input id="female" type="radio" name="gender" value="female" />
                                <label htmlFor="female">Female</label>
                            </p>
                        </div>
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="AddressP" className=" white-text">Patient Address</label>
                        <input type="text" id="AddresssP" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="telP" className=" white-text">Patient Phone</label>
                        <input type="tel" id="telP" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="JobP" className=" white-text">Patient Job</label>
                        <input type="text" id="JobP" required />
                    </div>

                    <div className="col s4">
                        <button className="btn waves-effect waves-red" id="btn1" onClick="nt1()" type="submit">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}