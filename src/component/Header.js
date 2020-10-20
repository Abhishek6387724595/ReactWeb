import React from 'react';

const Header = ()=>{
    return(
        <div className=" text-center jumbotron">
            <h1 className="display-1"><i class="pizza fas fa-pizza-slice"></i> Header</h1>


            <div class="input-group w-50 mx-auto">
                    <input type="text" class="form-control" placeholder="Search Your Recipe.." />
                        <div class="input-group-append">
                            <button className="btn btn-dark">Search Recipe</button>
                        </div>
            </div>
        </div>
    )
}


export default Header;

