import React from 'react';
import {List,Datagrid, TextField} from 'react-admin'

const BlogsList = (props) => {
    return ( 
        <List {...props} title="Blogs' list">
            <Datagrid>
                <TextField source="id"></TextField>
                <TextField source="title"></TextField>
                <TextField source="innerText"></TextField>
                <TextField source="created_by"></TextField>
                <TextField source="created_at"></TextField>
                <TextField source="image_new"></TextField>
            </Datagrid>
        </List>
     );
}
 
export default BlogsList;

