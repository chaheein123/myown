import React, { Component } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Postredis() {

    const [postgresqlName, setPostgresqlName] = useState('')
    const [postgresqlAge, setPostgresqlAge] = useState('')

    const [redisName, setRedisName] = useState('')
    const [redisAge, setRedisAge] = useState('')

    const savePostgres = (name, age) => {
        axios.post('http://localhost:5000/addpostgresqlpeople', {
            name,
            age
        })
        .then(res => {
            console.log("success!!!")
        })
        .catch(err => {
            console.log("error!!!")
            console.log(err)
        })
        setPostgresqlName("")
        setPostgresqlAge("")

    }

    const saveRedis = (name, age) => {

        axios.post('http://localhost:5000/addredispeople', {
            name,
            age
        })
        .then(res => {
            console.log("success!!!")
        })
        .catch(err => {
            console.log("error!!!")
            console.log(err)
        })
        setRedisName("")
        setRedisAge("")

    }

    return (
        <div>
            <h1>Postgresql</h1>
            <label>
                Name
            </label>
            <input
                type="text"
                onChange={(e) => setPostgresqlName(e.target.value)}
                value={postgresqlName}
            />
            <label>
                Age
            </label>
            <input
                type="text"
                onChange={(e) => setPostgresqlAge(e.target.value)}
                value={postgresqlAge}
            />
            <button onClick={() => savePostgres(postgresqlName, postgresqlAge)}>Postgresql Save</button>

            <h1>Redis</h1>
            <label>
                Name
            </label>
            <input
                type="text"
                onChange={(e) => setRedisName(e.target.value)}
                value={redisName}
            />
            <label>
                Age
            </label>
            <input
                type="text"
                onChange={(e) => setRedisAge(e.target.value)}
                value={redisAge}
            />
            <button onClick={() => saveRedis(redisName, redisAge)}>Redis Save</button>

            <p>postsql name: {postgresqlName}</p>
            <p>postsql age:{postgresqlAge}</p>

            <p>redis name: {redisName}</p>
            <p>redis age: {redisAge}</p>

        </div>
    )
}





// class Postredis extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             postgresName: ""
//         }
//     }

//     setPostgresName(name) {
//         this.setState({
//             postgresName: name
//         });
//     }



//     savePostgres() {
//         axios.get('http://localhost:5000/savepostgresql')
//         .then(res => {
//             console.log("success!!!")
//         })
//         .catch(err => {
//             console.log("error!!!")
//             console.log(err)
//         })

//     }

    // render() {
    //     return (
//             <div>
//                 <form>
//                     <h1>Postgresql</h1>
//                     <label>
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         value={this.state.postgresName}
//                         onChange={(e) => {
//                             this.setPostgresName(e.target.value)
//                         }}
//                     />
//                     <label>
//                         Age
//                     </label>
//                     <input type="text"/>
//                     <button onClick={() => this.savePostgres}>Postgresql Save</button>

//                     <h1>Redis</h1>
//                     <label>
//                         Name
//                     </label>
//                     <input type="text"/>
//                     <label>
//                         Age
//                     </label>
//                     <input type="text"/>
//                     <button onClick={() => this.increment()}>Redis Save</button>
//                 </form>
//             </div>
//         )
//     }
// }


export default Postredis;

