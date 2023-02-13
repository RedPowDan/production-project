import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const ErrorButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={() => { setError(true); }}>
            throw new Exception
        </Button>
    );
};
