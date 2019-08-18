import React from 'react';
import { gql } from 'react-apollo';

class SearchBar extends React.Component {
	

  render() {
    return (
      /*<div className="search-bar ui segment">
        <select value=""
        	
        	className="ui fluid dropdown">
			<option value="" disabled>Select</option>
		        <option value="Pribadi">Pribadi</option>
		        <option value="Sewa Keluarga">Sewa Keluarga</option>
		        <option value="Kos">Kos</option>
		        <option value="Sewa Kos">Sewa Kos</option>
		    </select>
      	</div>*/
      	<form>
      		<input type="text" />
      	</form>
      	
    );
  }

}	

export default SearchBar;
