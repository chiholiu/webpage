import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './utils/apolloClient';
import Navbar from './components/navbar';
import Banner from './components/section/banner';
import Introduction from './components/section/introduction';
import Tools from './components/section/tools';
import Portfolio from './components/section/portfolio';
import Contact from './components/section/contact';
import './_reset.scss';
import './_main.scss';

const App = () => (
	<div>
		<Navbar/>
		<Banner/>
		<Introduction/>
		<Tools/>
		<Portfolio/>
		<Contact/>
	</div>
);

ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>, 
	document.getElementById('root'));