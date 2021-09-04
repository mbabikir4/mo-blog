import React from 'react';
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import DjangoRestClient from "aor-django-rest-framework";
import   { tokenAuthProvider } from 'ra-data-django-rest-framework';
import BlogsList from './BlogsList';


const authProvider = tokenAuthProvider({
    obtainAuthTokenUrl: 'http://localhost:8000/api/rest-auth/login/',
    
})

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Authorization', `Token ${localStorage.getItem('token')}`);
    return fetchUtils.fetchJson(url, options);
}

const dataProvider= DjangoRestClient('http://localhost:8000/api',httpClient)

const App = () => {
    console.log(dataProvider)
    document.querySelector('title').innerText = 'Admin'
    return ( 
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
            <Resource name="blogs" list={BlogsList}></Resource>
            <Resource name="data" list={ListGuesser}></Resource>
            
        </Admin>
     );
}
 
export default App;