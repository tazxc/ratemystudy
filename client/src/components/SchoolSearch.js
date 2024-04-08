import React, { Component} from 'react';

class SchoolSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schools: [],
            query: ' '
        };
    }
    
    componentDidMount() {
        // Получить первые 3 школы из БД
        fetch(`http://Server/searchSchool.php?query=`)
            .then(response => response.json())
            .then(({ schools }) => {
                this.setState({ schools: schools});
            });
    }

    handleQueryChange = (event) => {
        const { schools } = this.state;
        const query = event.target.value;

        if (query.length == 0) {
            this.setState({
                schools: schools
            }); 
            console.log(schools) 
        } else {
            const filteredSchools = schools.filter(school => {
                return school.name.toLowerCase().includes(query.toLowerCase());
            });
            this.setState({ 
                schools: filteredSchools
            });
            console.log(schools.name) 
        }
};

render() {
    
        return (
            <div >
                <input
                    type="text"
                    placeholder="Поиск школы..."
                    defaultValue={this.state.query}
                    onChange={this.handleQueryChange}
                
                />
                <ul>
                    {this.state.schools.map(school => (
                        <li key={school.id}>{school.fullName}</li>
                    ))}
                </ul>
            </div>
        );}
    
}
export default SchoolSearch;