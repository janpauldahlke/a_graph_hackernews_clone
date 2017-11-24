import React, { Component } from 'react';
import Link from './Link';

class LinkList extends Component {

  render() {

    const linksToRender = [{
      id: '1',
      description: 'The coolest link',
      url: 'https://www.graph.cool/docs'
    },
    {
      id: '2',
      description: 'The best client',
      url: 'http://dev.apollodata.com'
    }
  ]

  return(
    <div>
     {linksToRender.map(link => {
       return <Link key={link.id} link={link} />
     })}
    </div>
  )
 }
}

export default LinkList;
