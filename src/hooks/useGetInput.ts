export const useGetInput = () => {
    return  async () => {
        const response = await fetch('http://localhost/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
}