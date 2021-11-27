
//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Login from './pages/Login';
import Wallet from './pages/Wallet';


//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/carteira" component={Wallet} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;