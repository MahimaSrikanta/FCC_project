import React { ProtoTypes } from 'react';
import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const Signup = ({onSubmit, onChange, errors, user }) => (
 <Card className="container">
   <form onSubmit = {onSubmit}>
     <h2 className= "card-heading"> Login </h2>

   </form>

 </Card>
)