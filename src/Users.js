import {withRouter} from 'react-router-dom'

function Users(prop){
    return(

        <div>
            <h1>This is NO {prop.match.params.id}</h1>
            <h1>The Name is {prop.match.params.title}</h1>
            </div>
    )

}

export default withRouter (Users);