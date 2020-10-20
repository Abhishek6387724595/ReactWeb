import React from 'react';

const Contact = () =>{
    return(
        <>
        <div className="container my-5">
            <h1 className="text-center">Contact Us</h1><br/>
            <hr style={{width:"50%",margin:"auto"}}/>
        </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <form>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" require placeholder="Enter Your Name"/>
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" require placeholder="Mobile Number"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" require placeholder="name@example.com"/>
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="col-auto my-1">
                                <button style={{display:"inline-block"}} type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Contact;