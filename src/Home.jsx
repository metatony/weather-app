import React from 'react';
import FormInput from './Form';

 function Home()  {


    return(
        <div className="flex justify-center items-center h-screen flex-col">
			<div>
				<h2 className="text-black text-3xl md:text-5xl font-semibold md:font-extrabold mb-10 ">Weather App</h2>
			</div>

            <FormInput></FormInput>

            

		</div>
    )
}

export default Home;