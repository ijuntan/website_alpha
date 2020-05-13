import React, {Component} from 'react'
import { Card, CardContent} from '@material-ui/core'
import '../PageStyling.css'

class Footer extends Component{
    render(){
        return(
            <div>
                <Card class='footer'>
                    <CardContent>
                        <p>Directed by juntan</p>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Footer;