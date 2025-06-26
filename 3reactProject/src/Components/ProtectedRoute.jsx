import React from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import Header from './Header';
import Home from './Home';

function ProtectedRoute() {
    const [login, setLogin] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        if (login === true) {
            navigate('/header')
        } else navigate('/login')
    }, [login])

    return (
        <>
            <Routes>
                <Route path="/login" element={<Form login={login} setLogin={setLogin} />} />
                <Route path='/header' element={<Home />} />
            </Routes>
        </>
    )
}

export default ProtectedRoute
