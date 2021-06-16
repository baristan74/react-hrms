import React from 'react'
import { Button} from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Button inverted onClick={signIn} >Üye Giriş</Button>
            <Button inverted style={{marginLeft:"3px"}}>İş Veren Girişi</Button>
            
        </div>
    )
}
