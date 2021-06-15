import { useHistory } from 'react-router-dom';

export function useNavigate(page) {
    const history = useHistory();
    history.push(`/${page}`);
}
