import React, { useState, useEffect} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Junat = () => {

//komponentin tilan määritys
const [posts, setPosts] = useState([])
const [showPosts, setShowPosts] = useState(false)

useEffect(() => {
  fetch("https://rata.digitraffic.fi/api/v1/live-trains/station/TKL?departing_trains=10&include_nonstopping=false&train_categories=Long-distance")
  .then(res => res.json()) //muutetaan json-data javascriptiksi
  .then(oliot => setPosts(oliot))
}
,
[]
)

  return (
    <>
        <Button onClick={() => setShowPosts(!showPosts)}>Lähtevät kaukojunat Tikkurilasta</Button>
        {
          showPosts && posts && posts.map(p => 
            <div className='posts' key={p.trainNumber} >
              <Table> 
                <thead>
                  <th>Juna</th>
                  <th>Lähtöaika</th>
                </thead>
                <tbody>
                  <td>{p.trainType} {p.trainNumber}</td>
                  <td>{p.departureDate} {p.scheduledTime}</td>
                </tbody>
              </Table>
            </div>
            )
        }
        
    </>
  );
}

export default Junat;
