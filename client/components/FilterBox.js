import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class FilterBox extends React.Component {
	render(){
		return(
			<div>
			<label>Filter</label>
				<select value="" className="ui fluid dropdown">
					<option value="" disabled>Select</option>
		            <option value="Pribadi">Pribadi</option>
		            <option value="Sewa Keluarga">Sewa Keluarga</option>
		            <option value="Kos">Kos</option>
		            <option value="Sewa Kos">Sewa Kos</option>
                	<option value="Kantor">Kantor</option>
		        </select>
		    </div>
		);
	}
}

export default FilterBox;