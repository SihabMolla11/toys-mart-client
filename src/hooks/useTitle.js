import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Game Toys Mart`;
    }, [title])
}


export default useTitle;