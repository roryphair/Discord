import React from 'react';
import {Link} from 'react-router-dom';

class ServerIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        const servers = this.props.servers ? this.props.servers : []
        return (<div className='server-list'>
            <ul>
                <li className='server-list-item'> 
                   <Link to='/channels/@me'>
                       <img className={'icon server-icon ' + (this.props.match.params.serverId == '@me' ? 'server-selected' : '')} src={window.user_icon} alt='home'/>
                    </Link> 
                    <h2 className='server-title'>Home</h2>
                </li>
                <div className='server-seperator'>
                </div>
                {this.props.servers.map( server => (
                    <li className='server-list-item' key={server.name}>
                        <Link to={`/channels/${server.id}`}>
                            <img className={'icon server-icon ' + (this.props.match.params.serverId == server.id ? 'server-selected' : '')} src={server.image_url} alt={server.name}/>
                        </Link>
                        <h2 className='server-title'>{server.name}</h2>
                    </li>
                ))}
                <div className='server-seperator'>
                        </div>
                <li className='server-list-item'> 
                    <button className='icon server-icon' onClick={this.props.openModal}>+</button> 
                    <h2 className='server-title'>Add Server</h2>
                </li>
            </ul>
        </div>)
    }
}

export default ServerIndex;