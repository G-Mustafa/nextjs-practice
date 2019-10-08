import axios from 'axios';

const App = ({data}) => (
    <div>
        <h1>ROBOFRIENDS</h1>
        <form method='get'>
            <input type='text' name='value' />
            <input type='submit' value='submit'/>
        </form>
        {data.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}
    </div>
);

App.getInitialProps = async function(obj) {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if(obj.query.value){
            const data = response.data.filter(user => {
                return user.name.toLowerCase().includes(obj.query.value.toLowerCase());
            })
            return {data};
        }
        return {data:response.data};
    }catch(e){
        console.log(e);
    }
}

export default App;