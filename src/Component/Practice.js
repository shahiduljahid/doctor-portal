import React from 'react';

const Practice = () => {
    const handleSubmit =(e)=>{

        console.log(e.target.value);
        console.log("submitted");

    }
    return (
        <div>



            <form action={e=>handleSubmit(e)}>

                <h2>my name is jahid</h2>
                <input type="submit"  value="Submit" submit/>

            </form>
            
        </div>
    );
};

export default Practice;
